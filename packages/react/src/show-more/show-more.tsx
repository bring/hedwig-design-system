import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

interface ShowMoreProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: React.ReactNode;
  expanded?: boolean;
}

/**
 * Simple button for triggering more content.
 *
 * You have to add the logic for what happens when the button is clicked yourself.
 *
 * **Example**
 *
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
 *         <ShowMoreButton className="mt-small-2" onClick={onShowMoreItems} lang="en" /> :
 *         null
 *       }
 *     </>
 *   )
 * }
 * ```
 */
export function ShowMoreButton({ text, expanded = false, className, ...rest }: ShowMoreProps) {
  return (
    <button
      className={clsx("hds-show-more", className as undefined)}
      data-state={expanded ? "expanded" : undefined}
      type="button"
      {...rest}
    >
      {text}
      <span className={clsx("hds-show-more__icon")} />
    </button>
  );
}
