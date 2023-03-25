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
      className="shadow-full mx-2 flex w-full max-w-lg flex-col items-center rounded-xl border p-12 md:p-24"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
