import { Dropdown, MenuProps } from "antd";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../Redux/Reducers/LanguageReducer";
import { RootState } from "../Redux/store";
import enFlag from "../assets/enFlag.png";
import faflag from "../assets/faFlag.png";

const ChangeLanguage = () => {
  //hooks
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  //functions

  const handleLanguage = (selectedLanguage: string) => {
    dispatch(setLanguage(selectedLanguage));
  };

  //constants
  const language = useSelector((state: RootState) => state.language.language);

  const ChangeFlag: string = useMemo(() => {
    return language === "en" ? enFlag : faflag;
  }, [language]);
  //effect
  useEffect(() => {
    i18n.changeLanguage(language);
    document.body.dataset.diresction = language === "fa" ? "rtl" : "ltr";
  }, [language]);

  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex gap-3 items-center">
          <img className="w-7 h-5 rounded-lg" src={faflag} alt="فارسی" />
          <p>فارسی</p>
        </div>
      ),
      key: "0",
      onClick: () => handleLanguage("fa"),
    },
    {
      type: "divider",
    },
    {
      label: (
        <div className="flex gap-2 items-center w-6">
          <img className="w-7 h-5 rounded-lg" src={enFlag} alt="english" />
          <p>English</p>
        </div>
      ),
      key: "1",
      onClick: () => handleLanguage("en"),
    },
  ];
  return (
    <Dropdown
      className="cursor-pointer"
      menu={{ items }}
      trigger={["click"]}
      
    >
      <img src={ChangeFlag} alt="" className="w-8 h-7 rounded-full" />
    </Dropdown>
  );
};

export default ChangeLanguage;
