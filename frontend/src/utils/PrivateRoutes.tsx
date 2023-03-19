import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function PrivateRoutes() {
  let accessToken = useSelector((state: RootState) => state.user.accessToken);
  if (accessToken) return <Outlet />;
  return <Navigate to={`/`} />;
}
