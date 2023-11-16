import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
  PrimaryButton,
  Link,
} from "@postenbring/hedwig-react";

function ReactComponentsKitchenSink() {
  return (
    <>
      <div className="hds-theme-posten">
        <h1>Hei verden</h1>
        <PrimaryButton>En knapp</PrimaryButton>
        <br />
        <Link href="#demo-link" variant="no-underline" size="large">
          En Link
        </Link>
        <DescriptionList variant="vertical">
          <DescriptionTerm>Something:</DescriptionTerm>
          <DescriptionDetails>To keep your eyes on 👀, vertically</DescriptionDetails>
        </DescriptionList>
        <DescriptionList variant="horizontal">
          <DescriptionTerm>Something:</DescriptionTerm>
          <DescriptionDetails>To keep your eyes on 👀, horizontally</DescriptionDetails>
        </DescriptionList>
      </div>
    </>
  );
}

export default ReactComponentsKitchenSink;
