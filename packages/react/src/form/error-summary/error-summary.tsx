import { forwardRef, useEffect, useRef } from "react";
import { Message, type MessageProps, type MessageTitleProps } from "../../message";
import { UnorderedList, type ListProps } from "../../list";
import { Link } from "../../link";
import { useMergeRefs } from "../../utils";
import { focusWithLegendOrLabelInViewport } from "./focus";

interface ErrorSummaryHeadingPropsAutoFocus {
  /**
   * The heading will be focused when the component mounts
   *
   * On following errornous form submissions you should manually focus the heading
   * e.g. by passing a ref and calling `ref.current.focus()`
   *
   * @default true
   */
  autoFocus?: boolean;
}

interface ErrorSummaryHeadingPropsAs {
  /**
   * A heading level must be selected, or optionally opting out for a different element
   *
   * Use {@link ErrorSummaryHeadingPropsAsChild.asChild} if you need more control of the rendered element.
   */
  as: "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div" | "label" | "p";
  asChild?: never;
}

interface ErrorSummaryHeadingPropsAsChild {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild: true;
  as?: never;
}

export type ErrorSummaryHeadingProps = MessageTitleProps &
  ErrorSummaryHeadingPropsAutoFocus &
  (ErrorSummaryHeadingPropsAs | ErrorSummaryHeadingPropsAsChild);

export const ErrorSummaryHeading = forwardRef<
  HTMLParagraphElement,
  ErrorSummaryHeadingProps & (ErrorSummaryHeadingPropsAs | ErrorSummaryHeadingPropsAsChild)
>(({ children, as: Tag, autoFocus = true, ...rest }, ref) => {
  const focusRef = useRef<HTMLElement>(null);
  const mergedRef = useMergeRefs([focusRef, ref]);

  useEffect(() => {
    if (focusRef.current && autoFocus) {
      focusRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Only on initial render
  }, []);

  return (
    <Message.Title ref={mergedRef} tabIndex={-1} asChild {...rest}>
      {Tag ? <Tag>{children}</Tag> : children}
    </Message.Title>
  );
});
ErrorSummaryHeading.displayName = "ErrorSummary.Heading";

export interface ErrorSummaryListProps extends ListProps {
  /**
   * Sets the size of the items (font)
   *
   * @default "small"
   */
  size?: ListProps["size"];
}
export const ErrorSummaryList = forwardRef<HTMLUListElement, ErrorSummaryListProps>(
  ({ children, size = "small", ...rest }, ref) => {
    return (
      <Message.Description asChild>
        <UnorderedList size={size} ref={ref} {...rest}>
          {children}
        </UnorderedList>
      </Message.Description>
    );
  },
);
ErrorSummaryList.displayName = "ErrorSummary.List";

export interface ErrorSummaryItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /**
   * A hash link to the element that the error message refers to
   *
   * Must start with "#" as it's passed to the `href` attribute of an anchor element
   *
   * @example "#email"
   */
  href: `#${string}`;

  /**
   * Extra props to pass to the link element
   */
  linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}
export const ErrorSummaryItem = forwardRef<HTMLLIElement, ErrorSummaryItemProps>(
  ({ children, href, linkProps, ...rest }, ref) => {
    function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
      linkProps?.onClick?.(e);
      if (focusWithLegendOrLabelInViewport(href.replace("#", ""))) {
        e.preventDefault();
      }
    }

    return (
      <li ref={ref} {...rest}>
        <Link size="small" href={href} {...linkProps} onClick={onClick}>
          {children}
        </Link>
      </li>
    );
  },
);
ErrorSummaryItem.displayName = "ErrorSummary.Item";

export type ErrorSummaryProps = Omit<MessageProps, "variant" | "icon" | "iconClassName">;

export const ErrorSummary = forwardRef<HTMLDivElement, ErrorSummaryProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Message variant="warning" ref={ref} {...rest}>
        {children}
      </Message>
    );
  },
) as ErrorSummaryType;
ErrorSummary.displayName = "ErrorSummary";

type ErrorSummaryType = ReturnType<typeof forwardRef<HTMLDivElement, ErrorSummaryProps>> & {
  Heading: typeof ErrorSummaryHeading;
  List: typeof ErrorSummaryList;
  Item: typeof ErrorSummaryItem;
};
ErrorSummary.Heading = ErrorSummaryHeading;
ErrorSummary.List = ErrorSummaryList;
ErrorSummary.Item = ErrorSummaryItem;
