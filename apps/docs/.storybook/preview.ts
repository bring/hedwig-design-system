import { withThemeByClassName } from "@storybook/addon-themes";

import "@postenbring/hedwig-css/dist/reset.css";

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
};
