const contentModules = import.meta.glob("../../../content/**/*.js", { eager: true });

export const content = Object.keys(contentModules).reduce((acc, path) => {
  const module = contentModules[path];
  const exportNames = Object.keys(module);
  const componentName = exportNames[0];
  acc[componentName] = module[componentName] || module.default;

  return acc;
}, {});
