import { configureStore } from "@reduxjs/toolkit";
import siteReducer from "./siteSlicer";

export default configureStore({
  reducer: {
    site: siteReducer
  }
});
