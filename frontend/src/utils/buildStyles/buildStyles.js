import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import chokidar from "chokidar";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const stylesDir = path.join(process.cwd(), "frontend/src", "styles");
const configPath = path.join(__dirname, "styles.config.js");
const configUrl = pathToFileURL(configPath).href;
const outputFilePath = path.join(stylesDir, "_global.scss");

if (!fs.existsSync(stylesDir)) {
  console.error(`The ${stylesDir} folder does not exist!`);
  process.exit(1);
}

if (!fs.existsSync(configPath)) {
  console.error(`The ${configPath} configuration file does not exist!`);
  process.exit(1);
}

const loadConfig = async () => {
  try {
    const cacheBuster = `?t=${Date.now()}`;
    const configModule = await import(`${configUrl}${cacheBuster}`);
    return configModule.default;
  } catch (error) {
    console.error(`Error loading configuration: ${error.message}`);
    process.exit(1);
  }
};

const processFolder = (folderPath, folderConfig) => {
  let globalStylesContent = "";

  if (!fs.existsSync(folderPath)) {
    console.warn(`The ${folderPath} folder does not exist!`);
    return globalStylesContent;
  }

  if (folderConfig.files && folderConfig.files.length > 0) {
    for (const file of folderConfig.files) {
      const filePath = path.join(folderPath, file);
      if (fs.existsSync(filePath)) {
        const relativePath = path.relative(stylesDir, filePath).replace(/\\/g, "/");
        const fileName = path.basename(relativePath, ".scss").replace(/^_/, "");
        const directoryPath = path.dirname(relativePath);
        const fullPath = directoryPath !== "." ? `${directoryPath}/${fileName}` : fileName;
        globalStylesContent += `@forward '${fullPath}';\n`;
      } else {
        console.warn(`The ${filePath} file was not found!`);
      }
    }
  }

  if (folderConfig.subfolders && folderConfig.subfolders.length > 0) {
    for (const subfolderConfig of folderConfig.subfolders) {
      const subfolderPath = path.join(folderPath, subfolderConfig.folder);
      globalStylesContent += processFolder(subfolderPath, subfolderConfig);
    }
  }

  const allFiles = fs.readdirSync(folderPath);
  const remainingFiles = allFiles.filter((file) => {
    const filePath = path.join(folderPath, file);
    const _isFile = fs.statSync(filePath).isFile();
    const isFileInOrder = folderConfig.files?.includes(file);
    const isSubfolderInOrder = folderConfig.subfolders?.some(
      (subfolder) => subfolder.folder === file,
    );
    return !isFileInOrder && !isSubfolderInOrder;
  });

  for (const file of remainingFiles) {
    const filePath = path.join(folderPath, file);
    if (fs.statSync(filePath).isFile() && file.endsWith(".scss")) {
      const relativePath = path.relative(stylesDir, filePath).replace(/\\/g, "/");
      const fileName = path.basename(relativePath, ".scss").replace(/^_/, "");
      const directoryPath = path.dirname(relativePath);
      const fullPath = directoryPath !== "." ? `${directoryPath}/${fileName}` : fileName;
      globalStylesContent += `@forward '${fullPath}';\n`;
    } else if (fs.statSync(filePath).isDirectory()) {
      const subfolderPath = path.join(folderPath, file);
      globalStylesContent += processFolder(subfolderPath, {
        files: [],
        subfolders: [],
      });
    }
  }

  return globalStylesContent;
};

const buildStyles = (foldersOrder) => {
  let globalStylesContent = "";

  for (const folderConfig of foldersOrder) {
    const folderPath = path.join(stylesDir, folderConfig.folder);
    globalStylesContent += processFolder(folderPath, folderConfig);
  }

  fs.writeFileSync(outputFilePath, globalStylesContent);
  console.log("_global.scss was successfully updated!");
};

const main = async () => {
  let foldersOrder = await loadConfig();

  const watcher = chokidar.watch([stylesDir, configPath], {
    ignored: /(^|[\/\\])\../,
    persistent: true,
    ignoreInitial: true,
  });

  watcher
    .on("add", (filePath) => {
      console.log(`The ${filePath} file was added. Rebuilding _global.scss...`);
      buildStyles(foldersOrder);
    })
    .on("change", async (filePath) => {
      if (filePath === configPath) {
        console.log("The configuration was changed. Reloading...");
        try {
          foldersOrder = await loadConfig();
        } catch (error) {
          console.error(`Error loading configuration: ${error.message}`);
          return;
        }
      }
      console.log(`The ${filePath} file was changed. Rebuilding _global.scss...`);
      buildStyles(foldersOrder);
    })
    .on("unlink", (filePath) => {
      console.log(`The ${filePath} file was deleted. Rebuilding _global.scss...`);
      buildStyles(foldersOrder);
    });

  console.log("File and configuration watching has been started...");

  buildStyles(foldersOrder);
};

main().catch((error) => {
  console.error("Error in main process:", error);
});
