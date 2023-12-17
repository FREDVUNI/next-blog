import React from "react";
import styles from "./categories.module.css";
import Link from "next/link";
import Image from "next/image";
import { categories } from "./data";
import capitalizeWord from "@/utils";

const getCategories = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/categories`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("No categories found.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Categories = async () => {
  const categories = await getCategories();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories &&
          categories.map((category) => (
            <Link
              href={`/blog?category=${category.title}`}
              className={`${styles.category} ${styles[category.title]}`}
              key={category.id}
            >
              <Image
                src={category.img}
                alt="category"
                width={32}
                height={32}
                className={`${styles.image}`}
              />
              {capitalizeWord(category.title)}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Categories;
