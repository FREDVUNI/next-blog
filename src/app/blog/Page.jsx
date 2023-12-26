"use client";

import styles from "./blogPage.module.css";
import Cards from "@/components/cards/Cards";
import Menu from "@/components/menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <Cards page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
