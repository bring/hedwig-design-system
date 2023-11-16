import { DD, DL, DT, PrimaryButton, Link } from "@postenbring/hedwig-react";

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
        <DL variant="vertical">
          <DT>Something:</DT>
          <DD>To keep your eyes on 👀, vertically</DD>
        </DL>
        <DL variant="horizontal">
          <DT>Something:</DT>
          <DD>To keep your eyes on 👀, horizontally</DD>
        </DL>
      </div>
    </>
  );
}

export default ReactComponentsKitchenSink;
