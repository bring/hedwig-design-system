import { Skeleton, StyledHtml } from "@postenbring/hedwig-react";

function Example() {
  return (
    <StyledHtml aria-hidden>
      <Skeleton variant="text" className="hds-text-h1-display">
        A title is loading
      </Skeleton>
      <Skeleton variant="rectangle">
        <figure style={{ height: 200, aspectRatio: 16 / 9 }} />
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
  );
}

function randomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {};
