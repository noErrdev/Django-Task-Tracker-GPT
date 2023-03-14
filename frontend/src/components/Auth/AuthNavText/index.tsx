import React from "react";

type AuthNavTextProps = {
  text: string;
  navText: string;
  onClick: () => void;
};

export default function AuthNavText({
  text,
  navText,
  onClick,
}: AuthNavTextProps) {
  return (
    <div className="w-full">
      <h1 className="mt-2 text-slate-700">
        {text}{" "}
        <span
          className="cursor-pointer text-blue-600 hover:underline"
          onClick={onClick}
        >
          {navText}
        </span>
      </h1>
    </div>
  );
}
