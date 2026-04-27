import "@postenbring/hedwig-css";
import { useState } from "react";
import { Button, HStack, Input, VStack } from "@postenbring/hedwig-react";

function Example() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  return (
    <VStack gap="16" asChild style={{ minHeight: "440px" }}>
      <form
        lang="en"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const newErrors: Record<string, string> = {};
          for (const [key, value] of formData) {
            if (!value) {
              const label = document
                .querySelector(`form label:has(~ * input[name=${key}])`)
                ?.textContent?.trim();
              newErrors[key] = `${label ?? key} is required`;
            }
          }
          setErrors(newErrors);
        }}
      >
        <Input validationMessage={errors.FirstName} label="First name" name="FirstName" />
        <Input validationMessage={errors.LastName} label="Last name" name="LastName" />
        <Input validationMessage={errors.PetName} label="Pet name" name="PetName" />
        <HStack gap="4" wrap justify="space-between">
          <Button type="submit" fullWidth="mobile">
            Submit
          </Button>
          <Button
            fullWidth="mobile"
            variant="secondary"
            onClick={() => {
              setErrors({});
            }}
            type="reset"
          >
            Reset
          </Button>
        </HStack>
      </form>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 4,
  layout: "centered-fullwidth",
  description: `Use your preferred form library to handle error messages.`,
};
