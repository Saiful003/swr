import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLightTheme: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
