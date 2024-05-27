import "@postenbring/hedwig-css";
import { useId, useState, useRef, useEffect } from "react";
import { Container, DescriptionList, Grid } from "@postenbring/hedwig-react";

function Example() {
  return (
    <div style={{ background: "var(--hds-colors-signature)" }}>
      <Container
        variant="slim"
        style={{ background: "var(--hds-colors-light)", minHeight: "100vh" }}
      >
        <Grid
          style={{
            height: "100vh",
            background: "var(--hds-colors-lighter)",
          }}
          span={{ initial: 8, medium: 6, large: 4 }}
          center
        >
          <Widths />
        </Grid>
      </Container>
    </div>
  );
}

function Widths() {
  const id = useId().replace(":", "").replace(":", "");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [containerWidth, setContainerWidth] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const ref = useRef<HTMLDListElement>(null);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      const container = document.querySelector(`.hds-container:has(#${id})`);
      if (container !== null) {
        setContainerWidth(container.getBoundingClientRect().width);
      }
      if (ref.current !== null) {
        setInnerWidth(ref.current.getBoundingClientRect().width);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [id]);

  return (
    <DescriptionList id={id} ref={ref} variant="horizontal">
      <dt>Window width</dt>
      <dd>{windowWidth}px</dd>
      <dt>Container width</dt>
      <dd>{containerWidth}px</dd>
      <dt>Inner width</dt>
      <dd>{innerWidth}px</dd>
    </DescriptionList>
  );
}

export default Example;

import type { ExampleConfig } from "../..";
export const config: ExampleConfig = {
  breakpointIndicator: "top",
  layout: "none",
  index: 1,
};
