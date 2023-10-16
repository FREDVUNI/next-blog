import React from "react";
import styles from "./menu.categories.module.css";
import Link from "next/link";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href={"/blog?category=style"}
        className={`${styles.categoryItem} ${styles.style}}`}
      >
        Style
      </Link>
      <Link
        href={"/blog?category=food"}
        className={`${styles.categoryItem} ${styles.food}}`}
      >
        Food
      </Link>
      <Link
        href={"/blog?category=culture"}
        className={`${styles.categoryItem} ${styles.culture}}`}
      >
        Culture
      </Link>
      <Link
        href={"/blog?category=coding"}
        className={`${styles.categoryItem} ${styles.coding}}`}
      >
        Coding
      </Link>
      <Link
        href={"/blog?category=travel"}
        className={`${styles.categoryItem} ${styles.travel}}`}
      >
        Travel
      </Link>
      <Link
        href={"/blog?category=fashion"}
        className={`${styles.categoryItem} ${styles.fashion}}`}
      >
        Fashion
      </Link>
    </div>
  );
};

export default MenuCategories;
