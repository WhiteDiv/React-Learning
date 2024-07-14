import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../views/counter/counterSlice";

export default configureStore({
  reducer: {
    // 用于管理项目中注册的store模块
    counter: counterReducer,
  },
});
