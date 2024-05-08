import React from "react";
import style from "./explore.module.css";

const ExploreView = ({ concepts }) => {
  console.log(concepts);

  const conceptList = concepts.map((concept) => {
    return (
      <div className={style.card}>
        <h3 className={style.main_text} key={concept.category}>
          {concept.category}
        </h3>

        <div className={style.item_container}>
          {concept.items.map((item) => (
            <div className={style.item}>
              <a>{item}</a>
              <div className={style.placeholder}></div>
            </div>
          ))}
        </div>
      </div>
    );
  });

  return (
    <div className={style.explore_container} id="explore">
      <h2>Explore</h2>

      {conceptList}
     
    </div>
  );
};

export default ExploreView;
