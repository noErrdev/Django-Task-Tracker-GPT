import React from "react";
import AddNavigationButton from "../../../../components/Button/AddNavigationButton";
import NavigationItem from "../NavigationItem";
import { useLocation } from "react-router-dom";
import DocumentIcon from "../../../../assets/document.png";
import {
  getCustomPageAPI,
  createCustomPageAPI,
} from "../../../../redux/api/customPageAPI";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../redux/store";

export default function CustomNavigation() {
  const dispatch = useDispatch<AppDispatch>();
  let location = useLocation();
  const pages = useSelector((state: any) => state.customPage.customPages);

  function addNewPage(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    dispatch(createCustomPageAPI());
  }

  React.useEffect(() => {
    dispatch(getCustomPageAPI());
  }, []);

  return (
    <div>
      {pages.map((page: any) => (
        <NavigationItem
          key={page.id}
          url={page.id}
          text={page.title}
          imgSrc={DocumentIcon}
          imgSize="sm"
          isActive={location.pathname.includes(page.id.toString())}
        />
      ))}
      <AddNavigationButton text="Add" onClick={addNewPage} />
    </div>
  );
}
