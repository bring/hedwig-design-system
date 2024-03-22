/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../checkbox";
import { ErrorMessage } from ".";

const meta: Meta<typeof ErrorMessage> = {
  title: "Form/ErrorMessage",
  component: ErrorMessage,
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    id: "id",
    children: "This is an error message for use with form input components",
  },
};

export const CheckboxWithErrorMessage: Story = {
  args: {
    id: "errorMessageId",
    children: "This checkbox has an error",
  },
  render: (props) => (
    <>
      <Checkbox hasError value="Hello" aria-describedby="errorMessageId">
        Hello
      </Checkbox>
      <ErrorMessage id={props.id}>{props.children}</ErrorMessage>
    </>
  ),
};
