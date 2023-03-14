import LeftPanel from "./LeftPanel";
import MainContent from "./MainContent";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full">
      <LeftPanel />
      <MainContent />
    </div>
  );
}
