import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"whats popping?"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      <h2 className={styles.subtitle}>{"Discover by topic"}</h2>
      <h1 className={styles.title}>Categories</h1>
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

      <h2 className={styles.subtitle}>{"choosen by editor"}</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      {<MenuPosts withImage={true} />}
    </div>
  );
};

export default Menu;
