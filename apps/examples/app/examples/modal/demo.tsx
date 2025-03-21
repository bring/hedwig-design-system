import "@postenbring/hedwig-css";
import { useRef } from "react";
import { HStack, Modal, Button } from "@postenbring/hedwig-react";

function Example() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const onClose = () => modalRef.current?.close();
  const onMainAction = () => modalRef.current?.close();

  return (
    <>
      <Button onClick={() => modalRef.current?.showModal()}>Open Modal</Button>
      <Modal ref={modalRef}>
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
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </HStack>
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
