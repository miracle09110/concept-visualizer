import React from "react";
import style from "./explore.module.css";

const ExploreView = ({ concepts }) => {
  console.log(concepts);

  const conceptList = concepts.map(concept =>{
    if(concept==="Algorithms"){
        <div key={concept.category}> {concept.category}</div>
   
     
    }})
  
  return (
    <div className={style.explore_container} id="explore">
      <h2>Explore</h2>

      {conceptList}
      <div className={style.card}>
        <div className={style.text_container}>
          <h3 className={style.main_text}>Algorithms</h3>
          <p className={style.sub_text}></p>
        </div>
        <div className={style.placeholder}>img/gif/video placeholder</div>
      </div>
    </div>
  );
};

export default ExploreView;
