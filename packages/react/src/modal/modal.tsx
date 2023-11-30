import { forwardRef, useRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import { Box } from "../box/box";
import { useMergeRefs } from "../utils";

export interface ModalProps extends React.HTMLAttributes<HTMLDialogElement> {
  children: React.ReactNode;
}

/**
 * # WORK IN PROGRESS - 🚨 NOT READY 🚨
 */
export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  ({ children, className, ...rest }, ref) => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const mergedRef = useMergeRefs([modalRef, ref]);

    function onClose() {
      modalRef.current?.close();
      return false;
    }

    return (
      <Box
        as="dialog"
        className={clsx("hds-modal", className as undefined)}
        closeable
        onClose={onClose}
        ref={mergedRef}
        variant="white"
        {
          ...(rest as object) /* TODO remove type casting */
        }
      >
        {children}
      </Box>
    );
  },
);
Modal.displayName = "Modal";
