const pageModules = import.meta.glob("../../../pages/*/index.js", { eager: true });

export const pages = Object.keys(pageModules).reduce((acc, path) => {
  const pageName = path.replace("../../../pages/", "").replace("/index.js", "");
  acc[pageName] = pageModules[path][pageName] || pageModules[path].default;
  return acc;
}, {});
