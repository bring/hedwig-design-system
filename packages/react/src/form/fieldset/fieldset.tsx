import {
  Children,
  cloneElement,
  isValidElement,
  useId,
  forwardRef,
  createContext,
  useContext,
} from "react";
import type {
  FieldsetHTMLAttributes,
  ReactElement,
  ReactNode,
  CSSProperties,
  ComponentProps,
} from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { ValidationMessage, type ValidationMessageProps } from "../validation-message";
import { type ErrorMessageProps } from "../error-message";
import { getValidationMessageValue } from "../../utils";
import { FieldsetDescription } from "./fieldset-description";
import { FieldsetLegend } from "./fieldset-legend";

type FieldsetLegendProps = ComponentProps<typeof FieldsetLegend>;

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  className?: string;
  style?: CSSProperties;
  "data-color"?: "info" | "success" | "warning" | "error";
  validationMessage?: ReactNode | { value: ReactNode };
  validationMessageProps?: Partial<ValidationMessageProps>;
  /**
   * Providing an errorMessage will also give contained Checkboxes or Radio buttons
   * error styling and aria to indicate invalid state.
   *
   * For Radio buttons you are even better off using RadioGroup.
   */

  /** @deprecated Use `validationMessage` instead */
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
  /** @deprecated Use `validationMessageProps` instead */
  errorMessageProps?: Partial<ErrorMessageProps>;
}

/** @deprecated Will no longer be needed */
const FieldsetContext = createContext<{ hasError: boolean; size: "small" | "" }>({
  hasError: false,
  size: "",
});

/** @deprecated Will no longer be needed */
export const useFieldsetContext = () => useContext(FieldsetContext);

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(function Fieldset(
  {
    className,
    style,
    "data-color": dataColor = undefined,
    validationMessage,
    validationMessageProps,
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
  const validationMessageId = useId();
  const validationColor = errorMessage ? "error" : dataColor;
  const validationMessageValue = getValidationMessageValue(validationMessage, errorMessage);
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
      aria-describedby={validationMessageValue ? validationMessageId : undefined}
      aria-invalid={errorMessage ? true : undefined}
      className={clsx("hds-fieldset", { [`hds-fieldset--${size}`]: size }, className as undefined)}
      data-color={validationColor}
      ref={ref}
      style={style}
      {...rest}
    >
      {renderedLegend}
      <FieldsetContext.Provider value={{ hasError: Boolean(errorMessage), size }}>
        {contentChildren}
      </FieldsetContext.Provider>
      <ValidationMessage
        id={validationMessageId}
        {...(validationMessageProps ?? errorMessageProps)}
      >
        {validationMessageValue}
      </ValidationMessage>
    </fieldset>
  );
}) as FieldsetType;

type FieldsetType = ReturnType<typeof forwardRef<HTMLFieldSetElement, FieldsetProps>> & {
  Description: typeof FieldsetDescription;
  Legend: typeof FieldsetLegend;
};

Fieldset.Description = FieldsetDescription;
Fieldset.Legend = FieldsetLegend;
