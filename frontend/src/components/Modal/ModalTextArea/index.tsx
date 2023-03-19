import React from "react";

type ModalTextAreaProps = {
  label: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function ModalTextArea({
  label,
  id,
  onChange,
}: ModalTextAreaProps) {
  return (
    <div className="mb-2 w-full">
      <label className=" text-sm font-semibold" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="mt-1 h-20 w-full rounded-md border border-gray-300 pl-2 text-sm outline-none focus:border-gray-500"
        id={id}
        onChange={onChange}
      />
    </div>
  );
}
