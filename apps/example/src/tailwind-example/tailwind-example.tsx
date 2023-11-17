import { Link } from "@postenbring/hedwig-react";
import "./tailwind.css";

export function TailwindExample() {
  return (
    <div className="hds-theme-posten">
      <div className="p-[64px]">
        <div className="bg-lighter rounded p-medium-3">
          <h2 className="text-h1 text-signature">Tittle</h2>
          <p className="text-body mb-medium-2">Inside some kinda card</p>
          <Link href="#some-link" size="small">
            With a link to somewhere
          </Link>
        </div>
      </div>
    </div>
  );
}
