import {
  BellOutlined,
  HistoryOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ChangeTheme from "../../../components/ChangeTheme";
import NavbarBurgerMenu from "./components/NavbarBurgerMenu";
import NavbarItem from "./components/NavbarItem";
import NavbarUserItem from "./components/NavbarUserItem";

const Navbar = () => {
  return (
    <div className="flex py-4">
      <div className="p-3 bg-t-primary-color border-2 border-black flex w-full h-12 rounded-md items-center ">
        <NavbarBurgerMenu />
        <div className="px-4">
          <ChangeTheme />
        </div>
        <div className="flex w-full items-center justify-end rounded-md gap-x-6">
          <div className="flex  gap-3">
            <NavbarItem icon={<ShoppingCartOutlined />} />
            <NavbarItem icon={<HistoryOutlined />} />
            <NavbarItem icon={<BellOutlined />} />
          </div>
          <NavbarUserItem />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
