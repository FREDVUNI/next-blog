import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { formatDate, makeUpperCase, shortenDesc } from "@/utils";

const Card = ({ key, title, desc, img, cat, slug, createdAt }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src={img} alt="post" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>{formatDate(createdAt)}</span>
          <span className={styles.category}> - {makeUpperCase(cat)}</span>
        </div>
        <Link href={`/posts/${slug}`}>
          <h2>{title}</h2>
        </Link>
        <p className={styles.desc}>{shortenDesc(desc, 250)}</p>
        <Link href={`/posts/${slug}`} className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
