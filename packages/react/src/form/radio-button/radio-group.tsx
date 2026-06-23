import {
  type ChangeEventHandler,
  createContext,
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  useContext,
} from "react";
import { FieldsetDescription } from "../fieldset/fieldset-description";
import { Fieldset, type FieldsetProps } from "../fieldset";
import { FieldsetLegend } from "../fieldset/fieldset-legend";

export interface RadioGroupProps extends Omit<FieldsetProps, "onChange"> {
  children: ReactNode;
  /** Will be passed to all Radio buttons within the radio group */
  name?: InputHTMLAttributes<HTMLInputElement>["name"];
  /** If you want the group to be controlled, you can pass the selected value here */
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  /**
   * Error message is passed to the internal Fieldset, and will also give contained Radio buttons
   * error styling and aria to indicate invalid state.
   */
  errorMessage?: ReactNode;
  /** Will be passed to all Radio buttons within the radio group */
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

type RadioGroupContextProps = Pick<RadioGroupProps, "name" | "value" | "onChange" | "size">;

const RadioGroupContext = createContext<RadioGroupContextProps>({
  name: undefined,
  onChange: () => {
    return undefined;
  },
  size: undefined,
});

export const useRadioGroupContext = () => useContext(RadioGroupContext);

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(function RadioGroup(
  { name, value, errorMessage, onChange, children, size, ...rest },
  ref,
) {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange, size }}>
      <Fieldset errorMessage={errorMessage} size={size} {...rest} ref={ref}>
        {children}
      </Fieldset>
    </RadioGroupContext.Provider>
  );
}) as RadioGroupType;

type RadioGroupType = ReturnType<typeof forwardRef<HTMLFieldSetElement, RadioGroupProps>> & {
  Description: typeof FieldsetDescription;
  Legend: typeof FieldsetLegend;
};

RadioGroup.Description = FieldsetDescription;
RadioGroup.Legend = FieldsetLegend;

RadioGroup.displayName = "RadioGroup";
