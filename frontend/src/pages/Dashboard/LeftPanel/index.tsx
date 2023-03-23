import React from "react";
import MainNavigation from "./MainNavigation";
import CustomNavigation from "./CustomNavigation";
import Divider from "../../../components/Divider/Divider";
import UserProfile from "./UserProfile";
import CrossIcon from "../../../assets/cross.png";

type LeftPanelProps = {
  openLeftPanel: boolean;
  setOpenLeftPanel: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LeftPanel({
  setOpenLeftPanel,
  openLeftPanel,
}: LeftPanelProps) {
  return (
    <div
      className={`z-20 h-screen w-72 border-r border-gray-200 bg-neutral-50 p-5 lg:z-10 lg:block ${
        openLeftPanel ? "absolute top-0" : "hidden"
      }`}
    >
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
