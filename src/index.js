//1. 第三方库
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

// 2.自己的资源
import App from "./App";
// 样式重置
import "normalize.css";
import "@/asserts/css/index.less";

// 导入store
import store from "./store";

// 导入主体样式
import { ThemeProvider } from "styled-components";
import theme from "./asserts/theme";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
      <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
  // </React.StrictMode>
);
