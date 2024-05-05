import "./SortingPage.css";
import {} from "react-icons";
import Cards from "./Cards";

function SortingPage() {
  return (
    <div className="page">
      <header>
        <span style={{ color: "gray", fontWeight: 600 }}>Learn</span>
        <span>Algorithms</span>
      </header>
      <main>
        <h1>Sorting Algorithms</h1>
        <div className="lesson-container">
          <Cards title={"Bubble Sort"} subtitle={"O(n^2)"} color={"#FF76CE"} />
          <Cards
            title={"Selection Sort"}
            subtitle={"O(n^2)"}
            color={"#FF76CE"}
          />
          <Cards
            title={"Insertion Sort"}
            subtitle={"O(n^2)"}
            color={"#FF76CE"}
          />
          <Cards
            title={"Quick Sort"}
            subtitle={"O(n logn)"}
            color={"#94FFD8"}
          />
          <Cards
            title={"Merge Sort"}
            subtitle={"O(n logn)"}
            color={"#94FFD8"}
          />
        </div>
      </main>
    </div>
  );
}

export default SortingPage;
