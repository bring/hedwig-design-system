import * as Popover from "@radix-ui/react-popover";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { forwardRef } from "react";
import { Box } from "../box";

interface HelpTextProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;

  /**
   * The content of the help text, often a word or phrase that could use some explanation
   */
  children: React.ReactNode;

  /**
   * The help text that will be shown when the user clicks the trigger
   */
  helpText: React.ReactNode;

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
 * Useful for providing explanations for domain-specific terms, acronyms or phrases that could do with further elaboration
 *
 * **Usage**
 * ```tsx
 * <p>
 *   En annen avgjørende faktor for avgifter er om nettbutikken er registrert i{" "}
 *   <HelpText helpText={`VOEC er en forkortelse for "VAT on E-commerce" (mva. på e-handel).`}>
 *    VOEC
 *   </HelpText>
 * </p>
 * ```
 */
export const HelpText = forwardRef<HTMLButtonElement, HelpTextProps>(
  (
    { children, className, helpText, title, side = "top", align = "start", boxProps, ...rest },
    ref,
  ) => {
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
            {children}
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
              {helpText}
            </Box>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  },
);
HelpText.displayName = "HelpText";
