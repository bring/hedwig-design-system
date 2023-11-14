import { PrimaryButton, Link } from "@postenbring/hedwig-react";

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
      </div>
    </>
  );
}

export default ReactComponentsKitchenSink;
