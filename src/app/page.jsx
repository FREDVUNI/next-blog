import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import Categories from "@/components/categories/Categories";
import Cards from "@/components/cards/Cards";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <Categories />
      <div className={styles.content}>
        <Cards />
        <Menu />
      </div>
    </div>
  );
}
