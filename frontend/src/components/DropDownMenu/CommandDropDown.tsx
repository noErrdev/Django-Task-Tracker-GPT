import React from "react";

type CommandDropDownProps = {
  id: string;
  isOpen: boolean;
  setBlocks: React.Dispatch<React.SetStateAction<any>>;
  setOpenDropDown: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CommandDropDown({
  id,
  isOpen,
  setBlocks,
  setOpenDropDown,
}: CommandDropDownProps) {
  function changeTypeHandler(newType: string) {
    setBlocks((prev: any) => {
      const index = prev.findIndex((block: any) => block.id === id);
      const newBlocks = [...prev];
      newBlocks[index].block_type = newType;
      newBlocks[index].block_content = "";
      return newBlocks;
    });
    setOpenDropDown(false);
  }

  return (
    <div
      className={`absolute left-0 top-10 z-10 rounded-lg border bg-white text-xs shadow-lg transition duration-200 ease-in-out
      ${isOpen ? "block" : "hidden"} `}
    >
      <h1
        className="cursor-pointer whitespace-nowrap p-3 text-lg text-gray-700 duration-150 hover:bg-gray-200"
        onClick={() => changeTypeHandler("h1")}
      >
        Heading 1
      </h1>
      <h1
        className="cursor-pointer whitespace-nowrap p-3 text-base text-gray-700 duration-150 hover:bg-gray-200"
        onClick={() => changeTypeHandler("h2")}
      >
        Heading 2
      </h1>
      <h1
        className="cursor-pointer whitespace-nowrap p-3 text-sm text-gray-700 duration-150 hover:bg-gray-200"
        onClick={() => changeTypeHandler("h3")}
      >
        Heading 3
      </h1>
      <h1
        className="cursor-pointer whitespace-nowrap p-3 text-xs text-gray-700 duration-150 hover:bg-gray-200"
        onClick={() => changeTypeHandler("p")}
      >
        paragraph
      </h1>
    </div>
  );
}
