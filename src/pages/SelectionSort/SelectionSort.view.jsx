import style from "./SelectionSort.module.css";
import { motion } from "framer-motion";
import { TbDiamondsFilled } from "react-icons/tb";

function SelectionSortView({ settings }) {
  const {
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
  } = settings;

  const isMobile = document.body.clientWidth < 650;

  return (
    <section className={style.section}>
      <h1 className="mb-4">Selection Sort</h1>
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
              style={{ backgroundColor: item === lowest && "lightcoral" }}
            >
              <span
                className={`${
                  isMobile
                    ? "absolute mr-28 text-orange-500"
                    : "absolute mb-28 text-orange-500"
                }`}
              >
                {ind1 === index && <TbDiamondsFilled size={40} />}
              </span>
              {item.number}
            </motion.div>
          );
        })}
      </div>
      <div className={style.container} style={{ marginTop: "0px" }}>
        Current Lowest:{" "}
        <span
          className={style.digits}
          style={{ backgroundColor: "lightcoral" }}
        >
          {lowest.number || lowest.number === 0 ? lowest.number : <>&infin;</>}
        </span>
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

export default SelectionSortView;
