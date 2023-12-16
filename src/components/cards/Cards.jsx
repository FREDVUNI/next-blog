import React from "react";
import styles from "./cards.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getPosts = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/posts`, {
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

const Cards = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts &&
          posts.map((post) => (
            <Card title={post.title} desc={post.desc} img={post.img} />
          ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Cards;
