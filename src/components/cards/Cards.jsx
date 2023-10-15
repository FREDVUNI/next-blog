import React from "react";
import styles from "./cards.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const Cards = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default Cards;
