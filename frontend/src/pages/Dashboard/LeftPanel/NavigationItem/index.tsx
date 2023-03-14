import { useNavigate } from "react-router-dom";

type NavigationItemProps = {
  url: String;
  text: String;
  isActive?: Boolean;
  imgSrc: String;
};

export default function NavigationItem({
  url,
  text,
  isActive = false,
  imgSrc,
}: NavigationItemProps) {
  const navigate = useNavigate();
  return (
    <div
      className={`${isActive ? "bg-gray-200" : ""}
        flex w-full cursor-pointer items-center rounded-lg p-2 text-sm hover:bg-gray-200`}
      onClick={() => navigate("/dashboard/" + url)}
    >
      <img className="mr-2 h-5 w-5" src={imgSrc.toString()} alt="" />
      <h1>{text}</h1>
    </div>
  );
}
