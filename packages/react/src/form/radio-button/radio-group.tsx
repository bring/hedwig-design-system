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
  /**
   * Error message is passed to the internal Fieldset, and will also give contained Radio buttons
   * error styling and aria to indicate invalid state.
   */
  errorMessage?: ReactNode;
  /** Will be passed to all Radio buttons within the radio group */
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

type RadioGroupContextProps = {
  hasError: boolean;
} & Pick<RadioGroupProps, "name" | "value" | "onChange">;

const RadioGroupContext = createContext<RadioGroupContextProps>({
  name: undefined,
  hasError: false,
  onChange: () => {
    return undefined;
  },
});

export const useRadioGroupContext = () => useContext(RadioGroupContext);

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(function RadioGroup(
  { name, value, errorMessage, onChange, children, ...rest },
  ref,
) {
  return (
    <RadioGroupContext.Provider value={{ name, value, hasError: Boolean(errorMessage), onChange }}>
      <Fieldset errorMessage={errorMessage} {...rest} ref={ref}>
        {children}
      </Fieldset>
    </RadioGroupContext.Provider>
  );
});

RadioGroup.displayName = "RadioGroup";
