const hookModules = import.meta.glob("../../../hooks/*/index.js", { eager: true });

export const hooks = Object.keys(hookModules).reduce((acc, path) => {
  const hookName = path.replace("../../../hooks/", "").replace("/index.js", "");
  acc[hookName] = hookModules[path][hookName] || hookModules[path].default;
  return acc;
}, {});
