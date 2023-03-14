import React from "react";

type AuthInputProps = {
  label: string;
  id: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function AuthInput({
  label,
  id,
  type,
  onChange,
}: AuthInputProps) {
  return (
    <div className="w-full py-2">
      <label className="py-2 text-sm font-medium text-black" htmlFor={id}>
        {label}
      </label>
      <input
        className="h-10 w-full rounded-2xl border-2 border-gray-200 pl-2"
        id={id}
        type={type}
        onChange={onChange}
        required
      />
    </div>
  );
}
