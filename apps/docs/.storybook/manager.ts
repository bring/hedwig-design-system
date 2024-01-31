import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const postenbringTheme = create({
  base: "light",
  brandTitle: "Postenbring",
  brandUrl: "https://www.postenbring.no",
  brandImage: "../public/postenbring-logo.png",
});

addons.setConfig({
  theme: postenbringTheme,
});
