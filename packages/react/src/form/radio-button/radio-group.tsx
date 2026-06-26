import {
  type ChangeEventHandler,
  createContext,
  forwardRef,
  type ReactNode,
  useContext,
} from "react";
import { Fieldset, type FieldsetProps } from "../fieldset";
import type { RadioButtonProps } from "./radio-button";

export interface RadioGroupProps extends Omit<FieldsetProps, "onChange"> {
  children: ReactNode;
  /** Will be passed to all Radio buttons within the radio group */
  name?: RadioButtonProps["name"];
  /** If you want the group to be controlled, you can pass the selected value here */
  value?: RadioButtonProps["value"];
  /** Will be passed to all Radio buttons within the radio group */
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

type RadioGroupContextProps = Pick<RadioGroupProps, "name" | "value" | "onChange">;

const RadioGroupContext = createContext<RadioGroupContextProps>({
  name: undefined,
  onChange: () => undefined,
});

export const useRadioGroupContext = () => useContext(RadioGroupContext);

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(function RadioGroup(
  { name, value, onChange, children, ...rest },
  ref,
) {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange }}>
      <Fieldset {...rest} ref={ref}>
        {children}
      </Fieldset>
    </RadioGroupContext.Provider>
  );
});

RadioGroup.displayName = "RadioGroup";
