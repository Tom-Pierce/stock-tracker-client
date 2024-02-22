import { useContext } from "react";
import { UserContext } from "../App";
import styles from "../css/Positions.module.css";

const Positions = () => {
  const { userPortfolio } = useContext(UserContext);
  console.log(userPortfolio);
  return (
    <>
      {userPortfolio ? (
        <div className={styles.positionsTable}>
          <div className={styles.cell}>stock</div>
          <div className={styles.cell}>current price</div>
          <div className={styles.cell}>value</div>
          <div className={styles.cell}>cost</div>
          <div className={styles.cell}>profit</div>
          {userPortfolio.positions.map((position) => {
            return (
              <>
                <div className={styles.cell}>{position.ticker}</div>
                <div className={styles.cell}>{position.currentPrice}</div>
                <div className={styles.cell}>{position.value}</div>
                <div className={styles.cell}>{position.cost}</div>
                <div className={styles.cell}>
                  {Math.round(((position.value - position.cost) * 100) / 100)}
                </div>
              </>
            );
          })}
        </div>
      ) : null}
    </>
  );
};
export default Positions;
