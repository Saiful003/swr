import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from "../actions/actions";
function useModal() {
  const { modal } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { isOpenModal, isLoginPage } = modal;

  //open modal
  const openModal = () => {
    dispatch({ type: ACTIONS.OPEN_MODAL });
  };

  //close modal
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
    if (!isLoginPage) {
      switchPage();
    }
  };
  // switch to login and sign in page
  const switchPage = () => {
    dispatch({ type: ACTIONS.SWITCHPAGE });
  };

  return {
    isOpenModal,
    isLoginPage,
    openModal,
    closeModal,
    switchPage,
  };
}

export default useModal;
