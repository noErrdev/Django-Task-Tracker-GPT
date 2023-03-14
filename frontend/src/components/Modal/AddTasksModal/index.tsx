import React from "react";
import ModalBody from "../ModalBody";
import ModalContainer from "../ModalContainer";
import ModalTitle from "../ModalTitle";
import ModalInput from "../ModalInput";
import SquareButton from "../../Button/SquareButton";

type AddTasksModalProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddTasksModal({ setOpenModal }: AddTasksModalProps) {
  const [name, setName] = React.useState<string>("");

  const handleCreateTask = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    return;
  };

  return (
    <ModalBody>
      <ModalContainer>
        <ModalTitle text="Add Tasks" />

        <ModalInput
          label="Name"
          type="text"
          id="create-page-name"
          onChange={(e) => setName(e.target.value)}
        />

        <div className="mt-3 flex w-full justify-end ">
          <SquareButton
            className="mx-1"
            variant="tertiary"
            size="fit"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </SquareButton>
          <SquareButton
            className="mx-1"
            variant="secondary"
            size="fit"
            onClick={handleCreateTask}
          >
            Create
          </SquareButton>
        </div>
      </ModalContainer>
    </ModalBody>
  );
}
