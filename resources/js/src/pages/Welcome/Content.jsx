import { Locales, Constants } from "../../common";

import ContactUs from "../../components/ContactUs/ContactUs";
import HalfMoon from "../../assets/icons/HalfMoon";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context";
import Logo from "../../assets/icons/Logo";

import "./css.css";
import Sun from "../../assets/icons/Sun";

function Content() {
    const navigate = useNavigate();
    const { state, dispatch } = useAppContext();
    return (
        <div
            className="main-content "
            style={{
                backgroundColor: state.mode == "dark" ? "#151E1A" : "#DFE8E2",
            }}
        >
            <div className="main_1">
                <center>
                    <h1
                        style={{
                            userSelect: "none",
                            paddingTop: "50px",
                            color: state.mode == "dark" ? "#fff" : "#384D42",
                        }}
                    >
                        {Locales[state.lang].appName}
                    </h1>
                    <Logo color={"currentColor"} />
                </center>
                <div className="lang-content">
                    <h4
                        style={{
                            color: state.mode == "dark" ? "#fff" : "#384D42",
                        }}
                    >
                        {Locales[state.lang].ChooseLanguage}
                    </h4>
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
                        style={{ userSelect: "none", cursor: "pointer" }}
                        onClick={function () {
                            const mode =
                                state.mode === "dark" ? "light" : "dark";
                            document.body.classList.toggle("dark-mode");
                            dispatch({ type: "TOGGLE_MODE", mode });
                        }}
                    >
                        {state.mode == "dark" ? (
                            <Sun />
                        ) : (
                            <HalfMoon color={"currentColor"} />
                        )}

                        {
                            Locales[state.lang][
                                state.mode === "dark" ? "LightMode" : "DarkMode"
                            ]
                        }
                    </span>
                </div>
                <ContactUs />
            </div>
        </div>
    );
}

export default Content;
