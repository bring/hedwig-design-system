import "@postenbring/hedwig-css/dist/fonts.css";
import "@postenbring/hedwig-css/dist/tokens.css";
import "@postenbring/hedwig-css/dist/base.css";

import "@postenbring/hedwig-css/dist/box.css";
import "@postenbring/hedwig-css/dist/modal.css";

import { Modal, ModalHeader } from "./modal";

const ModalComponent = Modal as typeof Modal & {
  Header: typeof ModalHeader;
};

ModalComponent.Header = ModalHeader;

ModalComponent.Header.displayName = "Modal";

export { ModalComponent as Modal, ModalHeader };
