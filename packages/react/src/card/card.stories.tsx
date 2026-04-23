/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "../link";
import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Preview: Story = {
  tags: ["!dev"],
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
          <Card.BodyHeaderTitle>Cool article</Card.BodyHeaderTitle>
        </Card.BodyHeader>
        <Card.BodyDescription>
          This is a card The card component provides a lot of flexibility.
        </Card.BodyDescription>
        <Card.BodyAction asChild>
          <Link href="#article-1" variant="solid">
            <Card.BodyActionArrow />
            Go to this article
          </Link>
        </Card.BodyAction>
      </Card.Body>
    </Card>
  ),
};
