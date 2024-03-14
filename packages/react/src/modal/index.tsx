import { Modal, ModalHeader, ModalContent, ModalFooter } from "./modal";

const ModalComponent = Modal as typeof Modal & {
  Header: typeof ModalHeader;
  Content: typeof ModalContent;
  Footer: typeof ModalFooter;
};
ModalComponent.Header = ModalHeader;
ModalComponent.Content = ModalContent;
ModalComponent.Footer = ModalFooter;

export { ModalComponent as Modal };
export type * from "./modal";
