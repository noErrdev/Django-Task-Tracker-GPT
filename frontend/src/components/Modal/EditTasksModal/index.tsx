import React from "react";
import ModalBody from "../ModalBody";
import ModalContainer from "../ModalContainer";
import ModalTitle from "../ModalTitle";
import ModalInput from "../ModalInput";
import ModalSelectPriority from "../ModalSelectPriority";
import ModalTextArea from "../ModalTextArea";
import SquareButton from "../../Button/SquareButton";
import axiosInstance from "../../../utils/axiosInstance";

type EditTaskModalProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<any>>;
  task: {
    id: string;
    name: string;
    description: string;
    priority: string;
    due: string;
  };
};

export default function EditTaskModal({
  setOpenModal,
  setTasks,
  task,
}: EditTaskModalProps) {
  const [taskName, setTaskName] = React.useState<string>(task.name);
  const [priority, setPriority] = React.useState<string>(task.priority);
  const [dueDate, setDueDate] = React.useState<string>(task.due);
  const [description, setDescription] = React.useState<string>(
    task.description
  );

  const handleUpdateTask = (e: React.FormEvent): void => {
    e.preventDefault();
    axiosInstance
      .put(`/api/tasks/update-task/${task.id}/`, {
        name: taskName,
        description: description,
        priority: priority,
        due: dueDate,
      })
      .then((res) => {
        setTasks((prev: any) => {
          const newTasks = prev.map((task: any) => {
            if (task.id === res.data.id) {
              task.name = res.data.name;
              task.description = res.data.description;
              task.priority = res.data.priority;
              task.due = res.data.due;
            }
            return task;
          });
          return newTasks;
        });
        setOpenModal(false);
      });
  };

  return (
    <ModalBody>
      <ModalContainer onSubmit={handleUpdateTask}>
        <ModalTitle text="Edit Task" />
        <ModalInput
          label="Task Name"
          type="text"
          id="edit-task-name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          isRequired={true}
        />

        <ModalTextArea
          label="Description"
          id="edit-task-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <ModalInput
          label="Due Date"
          type="date"
          id="edit-task-due"
          value={dueDate.split("T")[0]}
          onChange={(e) => setDueDate(e.target.value)}
          isRequired={true}
        />

        <ModalSelectPriority
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />

        <div className="mt-3 flex w-full justify-end">
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
            variant="primary"
            size="fit"
            type="submit"
          >
            Update
          </SquareButton>
        </div>
      </ModalContainer>
    </ModalBody>
  );
}
