import { forwardRef, useEffect, useRef } from "react";
import { clsx } from "@postenbring/hedwig-css/typed-classname";
import { Slot } from "@radix-ui/react-slot";
import { Box } from "../box/box";
import { useMergeRefs } from "../utils/utils";

interface ModalHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}
export const ModalHeader = forwardRef<HTMLHeadingElement, ModalHeaderProps>(
  ({ asChild, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "h1";
    return (
      <Component
        className={clsx("hds-modal__header", className as undefined)}
        ref={ref}
        {...rest}
      />
    );
  },
);
ModalHeader.displayName = "Modal.Header";

interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}
export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ asChild, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component
        className={clsx("hds-modal__content", className as undefined)}
        ref={ref}
        {...rest}
      />
    );
  },
);
ModalContent.displayName = "Modal.Content";

interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * @default false
   */
  asChild?: boolean;
}
export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ asChild, className, ...rest }, ref) => {
    const Component = asChild ? Slot : "footer";
    return (
      <Component
        className={clsx("hds-modal__footer", className as undefined)}
        ref={ref}
        {...rest}
      />
    );
  },
);
ModalFooter.displayName = "Modal.Footer";

export interface ModalProps extends React.HTMLAttributes<HTMLDialogElement> {
  children: React.ReactNode;

  /**
   * Controls the open state of the modal
   */
  open?: boolean;

  /**
   * Whether to close when clicking on the backdrop.
   */
  closeOnBackdropClick?: boolean;
}

/**
 * A modal dialog is a window that forces the user to interact with it before they can return to other parts of the application.
 *
 * Uses the native [`dialog`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element.
 *
 * @example
 * ```tsx
 *   const modalRef = useRef<HTMLDialogElement>(null);
 *   const onClose = () => modalRef.current?.close();
 *
 *   return (
 *     <>
 *       <PrimaryButton onClick={() => modalRef.current?.showModal()}>Open Modal</PrimaryButton>
 *       <Modal ref={modalRef}>
 *         <Modal.Header>Dialog header</Modal.Header>
 *         <Modal.Content>
 *           <p>
 *             Dialog header Dialog description - a description of what is about to happen and maybe
 *             something about the consequences.
 *           </p>
 *         </Modal.Content>
 *         <Modal.Footer>
 *           <HStack gap="16" wrap>
 *             <PrimaryButton onClick={onMainAction}>Main action</PrimaryButton>
 *             <PrimaryButton fill="outline" onClick={onClose}>
 *               Cancel
 *             </PrimaryButton>
 *           </HStack>
 *         </Modal.Footer>
 *       </Modal>
 *     </>
 *   );
 * ```
 */
export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  ({ children, className, open, closeOnBackdropClick, onClick, ...rest }, ref) => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const mergedRef = useMergeRefs([modalRef, ref]);

    // The X close button that comes from the `Box` component
    function onCloseButtonClick() {
      modalRef.current?.close();
      return false;
    }

    // No scroll when modal is open
    useScrollLock(modalRef, "hds-modal-scroll-lock");

    // `open` prop
    useEffect(() => {
      if (modalRef.current && open !== undefined) {
        if (open && !modalRef.current.open) {
          modalRef.current.showModal();
        } else if (!open && modalRef.current.open) {
          modalRef.current.close();
        }
      }
    }, [modalRef, open]);

    function onDialogClick(e: React.MouseEvent<HTMLElement>) {
      if (closeOnBackdropClick && e.target === modalRef.current) {
        modalRef.current.close();
      }
      onClick?.(e as React.MouseEvent<HTMLDialogElement>);
    }

    return (
      <Box
        asChild
        className={clsx("hds-modal", className as undefined)}
        closeable
        onClick={onDialogClick}
        onClose={onCloseButtonClick}
        variant="white"
      >
        <dialog ref={mergedRef} {...rest}>
          {children}
        </dialog>
      </Box>
    );
  },
) as ModalType;
Modal.displayName = "Modal";

type ModalType = ReturnType<typeof forwardRef<HTMLDialogElement, ModalProps>> & {
  Header: typeof ModalHeader;
  Content: typeof ModalContent;
  Footer: typeof ModalFooter;
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

function useScrollLock(modalRef: React.RefObject<HTMLDialogElement>, bodyClass: string) {
  useEffect(() => {
    if (!modalRef.current) return;
    if (modalRef.current.open) document.body.classList.add(bodyClass);

    const observer = new MutationObserver(() => {
      if (modalRef.current?.open) document.body.classList.add(bodyClass);
      else document.body.classList.remove(bodyClass);
    });
    observer.observe(modalRef.current, {
      attributes: true,
      attributeFilter: ["open"],
    });
    return () => {
      observer.disconnect();
      document.body.classList.remove(bodyClass);
    };
  }, [bodyClass, modalRef]);
}
