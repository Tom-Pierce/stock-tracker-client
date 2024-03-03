import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import styles from "../css/Positions.module.css";
import expandMore from "../assets/expandMore.svg";
import expandLess from "../assets/expandLess.svg";
import LotsView from "./LotsView";
import formatDollar from "../utils/formatDollar";

const Positions = () => {
  const { userPortfolio } = useContext(UserContext);
  const [expandedRow, setExpandedRow] = useState(undefined);
  const [expandedRowHeight, setExpandedRowHeight] = useState(0);
  const [showNewLotForm, setShowNewLotForm] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState([]);

  useEffect(() => {
    if (userPortfolio && userPortfolio.positions && expandedRow >= 0) {
      if (showNewLotForm) {
        setExpandedRowHeight(
          1.5 * (userPortfolio.positions[expandedRow].lots.length + 2) + 5
        );
      } else {
        setExpandedRowHeight(
          1.5 * (userPortfolio.positions[expandedRow].lots.length + 2) + 2
        );
      }
    }
  }, [expandedRow, showNewLotForm, userPortfolio]);

  const expandRowClickHandler = (e, index) => {
    e.preventDefault();
    if (index === expandedRow) setExpandedRow(undefined);
    else setExpandedRow(index);
  };

  return (
    <>
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
                expandedRow === index ? styles.expanded : ""
              }`}
              // inline styling that calculates the space needed so but also is an exact value so that animation can still work
              style={
                expandedRow === index
                  ? {
                      height: expandedRowHeight + "rem",
                    }
                  : null
              }
            >
              <div className={styles.cell}>
                <p className={styles.top}>{position.ticker}</p>
              </div>
              <div className={styles.cell}>
                <p className={styles.top}>
                  {formatDollar(position.currentPrice)}
                </p>
              </div>
              <div className={styles.cell}>
                <p className={styles.top}>{position.quantity}</p>
              </div>
              <div className={styles.cell}>
                <p className={styles.top}>{formatDollar(position.value)}</p>
              </div>
              <div className={styles.cell}>
                <p className={styles.top}>{formatDollar(position.cost)}</p>
              </div>
              <div className={styles.cell}>
                <p className={styles.top}>
                  {formatDollar(
                    Math.round(((position.value - position.cost) * 100) / 100)
                  )}
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
                <LotsView
                  position={position}
                  showNewLotForm={showNewLotForm}
                  setShowNewLotForm={setShowNewLotForm}
                  setErrorMsgs={setErrorMsgs}
                />
              ) : null}
            </div>
          );
        })}
        <div className={styles.row}>
          <div className={styles.cell}>
            <p>total</p>
          </div>
          <div className={styles.cell}>
            <p></p>
          </div>
          <div className={styles.cell}>
            <p></p>
          </div>
          <div className={styles.cell}>
            <p>
              {formatDollar(
                userPortfolio.positions.reduce(
                  (accumulator, currentPosition) => {
                    return accumulator + currentPosition.value;
                  },
                  0
                )
              )}
            </p>
          </div>
          <div className={styles.cell}>
            <p>
              {formatDollar(
                userPortfolio.positions.reduce(
                  (accumulator, currentPosition) => {
                    return accumulator + currentPosition.cost;
                  },
                  0
                )
              )}
            </p>
          </div>
          <div className={styles.cell}>
            <p>
              {formatDollar(
                userPortfolio.positions.reduce(
                  (accumulator, currentPosition) => {
                    return (
                      accumulator +
                      Math.round(
                        ((currentPosition.value - currentPosition.cost) * 100) /
                          100
                      )
                    );
                  },
                  0
                )
              )}
            </p>
          </div>
        </div>
        {errorMsgs.length === 0 ? null : (
          <ul className={styles.errorMsgs}>
            {errorMsgs.map((msg, index) => (
              <li key={`error-${index}`}>{msg}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default Positions;
