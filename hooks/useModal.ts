import { useAppSelector, useAppDispatch } from "./redux-hooks/tsVersionHooks";
import { openModal, closeModal, switchPage } from "../features/modalSlice";

export const useModal = () => {
  const {
    myModal: { isLoginPage, isOpenModal, currentModal },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleOpenModal = (modalType: string) => {
    dispatch(openModal(modalType));
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
    if (!isLoginPage) {
      handleSwitchPage();
    }
  };
  const handleSwitchPage = () => {
    dispatch(switchPage());
  };
  return {
    isLoginPage,
    isOpenModal,
    currentModal,
    handleOpenModal,
    handleCloseModal,
    handleSwitchPage,
  };
};
