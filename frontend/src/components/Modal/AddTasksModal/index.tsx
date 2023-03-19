import React from "react";
import ModalBody from "../ModalBody";
import ModalContainer from "../ModalContainer";
import ModalTitle from "../ModalTitle";
import ModalInput from "../ModalInput";
import ModalSelectPriority from "../ModalSelectPriority";
import ModalTextArea from "../ModalTextArea";
import SquareButton from "../../Button/SquareButton";

type AddTasksModalProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AddTasksModal({ setOpenModal }: AddTasksModalProps) {
  const [taskName, setTaskName] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [priority, setPriority] = React.useState<string>("high");
  const [dueDate, setDueDate] = React.useState<string>("");
  const [completed, setCompleted] = React.useState<boolean>(false);

  const handleCreateTask = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    return;
  };

  return (
    <ModalBody>
      <ModalContainer>
        <ModalTitle text="Add Tasks" />

        <ModalInput
          label="Task Name"
          type="text"
          id="create-task-name"
          onChange={(e) => setTaskName(e.target.value)}
        />

        <ModalTextArea
          label="Description"
          id="create-task-description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <ModalSelectPriority
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />

        {/* 
        <ModalInput
          label="Description"
          type="text"
          id="create-task-description"
          onChange={(e) => setDueDate(e.target.value)}
        /> */}

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
