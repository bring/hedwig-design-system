import "@postenbring/hedwig-css";
import { Modal, Button } from "@postenbring/hedwig-react";

function Example() {
  return (
    <>
      <Modal open closeOnBackdropClick>
        <Modal.Header>Dialog header</Modal.Header>
        <Modal.Content>
          <p>
            Dialog header Dialog description - a description of what is about to happen and maybe
            something about the consequences.
          </p>
        </Modal.Content>
      </Modal>

      <Button
        onClick={() => {
          window.location.reload();
        }}
        size="large"
        title="Refresh"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={24}
          height={24}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </Button>
    </>
  );
}

export default Example;

import type { ExampleConfig } from "..";
export const config: ExampleConfig = {
  description: "Open modal automatically on page load",
};
