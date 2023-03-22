import { useNavigate } from "react-router-dom";

type NavigationItemProps = {
  url: string;
  text: string;
  isActive?: boolean;
  imgSrc?: string;
  imgSize: string;
};

const imgSizeTable: any = {
  base: "mr-2 h-5 w-5",
  sm: "h-4 w-4 mr-2",
};

export default function NavigationItem({
  url,
  text,
  isActive = false,
  imgSrc,
  imgSize = "base",
}: NavigationItemProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`${isActive ? "bg-gray-200" : ""}
        flex w-full cursor-pointer items-center rounded-lg p-2 text-sm hover:bg-gray-200`}
      onClick={() => navigate("/dashboard/" + url)}
    >
      {imgSrc && (
        <img
          className={`${imgSizeTable[imgSize]}`}
          src={imgSrc.toString()}
          alt=""
        />
      )}

      <h1 className="truncate">{text}</h1>
    </div>
  );
}
