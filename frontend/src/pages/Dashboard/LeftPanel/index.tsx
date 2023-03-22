import React from "react";
import MainNavigation from "./MainNavigation";
import CustomNavigation from "./CustomNavigation";
import Divider from "../../../components/Divider/Divider";
import UserProfile from "./UserProfile";

export default function LeftPanel() {
  return (
    <div className="w-72 border-r border-gray-100 bg-neutral-50 p-5">
      <UserProfile />
      <h2 className="mb-3 font-semibold">Tasks: </h2>
      <MainNavigation />
      <Divider />
      <h2 className="mb-3 font-semibold">Notes: </h2>
      <CustomNavigation />
    </div>
  );
}
