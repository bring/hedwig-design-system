import { useId, forwardRef } from "react";
import type { ReactNode, TextareaHTMLAttributes, LabelHTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "children"> {
  id?: string;
  variant?: "default" | "white";
  errorMessage?: ReactNode;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  label: ReactNode;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  {
    variant = "default",
    errorMessage,
    labelProps,
    label,
    id,
    className,
    disabled,
    readOnly,
    ...rest
  },
  ref,
) {
  const errorMessageId = useId();
  const inputId = useId();

  return (
    <div
      className={clsx(
        "hds-textarea",
        {
          [`hds-textarea--${variant}`]: variant,
          "hds-textarea--error": errorMessage,
        },
        className as undefined,
      )}
    >
      <label className="hds-textarea__label" {...labelProps} htmlFor={id || inputId}>
        {label}
      </label>
      <div
        className={clsx("hds-textarea__textarea-wrapper")}
        data-disabled={disabled}
        data-readonly={readOnly}
      >
        <textarea
          {...rest}
          aria-describedby={errorMessage ? errorMessageId : undefined}
          className="hds-textarea__textarea"
          disabled={disabled}
          id={id || inputId}
          readOnly={readOnly}
          ref={ref}
        />
      </div>
      {!!errorMessage && (
        <span className="hds-textarea__error-message" id={errorMessageId}>
          {errorMessage}
        </span>
      )}
    </div>
  );
});
