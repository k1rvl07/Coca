/**
 * @type import("reactcci/build/types").Config
 */
module.exports = {
  multiProject: true,
  skipFinalStep: false,
  checkExistenceOnCreate: false,
  folderPaths: ["frontend/src/components/", "src/hooks"],
  templatesFolder: "templates",
  templates: [
    {
      name: "component",
      files: {
        index: {
          name: "index.js",
          file: "index.tmp",
        },
        component: {
          name: "[name].jsx",
          file: [
            { name: "fc.tmp", description: "Functional component" },
            { name: "class.tmp", description: "Class component" },
          ],
        },
        style: {
          name: "[name].module.css",
          optional: true,
          default: false,
        },
        stories: {
          name: "[name].stories.tsx",
          file: "stories.tmp",
          optional: true,
          default: false,
        },
        test: {
          name: "[name].test.tsx",
          file: "test.tmp",
          optional: true,
          default: false,
        },
      },
    },
  ],
  placeholders: {
    NAME: ({ componentName }) => {
      const parts = componentName.split(/(?=[A-Z])/);
      return parts.length > 1 ? `${parts[0]}_${parts.slice(1).join("")}` : componentName;
    },
    COMPONENT_FILE_PREFIX: ({ filePrefix }) => filePrefix,
    STYLE: ({ files }) => (files.style ? `import styles from './${files.style.name}';\n` : ""),
    STORY_PATH: ({ join, project, destinationFolder, componentName }) =>
      join(project, destinationFolder, componentName),
  },
  processFileAndFolderName: (name) => {
    const parts = name.split(/(?=[A-Z])/);
    return parts.length > 1 ? `${parts[0]}_${parts.slice(1).join("")}` : name;
  },
};
