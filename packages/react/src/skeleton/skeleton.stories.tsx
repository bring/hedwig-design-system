/* eslint-disable react-hooks/rules-of-hooks -- storybook story */
/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { StyledHtml } from "../styled-html";
import { Card } from "../card";
import { CardStory } from "../card/card.stories";
import { PrimaryButton } from "../button";
import { HStack, VStack } from "../layout";
import { Skeleton } from ".";

const meta: Meta<typeof Skeleton> = {
  title: "Skeleton",
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <VStack gap="8">
      <Skeleton variant="circle">
        <div style={{ height: "6rem", width: "6rem", background: "deeppink" }}>Avatar</div>
      </Skeleton>
      <div>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="80%" />
      </div>
    </VStack>
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
          <Card.BodyHeader as="h2">
            <Card.BodyHeaderOverline asChild>
              <Skeleton>Theme</Skeleton>
            </Card.BodyHeaderOverline>
            <Card.BodyHeaderTitle asChild>
              <Skeleton>Cool article</Skeleton>
            </Card.BodyHeaderTitle>
          </Card.BodyHeader>
          <Card.BodyDescription>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" width="80%" />
          </Card.BodyDescription>
          <Card.BodyAction>
            <Skeleton variant="rectangle" height="1em" width="1em" />
          </Card.BodyAction>
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
        <p className="hds-mt-8">Only use greytones, never any red or green colors.</p>
        <HStack className="hds-mt-16" wrap gap="24">
          {card}
          {card}
          {card}
        </HStack>
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
