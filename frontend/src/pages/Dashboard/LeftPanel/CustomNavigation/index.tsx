import React from "react";
import AddNavigationButton from "../../../../components/Button/AddNavigationButton";
import AddNavigationModal from "../../../../components/Modal/AddNavigationModal";

export default function CustomNavigation() {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <div>
      <AddNavigationButton text="Add" onClick={() => setOpenModal(true)} />
      {openModal && <AddNavigationModal setOpenModal={setOpenModal} />}
    </div>
  );
}
