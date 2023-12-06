import { FC, ReactNode } from "react";

interface Iprops {
  icon: ReactNode;
}

const NavbarItem: FC<Iprops> = ({ icon }) => {
  return (
    <div className="flex ">
      <div className="bg-indigo-300 rounded-md cursor-pointer flex p-1 hover:bg-slate-500 hover:duration-300">
        {icon}
      </div>
    </div>
  );
};

export default NavbarItem;
