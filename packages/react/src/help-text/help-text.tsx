import * as Popover from "@radix-ui/react-popover";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { forwardRef } from "react";
import { Box } from "../box";

interface HelpTextProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;

  /**
   * The content of the help text
   */
  children: React.ReactNode;

  /**
   * The word that should be clickable to show the help text
   */
  word?: React.ReactNode;

  /**
   * The title of the help text. Used by screen readers and if the user hover over the help text
   */
  title?: string;

  /**
   * Props for the `Box` that contains the help text
   */
  boxProps?: React.ComponentProps<typeof Box>;

  /**
   * The side of the trigger the popover should be attached to
   *
   * default is `top`
   */
  side?: "top" | "right" | "bottom" | "left";

  /**
   * The alignment of the popover content
   *
   * default is `start`
   */
  align?: "center" | "end" | "start";
}

/**
 * Show a help text for a word or phrase when clicked
 *
 * Useful for providing explanations for domain-specific terms or acronyms
 */
export const HelpText = forwardRef<HTMLButtonElement, HelpTextProps>(
  ({ children, className, word, title, side = "top", align = "start", boxProps, ...rest }, ref) => {
    return (
      // NOTE: Using radix's [Popover component](https://www.radix-ui.com/primitives/docs/components/popover)
      // In the future we can use the native popover api, but as of writing, though all browsers support it
      // it's not far enough back to be used in production
      // https://caniuse.com/mdn-html_elements_input_popovertarget
      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            ref={ref}
            className={clsx("hds-help-text-button", className as undefined)}
            title={title}
            type="button"
            {...rest}
          >
            {word}
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content asChild side={side} align={align}>
            <Box
              {...boxProps}
              className={clsx("hds-help-text-box", boxProps?.className as undefined)}
            >
              <Popover.Close asChild>
                <Box.CloseButton />
              </Popover.Close>
              {children}
            </Box>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  },
);
HelpText.displayName = "HelpText";
