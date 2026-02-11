import "@postenbring/hedwig-css";
import { Link, Button, VStack } from "@postenbring/hedwig-react";

function Example() {
  return (
    <VStack gap="24">
      <Button asChild>
        <a href="https://www.posten.no" target="_blank" rel="noopener noreferrer">
          A link that looks like a button
        </a>
      </Button>
      <Link asChild>
        <button onClick={() => alert("Button clicked!")}>A button that looks like a link</button>
      </Link>
    </VStack>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  index: 0,
  description: `<p>Use the <code>asChild</code> prop when you want control over the semanticly rendered element.</p>
  <p>Buttons and links are common use cases for this.</p>
  <ul>
    <li>If the action navigates the user a <code>a</code> tag with a <code>href</code> is preferable</li>
    <li><code>a</code> tags should never be used if the action does not navigate the user and/or you don't have a <code>href</code></li>
  </ul>
  <br />
  <a href="https://www.designsystemet.no/grunnleggende/for-utviklere/komposisjon" target="_blank">Read more about <code>asChild</code> over at Digdir Designsystemet ↗</a>
  `,
};
