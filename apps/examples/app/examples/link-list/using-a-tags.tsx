import "@postenbring/hedwig-css";
import { LinkList } from "@postenbring/hedwig-react";

function Example() {
  return (
    <LinkList>
      <li>
        <a
          target="_blank"
          href="https://www.skatteetaten.no/person/avgifter/kjop-fra-utlandet/"
          rel="noreferrer"
        >
          Skatteetatens sider om kjøp fra utlandet
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.toll.no/no/netthandel/" rel="noreferrer">
          Tolletatens netthandelssider
        </a>
      </li>
      <li>
        <a target="_blank" href="/fortolling/motta-fra-utlandet">
          Fortolling av sendinger fra utlandet
        </a>
      </li>
      <li>
        <a href="/import">Kvittering for betaling av avgifter</a>
      </li>
    </LinkList>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  description: "Unstyled <code>a</code> tags can be passed to the <code>LinkList</code> component.",
};
