import React from "react";

function ReactLandingPage() {
  return (
    <div className={style.page}>
      <header className={style.header}>
        <p>Concept Visualizer |</p>
        <span>React JS Concepts</span>
      </header>
      <main className={style.main}>
        <div className={style.lesson_container}>
          <Cards title={"Bubble Sort"} subtitle={"O(n^2)"} image={""} />
          <Cards title={"Selection Sort"} subtitle={"O(n^2)"} image={""} />
          <Cards title={"Insertion Sort"} subtitle={"O(n^2)"} image={""} />
          <Cards title={"Quick Sort"} subtitle={"O(n logn)"} image={""} />
          <Cards title={"Merge Sort"} subtitle={"O(n logn)"} image={""} />
        </div>
      </main>
    </div>
  );
}

export default ReactLandingPage;
