import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Router } from "./pages/Router.tsx";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: " #729eca",
          colorTextBase: " #1c2732",
          colorError: "#a00000",
          colorLink: "#2f5380",
        },
      }}
    >
      <Router />
    </ConfigProvider>
  </React.StrictMode>
);
