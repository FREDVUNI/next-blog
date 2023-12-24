"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const scrollToBlogPosts = () => {
  const blogPosts = document.getElementById('blog-posts');
  if (blogPosts) {
    blogPosts.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const Pagination = ({ page, hasNext, hasPrev }) => {
  const router = useRouter();

  const handleNext = () => {
    let nextPage = page + 1;
    return router.push(`?page=${nextPage}`);
  };

  const handlePrev = () => {
    let prevPage = page - 1;
    return router.push(`?page=${prevPage}`);
  };

  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        className={styles.button}
        onClick={() => handlePrev()}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() => handleNext()}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
