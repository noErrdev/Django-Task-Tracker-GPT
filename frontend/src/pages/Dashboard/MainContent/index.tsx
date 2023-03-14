import React from "react";
import { Route, Routes } from "react-router-dom";
import AllPage from "../../MainContentPages/AllPage";
import CustomPage from "../../MainContentPages/CustomPage";
import TodayPage from "../../MainContentPages/TodayPage";
import UpComingPage from "../../MainContentPages/UpComingPage";

export default function MainContent() {
  return (
    <div className="flex-1 bg-white">
      <Routes>
        <Route path="/all" element={<AllPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/upcoming" element={<UpComingPage />} />
        <Route path="/*" element={<CustomPage />} />
      </Routes>
    </div>
  );
}
