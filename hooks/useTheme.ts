import { useAppSelector, useAppDispatch } from "./redux-hooks/tsVersionHooks";
import { switchTheme } from "../features/themeSlice";

export const useTheme = () => {
  const {
    siteTheme: { light },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleSwitchTheme = () => {
    dispatch(switchTheme());
  };
  return {
    light,
    handleSwitchTheme,
  };
};
