/* eslint-disable react-hooks/rules-of-hooks -- storybook story */
/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { StyledHtml } from "../styled-html";
import { Card } from "../card";
import { Card as CardStory } from "../card/card.stories";
import { PrimaryButton } from "../button";
import { Skeleton } from ".";

const meta: Meta<typeof Skeleton> = {
  title: "Skeleton",
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--hds-spacing-8)" }}>
      <Skeleton variant="circle">
        <div style={{ height: "6rem", width: "6rem", background: "deeppink" }}>Avatar</div>
      </Skeleton>
      <div>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
      </div>
    </div>
  ),
};

export const LoadingCards: Story = {
  render: () => {
    // @ts-expect-error -- It's ok
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- It really is
    const realCard = CardStory.render!({
      style: { width: "400px" },
    });

    const skeletonCard = (
      <Card
        aria-hidden
        as="div"
        style={{
          width: "400px",
          backgroundColor: "var(--hds-ui-colors-light-grey-fill)",
        }}
      >
        <Card.Media style={{ width: "100%", background: "white" }}>
          <Skeleton variant="rectangle" style={{ width: "100%", aspectRatio: 16 / 9 }} />
        </Card.Media>
        <Card.Body>
          <Card.Body.Header as="h2">
            <Card.Body.Header.Overline as={Skeleton}>Theme</Card.Body.Header.Overline>
            <Card.Body.Header.Title as={Skeleton}>Cool article</Card.Body.Header.Title>
          </Card.Body.Header>
          <Card.Body.Description>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" width="80%" />
          </Card.Body.Description>
          <Card.Body.Action>
            <Skeleton variant="rectangle" height="1em" width="1em" />
          </Card.Body.Action>
        </Card.Body>
      </Card>
    );

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      if (isLoading) {
        setTimeout(
          () => {
            setIsLoading(false);
          },
          randomNumberBetween(2000, 5000),
        );
      }
    }, [isLoading]);

    const card = isLoading ? skeletonCard : realCard;
    return (
      <div>
        <PrimaryButton
          size="small"
          onClick={() => {
            setIsLoading(true);
          }}
        >
          Reload
        </PrimaryButton>
        <p style={{ marginTop: "var(--hds-spacing-8)" }}>
          Only use greytones, never any red or green colors.
        </p>
        <div
          style={{
            marginTop: "var(--hds-spacing-16)",
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--hds-spacing-24)",
          }}
        >
          {card}
          {card}
          {card}
        </div>
      </div>
    );
  },
};

function randomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export const Article: Story = {
  render: () => (
    <StyledHtml aria-hidden>
      <Skeleton variant="text" style={{ font: "var(--hds-typography-h1-display)" }}>
        A title is loading
      </Skeleton>
      <Skeleton variant="rectangle">
        <figure style={{ height: 300, aspectRatio: 16 / 9 }} />
      </Skeleton>
      <Skeleton variant="text" as="h2">
        A subtitle with some more text is loading
      </Skeleton>
      <p>
        <Skeleton variant="text" width={`${randomNumberBetween(75, 90)}%`} />
        <Skeleton variant="text" width={`${randomNumberBetween(75, 90)}%`} />
        <Skeleton variant="text" width={`${randomNumberBetween(25, 60)}%`} />
        <Skeleton variant="text" width={`${randomNumberBetween(45, 80)}%`} />
        <Skeleton variant="text" width={`${randomNumberBetween(75, 90)}%`} />
        <Skeleton variant="text" width={`${randomNumberBetween(75, 90)}%`} />
        <Skeleton variant="text" width={`${randomNumberBetween(75, 90)}%`} />
      </p>

      <Skeleton variant="text" as="h2">
        Another piece of text
      </Skeleton>
      <p>
        <Skeleton variant="text" width={`${randomNumberBetween(75, 90)}%`} />
        <Skeleton variant="text" width={`${randomNumberBetween(75, 90)}%`} />
        <Skeleton variant="text" width={`${randomNumberBetween(25, 60)}%`} />
        <Skeleton variant="text" width={`${randomNumberBetween(45, 80)}%`} />
        <Skeleton variant="text" width={`${randomNumberBetween(75, 90)}%`} />
        <Skeleton variant="text" width={`${randomNumberBetween(75, 90)}%`} />
        <Skeleton variant="text" width={`${randomNumberBetween(75, 90)}%`} />
      </p>
    </StyledHtml>
  ),
};
