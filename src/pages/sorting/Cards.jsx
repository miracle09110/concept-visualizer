import PropTypes from "prop-types";
import { FaAngleRight } from "react-icons/fa6";
import "./Cards.css";

function Cards({ title, subtitle, color }) {
  return (
    <div className="card">
      <div className="card-img"></div>
      <div className="card-text" style={{ backgroundColor: color }}>
        <div className="overlay"></div>
        <span className="card-title">{title}</span>
        <span className="card-subtitle">Time Complexity: {subtitle}</span>
      </div>
      <div className="card-icon">
        <FaAngleRight size={28} />
      </div>
    </div>
  );
}

Cards.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.string,
};

export default Cards;
