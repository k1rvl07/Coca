const serviceModules = import.meta.glob("../../../services/**/*.js", { eager: true });

export const services = Object.keys(serviceModules).reduce((acc, path) => {
  const module = serviceModules[path];

  for (const exportName of Object.keys(module)) {
    if (exportName !== "default") {
      acc[exportName] = module[exportName];
    }
  }
  return acc;
}, {});
