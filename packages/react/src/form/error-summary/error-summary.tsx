import { forwardRef } from "react";
import { Message, type MessageProps } from "../../message";
import { UnorderedList, type ListProps } from "../../list";
import { Link } from "../../link";
import { focusWithLegendOrLabelInViewport } from "./focus";

type ErrorSummaryHeadingProps = React.HTMLAttributes<HTMLParagraphElement>;
export const ErrorSummaryHeading = forwardRef<HTMLParagraphElement, ErrorSummaryHeadingProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Message.Title ref={ref} {...rest}>
        {children}
      </Message.Title>
    );
  },
);
ErrorSummaryHeading.displayName = "ErrorSummary.Heading";

interface ErrorSummaryListProps extends ListProps {
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

interface ErrorSummaryItemProps extends React.HTMLAttributes<HTMLLIElement> {
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

export interface ErrorSummaryProps
  extends Omit<MessageProps, "variant" | "icon" | "iconClassName"> {
  autoFocus?: boolean;
}

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
