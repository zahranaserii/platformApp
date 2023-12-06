import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../Redux/store";

const ProtectPrivateRoutes = () => {
  const token = useSelector((state: RootState) => state.token.token);
  return token ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectPrivateRoutes;
