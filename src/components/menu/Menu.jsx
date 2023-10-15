import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"whats popping?"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> -- 11.02.03</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> -- 11.02.03</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> -- 11.02.03</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> -- 11.02.03</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              Coding
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> -- 11.02.03</span>
            </div>
          </div>
        </Link>
      </div>

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
      <div className={styles.items}>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> -- 11.02.03</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> -- 11.02.03</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> -- 11.02.03</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> -- 11.02.03</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              Coding
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> -- 11.02.03</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
