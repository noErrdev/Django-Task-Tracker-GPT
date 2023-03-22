import React from "react";
import ContentEditable from "react-contenteditable";
import CommandDropDown from "../DropDownMenu/CommandDropDown";
import {
  createEditableBlock,
  deleteEditableBlock,
  updateEditableBlock,
} from "../../utils/api";

interface EditableBlockProps {
  id: string;
  type: string;
  content: string;
  shouldFocus: boolean | undefined;
  setBlocks: React.Dispatch<React.SetStateAction<any>>;
  pageId: string;
  order: number;
}

const typeTable: any = {
  p: "",
  h1: "text-3xl font-bold",
  h2: "text-2xl font-semibold",
  h3: "text-lg font-medium",
};

export default function EditableBlockItem({
  id,
  type = "p",
  content = "",
  setBlocks,
  shouldFocus = false,
  pageId,
  order,
}: EditableBlockProps) {
  const blockContentRef = React.useRef(content);
  const [openDropDown, setOpenDropDown] = React.useState(false);
  const typingTimerRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (shouldFocus) {
      document.getElementById(id)?.focus();
    }
  }, []);

  const handleChange = (evt: any) => {
    blockContentRef.current = evt.target.value;
    if (
      blockContentRef.current.startsWith("/") &&
      blockContentRef.current.length === 1
    ) {
      setOpenDropDown(true);
    } else {
      setOpenDropDown(false);
    }

    // Update the content to the server
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    typingTimerRef.current = setTimeout(() => {
      updateEditableBlock(pageId, id, blockContentRef.current, type);
    }, 1000);
  };

  const handleKeyDown = async (event: any) => {
    if (event.key === "Backspace" && blockContentRef.current === "") {
      setBlocks((prev: any) => {
        if (prev.length === 1) {
          return prev;
        } else {
          deleteEditableBlock(pageId, id);
          return prev.filter((block: any) => block.id !== id);
        }
      });
    } else if (event.key === "Enter") {
      event.preventDefault();
      const newBlock = createEditableBlock(pageId, order + 1);
      setBlocks((prev: any) => {
        const index = prev.findIndex((block: any) => block.id === id);
        return [
          ...prev.slice(0, index + 1),
          newBlock,
          ...prev.slice(index + 1),
        ];
      });
    }
  };

  return (
    <div className="relative">
      <ContentEditable
        id={id}
        html={blockContentRef.current}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={`${typeTable[type]} w-full rounded-md py-2 pl-2 outline-none hover:bg-gray-200 focus:bg-gray-200`}
      />
      <CommandDropDown
        id={id}
        isOpen={openDropDown}
        setOpenDropDown={setOpenDropDown}
        setBlocks={setBlocks}
      />
    </div>
  );
}
