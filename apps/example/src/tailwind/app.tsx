import "./tailwind.css";
import { Link } from "@postenbring/hedwig-react";

function FontGallery() {
  return (
    <div className="flex flex-col gap-small-4">
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

export default function TailwindExample() {
  return (
    <div>
      <div className="p-large-2">
        <div className="bg-lighter rounded p-medium-3">
          <h2 className="text-h1 text-signature">Title</h2>
          <p className="text-body mb-medium-2">Inside some kinda card</p>
          <Link href="#some-link" size="small">
            With a link to somewhere
          </Link>
        </div>
      </div>

      <div className="p-large-1 flex flex-row gap-small-4">
        <div>
          <h2 className="bg-signature text-ui-white p-small-2 font-medium">Posten</h2>
          <FontGallery />
        </div>
        <div className="hds-theme-bring">
          <h2 className="bg-signature text-ui-black p-small-2 font-medium">Bring</h2>
          <FontGallery />
        </div>
      </div>
    </div>
  );
}
