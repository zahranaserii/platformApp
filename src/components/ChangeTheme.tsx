import { Switch } from "antd";
import { BiSolidSun } from "react-icons/bi";
import { IoMoon } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../Redux/Reducers/ThemeReducer";
import { RootState } from "../Redux/store";
import { useEffect } from "react";
const ChangeTheme = () => {
  //hooks
  const dispatch = useDispatch();

  //constants
  const theme = useSelector((state: RootState) => state.theme.Theme);

  const isThemeChecked = theme === "light";

  //functions
  const handleThemeChange = (checked: boolean) => {
    // setDarkMode(checked);
    dispatch(setTheme(checked ? "light" : "dark"));
  };
  //effect
  useEffect(() => {
    const root = document.querySelector(':root');
    root?.setAttribute('color-scheme', theme);
    theme === 'dark' && root?.classList.add('dark');
    theme === 'light' && root?.classList.remove('dark');
  }, [theme]);
  return (
    <div>
      <Switch
        checkedChildren={<BiSolidSun className="text-xl " />}
        unCheckedChildren={<IoMoon className="text-xl relative top-0.5" />}
        checked={isThemeChecked}
        onChange={handleThemeChange}
      />
    </div>
  );
};

export default ChangeTheme;
