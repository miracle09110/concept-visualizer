import React from "react";
import style from "./nodejs.module.css";
import Cards from "../../components/Cards/Cards.view";

function NodejsView({ conceptItems }) {
  const conceptCards = conceptItems.items.map((item) => {
    return <Cards key={item.title} title={item.title} subtitle={item.subtitle} image={item.image} link={item.link} />;
  });

  return (
    <section className={style.container} id="nodejs">
      <h1>{conceptItems.category}</h1>
      <div className={style.concept_container}>{conceptCards}</div>
    </section>
  );
}

export default NodejsView;
