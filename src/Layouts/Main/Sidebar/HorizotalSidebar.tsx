import SidebarManuItems from "./SidebarManuItems";

const HorizotalSidebar = () => {
  return (
    <div className="bg-t-primary-color w-full rounded-md ">
      <SidebarManuItems isHorizontal open={false} />
    </div>
  );
};

export default HorizotalSidebar;
