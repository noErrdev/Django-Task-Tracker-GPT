import React from "react";
import MenuIcon from "../../assets/menu.png";

type HeaderProps = {
  setOpenLeftPanel: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setOpenLeftPanel }: HeaderProps) {
  return (
    <div className="block h-9 w-9 pl-3 pt-4 lg:hidden">
      <img
        src={MenuIcon}
        alt="mobile-leftPanel-menu"
        onClick={() => setOpenLeftPanel(true)}
      />
    </div>
  );
}
