import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = fs.readdirSync(__dirname).filter((file) => {
  return file !== "index.js" && file.endsWith(".js");
});

const middlewareExports = {};

for (const file of files) {
  const modulePath = `./${file}`;
  const module = await import(modulePath);

  for (const key in module) {
    if (Object.hasOwnProperty.call(module, key)) {
      middlewareExports[key] = module[key];
    }
  }
}

export default middlewareExports;
