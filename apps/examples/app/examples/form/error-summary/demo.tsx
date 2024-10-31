/* eslint-disable jsx-a11y/no-autofocus */
import "@postenbring/hedwig-css";
import {
  Input,
  ErrorSummary,
  VStack,
  Button,
  RadioButton,
  RadioGroup,
} from "@postenbring/hedwig-react";
import { useRef } from "react";

function Example() {
  const errorsById: Record<string, string | undefined> = {
    firstname: "First name is required",
    "favorite-food": "Favorite food is required",
  };
  const ref = useRef<HTMLHeadingElement>(null);

  return (
    <VStack gap="24" asChild>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ref.current?.focus();
        }}
      >
        <Input
          label="First name"
          id="firstname"
          name="firstname"
          errorMessage={errorsById["firstname"]}
        />
        <Input label="Surname" id="surname" name="surname" errorMessage={errorsById["surname"]} />

        <RadioGroup
          legend="Favorite food"
          name="favorite-food"
          errorMessage={errorsById["favorite-food"]}
        >
          <RadioButton value="Pizza" id="favorite-food">
            🍕 Pizza
          </RadioButton>
          <RadioButton value="Burger">🍔 Burger</RadioButton>
          <RadioButton value="Sushi">🍱 Sushi</RadioButton>
        </RadioGroup>

        <ErrorSummary>
          <ErrorSummary.Heading as="h2" autoFocus={false} ref={ref}>
            To continue please correct the following issues
          </ErrorSummary.Heading>
          <ErrorSummary.List>
            {Object.entries(errorsById).map(([id, message]) => (
              <ErrorSummary.Item key={id} href={`#${id}`}>
                {message}
              </ErrorSummary.Item>
            ))}
          </ErrorSummary.List>
        </ErrorSummary>

        <Button type="submit" fullWidth="mobile" style={{ alignSelf: "start" }}>
          Continue
        </Button>
      </form>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  layout: "centered-vertical-padding",
  description: `
  <p>It's generally recommended placing the error summary at the bottom of the form, next to the submit/continue button making it clearer for the user why they cannot advance.</p>
  <p>Read more about best practices for Error Summary in these design systems</p>
  <ul>
    <li><a href="https://next.storybook.designsystemet.no/?path=/docs/komponenter-errorsummary--docs">Digdir - Designsystemet</a></li>
    <li><a href="https://aksel.nav.no/komponenter/core/errorsummary">NAV - Aksel</a></li>
    <li><a href="https://design-system.service.gov.uk/components/error-summary/">GOV UK</a></li>
  </ul>
  `,
};
