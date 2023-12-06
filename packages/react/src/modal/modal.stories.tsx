/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import { PrimaryButton } from "../button";
import { Link } from "../link";
import { Message } from "../message";
import { UnorderedList } from "../list";
import { Modal } from ".";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;
export const Main: Story = {
  render: function Render(args) {
    const modalRef = useRef<HTMLDialogElement>(null);

    return (
      <>
        <PrimaryButton onClick={() => modalRef.current?.showModal()}>Open Modal</PrimaryButton>
        <Modal ref={modalRef} {...args}>
          <Modal.Header>Dialog header</Modal.Header>
          <p>
            Dialog header Dialog description - a description of what is about to happen and maybe
            something about the consequences.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <PrimaryButton>Main action</PrimaryButton>
            <PrimaryButton fill="outlined" onClick={() => modalRef.current?.close()}>
              Cancel
            </PrimaryButton>
          </div>
        </Modal>
      </>
    );
  },
};

export const AsAReadMore: Story = {
  name: "As a read more",
  render: function Render(args) {
    const modalRef = useRef<HTMLDialogElement>(null);

    return (
      <>
        <Message variant="attention">
          <Message.Title>Kunne ikke leveres hjem</Message.Title>
          <Message.Description>
            Vi møtte på utfordringer da vi skulle levere pakken hjem til deg. Derfor har vi sendt
            den til ditt nærmeste hentested.{" "}
            <Link as="button" onClick={() => modalRef.current?.showModal()} variant="solid">
              Les mer
            </Link>
          </Message.Description>
        </Message>

        <Modal ref={modalRef} {...args}>
          <Modal.Header>Kunne ikke leveres hjem til deg</Modal.Header>

          <div>
            <p>
              Noen ganger kan vi ikke levere pakken til postkassen din, eller utenfor døren. Det kan
              være ulike grunner til dette, for eksempel:
            </p>
            <UnorderedList>
              <li>Pakken var for stor for postkassen din</li>
              <li>Det var ikke mulig å sette den utenfor døren din</li>
              <li>Ingen var hjemme</li>
              <li>Døren var ikke merket med navn</li>
              <li>Andre årsaker</li>
            </UnorderedList>
            <p>
              Pakken blir videresendt til ditt nærmeste hentested når den ikke kan leveres hjem. Den
              vil vanligvis være klar til henting der etter én til to virkedager.
            </p>
          </div>

          <PrimaryButton fullWidth="mobile" onClick={() => modalRef.current?.close()}>
            Lukk
          </PrimaryButton>
        </Modal>
      </>
    );
  },
};
