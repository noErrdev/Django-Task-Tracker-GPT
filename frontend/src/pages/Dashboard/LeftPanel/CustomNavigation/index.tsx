import React from "react";
import AddNavigationButton from "../../../../components/Button/AddNavigationButton";
import axiosInstance from "../../../../utils/axiosInstance";
import NavigationItem from "../NavigationItem";
import { useLocation } from "react-router-dom";
import DocumentIcon from "../../../../assets/document.png";

export default function CustomNavigation() {
  const [pages, setPages] = React.useState<any[]>([]);
  let location = useLocation();

  function addNewPage(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    axiosInstance.post("/api/pages/create_page/", {}).then((res) => {
      setPages((prev) => [...prev, res.data]);
    });
  }

  React.useEffect(() => {
    axiosInstance.get("/api/pages/all_page/").then((res) => {
      setPages(res.data);
    });
  }, []);

  return (
    <div>
      {pages.map((page) => (
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
