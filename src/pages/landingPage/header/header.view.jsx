import React from "react";
import style from "./header.module.css";

const HeaderView = () => {
  return (
    <div className={style.header_section}>
      <nav>
        <h1>Concept Visualizer</h1>
        <div className={style.hamburger_menu}>=</div>
      </nav>
      <div className={style.text_container}>
        <h1>
          Concept Visualizers: Explore Algorithms, React, and Web Dev Concepts
        </h1>
        <h3>
          Interactive Tools for Understanding Complex Algorithms, ReactJS and
          Web Development Concepts
        </h3>
        <a href="#explore"><button>Explore!</button></a>
        
      </div>
    </div>
  );
};

export default HeaderView;
