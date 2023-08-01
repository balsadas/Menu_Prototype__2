import { Locales, Constants } from "../../common";

import ContactUs from "../../components/ContactUs/ContactUs";
import HalfMoon from "../../assets/icons/HalfMoon";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context";
import Logo from "../../assets/icons/Logo";

import "./css.css";

function Content() {
  const navigate = useNavigate();
  const { state, dispatch } = useAppContext();
  return (
    <div className="main-content" >
      <center>
        <h1 style={{userSelect:'none', paddingTop:'50px', }}>{Locales[state.lang].appName}</h1>
        <Logo color={"currentColor"} />
      </center>
      <div className="lang-content">
        <h4>{Locales[state.lang].ChooseLanguage}</h4>
        {Constants.appLocales.map((lang) => (
          <button
            key={lang}
            onClick={function () {
              dispatch({ type: "CHANGE_LANGUAGE", lang });
              navigate(Constants._catalog);
            }}
          >
            {Locales[state.lang][lang]}
          </button>
        ))}
        <span
        style={{userSelect:'none',cursor:'pointer'}}
          onClick={function () {
            const mode = state.mode === "dark" ? "light" : "dark";
            document.body.classList.toggle("dark-mode");
            dispatch({ type: "TOGGLE_MODE", mode });
          }}
        >
          <HalfMoon color={"currentColor"} />
          {Locales[state.lang][state.mode === 'dark' ? 'LightMode' : 'DarkMode']}
        </span>
      </div>
      <ContactUs/>
    </div>
  );
}

export default Content;
