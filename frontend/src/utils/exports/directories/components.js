const componentModules = import.meta.glob("../../../components/**/index.js", {
  eager: true,
});

export const components = Object.keys(componentModules).reduce((acc, path) => {
  const componentName = path
    .split("/")
    .filter((part) => part !== "index.js")
    .pop();
  acc[componentName] = componentModules[path].default || componentModules[path][componentName];
  return acc;
}, {});
