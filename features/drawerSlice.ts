import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenDrawer: false,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isOpenDrawer = true;
    },
    closeDrawer: (state) => {
      state.isOpenDrawer = false;
    },
  },
});
export default drawerSlice.reducer;
const { openDrawer, closeDrawer } = drawerSlice.actions;
export const useDrawer = () => {
  return {
    openDrawer,
    closeDrawer,
  } as const;
};
