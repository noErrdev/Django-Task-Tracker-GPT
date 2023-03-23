import React from "react";
import { Route, Routes } from "react-router-dom";
import AllPage from "../../MainContentPages/AllPage";
import CustomPage from "../../MainContentPages/CustomPage";
import TodayPage from "../../MainContentPages/TodayPage";
import UpComingPage from "../../MainContentPages/UpComingPage";
import ChatGPTPage from "../../MainContentPages/ChatGPTPage";

export default function MainContent() {
  return (
    <div className="z-10 h-screen flex-1 overflow-auto bg-white">
      <Routes>
        <Route path="/" element={<AllPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/upcoming" element={<UpComingPage />} />
        <Route path="/chatgpt" element={<ChatGPTPage />} />
        <Route path="/*" element={<CustomPage />} />
      </Routes>
    </div>
  );
}
