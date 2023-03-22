import React from "react";
import NavigationItem from "../NavigationItem";
import InboxIcon from "../../../../assets/inbox.png";
import TodayIcon from "../../../../assets/today.png";
import CalendarIcon from "../../../../assets/calendar.png";
import LabelIcon from "../../../../assets/label.png";
import { useLocation } from "react-router-dom";

export default function MainNavigation() {
  let location = useLocation();

  return (
    <div>
      <NavigationItem
        imgSrc={InboxIcon}
        url=""
        text="All"
        isActive={location.pathname.includes("all")}
      />
      <NavigationItem
        imgSrc={TodayIcon}
        url="today"
        text="Today"
        isActive={location.pathname.includes("today")}
      />
      <NavigationItem
        imgSrc={CalendarIcon}
        url="upcoming"
        text="Upcoming"
        isActive={location.pathname.includes("upcoming")}
      />
      {/* <NavigationItem
        imgSrc={LabelIcon}
        url="labels"
        text="Labels"
        isActive={location.pathname.includes("labels")}
      /> */}
    </div>
  );
}
