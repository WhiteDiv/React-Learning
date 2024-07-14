import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provider组件完成redux对根元素的注入
  <Provider store={store}>
    <App />
  </Provider>
);
