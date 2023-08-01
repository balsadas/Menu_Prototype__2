import BackButton from "../../assets/icons/BackButton";
import Locales from "../../common/Locales";
import  Constants  from "../../common/Constants";
import { Link } from "react-router-dom";
import "./css.css";
import { useAppContext } from "../../Context";

function Navbar({ lang }) {
  const {state} = useAppContext()
  return (
    <div className="c-navbar">
      <div>
        <Link to={Constants._welcome}>
          <BackButton color="currentColor" />
        </Link>
        <h4 style={{color: state.mode == 'dark' ? '#EDB032' : '#000'}}>{Locales[lang].Categories}</h4>
        <span />
      </div>
    </div>
  );
}

export default Navbar;
