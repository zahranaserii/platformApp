import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { Navigate, Outlet } from "react-router-dom";

const ProtectAuthRoute = () => {
  const token = useSelector((state: RootState) => state.token.token);

  return !token ? <Outlet/> : <Navigate to="/" replace />;
};

export default ProtectAuthRoute;
