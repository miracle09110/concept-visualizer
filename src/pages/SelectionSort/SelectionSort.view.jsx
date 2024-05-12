import React, { useState } from "react";
import style from "./SelectionSort.module.css";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

function SelectionSort() {
  const [array, setArray] = useState([6, 42, 5, 10, 10, 3, 27, -1, 29]);
  const [ind1, setInd1] = useState(-1);
  const [ind2, setInd2] = useState(-1);
  const [lowest, setLowest] = useState(null);
  const [lowestIndex, setLowestIndex] = useState(null);

  function start() {
    setInd1(0);
    setInd2(1);
    setLowest(array[0]);
  }

  console.log(lowest);

  function compare() {
    const copy = [...array];

    if (copy[ind2] < lowest) {
      setLowest(copy[ind2]);
      setLowestIndex(ind2);
      setInd2((i) => i + 1);
    } else {
      setInd2((i) => i + 1);
    }

    if (ind2 === array.length - 1 && copy[ind2] >= lowest) {
      let temp = copy[ind1];
      copy[ind1] = copy[lowestIndex];
      copy[lowestIndex] = temp;
      setInd1((i) => i + 1);
      setInd2(ind1 + 1);
      setLowest(array[ind1]);
      setLowestIndex(null);
    }
    setArray((a) => [...copy]);
  }
  // console.log(`array: ${array}`, `ind1: ${ind1}`, `ind2: ${ind2}`);
  // console.log(`result: ${result}`);

  return (
    <section className={style.section}>
      <h1>Selection Sort</h1>
      <div className={style.container}>
        {array.map((item, index) => {
          return (
            <motion.div
              key={`${item}` + `${index}`}
              layout
              transition={spring}
              className={
                ind1 === index || ind2 === index ? style.selected : style.digits
              }
            >
              {item}
            </motion.div>
          );
        })}
      </div>
      <div style={{ marginTop: "16px" }}>
        {!lowest ? "Press Start" : `Lowest: ${lowest}`}
      </div>
      <div className={style.container}>
        <button className={style.button} onClick={() => start()}>
          start
        </button>
        <button
          className={style.button}
          onClick={() => setArray((a) => bubbleSort([...a]))}
        >
          sort
        </button>
        <button className={style.button} onClick={compare}>
          next
        </button>
      </div>
    </section>
  );
}

export default SelectionSort;
