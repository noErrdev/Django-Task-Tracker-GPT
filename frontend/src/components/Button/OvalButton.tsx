import React from "react";

type OvalButtonProps = {
  className?: string;
  variant: "primary" | "secondary" | "tertiary";
  type?: "button" | "submit";
  size?: "small" | "medium" | "large" | "full";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | (() => void);
  children: React.ReactNode;
};

const sizeTable = {
  full: "w-full",
  fit: "w-fit",
  large: "w-56",
  medium: "w-46",
  small: "w-36",
};

const variantTable = {
  primary: "bg-blue-600 text-white hover:bg-blue-800",
  secondary: "bg-green-500 text-white hover:bg-green-600",
  tertiary: "border border-black hover:bg-black hover:text-white",
};

export default function OvalButton({
  className = "",
  variant = "primary",
  type = "button",
  size = "full",
  onClick,
  children,
}: OvalButtonProps) {
  return (
    <button
      className={`${className} ${sizeTable[size]} ${variantTable[variant]} my-3 rounded-3xl py-3 text-sm font-medium duration-200 lg:py-2`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
