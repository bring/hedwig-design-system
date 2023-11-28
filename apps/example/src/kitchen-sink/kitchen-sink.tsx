import "@postenbring/hedwig-css/dist/reset.css";
import {
  Box,
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
  Link,
  LinkList,
  Message,
  OrderedList,
  PrimaryButton,
  UnorderedList,
} from "@postenbring/hedwig-react";

export default function KitchenSink() {
  return (
    <>
      <div className="hds-theme-posten">
        <h1>Hei verden</h1>
        <h2>Buttons</h2>
        <PrimaryButton>En knapp</PrimaryButton>
        <h2>Links</h2>
        <Link href="#demo-link" variant="no-underline" size="large">
          En Link
        </Link>
        <h2>Descriptive lists</h2>
        <DescriptionList variant="vertical">
          <DescriptionTerm>Something:</DescriptionTerm>
          <DescriptionDetails>To keep your eyes on 👀, vertically</DescriptionDetails>
        </DescriptionList>
        <DescriptionList variant="horizontal">
          <DescriptionTerm>Something:</DescriptionTerm>
          <DescriptionDetails>To keep your eyes on 👀, horizontally</DescriptionDetails>
        </DescriptionList>
        <div>
          <h2>Lists</h2>
          <UnorderedList>
            <li>Hello</li>
            <li>World</li>
          </UnorderedList>
          <OrderedList>
            <li>Hello</li>
            <li>World</li>
          </OrderedList>
          <LinkList>
            <li>
              <Link href="#demo-link">Link to wherever</Link>
            </li>
            <li>
              <Link href="https://hedwig.posten.no">Hedwig rocks 🪨</Link>
            </li>
          </LinkList>
        </div>

        <section>
          <h2>Box and Message</h2>
          <div
            style={{
              display: "flex",
              maxWidth: 600,
              padding: "var(--hds-spacing-medium-2)",
              flexDirection: "column",
              gap: "var(--hds-spacing-medium-2)",
            }}
          >
            <Box variant="lighter">
              <h3 style={{ margin: 0, font: "var(--hds-typography-body-title)" }}>This is box</h3>
              <p style={{ marginTop: "var(--hds-spacing-small-2)" }}>With some content and stuff</p>
            </Box>
            <Message closeable>
              <Message.Title>This is a message</Message.Title>
            </Message>
            <Message variant="attention">
              <Message.Title>Attention, attention</Message.Title>
              <Message.Description>Will the real slim shady please stand up</Message.Description>
            </Message>
          </div>
        </section>
      </div>
    </>
  );
}
