import React from "react";
import styles from "./cards.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getPosts = async (page, cat) => {
  try {
    const apiUrl = process.env.API_URL;
    const res = await fetch(`${apiUrl}/posts?page=${page}&cat=${cat || ""}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("No posts found.");
    }
    return res.json();
  } catch (error) {
    console.log("Error fetching posts:", error);
    throw error;
  }
};

const Cards = async ({ page, cat }) => {
  const { posts, count } = await getPosts(page, cat);
  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts} id="blog-posts">
        {posts?.map((post) => (
          <Card
            key={post._id}
            title={post.title}
            desc={post.desc}
            img={post.img}
            cat={post.catSlug}
            createdAt={post.createdAt}
            slug={post.slug}
          />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default Cards;
