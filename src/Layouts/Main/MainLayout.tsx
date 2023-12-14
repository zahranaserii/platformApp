import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../../Redux/store";
import SidebarNew from "./Sidebar/SidebarNew";
import Navbar from "./navbar/Navbar";

const MainLayout = () => {
  //hooks
  const navigate = useNavigate();
  //constants
  const token = useSelector((state: RootState) => state.token.token);
  console.log("token", token);
  //effect
  useEffect(() => {
    if (!token) navigate("/login");
  }, [token]);
  return (
    <div className="flex gap-x-1 pl-3 overflow-y-scroll  h-screen bg-t-bg-color">
      <SidebarNew />
      <div className="flex bg-t-bg-color flex-col w-full max-w-6xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
