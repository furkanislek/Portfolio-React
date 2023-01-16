import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({

  name: "siteSettings",
  initialState: {
    dark: false,
    language: true,
  },
  reducers: {
    setDarkMode: (state) => {
      state.dark = !state.dark;
    },
    setLanguage: (state) => {
      state.language = !state.language;
    },
  },
});

export const { setDarkMode, setLanguage } = site.actions;
export default site.reducer;
