import React from "react";

type ModalInputProps = {
  label: string;
  type: string;
  id: string;
  isRequired: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ModalInput({
  label,
  type,
  id,
  value,
  isRequired = false,
  onChange,
}: ModalInputProps) {
  return (
    <div className="mb-1 w-full">
      <label className="text-sm font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        className="mt-1 h-8 w-full rounded-md border border-gray-300 pl-2 text-sm outline-none focus:border-gray-500"
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={isRequired}
      />
    </div>
  );
}
