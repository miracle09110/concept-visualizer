import Cards from "../../components/Cards/Cards.view";
import style from "./SortingPage.module.css";

function SortingPage() {
  return (
    <div className={style.page}>
      <header className={style.header}>
        <p>Concept Visualizer |</p>
        <span>Sorting Algorithms</span>
      </header>
      <main className={style.main}>
        <div className={style.lesson_container}>
          <Cards title={"Bubble Sort"} subtitle={"O(n^2)"} image={""} />
          <Cards
            title={"Selection Sort"}
            subtitle={"O(n^2)"}
            image={"/selection-sort.png"}
          />
          <Cards title={"Insertion Sort"} subtitle={"O(n^2)"} image={""} />
          <Cards
            title={"Quick Sort"}
            subtitle={"O(n logn)"}
            image={"/quick-sort.png"}
          />
          <Cards title={"Merge Sort"} subtitle={"O(n logn)"} image={""} />
        </div>
      </main>
    </div>
  );
}

export default SortingPage;
