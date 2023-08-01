import { Utils } from "../common";
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      Utils.setCookie("m-lang", action.lang, 365);
      return { ...state, lang: action.lang };

    case "SIGN_USER": {
      let user = action.user || {};
      Utils.setCookie("m-user_id", user.user_id, 365);
      Utils.setCookie("m-username", user.username, 365);
      Utils.setCookie("m-phone", user.phone, 365);
      Utils.setCookie("m-token", user.token, 365);
      return {
        ...state,
        token: user.token,
        user_id: user.user_id,
        username: user.username,
        phone: user.phone,
      };
    }
    case "SIGNOUT_USER": {
      Utils.eraseCookie("m-user_id");
      Utils.eraseCookie("m-username");
      Utils.eraseCookie("m-phone");
      Utils.eraseCookie("m-token");
      return {
        ...state,
        token: undefined,
        user_id: undefined,
        username: undefined,
        phone: undefined,
      };
    }

    case "SET_SITE_CONFIG":
      return { 
        ...state, 
        categories: action.categories,
        locales: action.locales,
        pages: action.pages,
        total_cart_products: action.total_cart_products
      };

    case "TOGGLE_MODE":
      Utils.setCookie("m-mode", action.mode, 365);

      return { ...state, mode: action.mode };

    case "SET_PAGES":
      return { ...state, pages: action.items };
    case "SET_LOCALES":
      return { ...state, locales: action.items };

    default:
      return state;
  }
}

export default reducer;