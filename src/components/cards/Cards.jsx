import React from "react";
import styles from "./card.module.css";
import Pagination from "../pagination/Pagination";

const Cards = () => {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
};

export default Cards;
