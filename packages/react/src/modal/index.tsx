import "@postenbring/hedwig-css/dist/fonts.css";
import "@postenbring/hedwig-css/dist/tokens.css";
import "@postenbring/hedwig-css/dist/body.css";

import "@postenbring/hedwig-css/dist/box.css";
import "@postenbring/hedwig-css/dist/modal.css";

import { Modal, ModalHeader } from "./modal";

const ModalComponent = Modal as typeof Modal & {
  Header: typeof ModalHeader;
};
ModalComponent.Header = ModalHeader;

export { ModalComponent as Modal };
export type * from "./modal";
