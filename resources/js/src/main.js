import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./Context";
import AppRoutes from "./Routes";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/index.css";


if (document.getElementById("com.ayegenmyradow")) {
    ReactDOM.render(
       
        <Provider>
        
            <AppRoutes />
        </Provider>,
        document.getElementById("com.ayegenmyradow")
    );
}
