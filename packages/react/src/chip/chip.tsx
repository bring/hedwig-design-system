import {
  forwardRef,
  useState,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  type Ref,
} from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";

interface ChipBaseProps {
  /**
   * `main`: Colored by the inherited brand theme.
   * `neutral`: White/grey chip, the checked indicator keeps the brand color.
   *
   * @default "main"
   */
  variant?: "main" | "neutral";
  children: ReactNode;
}

/**
 * Native button props, without `type`.
 * The `type` prop of the Chip selects the kind of chip, so the native button `type` can not be set.
 * Buttons are always rendered with `type="button"` to avoid accidentally submitting forms.
 */
type NativeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "children">;

type NativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "children" | "size">;

export type ChipRadioProps = ChipBaseProps & NativeInputProps & { type: "radio" };

export type ChipCheckboxProps = ChipBaseProps & NativeInputProps & { type: "checkbox" };

export type ChipRemovableProps = ChipBaseProps &
  NativeButtonProps & {
    type: "removable";
    /**
     * Called when the chip is clicked, i.e. the user wants to remove it.
     * A `onClick` handler is also called, if provided.
     */
    onRemove?: (event: MouseEvent<HTMLButtonElement>) => void;
    /**
     * Text prepended to the label to form the accessible name, e.g. "Fjern Oslo".
     * Only used when `children` is a string or number, otherwise provide an `aria-label`.
     *
     * @default "Fjern"
     */
    removeLabel?: string;
  };

export type ChipButtonProps = ChipBaseProps &
  NativeButtonProps & {
    type: "button";
    /**
     * Change the default rendered element for the one passed as a child, merging their props and behavior.
     *
     * @default false
     */
    asChild?: boolean;
  };

export type ChipToggleProps = ChipBaseProps &
  NativeButtonProps & {
    type: "toggle";
    /** Icon shown in the chip. Should be an `svg`, it is hidden from assistive technology. */
    icon: ReactNode;
    /** Icon shown instead of `icon` when pressed. */
    pressedIcon?: ReactNode;
    /** Controlled pressed state. */
    pressed?: boolean;
    /** Initial pressed state when uncontrolled. */
    defaultPressed?: boolean;
    /** Called when the user toggles the chip. */
    onPressedChange?: (pressed: boolean) => void;
  };

export type ChipProps =
  ChipRadioProps | ChipCheckboxProps | ChipRemovableProps | ChipButtonProps | ChipToggleProps;

function chipClassName(type: ChipProps["type"], variant: ChipProps["variant"], className?: string) {
  return clsx(
    "hds-chip",
    // The button type has no type-specific styles, so it has no modifier class
    type !== "button" && `hds-chip--${type}`,
    { "hds-chip--neutral": variant === "neutral" },
    className as undefined,
  );
}

/**
 * One component per type of chip, `Chip` picks the right one
 */

const InputChip = forwardRef<HTMLInputElement, ChipRadioProps | ChipCheckboxProps>(
  function InputChip({ type, variant, className, style, children, ...inputProps }, ref) {
    return (
      <label className={chipClassName(type, variant, className)} style={style}>
        <input {...inputProps} ref={ref} type={type} className="hds-chip__input" />
        <span className="hds-chip__indicator" aria-hidden="true" />
        {children}
      </label>
    );
  },
);

const RemovableChip = forwardRef<HTMLButtonElement, ChipRemovableProps>(function RemovableChip(
  { type, variant, className, onRemove, removeLabel = "Fjern", onClick, children, ...buttonProps },
  ref,
) {
  // E.g. "Fjern Oslo". For other children than text the consumer must provide an `aria-label`
  const ariaLabel =
    typeof children === "string" || typeof children === "number"
      ? `${removeLabel} ${children}`
      : undefined;

  return (
    <button
      aria-label={ariaLabel}
      {...buttonProps}
      ref={ref}
      type="button"
      className={chipClassName(type, variant, className)}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) onRemove?.(event);
      }}
    >
      {children}
      <span className="hds-chip__remove" aria-hidden="true" />
    </button>
  );
});

const ButtonChip = forwardRef<HTMLButtonElement, ChipButtonProps>(function ButtonChip(
  { type, variant, className, asChild, ...buttonProps },
  ref,
) {
  const classNames = chipClassName(type, variant, className);

  // With `asChild` the child decides the element, e.g. an anchor, so no `type="button"`
  if (asChild) return <Slot {...buttonProps} ref={ref} className={classNames} />;

  return <button {...buttonProps} ref={ref} type="button" className={classNames} />;
});

const ToggleChip = forwardRef<HTMLButtonElement, ChipToggleProps>(function ToggleChip(
  {
    type,
    variant,
    className,
    icon,
    pressedIcon,
    pressed: pressedProp,
    defaultPressed = false,
    onPressedChange,
    onClick,
    children,
    ...buttonProps
  },
  ref,
) {
  const [pressedState, setPressedState] = useState(defaultPressed);
  const isControlled = pressedProp !== undefined;
  const pressed = isControlled ? pressedProp : pressedState;

  return (
    <button
      {...buttonProps}
      ref={ref}
      type="button"
      aria-pressed={pressed}
      className={chipClassName(type, variant, className)}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        if (!isControlled) setPressedState(!pressed);
        onPressedChange?.(!pressed);
      }}
    >
      <span className="hds-chip__icon" aria-hidden="true">
        {pressed && pressedIcon ? pressedIcon : icon}
      </span>
      {children}
    </button>
  );
});

/**
 * Gives `ref` the right element type for each chip type:
 * `HTMLInputElement` for radio and checkbox, `HTMLButtonElement` for the rest.
 */
interface ChipComponent {
  (
    props:
      | ((ChipRadioProps | ChipCheckboxProps) & { ref?: Ref<HTMLInputElement> })
      | ((ChipRemovableProps | ChipButtonProps | ChipToggleProps) & {
          ref?: Ref<HTMLButtonElement>;
        }),
  ): ReactElement | null;
  displayName?: string;
}

/**
 * Chips let the user select one or more options, toggle something, or remove an item.
 *
 * Choose the kind of chip with the `type` prop:
 * - `radio`: Select one among several options. Use the same `name` for the options.
 * - `checkbox`: Select one or more among several options.
 * - `removable`: Represents a selected value the user can remove.
 * - `button`: Triggers an action. Use `asChild` with an anchor for navigation.
 * - `toggle`: A pressable chip with an icon, e.g. to mark something as favorite.
 *
 * Note that the `type` prop is the chip type, not the native button `type`.
 * Buttons are always rendered with `type="button"`.
 *
 * For `radio` and `checkbox` `className` and `style` are set on the root `label`,
 * all other props are set on the `input`.
 *
 * Wrap multiple chips in a `ChipGroup`.
 *
 * @example
 * <Chip type="radio" name="weight" value="0-2">0-2 kg</Chip>
 * <Chip type="checkbox" defaultChecked>Sporing</Chip>
 * <Chip type="removable" onRemove={() => removeCity("oslo")}>Oslo</Chip>
 * <Chip type="button" onClick={openFilter}>Filter</Chip>
 * <Chip variant="neutral" type="toggle" icon={<StarOutline />} pressedIcon={<StarSolid />}>
 *   Favoritt
 * </Chip>
 *
 * @example
 * // For navigation use `asChild` with an anchor element.
 * <Chip type="button" asChild><a href="/tracking">Sporing</a></Chip>
 */
export const Chip = forwardRef<HTMLInputElement | HTMLButtonElement, ChipProps>((props, ref) => {
  const inputRef = ref as Ref<HTMLInputElement>;
  const buttonRef = ref as Ref<HTMLButtonElement>;

  switch (props.type) {
    case "radio":
    case "checkbox":
      return <InputChip {...props} ref={inputRef} />;
    case "removable":
      return <RemovableChip {...props} ref={buttonRef} />;
    case "button":
      return <ButtonChip {...props} ref={buttonRef} />;
    case "toggle":
      return <ToggleChip {...props} ref={buttonRef} />;
  }
}) as ChipComponent;
Chip.displayName = "Chip";
