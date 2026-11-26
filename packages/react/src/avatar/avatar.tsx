import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef, useContext, useState } from "react";
import { AvatarGroupContext } from "./context";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Size of the avatar (width and height).
   *
   * - `small`: 32px
   * - `medium`: 40px
   * - `large`: 60px
   * - `xlarge`: 100px
   *
   * Inside an `AvatarGroup` the size of the group is used unless set here.
   *
   * @default "medium"
   */
  size?: "small" | "medium" | "large" | "xlarge";

  /**
   * - `default`: Shows an image (`src`), initials or icon (`children`), or the default user icon.
   * - `logo`: Shows a logo without background and rounding. Renders the built-in brand logo
   *   (follows the Posten/Bring theme), or a custom logo when `src` is given.
   *
   * @default "default"
   */
  variant?: "default" | "logo";

  /**
   * Url of an image (or custom logo) to show.
   *
   * If the image fails to load, the avatar falls back to `children` (e.g. initials),
   * or the default user icon when no children are given.
   */
  src?: string;

  /**
   * Alternative text for the image. Use an empty string if the avatar is decorative,
   * e.g. when the name is displayed next to it.
   */
  alt?: string;

  /**
   * Extra props passed to the `<img>` element, e.g. `loading` or `referrerPolicy`.
   */
  imgProps?: Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * Useful for custom content like an svg crest. The size classes are applied to the child.
   *
   * @default false
   */
  asChild?: boolean;

  /**
   * Initials (e.g. `AH`), a custom svg icon, or content to show if the image fails to load.
   */
  children?: React.ReactNode;
}

function DefaultIcon() {
  return (
    <svg
      className="hds-avatar__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12c0-4.418 3.582-8 8-8s8 3.582 8 8c0 1.848-.627 3.55-1.68 4.905C16.99 15.17 14.74 14 12 14s-4.99 1.17-6.32 2.905A7.965 7.965 0 0 1 4 12Zm3.2 6.3A7.96 7.96 0 0 0 12 20c1.8 0 3.46-.595 4.8-1.7C15.88 16.99 14.1 16 12 16s-3.88.99-4.8 2.3ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      />
    </svg>
  );
}

/**
 * An avatar is a small square representing a person or an organisation.
 *
 * Variants, depending on props:
 * - Initials: pass them as children, `<Avatar>AH</Avatar>`
 * - Icon: the default user icon when nothing else is given. Pass your own svg as children to override.
 * - Image: pass `src` and `alt`. Falls back to children (or the default icon) if the image fails to load.
 * - Logo: `variant="logo"` for the built-in brand logo, or with `src` for a custom logo.
 *   A custom logo that fails to load falls back like an image does (children or the default icon),
 *   not to the built-in logo.
 * - Slot: `asChild` to render your own element.
 *
 * Accessibility: avatars are decorative by default, as they are usually shown next to a name.
 * Pass `aria-label` to give initials, icon or the built-in logo an accessible name (`role="img"` is added).
 * Without `aria-label`, the built-in logo is hidden from assistive technology. Images use `alt`.
 *
 * @example
 *
 * ```tsx
 * <Avatar>AH</Avatar>
 * <Avatar src="/profile.jpg" alt="Ada Hansen">AH</Avatar>
 * <Avatar variant="logo" size="large" />
 * <Avatar variant="logo" src="/nav.svg" alt="Nav" />
 * ```
 *
 */
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      size: sizeProp,
      variant = "default",
      src,
      alt,
      imgProps,
      asChild,
      children,
      className,
      "aria-label": ariaLabel,
      ...rest
    },
    ref,
  ) => {
    const groupSize = useContext(AvatarGroupContext);
    const size = sizeProp ?? groupSize ?? "medium";

    // Remembers which src failed, so a new src is tried again
    const [failedSrc, setFailedSrc] = useState<string | undefined>();

    const isLogo = variant === "logo";
    const showImage = Boolean(src) && failedSrc !== src;
    const isBuiltInLogo = isLogo && !src;

    const classes = clsx(
      "hds-avatar",
      {
        "hds-avatar--small": size === "small",
        "hds-avatar--medium": size === "medium",
        "hds-avatar--large": size === "large",
        "hds-avatar--xlarge": size === "xlarge",
        "hds-avatar--logo": isLogo,
        "hds-avatar--built-in-logo": isBuiltInLogo,
      },
      className as undefined,
    );

    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={classes}
          {...(ariaLabel !== undefined && { role: "img", "aria-label": ariaLabel })}
          {...rest}
        >
          {children}
        </Slot>
      );
    }

    let content: React.ReactNode;
    if (isBuiltInLogo) {
      content = null;
    } else if (showImage) {
      content = (
        <img
          {...imgProps}
          className={clsx("hds-avatar__image", imgProps?.className as undefined)}
          src={src}
          alt={alt ?? ""}
          onError={(event) => {
            setFailedSrc(src);
            imgProps?.onError?.(event);
          }}
        />
      );
    } else {
      content = children ?? <DefaultIcon />;
    }

    let ariaProps: React.HTMLAttributes<HTMLSpanElement> = {};
    if (ariaLabel !== undefined) {
      ariaProps = { role: "img", "aria-label": ariaLabel };
    } else if (isBuiltInLogo) {
      ariaProps = { "aria-hidden": true };
    }

    return (
      <span ref={ref} className={classes} {...ariaProps} {...rest}>
        {content}
      </span>
    );
  },
);
Avatar.displayName = "Avatar";
