import { createContext } from "react";

export interface AccordionItemContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const AccordionItemContext = createContext<AccordionItemContextProps | null>(null);
