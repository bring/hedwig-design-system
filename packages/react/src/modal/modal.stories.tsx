/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useRef } from "react";
import { Button } from "../button";
import { HStack } from "../layout";
import { Modal } from ".";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;
export const Preview: Story = {
  tags: ["!dev"],
  render: function Render(args) {
    const modalRef = useRef<HTMLDialogElement>(null);
    const onMainAction = () => modalRef.current?.close();

    return (
      <>
        <Button onClick={() => modalRef.current?.showModal()}>Open Modal</Button>
        <Modal ref={modalRef} {...args}>
          <Modal.Header>Case registered</Modal.Header>
          <Modal.Content>
            <p>
              Your case has been registered. Reference number: #123456 something about the
              consequences.
            </p>
          </Modal.Content>
          <Modal.Footer>
            <HStack gap="16" wrap>
              <Button onClick={onMainAction}>OK</Button>
            </HStack>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
} satisfies Story;
