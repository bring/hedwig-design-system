import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
  Link,
  LinkList,
  LinkListItem,
  ListItem,
  OrderedList,
  PrimaryButton,
  UnorderedList,
} from "@postenbring/hedwig-react";

function ReactComponentsKitchenSink() {
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
            <ListItem>Hello</ListItem>
            <ListItem>World</ListItem>
          </UnorderedList>
          <OrderedList>
            <ListItem>Hello</ListItem>
            <ListItem>World</ListItem>
          </OrderedList>
          <LinkList>
            <LinkListItem>
              <Link href="#demo-link">Link to wherever</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="https://hedwig.posten.no">Hedwig rocks 🪨</Link>
            </LinkListItem>
          </LinkList>
        </div>
      </div>
    </>
  );
}

export default ReactComponentsKitchenSink;
