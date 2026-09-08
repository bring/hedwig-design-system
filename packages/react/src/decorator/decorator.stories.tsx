/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Decorator } from ".";

const meta: Meta<typeof Decorator> = {
  title: "Decorator",
  component: Decorator,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "🚨 PROTOTYPE 🚨 Fetches real header/footer content live from Enonic in the browser " +
          "(the same source kp-decorator's SSR server reads from) — these stories make a real " +
          "network request on load, so they need network access to work.",
      },
    },
  },
  argTypes: {
    brand: {
      control: "radio",
      options: ["posten", "bring"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Decorator>;

const ExampleContent = (
  <div style={{ padding: "3rem", textAlign: "center" }}>
    <h1>This is the consuming app&apos;s content</h1>
    <p>Everything above and below this block is rendered by &lt;Decorator&gt;.</p>
  </div>
);

export const Posten: Story = {
  args: {
    brand: "posten",
    children: ExampleContent,
  },
};

export const Bring: Story = {
  args: {
    brand: "bring",
    children: ExampleContent,
  },
};
