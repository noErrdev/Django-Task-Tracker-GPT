import React from "react";
import LeftPanel from "./LeftPanel";
import MainContent from "./MainContent";
import Header from "../../components/Header";

export default function Dashboard() {
  const [openLeftPanel, setOpenLeftPanel] = React.useState(false);
  return (
    <div className="min-h-screen w-full">
      <Header setOpenLeftPanel={setOpenLeftPanel} />
      <div className="flex">
        <div
          className={`z-50 h-screen lg:block
            ${openLeftPanel ? "absolute top-0" : "hidden"}`}
        >
          <LeftPanel setOpenLeftPanel={setOpenLeftPanel} />
        </div>
        <MainContent />
      </div>
    </div>
  );
}
