import React from "react";
import style from "./server-client.module.css";
import Navbar from "../../components/navbar/Navbar";
import client from "./img/client.png";
import server from "./img/server.png";

const ServerClientAnimation = () => {
  return (
    <>
      <Navbar />
      <h2>Client-Server Concept</h2>
      <div className={style.container}>
        <div className={style.client}>
          <img src={client} alt="client" />
        </div>
        <p className={style.text}>...</p>
        <div className={style.server}>
          <img src={server} alt="server" />
        </div>
        <div className={style.connection}></div>
        <div className={style.signal}></div>
      </div>
    </>
  );
};

export default ServerClientAnimation;
