import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from "../actions/actions";
function useModal() {
  const { modal } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { isOpenModal } = modal;

  //open modal
  const openModal = () => {
    dispatch({ type: ACTIONS.OPEN_MODAL });
  };
  //close modal
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  return {
    isOpenModal,
    openModal,
    closeModal,
  };
}

export default useModal;
