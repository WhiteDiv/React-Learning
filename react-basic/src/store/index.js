import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counter";

const store = configureStore({
  reducer: {
    // 用于管理项目中注册的store模块
    count: counterReducer,
  },
});

export default store;
