/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import { useState } from "react";
import { Message } from ".";

const meta: Meta<typeof Message> = {
  title: "Message",
  component: Message,
  args: {
    children: (
      <>
        <h3 className={clsx("hds-typography-h3", "hds-typography-h3--title")} style={{ margin: 0 }}>
          Message header
        </h3>
        <p>
          Message header Message description. A more detailed explanation of whats happening, but
          not too long.
        </p>
      </>
    ),
  },
  argTypes: {
    variant: {
      options: ["success", "attention", "warning", "neutral"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Message>;
export const Success: Story = {
  args: {
    variant: "success",
  },
};

export const Attention: Story = {
  args: {
    variant: "attention",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
  },
};

export const Neutral: Story = {
  render: function Neutral() {
    const emojis =
      "📮 🌓 👿 📉 😵 😯 🔡 💕 🏴 😖 🐁 🔈 ⏮ ♌️ 💠 🚢 🏓 ⬅️ 🐮 🔞 🏙 🛋 🚜 👜 ⛩ 🍧 ⛺️ 3️⃣ ⚪️ 🐧 🌚 🚚 🐊 📵 🤖 🛄 🛳 ▶️ 🍁 🐇 ⏩ ☪ 👍 💨 🐭 ⚗ 😚 🍝 🍺 🔰 🐶 🔓 🚍 🌰 😺 🌺 ❤️ 📕 ♍️ 🎇 😜 👬 ◼️ 🌄 💬 🖐 ↘️ 📷 ♒️ 🚰 ⚛ 🈁 💿 🕧 ♎️ 😎 🦁 🚷 ⛽️ 😛 📐 🍷 👯 🚖 🔬 👼 🍔 ⛎ 9️⃣ 📲 ♨️ 📛 💆 🎣 🕸 🈚️ ↙️ 😒 💍 ◾️ 🚹";
    const icon = emojis.split(" ")[Math.floor(Math.random() * emojis.split(" ").length)];
    // eslint-disable-next-line react/hook-use-state -- Storybook story
    const [_, rerender] = useState(0);
    return (
      <Message icon={<span style={{ fontSize: 24 }}>{icon}</span>} variant="neutral">
        <h3 className={clsx("hds-typography-h3", "hds-typography-h3--title")} style={{ margin: 0 }}>
          Custom icons
        </h3>
        <p>
          Icon is a prop, so you can use whatever you like.
          <button
            onClick={() => {
              rerender((x) => x + 1);
            }}
            type="button"
          >
            Rerender
          </button>
        </p>
      </Message>
    );
  },
};
