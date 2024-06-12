/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect, useRef, useId } from "react";
import { Container, Grid } from "..";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Preview: Story = {
  render: (args) => (
    <div style={{ background: "#f8cb9c" }}>
      <Container {...args} style={{ background: "#c1cd8a" }}>
        <Grid
          style={{
            background: "var(--hds-colors-lighter)",
          }}
          span={{ initial: 8, medium: 6, large: 4 }}
          center
        >
          <Widths />
        </Grid>
      </Container>
    </div>
  ),
};

function Widths() {
  const id = useId().replace(":", "").replace(":", "");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [containerWidth, setContainerWidth] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
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
    <div id={id} ref={ref}>
      <p>Window width: {windowWidth}</p>
      <p>Container width: {containerWidth}</p>
      <p>Inner width: {innerWidth}</p>
    </div>
  );
}
