import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  isOpenModal: false,
  isLoginPage: true,
  currentModal: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.isOpenModal = true;
      state.currentModal = action.payload;
    },
    closeModal: (state) => {
      state.isOpenModal = false;
    },
    switchPage: (state) => {
      state.isLoginPage = !state.isLoginPage;
    },
  },
});
export default modalSlice.reducer;
const { openModal, closeModal, switchPage } = modalSlice.actions;
export const useModal = () => {
  return { openModal, closeModal, switchPage } as const;
};
