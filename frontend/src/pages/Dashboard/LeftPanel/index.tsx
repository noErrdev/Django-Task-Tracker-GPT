import React from "react";
import MainNavigation from "./MainNavigation";
import CustomNavigation from "./CustomNavigation";
import Divider from "../../../components/Divider/Divider";
import UserProfile from "./UserProfile";
import CrossIcon from "../../../assets/cross.png";

type LeftPanelProps = {
  setOpenLeftPanel: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LeftPanel({ setOpenLeftPanel }: LeftPanelProps) {
  return (
    <div className="h-screen w-72 border-r border-gray-100 bg-neutral-50 p-5">
      <img
        className="mb-3 h-6 w-6 lg:hidden"
        src={CrossIcon}
        alt="mobile-close-leftPanel"
        onClick={() => setOpenLeftPanel(false)}
      />
      <UserProfile />
      <h2 className="mb-3 font-semibold">Tasks: </h2>
      <MainNavigation />
      <Divider />
      <h2 className="mb-3 font-semibold">Notes: </h2>
      <CustomNavigation />
    </div>
  );
}
