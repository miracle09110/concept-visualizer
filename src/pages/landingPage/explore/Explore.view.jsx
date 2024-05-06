import React from "react";
import style from "./explore.module.css";

const ExploreView = () => {
  return (
    <div className={style.explore_container} id="explore">
      <h2>Explore</h2>
      <div className={style.card}>
        <div className={style.text_container}>
          <h3 className={style.main_text}>Algorithms</h3>
          <p className={style.sub_text}>
            Discover and interact with popular sorting, search, and pathfinding
            algorithms. Enhance your understanding through hands-on exploration.
          </p>
        </div>
        <div className={style.placeholder}>img/gif/video placeholder</div>
      </div>

      <div className={style.card}>
        <div className={style.text_container}>
          <h3 className={style.main_text}>React Concepts</h3>
          <p className={style.sub_text}>
            Explore interactive visualizations to understand React's State,
            Props, and useContext feature. Enhance your React skills with
            engaging visuals.
          </p>
        </div>
        <div className={style.placeholder}>img/gif/video placeholder</div>
      </div>

      <div className={style.card}>
        <div className={style.text_container}>
          <h3 className={style.main_text}>Web Concepts</h3>
          <p className={style.sub_text}>
            Explore interactive visualizations of key web concepts including
            Server-Client architecture, REST API, and Webhooks. Enhance your
            understanding with engaging visuals.
          </p>
        </div>
        <div className={style.placeholder}>img/gif/video placeholder</div>
      </div>
      
    </div>
  );
};

export default ExploreView;
