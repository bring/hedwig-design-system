import { forwardRef, useRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname/index.mjs";
import { Box } from "../box/box";
import type { OverridableComponent } from "../utils";
import { useMergeRefs } from "../utils";

export interface ModalProps extends React.HTMLAttributes<HTMLDialogElement> {
  children: React.ReactNode;
}

/**
 * # 🚨 WORK IN PROGRESS 🚨
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

export const ModalHeader: OverridableComponent<object, HTMLParagraphElement> = forwardRef(
  ({ as: Component = "h1", className, ...rest }, ref) => {
    return (
      <Component
        className={clsx("hds-modal__header", className as undefined)}
        ref={ref}
        {...rest}
      />
    );
  },
);
ModalHeader.displayName = "ModalHeader";
