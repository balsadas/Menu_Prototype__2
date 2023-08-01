import Card from "../../components/ItemCard";
import Marquee from "./Marquee";
import "./css.css";

export default function Section({ id, index, name, lang, foods}) {
 
  return (
    <section id={id} className="sections">
      {index > 0 && <Marquee title={name[lang]} />}
      <div className="item-list">
        {Array.isArray(foods) ?
          foods.map((food) => (
            <Card key={"food_card_" + food.id} {...food} lang={lang} />
          )) : null}
      </div>
    </section>
  );
}
