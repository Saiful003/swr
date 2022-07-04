import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from "../actions/actions";
function useDrawer() {
  const { drawer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { isOpenDrawer } = drawer;

  //open drawer
  const openDrawer = () => {
    dispatch({ type: ACTIONS.OPEN_DRAWER });
  };
  //close modal
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
