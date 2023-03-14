import React from "react";

type SquareButtonProps = {
  className?: string;
  variant: "primary" | "secondary" | "tertiary";
  type?: "button" | "submit";
  size?: "small" | "medium" | "large" | "fit" | "full";
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
  secondary: "bg-green-500 text-white hover:bg-green-700",
  tertiary: "bg-gray-200 text-black hover:bg-gray-300",
};

export default function SquareButton({
  className = "",
  variant = "primary",
  type = "button",
  size = "full",
  onClick,
  children,
}: SquareButtonProps) {
  return (
    <button
      className={`${className} ${sizeTable[size]} ${variantTable[variant]} cursor-pointer rounded-lg px-4 py-2 text-sm transition duration-200`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
