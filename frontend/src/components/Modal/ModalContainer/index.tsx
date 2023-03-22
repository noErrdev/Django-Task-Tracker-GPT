import React from "react";

type ModalContainerProps = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function ModalContainer({
  children,
  onSubmit,
}: ModalContainerProps) {
  return (
    <form
      className="flex w-full max-w-md flex-col items-center rounded-xl bg-white p-5"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
