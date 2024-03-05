import { Link } from "react-router-dom";
import styles from "../css/Description.module.css";

const Description = () => {
  return (
    <div className={styles.description}>
      <p>
        StockTracker is a tool to track your positions in the market with real
        time share prices and data. Create positions and add lots to view
        profits/losses.
      </p>
      <p>
        To start using StockTracker create an account{" "}
        <Link to="/signup">here</Link>
      </p>
    </div>
  );
};

export default Description;
