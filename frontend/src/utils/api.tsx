import axiosInstance from "./axiosInstance";
import { uidGenerator } from "./uidGenerator";

export function updatePageNameAPI(title: string, pageId: string) {
  axiosInstance.put(`/api/pages/update_page_title/${pageId}/`, {
    title: title,
  });
}

type BlockType = {
  id: string;
  type: string;
  content: string;
  order: number;
  shouldFocus?: boolean;
};

export function createEditableBlock(pageId: string, order: number) {
  const newId = uidGenerator();

  const newBlock: BlockType = {
    id: newId,
    type: "p",
    content: "",
    order: order,
  };

  axiosInstance.post(`api/pages/create_page_block/${pageId}/`, newBlock);

  newBlock["shouldFocus"] = true;

  return newBlock;
}

export async function deleteEditableBlock(pageId: string, blockId: string) {
  await axiosInstance.delete(
    `api/pages/delete_page_block/${pageId}/${blockId}/`
  );
}

export async function updateEditableBlock(
  pageId: string,
  blockId: string,
  newContent: string,
  newType: string
) {
  await axiosInstance.put(`api/pages/update_page_block/${pageId}/${blockId}/`, {
    content: newContent,
    type: newType,
  });
}

export async function deleteCustomPage(pageId: string) {
  await axiosInstance.delete(`api/pages/delete_page/${pageId}/`);
}
