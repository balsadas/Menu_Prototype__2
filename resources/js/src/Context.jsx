import { useReducer, createContext, useContext } from "react";
import MainReducer from "./reducers/index";
import Utils from "./common/Utils";
import  Constants  from "./common/Constants";


// initial state
const initialState = {
  lang: Utils.getCookie("m-lang"),
  token: Utils.getCookie("m-token"),
  phone: Utils.getCookie("m-phone"),
  username: Utils.getCookie("m-username"),
  user_id: Number(Utils.getCookie("m-user_id")),
  mode: Utils.getCookie("m-mode") || "light",
};


if (!Constants.appLocales.includes(initialState.lang)){
  initialState.lang = "tm";
}


// create context
const Context = createContext(initialState);

const Provider = function ({ children }) {
  const [state, dispatch] = useReducer(MainReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

const useAppContext = () => useContext(Context);

// eslint-disable-next-line react-refresh/only-export-components
export { Context, Provider, useAppContext };
