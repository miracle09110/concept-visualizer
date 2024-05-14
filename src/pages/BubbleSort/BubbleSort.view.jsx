import React, { useEffect, useMemo, useState } from "react";
import style from "./BubbleSort.module.css";
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

function BubbleSort() {
  const [array, setArray] = useState([]);
  const [ind1, setInd1] = useState(-1);
  const [ind2, setInd2] = useState(-1);
  const [complete, setComplete] = useState(true);
  const [ongoing, setOngoing] = useState(false);
  const result = useMemo(() => bubbleSort([...array]), [array]);

  function initialize(num = 8) {
    const randomArray = [...Array(num)].map((_, index) => {
      return {
        id: index,
        number: Math.floor(Math.random() * 50) - 10,
      };
    });
    setArray(randomArray);
  }

  useEffect(() => {
    initialize();
  }, []);

  function start() {
    setInd1(0);
    setInd2(1);
    setComplete(false);
    setOngoing(true);
  }

  function compare() {
    const copy = [...array];

    // checks if the demo array is arranged exactly as to that of the memoed solution.
    // if (
    //   ind1 === copy.length - 2 &&
    //   ind2 === copy.length - 1 &&
    //   result.every((value, index) => value.number === copy[index].number)
    // ) {
    //   setOngoing(false);
    //   setComplete(true);
    //   setInd1(-1);
    //   setInd2(-1);
    //   return;
    // }

    // checks if ind1 and ind2 are at the end of the array and checks the last two elements if arranged properly. if yes, will iterate over the array again
    // if (
    //   ind1 === copy.length - 2 &&
    //   ind2 === copy.length - 1 &&
    //   copy[ind1].number < copy[ind2].number
    // ) {
    //   setInd1(0);
    //   setInd2(1);
    //   return;
    // }

    // checks if left element is smaller than right element. if yes, proceed to next element.
    if (copy[ind1].number <= copy[ind2].number) {
      setInd1((i) => i + 1);
      setInd2((i) => i + 1);
    } else {
      let temp = copy[ind1];
      copy[ind1] = copy[ind2];
      copy[ind2] = temp;
    }
    setArray((a) => [...copy]);
  }
  console.log(`array: ${array}`, `ind1: ${ind1}`, `ind2: ${ind2}`);
  console.log(`result: ${result}`);

  return (
    <section className={style.section}>
      <h1>Bubble Sort</h1>
      <div className={style.container}>
        {array.map((item) => {
          return (
            <motion.div
              key={item.id}
              layout
              transition={spring}
              className={
                ind1 === item.id || ind2 === item.id
                  ? style.selected
                  : style.digits
              }
            >
              {item.number}
            </motion.div>
          );
        })}
      </div>
      <div className={style.btns}>
        <button
          disabled={ongoing}
          className={style.button}
          onClick={() => start()}
        >
          start
        </button>
        <button
          className={style.button}
          onClick={() => setArray((a) => bubbleSort([...a]))}
        >
          sort
        </button>
        <button className={style.button} onClick={compare} disabled={complete}>
          next
        </button>
        <button className={style.button} onClick={() => initialize()}>
          init
        </button>
      </div>
    </section>
  );
}

export default BubbleSort;
