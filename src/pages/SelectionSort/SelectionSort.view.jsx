import React, { useEffect, useState } from "react";
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
  const [array, setArray] = useState([6, 42, 5, 10, 3, 27, -1, 29]);
  const [ind1, setInd1] = useState(-1);
  const [ind2, setInd2] = useState(-1);
  const [lowest, setLowest] = useState(null);
  const [indexOfLowest, setIndexOfLowest] = useState(null);
  const [iteration, setIteration] = useState(null);
  const [commence, setCommence] = useState(false);

  // proceeds to the next iteration by incrementing the previous ind1 by 1 so that the arranged digits will not be iterated again.
  useEffect(() => {
    if (!commence) {
      return;
    }

    if (iteration >= array.length - 1) {
      setCommence(false);
      return;
    }

    setInd1(iteration);
    setInd2(iteration + 1);
    setLowest(array[iteration]);
    setIndexOfLowest(iteration);
  }, [iteration]);

  function start() {
    setCommence(true);
    setIteration(0);
  }

  function compare() {
    // const copy = [...array];

    // if (ind2 >= array.length) {
    //   return;
    // }

    // if (copy[ind2] <= lowest) {
    //   setLowest(copy[ind2]);
    //   setIndexOfLowest(ind2);
    // }

    // if (ind2 === array.length - 1) {
    //   let temp = copy[ind1];
    //   copy[ind1] = copy[indexOfLowest];
    //   copy[indexOfLowest] = temp;

    //   setArray(copy);
    //   setIteration((i) => i + 1);
    // } else {
    //   setInd2((i) => i + 1);
    // }
    const copy = [...array];

    // if (
    //   ind1 === array.length - 2 &&
    //   ind2 === array.length - 1 &&
    //   copy[ind2] <= lowest
    // ) {
    //   let temp = copy[ind1];
    //   copy[ind1] = copy[indexOfLowest];
    //   copy[indexOfLowest] = temp;
    //   setCommence(false);
    //   return;
    // }

    if (ind2 >= array.length) {
      return;
    }

    if (ind1 === array.length - 2 && ind2 === array.length - 1) {
      if (copy[ind2] <= lowest) {
        let temp = copy[ind1];
        copy[ind1] = copy[indexOfLowest];
        copy[indexOfLowest] = temp;
      }
    }

    // // if array[index 2] is lower than or equal to the current lowest, set it as the new lowest and store its index then proceed to next element. if array[index 2] is greater, just proceed to next element.
    if (copy[ind2] <= lowest) {
      setLowest(copy[ind2]);
      setIndexOfLowest(ind2);
      setInd2((i) => i + 1);
    } else {
      setInd2((i) => i + 1);
    }

    // if index 2 is at the last element and that element is greater than or equal to the lowest,
    if (ind2 === array.length - 1 && copy[ind2] >= lowest) {
      let temp = copy[ind1];
      copy[ind1] = copy[indexOfLowest];
      copy[indexOfLowest] = temp;

      setTimeout(() => {
        setIteration((i) => i + 1);
      }, 500);
    }

    setArray((a) => [...copy]);
  }

  useEffect(() => {
    console.log(
      "array",
      array,
      `ind1: ${ind1}`,
      `ind2: ${ind2}`,
      "lowest",
      lowest,
      "indexOfLowest",
      indexOfLowest
    );
  }, [ind1, ind2]);

  return (
    <section className={style.section}>
      <h1>Selection Sort</h1>
      <div className={style.container}>
        {array.map((item, index) => {
          return (
            <motion.div
              key={item}
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
        {!commence ? "Press Start" : `Lowest: ${lowest}`}
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
