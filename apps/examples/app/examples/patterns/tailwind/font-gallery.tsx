import "@postenbring/hedwig-css";
import "./tailwind.css";

function Example() {
  return (
    <div>
      <div className="p-48 flex flex-row gap-16">
        <div className="hds-theme-posten">
          <h2 className="bg-signature text-ui-white p-8 font-medium">Posten</h2>
          <FontGallery />
        </div>
        <div className="hds-theme-bring">
          <h2 className="bg-signature text-ui-black p-8 font-medium">Bring</h2>
          <FontGallery />
        </div>
      </div>
    </div>
  );
}

function FontGallery() {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <p className="text-h1-display">Display</p>
        <p className="text-h1">Heading 1</p>
        <p className="text-h2">Heading 2</p>
        <p className="text-h3">Heading 3</p>
        <p className="text-body">Body</p>
        <p className="text-body-small">Body small</p>
        <p className="text-technical">Technical</p>
        <p className="text-caption">Caption</p>
      </div>
      <div>
        <p className="text-h3-title">Heading 3 Title</p>
        <p className="text-body-title">Body Title</p>
        <p className="text-body-small-title">Body small Title</p>
        <p className="text-technical-title">Technical Title</p>
        <p className="text-caption-title">Caption Title</p>
      </div>
    </div>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 2,
  layout: "centered",
};
