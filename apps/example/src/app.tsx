import { Link, LinkList } from "@postenbring/hedwig-react";

export default function App() {
  return (
    <main className="hds-theme-posten">
      <h1>Hedwig Example Apps</h1>
      <LinkList>
        <li>
          <Link href="kitchen-sink">Kitchen Sink - Many components on one page</Link>
        </li>
        <li>
          <Link href="tailwind">Tailwind + React Components</Link>
        </li>
        <li>
          <Link href="css-only">HTML + CSS</Link>
        </li>
      </LinkList>
    </main>
  );
}
