"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface ModalContextType {
  showRegisterModal: boolean;
  showLoginModal: boolean;
  setShowRegisterModal: (value: boolean) => void;
  setShowLoginModal: (value: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        showRegisterModal,
        showLoginModal,
        setShowRegisterModal,
        setShowLoginModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
}
