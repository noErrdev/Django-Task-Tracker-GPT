import React from "react";
import MainContent from "../../../components/MainContent/MainContent";
import MainContentBody from "../../../components/MainContent/MainContentBody";
import Divider from "../../../components/Divider/Divider";
import axiosInstance from "../../../utils/axiosInstance";
import EditableBlockItem from "../../../components/EditableBlock/EditableBlockItem";
import ContentEditable from "react-contenteditable";
import { useLocation } from "react-router-dom";
import { updatePageNameAPI, createEditableBlock } from "../../../utils/api";
import LoadingModal from "../../../components/Modal/LoadingModal";
import HorizMenuIcon from "../../../assets/horiz-menu.png";
import DeletePageDropDown from "../../../components/DropDownMenu/DeletePageDropDown";

interface BlockType {
  id: string;
  type: string;
  content: string;
  order: number;
}

export default function CustomPage() {
  let location = useLocation();
  const selfText = React.useRef<string>("");
  const typingTimerRef = React.useRef<any>(null);
  const pageId = location.pathname.split("/")[2];
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [blocks, setBlocks] = React.useState<BlockType[]>([]);
  const [openPageDropDown, setOpenPageDropDown] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    setOpenPageDropDown(false);
    axiosInstance
      .get(`/api/pages/get_page_detail/${pageId}/`)
      .then((res) => {
        selfText.current = res.data.title;
        if (res.data.blocks.length === 0) {
          const newBlock = createEditableBlock(pageId, 0);
          setBlocks([newBlock]);
        } else {
          setBlocks(res.data.blocks);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [pageId]);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") event.preventDefault();
  };

  const handleChange = (evt: any) => {
    selfText.current = evt.target.value;

    // Clear the existing timer if there is one
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    typingTimerRef.current = setTimeout(() => {
      updatePageNameAPI(selfText.current, pageId);
    }, 1000);
  };

  return (
    <MainContent>
      <MainContentBody>
        <div className="relative flex items-center justify-between">
          <ContentEditable
            html={selfText.current}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={`w-full rounded-md py-2 pl-1 text-3xl font-semibold outline-none hover:bg-gray-100 focus:bg-gray-200`}
          />
          <img
            className="h-7 w-7 cursor-pointer"
            src={HorizMenuIcon}
            alt="delete page dropdown"
            onClick={() => setOpenPageDropDown((prev) => !prev)}
          />
          <DeletePageDropDown isOpen={openPageDropDown} pageId={pageId} />
        </div>
        <Divider />
        <h1 className="mb-5 text-xs text-gray-400">
          To create a new block, hit the Enter key. For command, begin the block
          with a forward slash (/).
        </h1>
        {blocks.map((block: any) => (
          <EditableBlockItem
            key={block.id}
            id={block.id}
            type={block.block_type}
            content={block.block_content}
            order={block.order}
            setBlocks={setBlocks}
            shouldFocus={block.shouldFocus}
            pageId={pageId}
          />
        ))}
      </MainContentBody>
      {isLoading ? <LoadingModal /> : null}
    </MainContent>
  );
}
