/* eslint-disable import/no-extraneous-dependencies -- storybook story */
import type { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import { Button } from "../button";
import { Link } from "../link";
import { Message } from "../message";
import { StyledHtml } from "../styled-html";
import { HStack } from "../layout";
import { Modal } from ".";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;
export const Main = {
  render: function Render(args) {
    const modalRef = useRef<HTMLDialogElement>(null);
    const onClose = () => modalRef.current?.close();
    const onMainAction = () => modalRef.current?.close();

    return (
      <>
        <Button onClick={() => modalRef.current?.showModal()}>Open Modal</Button>
        <Modal ref={modalRef} {...args}>
          <Modal.Header>Dialog header</Modal.Header>
          <Modal.Content>
            <p>
              Dialog header Dialog description - a description of what is about to happen and maybe
              something about the consequences.
            </p>
          </Modal.Content>
          <Modal.Footer>
            <HStack gap="16" wrap>
              <Button onClick={onMainAction}>Main action</Button>
              <Button variant="primary-outline" onClick={onClose}>
                Cancel
              </Button>
            </HStack>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
} satisfies Story;

export const ShareParcelModal = {
  render: function Render(args) {
    const modalRef = useRef<HTMLDialogElement>(null);
    const open = window.location.search.includes("viewMode=story");
    return (
      <>
        <Button onClick={() => modalRef.current?.showModal()}>Open Modal</Button>
        <Modal ref={modalRef} {...args} closeOnBackdropClick open={open}>
          <Modal.Header>Legg til pakken</Modal.Header>
          <Modal.Content>
            <StyledHtml>
              For å kunne hente pakken, må du legge den til i appen fra mobilen din.
              <br />
              <br />
              <strong>Viktig!</strong>
              <br />
              Appen må allerede være innstallert på mobilen før du kan legge den til
            </StyledHtml>
          </Modal.Content>
          <Modal.Footer>
            <Button fullWidth="mobile">Legg til pakken i Posten-appen </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
} satisfies Story;

export const MuchContentBelow: Story = {
  render: function Render(args) {
    return (
      <>
        <div
          style={{
            height: 3200,
            background: "linear-gradient(to bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
          }}
        />
        {Main.render(args)}
        <div style={{ height: 1600, background: "deeppink" }} />
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
            <Link variant="solid" asChild>
              <button type="button" onClick={() => modalRef.current?.showModal()}>
                Les mer
              </button>
            </Link>
          </Message.Description>
        </Message>

        <Modal ref={modalRef} {...args}>
          <Modal.Header>Kunne ikke leveres hjem til deg</Modal.Header>

          <Modal.Content asChild>
            <StyledHtml>
              <p>
                Noen ganger kan vi ikke levere pakken til postkassen din, eller utenfor døren. Det
                kan være ulike grunner til dette, for eksempel:
              </p>
              <ul>
                <li>Pakken var for stor for postkassen din</li>
                <li>Det var ikke mulig å sette den utenfor døren din</li>
                <li>Ingen var hjemme</li>
                <li>Døren var ikke merket med navn</li>
                <li>Andre årsaker</li>
              </ul>
              <p>
                Pakken blir videresendt til ditt nærmeste hentested når den ikke kan leveres hjem.
                Den vil vanligvis være klar til henting der etter én til to virkedager.
              </p>
            </StyledHtml>
          </Modal.Content>

          <Modal.Footer>
            <Button fullWidth="mobile" onClick={() => modalRef.current?.close()}>
              Lukk
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
