import { UserOutlined } from "@ant-design/icons";

const NavbarUserItem = () => {
  return (
    <div className="bg-indigo-300 w-28 h-7 rounded-md hover:bg-slate-400 cursor-pointer">
      <div className="flex h-full">
        <div className="flex w-full h-full px-2 py-1 justify-between items-center">
          <UserOutlined />
          <span className="text-xs">نام کاربری</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarUserItem;
