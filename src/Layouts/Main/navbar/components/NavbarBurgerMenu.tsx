import { MenuOutlined } from "@ant-design/icons";
import HorizotalSidebar from "../../Sidebar/HorizotalSidebar";

const NavbarBurgerMenu = () => {
  return (
    <div className="flex cursor-pointer md:hidden bg-white/20 p-1.5 rounded-md group relative">
      <MenuOutlined />
      <div
        style={{ width: "calc(100vw - 80px)" }}
        className="absolute py-2.5 top-full right-0 group-hover:block hidden"
      >
        <HorizotalSidebar />
      </div>
    </div>
  );
};
export default NavbarBurgerMenu;
