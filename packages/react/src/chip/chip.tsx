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

export type ChipRadioProps = ChipBaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "children" | "size"> & {
    type: "radio";
  };

export type ChipCheckboxProps = ChipBaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "children" | "size"> & {
    type: "checkbox";
  };

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

const ToggleChip = forwardRef<HTMLButtonElement, ChipToggleProps>(
  (
    {
      type,
      variant = "main",
      icon,
      pressedIcon,
      pressed: pressedProp,
      defaultPressed = false,
      onPressedChange,
      onClick,
      className,
      children,
      ...rest
    }: ChipToggleProps,
    ref,
  ) => {
    const [pressedState, setPressedState] = useState(defaultPressed);
    const pressed = pressedProp ?? pressedState;

    return (
      <button
        {...rest}
        ref={ref}
        type="button"
        aria-pressed={pressed}
        className={clsx(
          "hds-chip",
          `hds-chip--${type}`,
          { "hds-chip--neutral": variant === "neutral" },
          className as undefined,
        )}
        onClick={(event) => {
          onClick?.(event);
          if (event.defaultPrevented) return;
          if (pressedProp === undefined) setPressedState(!pressed);
          onPressedChange?.(!pressed);
        }}
      >
        <span className="hds-chip__icon" aria-hidden="true">
          {pressed && pressedIcon ? pressedIcon : icon}
        </span>
        {children}
      </button>
    );
  },
);
ToggleChip.displayName = "ToggleChip";

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
  const { variant = "main", className } = props;
  const classNames = clsx(
    "hds-chip",
    // The button type has no type-specific styles, so there is no modifier class for it
    props.type !== "button" && `hds-chip--${props.type}`,
    { "hds-chip--neutral": variant === "neutral" },
    className as undefined,
  );

  if (props.type === "radio" || props.type === "checkbox") {
    const { type, variant: _variant, className: _className, style, children, ...rest } = props;
    return (
      <label className={classNames} style={style}>
        <input
          {...rest}
          ref={ref as Ref<HTMLInputElement>}
          type={type}
          className="hds-chip__input"
        />
        <span className="hds-chip__indicator" aria-hidden="true" />
        {children}
      </label>
    );
  }

  if (props.type === "toggle") {
    return <ToggleChip {...props} ref={ref as Ref<HTMLButtonElement>} />;
  }

  if (props.type === "removable") {
    const {
      type,
      variant: _variant,
      className: _className,
      onRemove,
      removeLabel = "Fjern",
      onClick,
      children,
      ...rest
    } = props;
    void type;
    const label =
      typeof children === "string" || typeof children === "number"
        ? `${removeLabel} ${children}`
        : undefined;
    return (
      <button
        aria-label={label}
        {...rest}
        ref={ref as Ref<HTMLButtonElement>}
        type="button"
        className={classNames}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) onRemove?.(event);
        }}
      >
        {children}
        <span className="hds-chip__remove" aria-hidden="true" />
      </button>
    );
  }

  const { type, variant: _variant, className: _className, asChild, children, ...rest } = props;
  void type;
  const Component = asChild ? Slot : "button";
  return (
    <Component
      {...rest}
      ref={ref as Ref<HTMLButtonElement>}
      {...(asChild ? {} : { type: "button" })}
      className={classNames}
    >
      {children}
    </Component>
  );
}) as ChipComponent;
Chip.displayName = "Chip";
