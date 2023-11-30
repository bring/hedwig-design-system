/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import { PrimaryButton } from "../button";
import { Modal } from ".";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  render: function Render(args) {
    const modalRef = useRef<HTMLDialogElement>(null);

    return (
      <>
        <PrimaryButton onClick={() => modalRef.current?.showModal()}>Open Modal</PrimaryButton>
        <Modal ref={modalRef} {...args} />
      </>
    );
  },
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;
export const Main: Story = {
  args: {
    children: <>Hello, world</>,
  },
};
