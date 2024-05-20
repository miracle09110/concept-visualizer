import React from "react";
import style from "./react.module.css";
import { Link } from "react-router-dom";

function ReactView({ conceptItems }) {
  const conceptCards = conceptItems.items.map((item) => {
    return (
      <Link to={item.link} className={style.card}>
        <div className={style.card_img}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={style.card_text}>
          <h1>{item.title}</h1>
          <p>{item.subtitle}</p>
        </div>
      </Link>
    );
  });

  return (
    <section className={style.container} id="react">
      <h1>{conceptItems.category}</h1>
      <p>{conceptItems.description}</p>
      <div className={style.concept_container}>{conceptCards}</div>
    </section>
  );
}

export default ReactView;
