import React from "react";

type AuthContainerProps = {
  children: React.ReactNode;
};

export default function AuthContainer({ children }: AuthContainerProps) {
  return (
    <div className="shadow-full flex w-full max-w-lg flex-col items-center rounded-xl border p-24">
      {children}
    </div>
  );
}
