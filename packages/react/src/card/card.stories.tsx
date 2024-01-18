/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../link";
import { Card as CardComponent } from ".";

const meta: Meta<typeof CardComponent> = {
  title: "Card",
  component: CardComponent,
};

export default meta;

type Story = StoryObj<typeof CardComponent>;

export const Card: Story = {
  render: (props) => (
    <CardComponent {...props}>
      <CardComponent.Media>
        <CardComponent.Media.Img alt="posten-bring" src="./posten-bring.jpg" />
      </CardComponent.Media>
      <CardComponent.Body>
        <CardComponent.Body.Overline>Theme</CardComponent.Body.Overline>
        <CardComponent.Body.Title>Article title</CardComponent.Body.Title>
        <CardComponent.Body.Description>Read this cool new article</CardComponent.Body.Description>
        <CardComponent.Body.Action>
          <Link>Go to article</Link>
        </CardComponent.Body.Action>
      </CardComponent.Body>
    </CardComponent>
  ),
};

export const MaxWidth: Story = {
  render: (props) => (
    <CardComponent {...props} style={{ maxWidth: "500px" }}>
      <CardComponent.Media>
        <CardComponent.Media.Img alt="posten-bring" src="./posten-bring.jpg" />
      </CardComponent.Media>
      <CardComponent.Body>
        <CardComponent.Body.Overline>Theme</CardComponent.Body.Overline>
        <CardComponent.Body.Title>Max width</CardComponent.Body.Title>
        <CardComponent.Body.Description>
          The card will take up available space. You can limit the width if you need by providing
          your own styles.
        </CardComponent.Body.Description>
        <CardComponent.Body.Action>
          <Link>Go to article</Link>
        </CardComponent.Body.Action>
      </CardComponent.Body>
    </CardComponent>
  ),
};
