import {
  type ChangeEventHandler,
  createContext,
  forwardRef,
  type ReactNode,
  useContext,
} from "react";
import { Fieldset, type FieldsetProps } from "../fieldset";
import type { RadiobuttonProps } from "./radiobutton";

export interface RadioGroupProps extends Omit<FieldsetProps, "onChange"> {
  children: ReactNode;
  /** Will be passed to all Radiobuttons within the radio group */
  name?: RadiobuttonProps["name"];
  /** If you want the group to be controlled, you can pass the selected value here */
  value?: RadiobuttonProps["value"];
  /**
   * Error message is passed to the internal Fieldset, and will also give contained Radiobuttons
   * error styling and aria to indicate invalid state.
   */
  errorMessage?: ReactNode;
  /** Will be passed to all Radiobuttons within the radio group */
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

type RadioGroupContextProps = {
  hasError: boolean;
} & Pick<RadioGroupProps, "name" | "value" | "onChange">;

const RadioGroupContext = createContext<RadioGroupContextProps>({
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
