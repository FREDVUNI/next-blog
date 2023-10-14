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
        {categories &&
          categories.map((category) => (
            <Link
              href={`/blog?category=${category.category}`}
              className={`${styles.category} ${styles[category.category]}`}
              key={category.id}
            >
              <Image
                src={category.image}
                alt=""
                width={32}
                height={32}
                className={`${styles.image}`}
              />
              {capitalizeWord(category.category)}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Categories;
