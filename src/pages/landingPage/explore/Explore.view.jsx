import React from "react";
import style from "./explore.module.css";
import SortView from "../../sortSection/Sort.view";
import SearchView from "../../searchSection/Search.view";
import NodejsView from "../../nodejsSection/Nodejs.view";
import ReactView from "../../reactSection/React.view";
import HeaderView from "../header/header.view";

const ExploreView = ({ concepts }) => {
  const conceptList = concepts.map((concept) => {
    return (
      <div key={concept.category} className={style.card}>
        <h3 className={style.main_text} key={concept.category}>
          {concept.category}
        </h3>

        <div className={style.item_container}>
          {concept.items.map((item) => (
            <div key={item} className={style.item}>
              <a>{item}</a>
              <div className={style.placeholder}></div>
            </div>
          ))}
        </div>
      </div>
    );
  });

  const sortConcept = concepts.find(
    (item) => item.category === "Sort Algorithms"
  );
  const searchConcept = concepts.find(
    (item) => item.category === "Search Algorithms"
  );
  const nodejsConcept = concepts.find(
    (item) => item.category === "Web Concepts"
  );
  const reactConcept = concepts.find(
    (item) => item.category === "React Concepts"
  );

  return (
    <div className={style.explore_container} id="explore">
      <HeaderView />
      <h2>Algorithms</h2>
      <SearchView conceptItems={searchConcept} />
      <SortView conceptItems={sortConcept} />
      <NodejsView conceptItems={nodejsConcept} />
      <ReactView conceptItems={reactConcept} />

      {/* {conceptList} */}
    </div>
  );
};

export default ExploreView;
