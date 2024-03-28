import { Modal } from "@postenbring/hedwig-react";

function Example() {
  return (
    <Modal open closeOnBackdropClick>
      <Modal.Header>Dialog header</Modal.Header>
      <Modal.Content>
        <p>
          Dialog header Dialog description - a description of what is about to happen and maybe
          something about the consequences.
        </p>
      </Modal.Content>
    </Modal>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  description: "Open modal automatically on page load",
};
