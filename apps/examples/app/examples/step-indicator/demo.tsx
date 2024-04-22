import { useState } from "react";
import { HStack, StepIndicator, PrimaryButton, VStack, Skeleton } from "@postenbring/hedwig-react";

const steps = ["Size and weight", "Sender", "Recipient", "Summary"];
function Example() {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div style={{ minWidth: 400 }}>
      <StepIndicator
        activeStep={activeStep}
        totalSteps={steps.length}
        label="Norgespakke™ small"
        lang="en"
        title={steps[activeStep - 1]}
        titleAs="h1"
      />
      <VStack gap="12" className="hds-mt-24">
        <div style={{ width: "100%" }}>
          <Skeleton variant="text" animation={false} width="80%"></Skeleton>
          <Skeleton variant="text" animation={false} width="60%"></Skeleton>
        </div>
        <HStack gap="12">
          {activeStep > 1 && (
            <PrimaryButton fill="outline" onClick={() => setActiveStep((current) => current - 1)}>
              Back
            </PrimaryButton>
          )}
          {activeStep < steps.length && (
            <PrimaryButton onClick={() => setActiveStep((current) => current + 1)}>
              Continue
            </PrimaryButton>
          )}

          {activeStep === steps.length && (
            <PrimaryButton
              onClick={() => {
                //
              }}
            >
              Submit order
            </PrimaryButton>
          )}
        </HStack>
      </VStack>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {};
