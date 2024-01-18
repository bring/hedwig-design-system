/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect, useRef, useId } from "react";
import { Container } from "..";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  render: (args) => (
    <Container {...args} style={{ background: "var(--hds-ui-colors-warning-yellow)" }}>
      <div style={{ background: "var(--hds-ui-colors-warning-yellow-light-fill)" }}>
        <Widths />
      </div>
    </Container>
  ),
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {};

export const Slim: Story = {
  args: {
    variant: "slim",
  },
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
  }, []);

  return (
    <div id={id} ref={ref}>
      <p>Window width: {windowWidth}</p>
      <p>Container width: {containerWidth}</p>
      <p>Inner width: {innerWidth}</p>
    </div>
  );
}
