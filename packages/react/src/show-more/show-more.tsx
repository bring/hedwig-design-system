import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { forwardRef } from "react";

type Variant =
  | {
      variant?: "show-more";
      expanded?: never;
    }
  | {
      variant: "show-more-show-less";
      expanded: boolean;
    };

export type ShowMoreProps = React.HTMLAttributes<HTMLButtonElement> & {
  text: React.ReactNode;
} & Variant;

/**
 * @example
 * ```tsx
 * function Content() {
 *   const [items, fetchMoreItems, moreItemsAvailable] = useYourData();
 *   function onShowMoreItems() {
 *     fetchMoreItems();
 *   }
 *   return (
 *     <>
 *       <ul>
 *         {items.map((item) => (
 *          <li key={item.id}>{item.text}</li>
 *         ))}
 *       </ul>
 *       {moreItemsAvailable ?
 *         <ShowMoreButton className="mt-8" onClick={onShowMoreItems} lang="en" /> :
 *         null
 *       }
 *     </>
 *   )
 * }
 * ```
 */
export const ShowMoreButton = forwardRef<HTMLButtonElement, ShowMoreProps>(
  ({ text, variant, expanded, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "hds-show-more",
          variant === "show-more-show-less" && "hds-show-more--show-less",
          className as undefined,
        )}
        data-state={expanded ? "expanded" : undefined}
        type="button"
        {...rest}
      >
        {text}
        <span className={clsx("hds-show-more__icon")} />
      </button>
    );
  },
);
ShowMoreButton.displayName = "ShowMoreButton";
