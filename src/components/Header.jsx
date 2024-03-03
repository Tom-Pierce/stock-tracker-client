import { useContext } from "react";
import styles from "../css/Header.module.css";
import { UserContext } from "../App";
import { Link, Navigate } from "react-router-dom";

const Header = () => {
  const { userPortfolio, setUserPortfolio } = useContext(UserContext);

  const logout = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/local/logout`,
        {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        setUserPortfolio(undefined);
      }

      <Navigate to="/" replace={true} />;
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>StockTracker</h1>

      {userPortfolio ? (
        <button className={styles.logButton} onClick={logout}>
          log out
        </button>
      ) : (
        <Link className={styles.logButton} to="/login" replace={true}>
          login
        </Link>
      )}
    </header>
  );
};
export default Header;
