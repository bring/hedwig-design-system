/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Message } from ".";

const meta: Meta<typeof Message> = {
  title: "Message",
  component: Message,
  args: {
    children: (
      <>
        <Message.Title>Message header</Message.Title>
        <Message.Description>
          Message header Message description. A more detailed explanation of whats happening, but
          not too long.
        </Message.Description>
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
        <Message.Title>Custom icons</Message.Title>
        <Message.Description>
          Icon is a prop, so you can use whatever you like.
          <button
            onClick={() => {
              rerender((x) => x + 1);
            }}
            type="button"
          >
            Rerender
          </button>
        </Message.Description>
      </Message>
    );
  },
};

export const TitleOnly: Story = {
  args: {
    variant: "attention",
    children: <Message.Title>Message header</Message.Title>,
  },
};

export const DescriptionOnly: Story = {
  args: {
    children: <Message.Description>Message description</Message.Description>,
  },
};

export const LongDescriptionOnly: Story = {
  args: {
    children: (
      <Message.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et dolor id nisl consectetur
        aliquet. Donec euismod, nibh et aliquam tincidunt, nunc urna ultricies
      </Message.Description>
    ),
  },
};
