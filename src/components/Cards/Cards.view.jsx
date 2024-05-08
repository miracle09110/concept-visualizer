import PropTypes from "prop-types";
import { FaAngleRight } from "react-icons/fa6";
import style from "./cards.module.css";

function Cards({ title, subtitle, image }) {
  return (
    <div className={style.card}>
      <div className={style.card_img}>
        <img src={image} />
      </div>
      <div className={style.card_text}>
        <div className={style.overlay}></div>
        <span className={style.card_title}>{title}</span>
        <span>Time Complexity: {subtitle}</span>
      </div>
      <div className={style.card_icon}>
        <FaAngleRight size={28} />
      </div>
    </div>
  );
}

Cards.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
};

export default Cards;
