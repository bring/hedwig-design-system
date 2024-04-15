import { StyledHtml } from "@postenbring/hedwig-react";
import { Outlet } from "@remix-run/react";

import styles from "./_layout._docs.module.css";

export default function Layout() {
  return (
    <div>
      <div className="hds-mt-24-32" />
      <StyledHtml className={styles.doc}>
        <Outlet />
      </StyledHtml>
      <div className="hds-mt-48-64" />
    </div>
  );
}
