import { tinaField } from "tinacms/dist/react";
import {
  PageBlocks,
  PageBlocksBrandSlogan,
  PageBlocksNavCards,
} from "../../../tina/__generated__/types";
import { Card, Grid, Link, StyledHtml } from "@postenbring/hedwig-react";
import { Link as RemixLink } from "@remix-run/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { MDXComponents } from "./mdx-components";

export function Blocks({ blocks }: { blocks: (PageBlocks | null)[] }) {
  return (
    <>
      {blocks.map(function (block, i) {
        if (!block) return null;
        return (
          <div key={i} data-tina-field={tinaField(block)}>
            <Block {...block} />
          </div>
        );
      })}
    </>
  );
}

function Block(block: PageBlocks) {
  switch (block.__typename) {
    case "PageBlocksContent":
      return (
        <StyledHtml className="hds-mt-48-64">
          <TinaMarkdown content={block.content} components={MDXComponents} />
        </StyledHtml>
      );
    case "PageBlocksBrandSlogan":
      return (
        <div className="hds-mt-48-64">
          <BrandSlogan block={block} />
        </div>
      );
    case "PageBlocksNavCards":
      return (
        <div className="hds-mt-48-64">
          <NavCards block={block} />
        </div>
      );
    default:
      return null;
  }
}

function BrandSlogan({ block }: { block: PageBlocksBrandSlogan }) {
  return (
    <Grid span={{ initial: 12, small: 12 }}>
      <h1
        className="hds-text-h1"
        style={{ color: "var(--hds-colors-darker)" }}
        data-tina-field={tinaField(block, "title")}
      >
        {block.title}
      </h1>
      <p
        className="hds-mt-24-32"
        style={{ maxWidth: "var(--hds-breakpoint-small)" }}
        data-tina-field={tinaField(block, "slogan")}
      >
        {block.slogan}{" "}
      </p>
    </Grid>
  );
}

export function NavCards({ block }: { block: PageBlocksNavCards }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "var(--hds-spacing-20-24)",
        gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
      }}
    >
      {block.cards?.map((card, i) => {
        if (!card) return null;

        // Smoother navigation for local links
        const linkElement = card.link.startsWith("http") ? (
          <Link href={card.link} data-tina-field={tinaField(card, "title")}>
            {card.title}
          </Link>
        ) : (
          <Link data-tina-field={tinaField(card, "title")} asChild>
            <RemixLink to={card.link}>{card.title}</RemixLink>
          </Link>
        );

        return (
          <Card key={i} data-tina-field={tinaField(card)}>
            <Card.Media>
              <Card.MediaImg
                src={`https://placedog.net/120${i}/60${i}`}
                style={{ aspectRatio: 16 / 9, objectFit: "cover" }}
              />
            </Card.Media>
            <Card.Body>
              <Card.BodyHeader as="h2">
                <Card.BodyHeaderTitle asChild>{linkElement}</Card.BodyHeaderTitle>
              </Card.BodyHeader>
              {card.description && (
                <Card.BodyDescription data-tina-field={tinaField(card, "description")}>
                  {card.description}
                </Card.BodyDescription>
              )}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
