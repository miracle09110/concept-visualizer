import React, { useEffect, useMemo, useState } from "react";
import BubbleSort from "./BubbleSort.view";

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
      if (arr[i].number > arr[i + 1].number) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

function BubbleSortController() {
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

  function handleReset() {
    setInd1(-1);
    setInd2(-1);
    setComplete(true);
    setOngoing(false);
    initialize();
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

  useEffect(() => {
    if (!ongoing) return;

    const interval = setInterval(() => {
      compare();
    }, 500);

    return () => clearInterval(interval);
  }, [ongoing, ind1, ind2, array]);

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
      copy[ind1].number <= copy[ind2].number
    ) {
      setInd1(0);
      setInd2(1);
      return;
    }

    // checks if left element is smaller than right element. if yes, proceed to next element.
    if (copy[ind1].number <= copy[ind2].number) {
      setInd1((i) => i + 1);
      setInd2((i) => i + 1);
    } else {
      let temp = copy[ind1];
      copy[ind1] = copy[ind2];
      copy[ind2] = temp;
    }
    setArray([...copy]);
  }

  const settings = {
    spring,
    bubbleSort,
    array,
    setArray,
    ind1,
    setInd1,
    ind2,
    setInd2,
    complete,
    setComplete,
    ongoing,
    setOngoing,
    result,
    initialize,
    handleReset,
    start,
    compare,
  };

  return <BubbleSort settings={settings} />;
}

export default BubbleSortController;
