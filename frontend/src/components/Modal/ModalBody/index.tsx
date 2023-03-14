import React from "react";

type ModalBodyProps = {
  children: React.ReactNode;
};

export default function ModalBody({ children }: ModalBodyProps) {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50 p-2">
      {children}
    </div>
  );
}
