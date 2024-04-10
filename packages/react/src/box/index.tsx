import { Box, BoxCloseButton } from "./box";

const BoxComponent = Box as typeof Box & {
  CloseButton: typeof BoxCloseButton;
};
BoxComponent.CloseButton = BoxCloseButton;

export { BoxComponent as Box, BoxCloseButton };

export type * from "./box";
