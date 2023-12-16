import { LeftOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { FC, useState } from "react";
import SidebarManuItems from "./SidebarManuItems";

const VerticalSidebar: FC = () => {
  //states
  const [open, setopen] = useState<boolean>(false);
  return (
    <div
      className={`bg-t-primary-color hidden md:block relative min-h-screen h-full py-7 ${
        open ? "w-72" : "w-20"
      }`}
    >
      <div
        className={`bg-white absolute h-6 w-6 border-2 border-black  flex items-center justify-center -left-2  rounded-full ${
          open && "rotate-180"
        } `}
      >
        <LeftOutlined
          onClick={() => setopen(!open)}
          className="relative right-[1px]"
        />
      </div>
      <div className="flex px-6 items-center gap-4 ">
        <span
          className={`flex w-fit items-center justify-center text-3xl ${
            open && "rotate-[360deg] duration-700"
          } `}
        >
          <PlusSquareOutlined />
        </span>
        <p className={`${open ? "block" : "hidden"}`}>zahra</p>
      </div>
      <div className={`pt-8 ${!open ? "w-fit" : "w-56"}`}>
        <SidebarManuItems open={open} />
      </div>
    </div>
  );
};

export default VerticalSidebar;
