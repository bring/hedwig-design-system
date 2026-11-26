import { Children, forwardRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Avatar } from "../avatar";
import { AvatarGroupContext } from "../avatar/context";

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Size of all avatars in the group. An `Avatar` with its own `size` keeps it.
   *
   * - `small`: 32px
   * - `medium`: 40px
   * - `large`: 60px
   * - `xlarge`: 100px
   *
   * @default "medium"
   */
  size?: "small" | "medium" | "large" | "xlarge";

  /**
   * Maximum number of avatars shown, including the `+N` avatar.
   * When there are more avatars than this, the last slot shows how many are hidden.
   * E.g. `max={4}` with 7 avatars shows 3 avatars and `+4`.
   *
   * Shows all avatars when not set.
   */
  max?: number;

  /**
   * Accessible name of the `+N` avatar. Receives the number of hidden avatars.
   *
   * @default (count) => `${count} til`
   */
  overflowLabel?: (count: number) => string;

  /**
   * `Avatar`s to show.
   */
  children?: React.ReactNode;
}

/**
 * Shows several `Avatar`s as a horizontal, overlapping stack.
 * The avatars get the `size` of the group, and when there are more than `max`
 * the last slot shows the number of hidden avatars, e.g. `+4`.
 *
 * Give the group an `aria-label` (e.g. "Deltakere") to make it a labelled group for assistive technology.
 *
 * @example
 *
 * ```tsx
 * <AvatarGroup size="small" max={4} aria-label="Deltakere">
 *   <Avatar src="/anne.jpg" alt="Anne Heier" />
 *   <Avatar aria-label="Per Hansen">PH</Avatar>
 *   <Avatar aria-label="Kari Berg">KB</Avatar>
 * </AvatarGroup>
 * ```
 */
export const AvatarGroup = forwardRef<HTMLSpanElement, AvatarGroupProps>(
  (
    {
      size = "medium",
      max,
      overflowLabel = (count) => `${count} til`,
      className,
      children,
      "aria-label": ariaLabel,
      ...rest
    },
    ref,
  ) => {
    const avatars = Children.toArray(children);
    const limit = max === undefined ? undefined : Math.max(Math.floor(max), 1);
    const hasOverflow = limit !== undefined && avatars.length > limit;
    // The `+N` avatar takes the last slot, unless it is the only one
    const visibleCount = hasOverflow ? limit - 1 : avatars.length;
    const hiddenCount = avatars.length - visibleCount;

    return (
      <AvatarGroupContext.Provider value={size}>
        <span
          ref={ref}
          className={clsx("hds-avatar-group", `hds-avatar-group--${size}`, className as undefined)}
          {...(ariaLabel === undefined ? {} : { role: "group", "aria-label": ariaLabel })}
          {...rest}
        >
          {hasOverflow ? avatars.slice(0, visibleCount) : avatars}
          {hasOverflow ? (
            <Avatar aria-label={overflowLabel(hiddenCount)}>
              <span aria-hidden="true">+{hiddenCount}</span>
            </Avatar>
          ) : null}
        </span>
      </AvatarGroupContext.Provider>
    );
  },
);
AvatarGroup.displayName = "AvatarGroup";
