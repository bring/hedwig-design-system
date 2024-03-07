/* eslint-disable import/no-extraneous-dependencies -- storybook story */
/* eslint-disable react-hooks/rules-of-hooks -- it's ok */
import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { StyledHtml } from "../styled-html";
import { AutoAnimateHeight } from "./auto-animate-height";
import { ShowMoreButton } from ".";

const meta: Meta<typeof ShowMoreButton> = {
  title: "Show more",
  component: ShowMoreButton,
};

export default meta;

type Story = StoryObj<typeof ShowMoreButton>;

export const Default: Story = {
  args: {
    text: "Vis flere",
    onClick: () => {
      // eslint-disable-next-line no-alert -- It's an example
      alert("Clicked");
    },
  },
};

export const ShowMoreShowLess: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const elements = Array.from({ length: expanded ? 40 : 3 }, (_, i) => (
      <li key={i}>Hallo {i}</li>
    ));
    return (
      <div>
        <div
          style={{
            height: 1400,
            background: "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
          }}
        />
        <StyledHtml ref={ref}>
          <ul>{elements}</ul>
        </StyledHtml>
        <ShowMoreButton
          expanded={expanded}
          onClick={() => {
            // Using flushSync to ensure the scrollIntoView is called after the state is updated
            flushSync(() => {
              setExpanded((prev) => !prev);
            });
            if (expanded) {
              ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
          }}
          style={{ marginTop: "var(--hds-spacing-medium-2)" }}
          text={expanded ? "Vis færre hendelser" : "Vis flere hendelser"}
        />
        <div style={{ background: "#aaa", height: 1400 }} />
      </div>
    );
  },
};

export const AnimatedShowMoreShowLess: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const elements = Array.from({ length: expanded ? 40 : 3 }, (_, i) => (
      <li key={i}>Hallo {Math.random()}</li>
    ));
    return (
      <div>
        <div
          style={{
            height: 1400,
            background: "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
          }}
        />
        <StyledHtml ref={ref}>
          <AutoAnimateHeight animationDuration="normal">
            <ul>{elements}</ul>
          </AutoAnimateHeight>
        </StyledHtml>
        <ShowMoreButton
          expanded={expanded}
          onClick={() => {
            // Using flushSync to ensure the scrollIntoView is called after the state is updated
            flushSync(() => {
              setExpanded((prev) => !prev);
            });
            if (expanded) {
              setTimeout(() => {
                ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
              }, 300); // Wait for the animation to finish
            }
          }}
          style={{ marginTop: "var(--hds-spacing-medium-2)" }}
          text={expanded ? "Vis færre hendelser" : "Vis flere hendelser"}
        />
        <div
          style={{
            height: 1400,
            background: "linear-gradient(to top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
          }}
        />
      </div>
    );
  },
};
