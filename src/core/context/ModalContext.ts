import { createContext } from "react";

type TypeModalContext = {
  isOpen: boolean;
  toggle(): void;
  confirmationEvent: any;
  setConfirmationEvent(event: any): void;
};

export const ModalContext = createContext<TypeModalContext>(
  {} as TypeModalContext
);
