import React from "react";

type ModalTextAreaProps = {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function ModalTextArea({
  label,
  id,
  value,
  onChange,
}: ModalTextAreaProps) {
  return (
    <div className="w-full">
      <label className=" text-sm font-semibold" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="mt-1 h-20 w-full rounded-md border border-gray-300 p-2 text-sm outline-none focus:border-gray-500"
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
