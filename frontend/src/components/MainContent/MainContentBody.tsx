import React from "react";

type MainContentBodyProps = {
  children: React.ReactNode;
};

export default function MainContentBody({ children }: MainContentBodyProps) {
  return <div className="min-h-screen w-full max-w-5xl">{children}</div>;
}
