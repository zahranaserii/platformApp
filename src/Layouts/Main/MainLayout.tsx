import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../../Redux/store";
import VerticalSidebar from "./Sidebar/VerticalSidebar";
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
    <div className="flex gap-x-1 pl-3 overflow-y-scroll min-h-screen h-full bg-t-bg-color">
      <VerticalSidebar />
      <div className="flex bg-t-bg-color flex-col w-full max-w-6xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
