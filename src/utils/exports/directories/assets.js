const assetsModules = import.meta.glob("../../../assets/**/*.{png,svg,jpg,jpeg,gif,webp,bmp}", {
  eager: true,
});

export const assets = Object.keys(assetsModules).reduce((acc, path) => {
  const fileName = path.match(/([^/]+)(?=\.\w+$)/)[0];
  acc[fileName] = assetsModules[path].default || assetsModules[path][assetsName];
  return acc;
}, {});
