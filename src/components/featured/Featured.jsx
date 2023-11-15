import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            aperiam asperiores sed delectus voluptatem enim deleniti reiciendis,
            voluptatum commodi nihil quasi sapiente voluptatibus dignissimos
            illum, rem neque minus repellat. Repellat?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/hero.png" alt="" fill className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
