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
    <CardComponent {...props} as="a" href="#article" style={{ maxWidth: "500px" }}>
      <CardComponent.Media>
        <CardComponent.Media.Img alt="posten-bring" src="./posten-bring.jpg" />
      </CardComponent.Media>
      <CardComponent.Body>
        <CardComponent.Body.Header>
          <CardComponent.Body.Header.Overline>Theme</CardComponent.Body.Header.Overline>
          <CardComponent.Body.Header.Title>Cool article</CardComponent.Body.Header.Title>
        </CardComponent.Body.Header>
        <CardComponent.Body.Description>
          This is a card as an anchor tag. You can also use the hedwig provided <code>Link</code>{" "}
          component. The card component provides a lot of flexibility.
        </CardComponent.Body.Description>
        <CardComponent.Body.Action.Arrow />
      </CardComponent.Body>
    </CardComponent>
  ),
};

export const CardFullWidth: Story = {
  render: (props) => (
    <CardComponent {...props} as="a" href="#article">
      <CardComponent.Media>
        <CardComponent.Media.Img alt="posten-bring" src="./posten-bring.jpg" />
      </CardComponent.Media>
      <CardComponent.Body>
        <CardComponent.Body.Header>
          <CardComponent.Body.Header.Overline>Theme</CardComponent.Body.Header.Overline>
          <CardComponent.Body.Header.Title>Cool article</CardComponent.Body.Header.Title>
        </CardComponent.Body.Header>
        <CardComponent.Body.Description>
          The card will take up all available space by default. It is the consumer&apos;s choice and
          responsibility to limit the width if wanted.
        </CardComponent.Body.Description>
        <CardComponent.Body.Action.Arrow />
      </CardComponent.Body>
    </CardComponent>
  ),
};

export const CardWithLink: Story = {
  render: (props) => (
    <CardComponent {...props} style={{ maxWidth: "500px" }}>
      <CardComponent.Media>
        <CardComponent.Media.Img alt="posten-bring" src="./posten-bring.jpg" />
      </CardComponent.Media>
      <CardComponent.Body>
        <CardComponent.Body.Header>
          <CardComponent.Body.Header.Overline>Theme</CardComponent.Body.Header.Overline>
          <CardComponent.Body.Header.Title>Card with Hedwig Link</CardComponent.Body.Header.Title>
        </CardComponent.Body.Header>
        <CardComponent.Body.Description>
          This card is contains a link but is not a link itself.
        </CardComponent.Body.Description>
        <CardComponent.Body.Action as={Link} href="#article">
          Go to article
        </CardComponent.Body.Action>
      </CardComponent.Body>
    </CardComponent>
  ),
};
