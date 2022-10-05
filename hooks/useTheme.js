import { switchTheme } from "../features/themeSlice";
import { useSelector, useDispatch } from "react-redux";

export const useTheme = () => {
  const {
    theme: { isLightTheme },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  //dispatch actions
  const handleSwitchTheme = () => {
    dispatch(switchTheme());
  };

  return { isLightTheme, handleSwitchTheme };
};
