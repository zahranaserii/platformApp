import { ConfigProvider } from "antd";
import fa from "antd/es/locale/fa_IR";
import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";
interface Iprops {
  children: ReactNode;
}
const Providers: FC<Iprops> = ({ children }) => {
  const language = useSelector((state: RootState) => state.language.language);
  console.log("language", language);
  return (
    <div dir={language === "fa" ? "rtl" : "ltr"}>
      <ConfigProvider
        locale={fa}
        direction={language === "fa" ? "rtl" : "ltr"}
        theme={{
          token: {
            fontFamily: "iranyekan",
            colorPrimary: "#0e4ee6",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </div>
  );
};

export default Providers;
