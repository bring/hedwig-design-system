import { createContext } from "react";

export type AccordionType = "multiple" | "single";

export interface AccordionContextProps {
  variant?: AccordionType;
  openItems: string[];
  toggleOpenItem: (id: string) => void;
  mounted: boolean;
}

export interface AccordionItemContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const AccordionContext = createContext<AccordionContextProps>({
  variant: "multiple",
  mounted: false,
  openItems: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Added default section, without handling
  toggleOpenItem: (id: string) => {
    // default
  },
});

export const AccordionItemContext = createContext<AccordionItemContextProps | null>(null);
