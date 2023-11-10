import { dirname, join, resolve } from "path";

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config = {
  stories: ["../../../packages/react/src/**/*.stories.tsx"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-docs"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  core: {},

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      define: { "process.env": {} },
      resolve: {
        alias: [
          {
            find: "@postenbring/hedwig-react",
            replacement: resolve(__dirname, "../../../packages/react/"),
          },
          {
            find: "@postenbring/hedwig-css",
            replacement: resolve(__dirname, "../../../packages/css/"),
          },
        ],
      },
    };
  },

  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: "react-docgen",
    skipBabel: true,
    check: false,
  },
};

export default config;
