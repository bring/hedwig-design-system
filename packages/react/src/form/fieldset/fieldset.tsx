import {
  Children,
  cloneElement,
  isValidElement,
  useId,
  forwardRef,
  createContext,
  useContext,
} from "react";
import type { FieldsetHTMLAttributes, ReactElement, ReactNode, CSSProperties } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { ErrorMessage, type ErrorMessageProps } from "../error-message";
import { FieldsetDescription } from "./fieldset-description";
import { FieldsetLegend } from "./fieldset-legend";

type FieldsetLegendProps = React.ComponentProps<typeof FieldsetLegend>;

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  className?: string;
  style?: CSSProperties;
  /**
   * Providing an errorMessage will also give contained Checkboxes or Radio buttons
   * error styling and aria to indicate invalid state.
   *
   * For Radio buttons you are even better off using RadioGroup.
   */
  errorMessage?: ReactNode;
  /**
   * @deprecated Pass props directly to <Fieldset.Legend> instead.
   */
  legendProps?: FieldsetLegendProps;
  /**
   * @deprecated Use <Fieldset.Legend>...</Fieldset.Legend> instead.
   */
  legend?: ReactNode;
  size?: "small" | "";
  children: ReactNode;
  errorMessageProps?: Partial<ErrorMessageProps>;
}

const FieldsetContext = createContext<{ hasError: boolean; size: "small" | "" }>({
  hasError: false,
  size: "",
});

export const useFieldsetContext = () => useContext(FieldsetContext);

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(function Fieldset(
  {
    className,
    style,
    errorMessage,
    errorMessageProps,
    legendProps,
    legend,
    size = "",
    children,
    ...rest
  },
  ref,
) {
  const errorMessageId = useId();
  const childArray = Children.toArray(children);
  const legendChild = childArray.find(
    (child): child is ReactElement<FieldsetLegendProps> =>
      isValidElement<FieldsetLegendProps>(child) && child.type === FieldsetLegend,
  );
  const contentChildren = legendChild
    ? childArray.filter((child) => child !== legendChild)
    : childArray;
  let renderedLegend = null;

  if (legendChild) {
    renderedLegend = cloneElement(legendChild, {
      ...legendProps,
      ...legendChild.props,
      className: clsx(
        legendProps?.className as undefined,
        legendChild.props.className as undefined,
      ),
    });
  } else if (legend !== undefined) {
    renderedLegend = <FieldsetLegend {...legendProps}>{legend}</FieldsetLegend>;
  }

  return (
    <fieldset
      aria-describedby={errorMessage ? errorMessageId : undefined}
      aria-invalid={errorMessage ? true : undefined}
      className={clsx("hds-fieldset", { [`hds-fieldset--${size}`]: size }, className as undefined)}
      data-color={errorMessage ? "error" : undefined}
      ref={ref}
      style={style}
      {...rest}
    >
      {renderedLegend}
      <FieldsetContext.Provider value={{ hasError: Boolean(errorMessage), size }}>
        {contentChildren}
      </FieldsetContext.Provider>
      <ErrorMessage id={errorMessageId} {...errorMessageProps}>
        {errorMessage}
      </ErrorMessage>
    </fieldset>
  );
}) as FieldsetType;

type FieldsetType = ReturnType<typeof forwardRef<HTMLFieldSetElement, FieldsetProps>> & {
  Description: typeof FieldsetDescription;
  Legend: typeof FieldsetLegend;
};

Fieldset.Description = FieldsetDescription;
Fieldset.Legend = FieldsetLegend;
