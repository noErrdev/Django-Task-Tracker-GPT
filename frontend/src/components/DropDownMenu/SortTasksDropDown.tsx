import React from "react";

type SortTasksDropDownProps = {
  isOpen: boolean;
  setTasks: React.Dispatch<React.SetStateAction<any>>;
};

export default function SortTasksDropDown({
  isOpen,
  setTasks,
}: SortTasksDropDownProps) {
  function sortByDate() {
    setTasks((prev: any) => {
      return prev.sort((a: any, b: any) => {
        return new Date(a.due).getTime() - new Date(b.due).getTime();
      });
    });
  }

  function sortByPriority() {
    // priority high to medium to low
    setTasks((prev: any) => {
      return prev.sort((a: any, b: any) => {
        if (a.priority === "high") {
          return -1;
        } else if (a.priority === "medium") {
          if (b.priority === "high") {
            return 1;
          } else {
            return -1;
          }
        } else {
          return 1;
        }
      });
    });
  }

  function sortByName() {
    setTasks((prev: any) => {
      return prev.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    });
  }

  return (
    <div
      className={`absolute right-0 top-8 rounded-lg border bg-white text-xs shadow-lg transition duration-200 ease-in-out
      ${isOpen ? "block" : "hidden"} `}
    >
      <h1
        className="cursor-pointer whitespace-nowrap p-3 text-gray-700 duration-150 hover:bg-gray-200"
        onClick={sortByDate}
      >
        Default (Due)
      </h1>
      <h1
        className="cursor-pointer whitespace-nowrap p-3 text-gray-700 duration-150 hover:bg-gray-200"
        onClick={sortByPriority}
      >
        Priority
      </h1>
      <h1
        className="cursor-pointer whitespace-nowrap p-3 text-gray-700 duration-150 hover:bg-gray-200"
        onClick={sortByName}
      >
        Name
      </h1>
    </div>
  );
}
