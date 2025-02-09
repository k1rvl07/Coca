import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import chokidar from "chokidar";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const stylesDir = path.join(process.cwd(), "src", "styles");
const configPath = path.join(__dirname, "styles.config.js");
const configUrl = pathToFileURL(configPath).href;
const outputFilePath = path.join(stylesDir, "_global.scss");

if (!fs.existsSync(stylesDir)) {
  console.error(`Папка ${stylesDir} не существует! Создайте её вручную.`);
  process.exit(1);
}

if (!fs.existsSync(configPath)) {
  console.error(`Конфигурационный файл ${configPath} не существует!`);
  process.exit(1);
}

const loadConfig = async () => {
  try {
    const cacheBuster = `?t=${Date.now()}`;
    const configModule = await import(`${configUrl}${cacheBuster}`);
    return configModule.default;
  } catch (error) {
    console.error(`Ошибка при загрузке конфигурации: ${error.message}`);
    process.exit(1);
  }
};

const processFolder = (folderPath, folderConfig) => {
  let globalStylesContent = "";

  if (!fs.existsSync(folderPath)) {
    console.warn(`Папка ${folderPath} не существует!`);
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
        console.warn(`Файл ${filePath} не найден!`);
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
  console.log("_global.scss успешно обновлён!");
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
      console.log(`Файл ${filePath} добавлен. Пересборка _global.scss...`);
      buildStyles(foldersOrder);
    })
    .on("change", async (filePath) => {
      if (filePath === configPath) {
        console.log("Конфигурация изменена. Перезагрузка...");
        try {
          foldersOrder = await loadConfig();
        } catch (error) {
          console.error(`Ошибка при загрузке конфигурации: ${error.message}`);
          return;
        }
      }
      console.log(`Файл ${filePath} изменён. Пересборка _global.scss...`);
      buildStyles(foldersOrder);
    })
    .on("unlink", (filePath) => {
      console.log(`Файл ${filePath} удалён. Пересборка _global.scss...`);
      buildStyles(foldersOrder);
    });

  console.log("Наблюдение за файлами и конфигурацией запущено...");

  buildStyles(foldersOrder);
};

main().catch((error) => {
  console.error("Ошибка в основном процессе:", error);
});
