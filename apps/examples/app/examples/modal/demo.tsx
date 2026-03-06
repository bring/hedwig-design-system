import "@postenbring/hedwig-css";
import { useRef } from "react";
import { HStack, Modal, Button } from "@postenbring/hedwig-react";

function Example() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const onMainAction = () => modalRef.current?.close();

  return (
    <>
      <Button onClick={() => modalRef.current?.showModal()}>Open Modal</Button>
      <Modal ref={modalRef}>
        <Modal.Header>Case registered</Modal.Header>
        <Modal.Content>
          <p>Your case has been registered. Reference number: #123456</p>
        </Modal.Content>
        <Modal.Footer>
          <HStack gap="16" wrap>
            <Button onClick={onMainAction}>OK</Button>
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
