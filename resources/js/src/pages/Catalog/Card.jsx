import { Constants } from "../../common";
import { Link } from "react-router-dom";
import "./css.css";

export default function Card({ id, name, image, lang }) {
  return (
    <Link to={Constants._items + "#" + id} className="card">
      <img
        src={image}
        alt={id}
      />
      <div>
        <h5>{name[lang]}</h5>
      </div>
    </Link>
  );
}
