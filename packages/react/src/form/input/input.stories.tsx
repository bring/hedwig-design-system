/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../../button";
import { HStack, VStack } from "../../layout";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const PlainInput: Story = {
  args: {
    label: "Some kind of input",
    placeholder: "I am a placeholder",
    errorMessage: "",
    readOnly: false,
    variant: "default",
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["default", "white"] },
  },
};

export const PlainInputWithError: Story = {
  args: {
    label: "Some kind of input with error",
    errorMessage: "This is invalid",
    placeholder: "I am a placeholder",
  },
};

export const ReadonlyInput: Story = {
  args: {
    label: "Some kind of readonly input",
    readOnly: true,
    value: "This is a read-only value",
  },
};

export const ReadonlyInputWithError: Story = {
  args: {
    label: "Some kind of readonly input",
    readOnly: true,
    value: "This is a read-only value",
    errorMessage: "This is invalid",
  },
};

export const WhiteInput: Story = {
  args: {
    label: "Some kind of white input",
    variant: "white",
    placeholder: "I am a placeholder",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Input {...props} />
    </div>
  ),
};

export const WhiteInputWithError: Story = {
  args: {
    label: "Some kind of white input",
    variant: "white",
    placeholder: "I am a placeholder",
    errorMessage: "This is invalid",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Input {...props} />
    </div>
  ),
};

export const WhiteReadonlyInput: Story = {
  args: {
    label: "Some kind of readonly input",
    variant: "white",
    readOnly: true,
    value: "This is a read-only value",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Input {...props} />
    </div>
  ),
};

export const WhiteReadonlyInputWithError: Story = {
  args: {
    label: "Some kind of readonly input",
    variant: "white",
    readOnly: true,
    value: "This is a read-only value",
    errorMessage: "This is invalid",
  },
  render: (props) => (
    <div style={{ background: "var(--hds-ui-colors-light-grey-fill)", padding: "1em" }}>
      <Input {...props} />
    </div>
  ),
};

export const TrackingNumberSearch: Story = {
  render: () => (
    <HStack
      gap="4"
      align="end"
      style={{
        maxWidth: 556,
      }}
    >
      <Input label="Sporingsnummer" style={{ width: "100%" }} />
      <Button size="large">Spor</Button>
    </HStack>
  ),
};

export const FormWithErrorsOnSubmit: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks -- It's ok
    const [errors, setErrors] = useState<Record<string, string>>({});
    return (
      <VStack gap="16" asChild>
        <form
          lang="en"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const newErrors: Record<string, string> = {};
            for (const [key, value] of formData) {
              if (!value) {
                newErrors[key] = `${key} is required`;
              }
            }
            setErrors(newErrors);
          }}
        >
          <p>Fields without input will give an error</p>
          <Input errorMessage={errors.One} label="One" name="One" />
          <Input errorMessage={errors.Two} label="Two" name="Two" />
          <Input errorMessage={errors.Three} label="Three" name="Three" />
          <VStack gap="4">
            <Button type="submit">Submit</Button>
            <Button
              variant="secondary-outline"
              onClick={() => {
                setErrors({});
              }}
              type="reset"
            >
              Reset
            </Button>
          </VStack>
        </form>
      </VStack>
    );
  },
};
