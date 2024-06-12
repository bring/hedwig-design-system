import "@postenbring/hedwig-css";
import "./style.css";

import { VStack } from "@postenbring/hedwig-react";
import { Outlet } from "@remix-run/react";

import { LayoutFooter } from "./footer";
import { LayoutHeader } from "./header";

export default function Layout() {
  return (
    <VStack style={{ minHeight: "100vh" }}>
      <LayoutHeader />
      <div style={{ flexGrow: 1 }} className="docs-container">
        <Outlet />
      </div>
      <div className="hds-mt-80-120" />
      <LayoutFooter />
    </VStack>
  );
}
