import { Container, StyledHtml } from "@postenbring/hedwig-react";
import { Outlet } from "@remix-run/react";

import styles from "./_doc.module.css";

export default function Layout() {
  return (
    <Container>
      <div className="hds-mt-48-64" />
      <StyledHtml className={styles.doc}>
        <Outlet />
      </StyledHtml>
      <div className="hds-mt-48-64" />
    </Container>
  );
}
