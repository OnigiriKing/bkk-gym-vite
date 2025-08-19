import React from "react";
import ReactDOM from "react-dom/client";
import "./dist/style.css";
import "./style/customClass.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./features/Redux/store";
import { Provider } from "react-redux";



const container = document.getElementById("root");
if (!container) throw new Error("Root element not found");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
