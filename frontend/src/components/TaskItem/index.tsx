import React from "react";
import HorizMenu from "../../assets/horiz-menu.png";
import DueDateText from "./DueDateText";
import axiosInstance from "../../utils/axiosInstance";
import EditTaskModal from "../Modal/EditTasksModal";

type TaskItemProps = {
  id: string;
  name: string;
  description: string;
  priority: string;
  due: string;
  setTasks: React.Dispatch<React.SetStateAction<any>>;
};

export default function TaskItem({
  id,
  name,
  description,
  priority,
  due,
  setTasks,
}: TaskItemProps) {
  function deleteTasks() {
    setTasks((prev: any) => prev.filter((task: any) => task.id !== id));
    axiosInstance.delete(`/api/tasks/delete-task/${id}`);
  }

  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div className="my-5 rounded-md border p-3 shadow-lg">
      <div className="flex items-center">
        <div
          className={`rounded-full  py-1 px-4 text-xs ${
            priority === "high"
              ? "bg-red-500 text-white"
              : priority === "medium"
              ? "bg-yellow-200"
              : "bg-green-400 text-white"
          }`}
        >
          {priority.slice(0, 1).toUpperCase() + priority.slice(1)}
        </div>
        <img
          className=" ml-auto h-6 w-6 cursor-pointer"
          src={HorizMenu}
          alt="Menu"
          onClick={() => setOpenModal(true)}
        />
      </div>
      <hr className="my-2" />
      <h1 className="text-ellipsis whitespace-nowrap text-lg font-bold">
        {name}
      </h1>
      <h1 className="mb-10 text-sm">{description}</h1>
      <div className="flex justify-between text-xs">
        <DueDateText due={due} />
        <h1 className="cursor-pointer text-blue-700" onClick={deleteTasks}>
          Delete
        </h1>
      </div>
      {openModal && (
        <EditTaskModal
          setTasks={setTasks}
          setOpenModal={setOpenModal}
          task={{ id, name, description, priority, due }}
        />
      )}
    </div>
  );
}
