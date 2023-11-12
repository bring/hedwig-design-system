import { withThemeByClassName } from "@storybook/addon-themes";

// TODO: Storybook Production build does not pick up the css imported in the components
// This is not a problem for the vite example app
import "@postenbring/hedwig-tokens/tokens-output/css/tokens.css";
import "@postenbring/hedwig-tokens/tokens-output/css/fonts.css";
import "@postenbring/hedwig-css/dist/index.css";
import "@postenbring/hedwig-css/dist/reset.css";

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
