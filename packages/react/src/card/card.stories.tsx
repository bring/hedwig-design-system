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
        <CardComponent.Body.Header>
          <CardComponent.Body.Header.Overline>Theme</CardComponent.Body.Header.Overline>
          <CardComponent.Body.Header.Title>Article title</CardComponent.Body.Header.Title>
        </CardComponent.Body.Header>
        <CardComponent.Body.Description>Read this cool new article</CardComponent.Body.Description>
        <CardComponent.Body.Action as={Link} href="#article">
          Go to article
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
        <CardComponent.Body.Header>
          <CardComponent.Body.Header.Overline>Theme</CardComponent.Body.Header.Overline>
          <CardComponent.Body.Header.Title>Max width</CardComponent.Body.Header.Title>
        </CardComponent.Body.Header>
        <CardComponent.Body.Description>
          The card will take up available space. You can limit the width if you need by providing
          your own styles.
        </CardComponent.Body.Description>
        <CardComponent.Body.Action as={Link} href="#article">
          Go to article
        </CardComponent.Body.Action>
      </CardComponent.Body>
    </CardComponent>
  ),
};

export const MaxWidthAndArrow: Story = {
  render: (props) => (
    <CardComponent {...props} style={{ maxWidth: "500px" }}>
      <CardComponent.Media>
        <CardComponent.Media.Img alt="posten-bring" src="./posten-bring.jpg" />
      </CardComponent.Media>
      <CardComponent.Body>
        <CardComponent.Body.Header>
          <CardComponent.Body.Header.Overline>Theme</CardComponent.Body.Header.Overline>
          <CardComponent.Body.Header.Title>Max width</CardComponent.Body.Header.Title>
        </CardComponent.Body.Header>
        <CardComponent.Body.Description>
          The card will take up available space. You can limit the width if you need by providing
          your own styles.
        </CardComponent.Body.Description>
        <CardComponent.Body.Action.Arrow href="#article" />
      </CardComponent.Body>
    </CardComponent>
  ),
};
