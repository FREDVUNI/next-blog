import React from "react";
import styles from "./cards.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getPosts = async (page) => {
  try {
    const res = await fetch(`${process.env.API_URL}/posts?page=${page}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("No posts found.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Cards = async ({ page }) => {
  const posts = await getPosts(page);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((post) => (
          <Card
            key={post._id}
            title={post.title}
            desc={post.desc}
            img={post.img}
            cat={post.catSlug}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Cards;
