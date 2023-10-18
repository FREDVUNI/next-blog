import React from "react";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      <div className={styles.write}>
        <textarea placeholder="write a comment..." className={styles.input} />
        <button className={styles.button}>Send</button>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/p1.jpeg"}
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>11.02.2020</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            blanditiis sunt, dignissimos adipisci minus laborum, quam ipsum
            voluptate minima quae, eum dolorem inventore odit officia omnis.
            Quidem nemo debitis tenetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
