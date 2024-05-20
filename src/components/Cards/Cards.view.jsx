import PropTypes from "prop-types";
import { FaAngleRight } from "react-icons/fa6";
import style from "./cards.module.css";
import { Link } from "react-router-dom";

function Cards({ title, label, subtitle, image, link }) {
  return (
    <Link to={link} className={style.card}>
      <div className={style.card_img}>
        <img src={image} />
      </div>
      <div className={style.card_text}>
        <div className={style.overlay}></div>
        <span className={style.card_title}>{title}</span>
        <span>
          {label} {subtitle}
        </span>
      </div>
      <div className={style.card_icon}>
        <FaAngleRight size={28} />
      </div>
    </Link>
  );
}

Cards.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
};

export default Cards;
