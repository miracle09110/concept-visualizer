import React from "react";
import SortView from "../../sortSection/Sort.view";
import SearchView from "../../searchSection/Search.view";
import NodejsView from "../../nodejsSection/Nodejs.view";
import ReactView from "../../reactSection/React.view";

const ExploreView = ({ concepts }) => {
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
    <div id="explore">
      <SortView conceptItems={sortConcept} />
      <SearchView conceptItems={searchConcept} />
      <ReactView conceptItems={reactConcept} />
      <NodejsView conceptItems={nodejsConcept} />
    </div>
  );
};

export default ExploreView;
