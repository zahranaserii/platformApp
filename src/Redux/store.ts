import { configureStore } from "@reduxjs/toolkit";
import LanguageReducer from "./Reducers/LanguageReducer";
import LoginReducer from "./Reducers/LoginReducer";
import ThemeReducer from "./Reducers/ThemeReducer";
const store = configureStore({
  reducer: {
    language: LanguageReducer,
    theme:ThemeReducer,
    token:LoginReducer
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
