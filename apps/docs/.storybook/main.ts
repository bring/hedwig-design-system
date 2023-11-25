import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/react-vite";

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../../../packages/react/src/**/*.stories.tsx"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@whitespace/storybook-addon-html"),
  ],
  framework: {
    // @ts-ignore -- It expects @storybook/react-vite
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  core: {},

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
