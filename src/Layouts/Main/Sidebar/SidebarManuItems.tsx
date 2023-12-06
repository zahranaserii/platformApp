import {
  AccountBookOutlined,
  DashboardOutlined,
  DotChartOutlined,
  FileOutlined,
  InboxOutlined,
  ScheduleOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { FC, ReactNode } from "react";
type Iprops = {
  open?: boolean;
  isHorizontal?: boolean;
};
const SidebarManuItems: FC<Iprops> = ({ open, isHorizontal }) => {
  //constants
  const sidebarMenu: { title: string; icon: ReactNode }[] = [
    { title: "داشبورد", icon: <DashboardOutlined /> },
    { title: "صندوق ورودی", icon: <InboxOutlined /> },
    { title: "اکانت ها", icon: <AccountBookOutlined /> },
    { title: "برنامه ها", icon: <ScheduleOutlined /> },
    { title: "جستجو", icon: <SearchOutlined /> },
    { title: "تجزیه و تحلیل", icon: <DotChartOutlined /> },
    { title: "فایل ها", icon: <FileOutlined /> },
    { title: "تنظیمات", icon: <SettingOutlined /> },
  ];

  return (
    <div className="py-2 transition-all duration-500 ease-out ">
      {sidebarMenu.map((item, index) => {
        return (
          <div
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
          </div>
        );
      })}
    </div>
  );
};

export default SidebarManuItems;
