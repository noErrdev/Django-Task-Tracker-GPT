import React from "react";

type AuthContainerProps = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function AuthContainer({
  children,
  onSubmit,
}: AuthContainerProps) {
  return (
    <form
      className="shadow-full flex w-full max-w-lg flex-col items-center rounded-xl border p-24"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
