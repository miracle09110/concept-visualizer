import PropTypes from "prop-types";
import { FaAngleRight } from "react-icons/fa6";
import style from "./cards.module.css";
import { Link } from "react-router-dom";

function Cards({ title, label, subtitle, image, link }) {
  return (
    <Link
      to={link}
      className="text-center py-2 w-[20rem] rounded-xl flex flex-col border border-neutral-700 hover:bg-gradient-to-r  from-[#FF76CE] via-[#94FFD8] to-[#FDFFC2] hover:text-neutral-800 transition"
    >
      <span className="text-md font-bold">{title}</span>
      <span className="text-sm">
        {label} {subtitle}
      </span>
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
