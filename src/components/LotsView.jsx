import styles from "../css/Positions.module.css";
import PropTypes from "prop-types";

const LotsView = ({ position }) => {
  return (
    <div className={styles.lotsView}>
      <div className={styles.row}>
        <div className={styles.cell}>
          <p className={styles.top}>lot quantity</p>
        </div>
        <div className={styles.cell}>
          <p className={styles.top}>lot price</p>
        </div>
        <div className={styles.cell}>
          <p className={styles.top}>lot cost</p>
        </div>
        <div className={styles.cell}>
          <p className={styles.top}>lot value</p>
        </div>
      </div>
      {position.lots.map((lot, index) => {
        return (
          <div key={`lot-${index}`} className={styles.row}>
            <div className={styles.cell}>
              <p className={styles.top}>{lot.quantity}</p>
            </div>
            <div className={styles.cell}>
              <p className={styles.top}>{lot.price}</p>
            </div>
            <div className={styles.cell}>
              <p className={styles.top}>{lot.cost}</p>
            </div>
            <div className={styles.cell}>
              <p className={styles.top}>
                {lot.quantity * position.currentPrice}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

LotsView.propTypes = {
  position: PropTypes.object,
};

export default LotsView;
