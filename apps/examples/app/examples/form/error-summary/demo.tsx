import "@postenbring/hedwig-css";
import {
  Input,
  ErrorSummary,
  VStack,
  Button,
  RadioButton,
  RadioGroup,
} from "@postenbring/hedwig-react";

function Example() {
  const errorsById: Record<string, string | undefined> = {
    mobilenumber: "Mobile number is required",
    firstname: "First name is required",
    "favorite-food": "Favorite food is required",
  };

  return (
    <VStack gap="24" asChild>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Mobile number"
          id="mobilenumber"
          name="mobilenumber"
          errorMessage={errorsById["mobilenumber"]}
        />
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          errorMessage={errorsById["email"]}
        />
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
          <ErrorSummary.Heading>
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
};
