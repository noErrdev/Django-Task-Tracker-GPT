import React from "react";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-8">
      {children}
    </div>
  );
}
