import "@postenbring/hedwig-css";
import {
  Input,
  ErrorSummary,
  VStack,
  Button,
  RadioButton,
  RadioGroup,
} from "@postenbring/hedwig-react";

const formSchema = {
  mobilenumber: [required("Mobile number is required")],
  email: [required("Email is required")],
  firstname: [required("First name is required")],
  surname: [required("Surname number is required")],
  "favorite-food": [required("A favorite food must be chosen")],
} satisfies FormSchema;

function Example() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<ReturnType<typeof validateForm<typeof formSchema>>>();
  const errorSummaryHeadingRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errors = validateForm(formSchema, formData);
    setErrors(errors);
    if (errors) {
      errorSummaryHeadingRef.current?.focus();
    }

    if (!errors) {
      setFormSubmitted(true);
    }
  }

  if (formSubmitted) {
    return (
      <>
        <VStack gap="24" style={{ minWidth: 480 }}>
          <p>Thank you for submitting the form</p>
          <Button type="button" onClick={() => setFormSubmitted(false)}>
            Go back
          </Button>
        </VStack>
      </>
    );
  }

  return (
    <VStack gap="24" asChild style={{ minWidth: 480 }}>
      <form onSubmit={handleSubmit}>
        <Input
          type="tel"
          label="Mobile number"
          id="mobilenumber"
          name="mobilenumber"
          errorMessage={errors?.["mobilenumber"]}
        />
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          errorMessage={errors?.["email"]}
        />
        <Input
          label="First name"
          id="firstname"
          name="firstname"
          errorMessage={errors?.["firstname"]}
        />
        <Input label="Surname" id="surname" name="surname" errorMessage={errors?.["surname"]} />

        <RadioGroup
          legend="Favorite food"
          name="favorite-food"
          errorMessage={errors?.["favorite-food"]}
        >
          <RadioButton value="Pizza" id="favorite-food">
            🍕 Pizza
          </RadioButton>
          <RadioButton value="Burger">🍔 Burger</RadioButton>
          <RadioButton value="Sushi">🍱 Sushi</RadioButton>
        </RadioGroup>

        {errors && (
          <ErrorSummary>
            <ErrorSummary.Heading tabIndex={-1} ref={errorSummaryHeadingRef}>
              To continue please correct the following issues
            </ErrorSummary.Heading>
            <ErrorSummary.List>
              {Object.entries(errors).map(([id, message]) => (
                <ErrorSummary.Item key={id} href={`#${id}`}>
                  {message}
                </ErrorSummary.Item>
              ))}
            </ErrorSummary.List>
          </ErrorSummary>
        )}

        <Button type="submit" fullWidth="mobile" style={{ alignSelf: "start" }}>
          Continue
        </Button>
      </form>
    </VStack>
  );
}

/**
 * A minimal form validation library, in production you probably use a library like Formik or react-hook-form
 * Or connecting to a backend API to validate the form
 */
type FieldValidator = (value?: FormDataEntryValue) => string | false;
type FormSchema = Record<string, FieldValidator[]>;
function validateForm<T extends FormSchema>(formSchema: T, formData: FormData) {
  const errors: Record<string, string | undefined> = {};
  for (const [id, validators] of Object.entries(formSchema)) {
    for (const validator of validators) {
      const value = formData.get(id) ?? undefined;
      const errorMessage = validator(value);
      if (errorMessage) {
        errors[id] = errorMessage;
        break;
      }
    }
  }
  if (Object.keys(errors).length === 0) return undefined;
  return errors as Record<keyof T, string | undefined>;
}
function required(message: string) {
  return (value?: FormDataEntryValue) => (value === "" || value === undefined) && message;
}

export default Example;

import type { ExampleConfig } from "../..";
import { useRef, useState } from "react";
export const config: ExampleConfig = {
  index: 1,
  layout: "centered-vertical-padding",
};
