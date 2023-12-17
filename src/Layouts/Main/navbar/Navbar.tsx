import {
  BellOutlined,
  HistoryOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import ChangeTheme from "../../../components/ChangeTheme";
import NavbarBurgerMenu from "./components/NavbarBurgerMenu";
import NavbarItem from "./components/NavbarItem";

const Navbar = () => {
  //hooks
  const navigate = useNavigate();
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
          {/* <NavbarUserItem /> */}
          <div>
            <Button
              className="bg-t-primary-color hover:bg-t-layer-bg-color text-t-text-color"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              خارج شوید
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
