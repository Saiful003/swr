import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  light: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.light = !state.light;
    },
  },
});
export default themeSlice.reducer;
export const { switchTheme } = themeSlice.actions;
