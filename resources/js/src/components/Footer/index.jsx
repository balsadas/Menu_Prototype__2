import Constants from "../../common/Constants";
import "./css.css";

function Footer() {
  return (
    <footer className="powered">
      <a href="http://www.pikir.biz" style={{color: 'inherit', textDecoration: 'none'}} target="_blank">{Constants.Powered}</a>
    </footer>
  );
}

export default Footer;
