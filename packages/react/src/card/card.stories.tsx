/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Preview: Story = {
  render: (props) => (
    <Card {...props} as="div" style={{ maxWidth: "500px", ...props.style }}>
      <Card.Media style={{ width: "100%" }}>
        <Card.MediaImg
          style={{ width: "100%", display: "block", aspectRatio: 16 / 9 }}
          alt="posten-bring"
          src="./posten-bring.jpg"
        />
      </Card.Media>
      <Card.Body>
        <Card.BodyHeader as="h2">
          <Card.BodyHeaderOverline>Theme</Card.BodyHeaderOverline>
          <Card.BodyHeaderTitle asChild>
            <a href="#article">Cool article</a>
          </Card.BodyHeaderTitle>
        </Card.BodyHeader>
        <Card.BodyDescription>
          This is a card which acts as a giant link. You can also use the hedwig provided{" "}
          <code>Link</code> component, or a link component from your routing library. The link
          component of your choice should be set with the <code>as</code> property on the body
          header title. The card component provides a lot of flexibility.
        </Card.BodyDescription>
        <Card.BodyActionArrow />
      </Card.Body>
    </Card>
  ),
};
