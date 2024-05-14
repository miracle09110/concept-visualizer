import style from "./BubbleSort.module.css";
import { motion } from "framer-motion";

function BubbleSort({ settings }) {
  const {
    spring,
    array,
    ind1,
    ind2,
    complete,
    ongoing,
    setOngoing,
    handleReset,
    start,
    compare,
  } = settings;
  //   const copy = [...array];

  //   // checks if the demo array is arranged exactly as to that of the memoed solution.
  //   if (
  //     ind1 === copy.length - 2 &&
  //     ind2 === copy.length - 1 &&
  //     result.every((value, index) => value === copy[index])
  //   ) {
  //     setOngoing(false);
  //     setComplete(true);
  //     setInd1(-1);
  //     setInd2(-1);
  //     return;
  //   }

  //   // checks if ind1 and ind2 are at the end of the array and checks the last two elements if arranged properly. if yes, will iterate over the array again
  //   if (
  //     ind1 === copy.length - 2 &&
  //     ind2 === copy.length - 1 &&
  //     copy[ind1].number <= copy[ind2].number
  //   ) {
  //     setInd1(0);
  //     setInd2(1);
  //     return;
  //   }

  //   // checks if left element is smaller than right element. if yes, proceed to next element.
  //   if (copy[ind1].number <= copy[ind2].number) {
  //     setInd1((i) => i + 1);
  //     setInd2((i) => i + 1);
  //   } else {
  //     let temp = copy[ind1];
  //     copy[ind1] = copy[ind2];
  //     copy[ind2] = temp;
  //   }
  //   setArray([...copy]);
  // }
  // console.log("array", array, `ind1: ${ind1}`, `ind2: ${ind2}`);
  // console.log("result", result);

  return (
    <section className={style.section}>
      <h1>Bubble Sort</h1>
      <div className={style.container}>
        {array.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              layout
              transition={spring}
              className={
                ind1 === index || ind2 === index ? style.selected : style.digits
              }
            >
              {item.number}
            </motion.div>
          );
        })}
      </div>
      <div className={style.btns}>
        <button
          disabled={!complete}
          className={style.button}
          onClick={() => start()}
        >
          Start
        </button>
        <button
          disabled={ind1 === -1}
          className={style.button}
          onClick={() => setOngoing(!ongoing)}
        >
          {ongoing ? "Pause" : "Play"}
        </button>
        <button
          className={style.button}
          onClick={compare}
          disabled={complete || ongoing}
        >
          Next
        </button>
      </div>
      <button className={style.button} onClick={handleReset}>
        Restart
      </button>
    </section>
  );
}

export default BubbleSort;
