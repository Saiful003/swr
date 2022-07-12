import { ACTIONS } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";

export function useTheme() {
  const { theme } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { light } = theme;

  const switchThemeHandler = () => {
    dispatch({ type: ACTIONS.SWITCH_THEME });
  };

  return {
    light,
    switchThemeHandler,
  };
}
