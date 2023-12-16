import {
  AccountBookOutlined,
  DotChartOutlined,
  FileOutlined,
  ScheduleOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { FC, ReactNode } from "react";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";
type Iprops = {
  open?: boolean;
  isHorizontal?: boolean;
};
const SidebarManuItems: FC<Iprops> = ({ open, isHorizontal }) => {
  //constants
  const sidebarMenu: { title: string; icon: ReactNode; to: string }[] = [
    {
      title: "همه ی دوره ها",
      icon: <HiOutlineBuildingLibrary />,
      to: "/",
    },
    { title: "دسته بندی دوره ها", icon: <TbCategory />, to: "/courseCategory" },
    { title: "اکانت ها", icon: <AccountBookOutlined />, to: "/CourseCategory" },
    { title: "برنامه ها", icon: <ScheduleOutlined />, to: "/CourseCategory" },
    { title: "جستجو", icon: <SearchOutlined />, to: "/CourseCategory" },
    {
      title: "تجزیه و تحلیل",
      icon: <DotChartOutlined />,
      to: "/CourseCategory",
    },
    { title: "فایل ها", icon: <FileOutlined />, to: "/CourseCategory" },
    { title: "تنظیمات", icon: <SettingOutlined />, to: "/CourseCategory" },
  ];

  return (
    <div className="py-2 transition-all duration-500 ease-out ">
      {sidebarMenu.map((item, index) => {
        return (
          <Link
            to={item.to}
            key={index}
            className={`flex items-center mr-4 px-3 gap-x-3 py-3 cursor-pointer hover:bg-white/30 rounded-md ${
              isHorizontal && !open && "ml-4"
            } ${open && "w-64"}`}
          >
            <span
              className={`text-xl flex items-center ${
                !open && "hover:p-1 duration-300"
              } `}
            >
              {item.icon}
            </span>
            <span
              className={`text-sm whitespace-nowrap ${
                !open && !isHorizontal && "hidden"
              }
              
              `}
            >
              {item.title}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarManuItems;
