import { useRef } from "react";
import { Modal, PrimaryButton } from "@postenbring/hedwig-react";

function Example() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const onClose = () => modalRef.current?.close();
  const onMainAction = () => modalRef.current?.close();

  return (
    <>
      <PrimaryButton onClick={() => modalRef.current?.showModal()}>Open Modal</PrimaryButton>
      <Modal ref={modalRef}>
        <Modal.Header>Dialog header</Modal.Header>
        <Modal.Content>
          <p>
            Dialog header Dialog description - a description of what is about to happen and maybe
            something about the consequences.
          </p>
        </Modal.Content>
        <Modal.Footer style={{ display: "flex", gap: "var(--hds-spacing-16)" }}>
          <PrimaryButton onClick={onMainAction}>Main action</PrimaryButton>
          <PrimaryButton fill="outline" onClick={onClose}>
            Cancel
          </PrimaryButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  index: 0,
  description:
    "Use the native <code>showModal</code> and <code>close</code> methods to open and close the modal.",
};
