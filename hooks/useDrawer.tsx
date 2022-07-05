import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from "../actions/actions";
function useDrawer() {
  const { drawer } = useSelector((state) => state);
  const { isOpenDrawer } = drawer;
  const dispatch = useDispatch();

  //open drawer
  const openDrawer = () => {
    dispatch({ type: ACTIONS.OPEN_DRAWER });
  };
  //close drawer
  const closeDrawer = () => {
    dispatch({ type: ACTIONS.CLOSE_DRAWER });
  };

  return {
    isOpenDrawer,
    openDrawer,
    closeDrawer,
  };
}

export default useDrawer;
