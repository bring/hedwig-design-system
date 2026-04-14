import { Preview } from "@storybook/react-vite";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { Title, Primary, Controls, Stories } from "@storybook/addon-docs/blocks";

import "@postenbring/hedwig-css";

export const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        Posten: "posten",
        Bring: "bring",
      },
      defaultTheme: "Posten",
      attributeName: "data-color",
    }),
  ],

  tags: ["autodocs"],

  parameters: {
    backgrounds: {
      options: {
        light: {
          name: "light",
          value: "#ffffff",
        },

        dark: {
          name: "dark",
          value: "#121212",
        },
      },
    },
    docs: {
      page: () => {
        return (
          <>
            <Title />
            {/* Disabled as rendring of the TSDoc's are not looking that nice */}
            {/* <Description /> */}
            <Primary />
            <Controls />
            <Stories includePrimary={false} title={"Examples"} />
          </>
        );
      },
    },
  },

  initialGlobals: {
    backgrounds: {
      value: "light",
    },
  },
};

export default preview;
