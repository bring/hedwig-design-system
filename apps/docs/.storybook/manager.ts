import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";
import postenbringLogo from "../public/postenbring-logo.png";

const postenbringTheme = create({
  base: "light",
  brandTitle: "Postenbring",
  brandUrl: "https://www.postenbring.no",
  brandImage: postenbringLogo,
});

addons.setConfig({
  theme: postenbringTheme,
});
