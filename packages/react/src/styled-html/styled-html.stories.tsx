/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { StyledHtml } from ".";

const meta: Meta<typeof StyledHtml> = {
  title: "Styled Html",
  component: StyledHtml,

  argTypes: {
    size: {
      defaultValue: "default",
      options: ["default", "small"],
      control: {
        type: "radio",
      },
      darkmode: {
        defaultValue: false,
        options: [true, false],
        control: {
          type: "radio",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof StyledHtml>;
export const Preview: Story = {
  tags: ["!dev"],
  args: {
    children: (
      <>
        <h1>Heading</h1>
        <h2>Subheading</h2>

        <p>
          God dag, her er en lenke til <a href="https://www.postenbring.no">Postenbring</a>
        </p>

        <ul>
          <li>Hei</li>
          <li>Hallo</li>
          <li>Hello</li>
        </ul>

        <ol>
          <li>En</li>
          <li>To</li>
          <li>Tre</li>
        </ol>
      </>
    ),
  },
};
