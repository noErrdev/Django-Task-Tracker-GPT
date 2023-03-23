import LogoutIcon from "../../assets/logout.png";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/slices/userSlice";

type UserDropDownProps = {
  isOpen: boolean;
};

export default function UserDropDown({ isOpen }: UserDropDownProps) {
  const dispatch = useDispatch();

  function userLogoutHandler() {
    dispatch(userLogout());
  }

  return (
    <div
      className={`absolute right-0 top-8 rounded-lg border bg-white shadow-lg transition duration-200 ease-in-out
        ${isOpen ? "block" : "hidden"} `}
    >
      <div
        className="flex cursor-pointer items-center overflow-hidden px-4 py-3 text-sm text-gray-700 duration-150 hover:bg-gray-200"
        onClick={userLogoutHandler}
      >
        <img className="h-5 w-5" src={LogoutIcon} alt="dropdown" />
        <h1 className="ml-2 font-semibold">Logout</h1>
      </div>
    </div>
  );
}
