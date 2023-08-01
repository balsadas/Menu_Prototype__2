import BackButton from "../../assets/icons/BackButton";
import { Link as ScrollLink } from "../../components/ReactScroll/index";
import { Link } from "react-router-dom";
import  Constants  from "../../common/Constants";

import "./css.css";

function Navbar({ lang, catalog }) {
  return (
    <div className="c-navbar">
      <div>
        <Link to={Constants._catalog}>
          <BackButton color="currentColor" />
        </Link>
        <div id="navHolder">
          {Array.isArray(catalog) &&
            catalog.map((c) => (
              <ScrollLink
                key={"catalog_" + c.id}
                href={"#" + c.id}
                to={String(c.id)}
                id={"_" + c.id}
                smooth={true}
                duration={500}
                offset={-75}
              >
                {c.name[lang]}
              </ScrollLink>
            ))}
        </div>
        <span />
      </div>
    </div>
  );
}

export default Navbar;
