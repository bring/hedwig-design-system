import { withThemeByClassName } from "@storybook/addon-themes";

import "@postenbring/hedwig-css";

export default {
  decorators: [
    withThemeByClassName({
      themes: {
        Posten: "",
        Bring: "hds-theme-bring",
      },
      defaultTheme: "Posten",
    }),
  ],
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#121212",
        },
      ],
    },
  },
};
