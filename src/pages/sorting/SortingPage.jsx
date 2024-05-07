import "./SortingPage.css";
import {} from "react-icons";
import Cards from "./Cards";

function SortingPage() {
  return (
    <div className="page">
      <header>
        <span>Sorting</span>
        <span>Algorithms</span>
      </header>
      <main>
        <div className="lesson-container">
          <Cards title={"Bubble Sort"} subtitle={"O(n^2)"} color={"#A3D8FF"} />
          <Cards
            title={"Selection Sort"}
            subtitle={"O(n^2)"}
            color={"#A3D8FF"}
          />
          <Cards
            title={"Insertion Sort"}
            subtitle={"O(n^2)"}
            color={"#A3D8FF"}
          />
          <Cards
            title={"Quick Sort"}
            subtitle={"O(n logn)"}
            color={"#A3D8FF"}
          />
          <Cards
            title={"Merge Sort"}
            subtitle={"O(n logn)"}
            color={"#A3D8FF"}
          />
        </div>
      </main>
    </div>
  );
}

export default SortingPage;
