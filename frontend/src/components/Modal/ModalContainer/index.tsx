import React from "react";

type ModalContainerProps = {
  children: React.ReactNode;
};

export default function ModalContainer({ children }: ModalContainerProps) {
  return (
    <div className="flex w-full max-w-md flex-col items-center rounded-xl bg-white p-5">
      {children}
    </div>
  );
}
