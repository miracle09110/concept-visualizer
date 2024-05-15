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
        <button className={style.button} onClick={handleReset}>
          Restart
        </button>
      </div>
    </section>
  );
}

export default BubbleSort;
