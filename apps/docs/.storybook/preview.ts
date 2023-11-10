import { withThemeByClassName } from "@storybook/addon-themes";

export default {
  decorators: [
    withThemeByClassName({
      themes: {
        Posten: "hds-theme-posten",
        Bring: "hds-theme-bring",
      },
      defaultTheme: "Posten",
    }),
  ],
};
