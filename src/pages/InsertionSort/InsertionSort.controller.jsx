import React, { useEffect, useMemo, useState } from "react";
import InsertionSortView from "./InsertionSort.view";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j].number > currentValue.number; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

function InsertionSortController() {
  const [array, setArray] = useState([]);
  const [ind1, setInd1] = useState(-1);
  const [ind2, setInd2] = useState(-1);
  const [iteration, setIteration] = useState(null);
  const [commence, setCommence] = useState(false);
  const [complete, setComplete] = useState(true);
  const [ongoing, setOngoing] = useState(false);
  const result = useMemo(() => insertionSort([...array]), [array]);

  // initializes an array of random numbers
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

  // play/pause toggle
  useEffect(() => {
    if (!ongoing) return;

    const interval = setInterval(() => {
      compare();
    }, 750);

    return () => clearInterval(interval);
  }, [ongoing, ind1, ind2, array]);

  // starts the animation
  function start() {
    setCommence(true);
    setInd1(0);
    setInd2(1);
    setComplete(false);
    setOngoing(true);
  }

  // resets the array
  function handleReset() {
    setInd1(-1);
    setInd2(-1);
    setIteration(null);
    setComplete(true);
    setOngoing(false);
    initialize();
  }

  // sorting logic
  function compare() {
    const copy = [...array];

    // checks if all values are in place
    if (result.every((value, index) => value === copy[index])) {
      setOngoing(false);
      setComplete(true);
      setIteration(null);
      setInd1(-1);
      setInd2(-1);
      return;
    }

    // if copy[ind2] is less than copy[ind1], swap places. repeat step by moving backwards until copy[ind2] is greater than or equal to copy[ind1]. then move to the next iteration(index).
    if (ind1 >= 0) {
      if (copy[ind2].number < copy[ind1].number) {
        let temp = copy[ind1];
        copy[ind1] = copy[ind2];
        copy[ind2] = temp;
        setInd1((i) => i - 1);
        setInd2((i) => i - 1);
      } else {
        setIteration((i) => i + 1);
      }
    } else {
      setIteration((i) => i + 1);
    }

    setArray(copy);
    return;
  }

  // triggers when value of iteration is changed. does not trigger when sorting is complete. (if no first condition, it sets ind2 to 1 even if sorting is complete)
  useEffect(() => {
    if (complete) {
      return;
    }

    setInd1(iteration);
    setInd2(iteration + 1);
  }, [iteration]);

  const settings = {
    spring,
    array,
    ind1,
    ind2,
    iteration,
    complete,
    ongoing,
    setOngoing,
    start,
    handleReset,
    compare,
  };

  return <InsertionSortView settings={settings} />;
}

export default InsertionSortController;
