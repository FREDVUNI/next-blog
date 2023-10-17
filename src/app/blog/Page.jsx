import styles from "./blog.module.css";
import Cards from "@/components/cards/Cards";
import Menu from "@/components/menu/Menu";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{category} Blog</h1>
      <div className={styles.content}>
        <Cards />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
