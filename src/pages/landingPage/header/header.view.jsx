import React from "react";
import style from "./header.module.css";
import { HashLink } from "react-router-hash-link";

const HeaderView = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#FF76CE] to-white h-screen">
        <div className={style.text_container}>
          <h1>
            Concept Visualizers: Explore Algorithms, React, and Web Dev Concepts
          </h1>
          <h3>
            Interactive Tools for Understanding Complex Algorithms, ReactJS and
            Web Development Concepts
          </h3>
          <HashLink to="/#explore">
            <button>Explore!</button>
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default HeaderView;
