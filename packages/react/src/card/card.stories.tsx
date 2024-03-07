/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import { Card as CardComponent } from ".";

const meta: Meta<typeof CardComponent> = {
  title: "Card",
  component: CardComponent,
};

export default meta;

type Story = StoryObj<typeof CardComponent>;

export const Card: Story = {
  render: (props) => (
    <CardComponent {...props} as="div" style={{ maxWidth: "500px" }}>
      <CardComponent.Media>
        <CardComponent.Media.Img alt="posten-bring" src="./posten-bring.jpg" />
      </CardComponent.Media>
      <CardComponent.Body>
        <CardComponent.Body.Header as="h2">
          <CardComponent.Body.Header.Overline>Theme</CardComponent.Body.Header.Overline>
          <CardComponent.Body.Header.Title as="a" href="#article">
            Cool article
          </CardComponent.Body.Header.Title>
        </CardComponent.Body.Header>
        <CardComponent.Body.Description>
          This is a card which acts as a giant link. You can also use the hedwig provided{" "}
          <code>Link</code> component, or a link component from your routing library. The link
          component of your choice should be set with the <code>as</code> property on the body
          header title. The card component provides a lot of flexibility.
        </CardComponent.Body.Description>
        <CardComponent.Body.Action.Arrow />
      </CardComponent.Body>
    </CardComponent>
  ),
};

function Link({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a className={className} href={to}>
      {children}
    </a>
  );
}

export const CardFullWidth: Story = {
  render: (props) => (
    <CardComponent {...props} as="div">
      <CardComponent.Media>
        <CardComponent.Media.Img alt="posten-bring" src="./posten-bring.jpg" />
      </CardComponent.Media>
      <CardComponent.Body>
        <CardComponent.Body.Header as="h2">
          <CardComponent.Body.Header.Overline>Theme</CardComponent.Body.Header.Overline>
          <CardComponent.Body.Header.Title as={Link} to="#article">
            Cool article
          </CardComponent.Body.Header.Title>
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
