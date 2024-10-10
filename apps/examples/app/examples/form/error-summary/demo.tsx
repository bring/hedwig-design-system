import { Input, ErrorSummary, ErrorSummaryError } from "@postenbring/hedwig-react";
import { useRef } from "react";
import type { ExampleConfig } from "../..";

function Example() {
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const errors: ErrorSummaryError[] = [
    { message: "Feil i input", ref: ref1 },
    { message: "Feil i input", ref: ref2 },
  ];
  return (
    <div>
      <ErrorSummary heading={"Test feiloppsummering"} errors={errors} />
      <Input label="Test 1" name="test1" ref={ref1} errorMessage={errors[0].message} />
      <Input label="Test 2" name="test2" ref={ref2} errorMessage={errors[1].message} />
    </div>
  );
}

export default Example;
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-fullwidth",
};
