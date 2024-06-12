import React from "react";

import { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { Title, Source, Description, Primary, Controls, Stories } from "@storybook/blocks";

import "@postenbring/hedwig-css";

export const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        Posten: "",
        Bring: "hds-theme-bring",
      },
      defaultTheme: "Posten",
    }),
  ],
  tags: ["autodocs"],
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
};

export default preview;
