import styles from "../css/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>StockTracker</h1>
    </header>
  );
};
export default Header;
