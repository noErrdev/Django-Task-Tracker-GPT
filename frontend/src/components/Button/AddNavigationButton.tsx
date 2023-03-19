import AddIcon from "../../assets/add.png";

type AddNavigationButtonProps = {
  text: String;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export default function AddNavigationButton({
  text,
  onClick,
}: AddNavigationButtonProps) {
  return (
    <div
      className="flex w-full cursor-pointer items-center rounded-lg p-2 text-sm hover:bg-gray-200"
      onClick={onClick}
    >
      <img className="mr-2 h-5 w-5" src={AddIcon} alt="add navigations" />
      <h1>{text}</h1>
    </div>
  );
}
