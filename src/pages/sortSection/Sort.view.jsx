import React from "react";
import style from "./sort.module.css";
import Cards from "../../components/Cards/Cards.view";

function SortView({ conceptItems }) {
  const conceptCards = conceptItems.map((item) => {
    return (
      <Cards
        key={item.title}
        title={item.title}
        subtitle={item.subtitle}
        image={item.image}
        link={item.link}
      />
    );
  });

  return (
    <section className={style.container} id="sort">
      <div className={style.sort_card}>
        <h1>Sort Algorithms</h1>
        <div className={style.concept_container}>{conceptCards}</div>
      </div>
    </section>
  );
}

export default SortView;
