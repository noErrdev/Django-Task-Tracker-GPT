import React from "react";
import MainContent from "../../../components/MainContent/MainContent";
import MainContentBody from "../../../components/MainContent/MainContentBody";
import AddTasksButton from "../../../components/Button/AddTasksButton";
import Divider from "../../../components/Divider/Divider";
import AddTasksModal from "../../../components/Modal/AddTasksModal";
import axiosInstance from "../../../utils/axiosInstance";
import TaskItem from "../../../components/TaskItem";
import LoadingModal from "../../../components/Modal/LoadingModal";
import SortIcon from "../../../assets/sort.png";
import SortTasksDropDown from "../../../components/DropDownMenu/SortTasksDropDown";

export default function AllPage() {
  const [openAddTaskModal, setOpenAddTaskModal] =
    React.useState<boolean>(false);
  const [tasks, setTasks] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [openSortTasksDropDown, setOpenSortTasksDropDown] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/api/tasks/all-tasks/")
      .then((res) => {
        setTasks(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <MainContent>
      <MainContentBody>
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">All Tasks</h1>
          <div
            className="relative flex cursor-pointer items-center"
            onClick={() => setOpenSortTasksDropDown((prev) => !prev)}
          >
            <h1 className="mr-1 text-sm">Sort</h1>
            <img className="h-6 w-6" src={SortIcon} alt="filter" />
            <SortTasksDropDown
              isOpen={openSortTasksDropDown}
              setTasks={setTasks}
            />
          </div>
        </div>
        <Divider />
        <AddTasksButton onClick={() => setOpenAddTaskModal(true)} />
        {tasks.map((task: any) => (
          <TaskItem
            key={task.id}
            id={task.id}
            name={task.name}
            description={task.description}
            priority={task.priority}
            due={task.due}
            setTasks={setTasks}
          />
        ))}
      </MainContentBody>
      {openAddTaskModal && (
        <AddTasksModal setOpenModal={setOpenAddTaskModal} setTasks={setTasks} />
      )}
      {loading && <LoadingModal />}
    </MainContent>
  );
}
