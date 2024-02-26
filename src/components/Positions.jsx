import { useContext, useState } from "react";
import { UserContext } from "../App";
import styles from "../css/Positions.module.css";
import expandMore from "../assets/expandMore.svg";
import expandLess from "../assets/expandLess.svg";
import NewLotForm from "./NewLotForm";

const Positions = () => {
  const { userPortfolio } = useContext(UserContext);
  const [expandedRow, setExpandedRow] = useState(1);
  const [errorMsgs, setErrorMsgs] = useState([]);

  const expandRowClickHandler = (e, index) => {
    e.preventDefault();
    if (index === expandedRow) setExpandedRow(undefined);
    else setExpandedRow(index);
  };

  return (
    <>
      {userPortfolio ? (
        <div className={styles.positionsTable}>
          <div className={styles.row}>
            <div className={styles.cell}>stock</div>
            <div className={styles.cell}>current price</div>
            <div className={styles.cell}>shares</div>
            <div className={styles.cell}>value</div>
            <div className={styles.cell}>cost</div>
            <div className={styles.cell}>profit</div>
            <div className={styles.cell}></div>
          </div>
          {userPortfolio.positions.map((position, index) => {
            return (
              <div
                key={index}
                className={`${styles.row} ${
                  expandedRow === index ? styles.expanded : null
                }`}
              >
                <div className={styles.cell}>
                  <p className={styles.top}>{position.ticker}</p>
                </div>
                <div className={styles.cell}>
                  <p className={styles.top}>{position.currentPrice}</p>
                </div>
                <div className={styles.cell}>
                  <p className={styles.top}>{position.quantity}</p>
                </div>
                <div className={styles.cell}>
                  <p className={styles.top}>{position.value}</p>
                </div>
                <div className={styles.cell}>
                  <p className={styles.top}>{position.cost}</p>
                </div>
                <div className={styles.cell}>
                  <p className={styles.top}>
                    {Math.round(((position.value - position.cost) * 100) / 100)}
                  </p>
                </div>
                <div className={styles.cell}>
                  <button
                    type="button"
                    className={`${styles.menuButton} ${styles.top}`}
                    onClick={(e) => {
                      expandRowClickHandler(e, index);
                    }}
                  >
                    <img
                      src={expandedRow === index ? expandLess : expandMore}
                      alt="menu"
                    />
                  </button>
                </div>
                {expandedRow === index ? (
                  <div className={`${styles.cell} ${styles.formWrapper}`}>
                    <NewLotForm
                      ticker={position.ticker}
                      setErrorMsgs={setErrorMsgs}
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
          {errorMsgs.length > 0
            ? errorMsgs.map((err, index) => {
                return <div key={`error-${index}`}>{err}</div>;
              })
            : null}
        </div>
      ) : null}
    </>
  );
};
export default Positions;
