import { motion } from "framer-motion";
import style from "./insertionSort.module.css";
import { TbDiamondsFilled } from "react-icons/tb";

function InsertionSortView({ settings }) {
  const {
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
  } = settings;

  const isMobile = document.body.clientWidth < 650;

  return (
    <section className={style.section}>
      <h1>Insertion Sort</h1>
      <div className="flex pr-12 min-[650px]:flex-col min-[650px]:pr-0">
        <div
          className={style.container}
          style={{ marginBottom: !isMobile ? 0 : "2rem" }}
        >
          {[...Array(array.length)].map((_, index) => {
            return (
              <div
                className={style.digits}
                style={{ backgroundColor: "transparent" }}
              >
                {iteration === index && (
                  <TbDiamondsFilled size={40} color="orange" />
                )}
              </div>
            );
          })}
        </div>
        <div
          className={style.container}
          style={{ marginTop: !isMobile ? 0 : "2rem" }}
        >
          {array.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                layout
                transition={spring}
                className={
                  ind1 === index || ind2 === index
                    ? style.selected
                    : style.digits
                }
              >
                {item.number}
              </motion.div>
            );
          })}
        </div>
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
          disabled={complete}
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

export default InsertionSortView;
