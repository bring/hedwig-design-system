import { forwardRef, useRef, type InputHTMLAttributes } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { InputGroup, type InputGroupProps } from "../input-group";
import { useMergeRefs } from "../../utils/utils";

export type DatePickerProps = Omit<
  InputGroupProps & Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
  "children" | "type"
> & {
  /**
   * Accessible title for the calendar button
   *
   * This button currently only shows in Chrome.
   *
   * @defaultValue "Åpne kalender"
   */
  calendarButtonTitle?: string;
};

/**
 * A basic implementation of a date picker
 *
 * This date picker is an implementation of native date picker, as you get
 * with `<input type="date" />`, where the input field is dressed in Hedwig styling.
 *
 * Due to accessibility concerns you will only see the appropriate Hedwig calendar
 * icon in Chrome. Firefox will show built in icon and Safari will show no icon.
 * Not tested in Edge.
 */
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(function DatePicker(
  {
    className,
    size,
    errorMessage,
    labelProps,
    label,
    id,
    style,
    disabled,
    readOnly,
    calendarButtonTitle = "Åpne kalender",
    ...rest
  },
  ref,
) {
  const inputRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergeRefs([inputRef, ref]);

  return (
    <InputGroup
      className={clsx("hds-date-picker", className as undefined)}
      disabled={disabled}
      errorMessage={errorMessage}
      id={id}
      label={label}
      labelProps={labelProps}
      readOnly={readOnly}
      style={style}
      size={size}
    >
      {(inputProps) => (
        <>
          <input
            {...rest}
            {...inputProps}
            disabled={disabled}
            readOnly={readOnly}
            ref={mergedRef}
            type="date"
          />
          <button
            className={clsx("hds-date-picker__calendar-button")}
            type="button"
            title={calendarButtonTitle}
            onClick={() => {
              inputRef.current?.showPicker();
            }}
          />
        </>
      )}
    </InputGroup>
  );
});

DatePicker.displayName = "DatePicker";
