import "@postenbring/hedwig-css/dist/fonts.css";
import "@postenbring/hedwig-css/dist/tokens.css";
import "@postenbring/hedwig-css/dist/body.css";

import "@postenbring/hedwig-css/dist/box.css";

import { Box, BoxCloseButton } from "./box";

const BoxComponent = Box as typeof Box & {
  CloseButton: typeof BoxCloseButton;
};
BoxComponent.CloseButton = BoxCloseButton;

export { BoxComponent as Box };

export type * from "./box";
