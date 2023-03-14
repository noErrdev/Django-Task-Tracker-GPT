import React from "react";
import HorizMenuIcon from "../../../../assets/horiz-menu.png";
import UserDropDown from "../../../../components/DropDownMenu/UserDropDown";

export default function UserProfile() {
  const [openDropdown, setOpenDropdown] = React.useState(false);

  return (
    <div className="relative mb-4 flex items-center">
      <div className="relative h-9 w-9 bg-stone-700 text-white">
        <h1 className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          J
        </h1>
      </div>
      <div className="ml-2">
        <h1 className="text-sm">John Doe</h1>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
          <h2 className=" ml-1 text-xs text-green-400">Online</h2>
        </div>
      </div>
      <img
        className="ml-auto h-7 w-7 cursor-pointer"
        src={HorizMenuIcon}
        alt="HorizMenuIcon"
        onClick={() => setOpenDropdown((prev) => !prev)}
      />
      <UserDropDown isOpen={openDropdown} />
    </div>
  );
}
