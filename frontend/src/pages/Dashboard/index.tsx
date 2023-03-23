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
        <LeftPanel
          setOpenLeftPanel={setOpenLeftPanel}
          openLeftPanel={openLeftPanel}
        />
        <MainContent />
      </div>
    </div>
  );
}
