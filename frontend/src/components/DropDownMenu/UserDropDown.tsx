import LogoutIcon from "../../assets/logout.png";

type UserDropDownProps = {
  isOpen: boolean;
};

export default function UserDropDown({ isOpen }: UserDropDownProps) {
  function userLogoutHandler() {
    console.log("userLogoutHandler");
  }
  return (
    <div
      className={`absolute right-0 top-8 z-20 rounded-lg border bg-white shadow-lg transition duration-200 ease-in-out
        ${isOpen ? "block" : "hidden"} `}
    >
      <div
        className="flex cursor-pointer items-center overflow-hidden px-6 py-3 text-sm text-gray-700 duration-150 hover:bg-gray-200"
        onClick={userLogoutHandler}
      >
        <img className="h-6 w-6" src={LogoutIcon} alt="dropdown" />
        <h1 className="ml-2 font-semibold">Logout</h1>
      </div>
    </div>
  );
}
