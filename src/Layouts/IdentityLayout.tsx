import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import ChangeLanguage from "../components/ChangeLanguage";
import ChangeTheme from "../components/ChangeTheme";

const IdentityLayout = () => {
  //consttant
  const { t } = useTranslation();
  //effect
  useEffect(() => {
    localStorage.setItem("language", "fa");
  }, []);
  return (
    <div className="bg-t-bg-color h-screen">
      <div className="py-3 px-4 flex items-center gap-3">
        <ChangeLanguage />
        <ChangeTheme />
      </div>
      <div className="flex flex-col relative top-14 ">
        <div className="flex flex-col gap-2 items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default IdentityLayout;
