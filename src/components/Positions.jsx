import { useContext, useState } from "react";
import { UserContext } from "../App";
import styles from "../css/Positions.module.css";
import React from "react";
import expandMore from "../assets/expandMore.svg";
import expandLess from "../assets/expandLess.svg";

const Positions = () => {
  const { userPortfolio } = useContext(UserContext);
  const [expandedRow, setExpandedRow] = useState(undefined);

  const expandRowClickHandler = (e, index) => {
    e.preventDefault();
    if (index === expandedRow) setExpandedRow(undefined);
    else setExpandedRow(index);
  };

  return (
    <>
      {userPortfolio ? (
        <div className={styles.positionsTable}>
          <div className={styles.cell}>stock</div>
          <div className={styles.cell}>current price</div>
          <div className={styles.cell}>shares</div>
          <div className={styles.cell}>value</div>
          <div className={styles.cell}>cost</div>
          <div className={styles.cell}>profit</div>
          <div className={styles.cell}></div>
          {userPortfolio.positions.map((position, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className={`${styles.cell} ${
                    expandedRow === index ? styles.expanded : null
                  }`}
                >
                  <p className={styles.top}>{position.ticker}</p>
                </div>
                <div
                  className={`${styles.cell} ${
                    expandedRow === index ? styles.expanded : null
                  }`}
                >
                  <p className={styles.top}>{position.currentPrice}</p>
                </div>
                <div
                  className={`${styles.cell} ${
                    expandedRow === index ? styles.expanded : null
                  }`}
                >
                  <p className={styles.top}>{position.quantity}</p>
                </div>
                <div
                  className={`${styles.cell} ${
                    expandedRow === index ? styles.expanded : null
                  }`}
                >
                  <p className={styles.top}>{position.value}</p>
                </div>
                <div
                  className={`${styles.cell} ${
                    expandedRow === index ? styles.expanded : null
                  }`}
                >
                  <p className={styles.top}>{position.cost}</p>
                </div>
                <div
                  className={`${styles.cell} ${
                    expandedRow === index ? styles.expanded : null
                  }`}
                >
                  <p className={styles.top}>
                    {Math.round(((position.value - position.cost) * 100) / 100)}
                  </p>
                </div>
                <div
                  className={`${styles.cell} ${
                    expandedRow === index ? styles.expanded : null
                  }`}
                >
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
              </React.Fragment>
            );
          })}
        </div>
      ) : null}
    </>
  );
};
export default Positions;
