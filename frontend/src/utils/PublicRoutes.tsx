import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function PrivateRoutes() {
  let jwtToken = useSelector((state: RootState) => state.user.userToken);

  return jwtToken ? <Outlet /> : <Navigate to={`/dashboard`} />;
}
