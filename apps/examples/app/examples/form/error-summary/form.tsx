import "@postenbring/hedwig-css";
import {
  Input,
  ErrorSummary,
  VStack,
  Button,
  RadioButton,
  RadioGroup,
  HStack,
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

  // Revalidate errouneous fields when they are changed or blurred
  function onBlurOrChange(
    e:
      | React.FocusEvent<HTMLInputElement | HTMLFieldSetElement>
      | React.ChangeEvent<HTMLInputElement | HTMLFieldSetElement>,
  ) {
    const id = e.currentTarget.id as keyof typeof formSchema;
    if (!errors?.[id]) return;
    e.currentTarget.form;
    const fieldErrors = validateForm(
      { [id]: formSchema[id] ?? [] },
      new FormData(e.currentTarget.form!),
    );

    setErrors((prevErrors) => {
      const newErrors = {
        ...(prevErrors as NonNullable<typeof errors>),
        [id]: fieldErrors?.[id],
      };
      if (!fieldErrors?.[id]) delete newErrors[id];
      if (Object.keys(newErrors).length === 0) return undefined;
      return newErrors;
    });
  }

  if (formSubmitted) {
    return (
      <>
        <VStack gap="24" style={{ minWidth: "min(calc(100vw - 32px), 540px)" }}>
          <p>Thank you for submitting the form</p>
          <Button type="button" onClick={() => setFormSubmitted(false)}>
            Go back
          </Button>
        </VStack>
      </>
    );
  }

  return (
    <VStack gap="24" asChild style={{ minWidth: "min(calc(100vw - 32px), 540px)" }}>
      <form onSubmit={handleSubmit}>
        <Input
          type="tel"
          label="Mobile number"
          id="mobilenumber"
          name="mobilenumber"
          errorMessage={errors?.["mobilenumber"]}
          onBlur={onBlurOrChange}
          onChange={onBlurOrChange}
        />
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          errorMessage={errors?.["email"]}
          onBlur={onBlurOrChange}
          onChange={onBlurOrChange}
        />
        <Input
          label="First name"
          id="firstname"
          name="firstname"
          errorMessage={errors?.["firstname"]}
          onBlur={onBlurOrChange}
          onChange={onBlurOrChange}
        />
        <Input
          label="Surname"
          id="surname"
          name="surname"
          errorMessage={errors?.["surname"]}
          onBlur={onBlurOrChange}
          onChange={onBlurOrChange}
        />

        <RadioGroup
          legend="Favorite food"
          name="favorite-food"
          errorMessage={errors?.["favorite-food"]}
          onBlur={onBlurOrChange}
          onChange={onBlurOrChange}
        >
          <RadioButton value="Pizza" id="favorite-food">
            🍕 Pizza
          </RadioButton>
          <RadioButton value="Burger">🍔 Burger</RadioButton>
          <RadioButton value="Sushi">🍱 Sushi</RadioButton>
        </RadioGroup>

        {errors && (
          <ErrorSummary>
            <ErrorSummary.Heading as="h2" ref={errorSummaryHeadingRef}>
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

        <HStack gap="8-12">
          <Button type="submit" fullWidth="mobile">
            Continue
          </Button>
          <Button
            title="Reset button just for purpose of example usage, it's generally not recommended to have a reset button in forms"
            type="reset"
            onClick={() => setErrors(undefined)}
            variant="primary-outline"
            fullWidth="mobile"
          >
            Reset
          </Button>
        </HStack>
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
  description: `
  <p>The error summary should only be shown after the user tries to continue/submit the form</p>
  <p>The header should be focused every time the users tries to submit while there are still errors</p>
  `,
};
