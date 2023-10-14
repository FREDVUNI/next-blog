import React from "react";
import styles from "./categories.module.css";
import Link from "next/link";
import Image from "next/image";
import { categories } from "./data";
import capitalizeWord from "@/utils";

const Categories = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <div className={styles.category}>
          {categories &&
            categories.map((category) => (
              <Link
                href={`/blog?category=${category.category}`}
                className={`${styles.category} ${styles.style}`}
                key={category.category}
              >
                <Image
                  src={category.image}
                  alt=""
                  width={32}
                  height={32}
                  className={styles[category.category]}
                />
                {capitalizeWord(category.category)}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
