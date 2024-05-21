import React, { useEffect, useMemo, useState } from "react";
import SelectionSortView from "./SelectionSort.view";

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

function SelectionSortController() {
  const [array, setArray] = useState([]);
  const [ind1, setInd1] = useState(-1);
  const [ind2, setInd2] = useState(-1);
  const [lowest, setLowest] = useState({});
  const [indexOfLowest, setIndexOfLowest] = useState(null);
  const [iteration, setIteration] = useState(null);
  const [commence, setCommence] = useState(false);
  const [complete, setComplete] = useState(true);
  const [ongoing, setOngoing] = useState(false);
  const result = useMemo(() => bubbleSort([...array]), [array]);

  useEffect(() => {
    if (!commence) {
      return;
    }

    if (iteration >= array.length - 1) {
      setCommence(false);
      return;
    }

    setInd1(iteration);
    setInd2(iteration);
    setLowest(array[iteration]);
    setIndexOfLowest(iteration);
  }, [iteration]);

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
    setLowest({});
    setIndexOfLowest(null);
    setIteration(null);
    setCommence(false);
    setComplete(true);
    setOngoing(false);
    initialize();
  }

  useEffect(() => {
    initialize();
  }, []);

  function start() {
    setCommence(true);
    setIteration(0);
    setComplete(false);
    setOngoing(true);
  }

  useEffect(() => {
    if (!ongoing) return;

    const interval = setInterval(() => {
      compare();
    }, 750);

    return () => clearInterval(interval);
  }, [ongoing, ind1, ind2, array]);

  function compare() {
    const copy = [...array];

    if (result.every((value, index) => value === copy[index])) {
      setOngoing(false);
      setComplete(true);
      setInd1(-1);
      setInd2(-1);
      setLowest({});
      return;
    }

    if (ind2 < array.length) {
      if (copy[ind2].number <= lowest.number) {
        setLowest(copy[ind2]);
        setIndexOfLowest(ind2);
      }
      setInd2((i) => i + 1);
    }

    if (ind2 === array.length) {
      if (indexOfLowest !== ind1) {
        let temp = copy[ind1];
        copy[ind1] = copy[indexOfLowest];
        copy[indexOfLowest] = temp;
      }

      setArray(copy);
      setIteration((i) => i + 1);
    }
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
      indexOfLowest,
      "result",
      result
    );
  }, [ind1, ind2]);

  const settings = {
    spring,
    array,
    ind1,
    ind2,
    lowest,
    complete,
    ongoing,
    setOngoing,
    handleReset,
    start,
    compare,
  };

  return <SelectionSortView settings={settings} />;
}

export default SelectionSortController;
