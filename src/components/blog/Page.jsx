import styles from "./blog.module.css";
import Cards from "@/components/cards/Cards";
import Menu from "@/components/menu/Menu";

const Page = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { category } = searchParams;

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

export default Page;
