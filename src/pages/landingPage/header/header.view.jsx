import React from "react";
import style from "./header.module.css";
import { HashLink } from "react-router-hash-link";

const HeaderView = () => {
  return (
    <>
      <div className="bg-[#222831] h-screen text-white">
        <div className={style.text_container}>
          <h1 className="font-fugaz bg-gradient-to-r from-[#FF76CE] via-[#94FFD8] to-[#FDFFC2] bg-clip-text text-transparent">
            Concept Visualizers: Explore Algorithms, React, and Web Dev Concepts
          </h1>
          <h3>
            Interactive Tools for Understanding Complex Algorithms, ReactJS and
            Web Development Concepts
          </h3>
          <HashLink to="/#explore">
            <button className="mt-5 rounded-3xl py-4 px-12 bg-neutral-900 shadow-lg">
              Explore!
            </button>
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default HeaderView;
