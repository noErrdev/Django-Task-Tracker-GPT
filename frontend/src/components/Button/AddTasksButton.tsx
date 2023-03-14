import React from "react";
import AddIcon from "../../assets/add.png";

type AddTasksButtonProps = {
  onClick: () => void;
};

export default function AddTasksButton({ onClick }: AddTasksButtonProps) {
  return (
    <div
      className="flex cursor-pointer items-center rounded p-2 hover:bg-gray-200"
      onClick={onClick}
    >
      <img className="h-5 w-5" src={AddIcon} alt="add tasks" />
      <h1 className="ml-2 text-sm">Add tasks</h1>
    </div>
  );
}
