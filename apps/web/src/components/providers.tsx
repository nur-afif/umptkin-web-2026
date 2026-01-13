"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "@/utils/orpc";

import { Toaster } from "./ui/sonner";
import { ModalProvider } from "@/contexts/modal-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        {children}
      </ModalProvider>
      <ReactQueryDevtools />
      <Toaster richColors />
    </QueryClientProvider>
  );
}
