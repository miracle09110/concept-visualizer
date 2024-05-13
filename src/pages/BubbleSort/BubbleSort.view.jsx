import React, { useMemo, useState } from "react";
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
  const [input, setInput] = useState("");
  const [array, setArray] = useState([6, 42, 5, 10, 3, 27, -1, 29]);
  const [ind1, setInd1] = useState(-1);
  const [ind2, setInd2] = useState(-1);
  const [complete, setComplete] = useState(true);
  const [ongoing, setOngoing] = useState(false);
  const result = useMemo(() => bubbleSort([...array]), [array]);

  function handleDigitInput(e) {
    const allowedCharacters = /[0-9,\s]/;
    if (!allowedCharacters.test(e.key)) {
      return;
    } else {
      setInput(() => e.target.value);
    }
  }

  function handleInitializeArray() {
    let numbersArray = input.split(/\s*,\s*|\s+/).map((n) => Number(n));
    setArray(numbersArray);
  }

  function start() {
    setInd1(0);
    setInd2(1);
    setComplete(false);
    setOngoing(true);
  }

  function compare() {
    const copy = [...array];

    // checks if the demo array is arranged exactly as to that of the memoed solution.
    if (
      ind1 === copy.length - 2 &&
      ind2 === copy.length - 1 &&
      result.every((value, index) => value === copy[index])
    ) {
      setOngoing(false);
      setComplete(true);
      setInd1(-1);
      setInd2(-1);
      return;
    }

    // checks if ind1 and ind2 are at the end of the array and checks the last two elements if arranged properly. if yes, will iterate over the array again
    if (
      ind1 === copy.length - 2 &&
      ind2 === copy.length - 1 &&
      copy[ind1] < copy[ind2]
    ) {
      setInd1(0);
      setInd2(1);
      return;
    }

    // checks if left element is smaller than right element. if yes, proceed to next element.
    if (copy[ind1] <= copy[ind2]) {
      setInd1((i) => i + 1);
      setInd2((i) => i + 1);
    } else {
      let temp = copy[ind1];
      copy[ind1] = copy[ind2];
      copy[ind2] = temp;
    }
    setArray((a) => [...copy]);
  }
  // console.log(`array: ${array}`, `ind1: ${ind1}`, `ind2: ${ind2}`);
  // console.log(`result: ${result}`);

  return (
    <section className={style.section}>
      <h1>Bubble Sort</h1>
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
      <div className={style.container} style={{ flexDirection: "column" }}>
        <input
          type="text"
          value={input}
          className={style.input}
          onChange={handleDigitInput}
        />
        <button className={style.button} onClick={handleInitializeArray}>
          go
        </button>
      </div>
      <div className={style.container}>
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
      </div>
    </section>
  );
}

export default BubbleSort;
