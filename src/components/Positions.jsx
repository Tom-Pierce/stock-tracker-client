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
          <ul>
            <li className={styles.row}>
              <div className={styles.cell}>
                <p>ticker</p>
              </div>
              <div className={styles.cell}>
                <p>value</p>
              </div>
              <div className={styles.cell}>
                <p>current price</p>
              </div>
              <div className={styles.cell}>
                <p>total cost</p>
              </div>
              <div className={styles.cell}>
                <p>diff</p>
              </div>
            </li>
            {userPortfolio.positions.map((position) => {
              return (
                <li key={`${position.ticker}-row`} className={styles.row}>
                  <div className={styles.cell}>
                    <p>{position.ticker}</p>
                  </div>
                  <div className={styles.cell}>
                    <p>{position.value}</p>
                  </div>
                  <div className={styles.cell}>
                    <p>{position.currentPrice}</p>
                  </div>
                  <div className={styles.cell}>
                    <p>{position.cost}</p>
                  </div>
                  <div className={styles.cell}>
                    <p>{position.value - position.cost}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
};
export default Positions;
