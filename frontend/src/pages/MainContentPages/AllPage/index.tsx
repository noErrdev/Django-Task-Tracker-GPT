import React from "react";
import MainContentBody from "../../../components/MainContent/MainContentBody";
import AddTasksButton from "../../../components/Button/AddTasksButton";
import Divider from "../../../components/Divider/Divider";
import AddTasksModal from "../../../components/Modal/AddTasksModal";

export default function AllPage() {
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 py-8">
      <MainContentBody>
        <div>
          <h1 className="text-2xl font-medium">All Tasks</h1>
        </div>
        <Divider />
        <AddTasksButton onClick={() => setOpenModal(true)} />
      </MainContentBody>
      {openModal && <AddTasksModal setOpenModal={setOpenModal} />}
    </div>
  );
}
