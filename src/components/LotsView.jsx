import styles from "../css/Positions.module.css";
import PropTypes from "prop-types";
import formatDollar from "../utils/formatDollar";
import DeleteLotButton from "./DeleteLotButton";
import AddSVG from "../assets/add.svg";

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
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}>
          <button>
            <img src={AddSVG} alt="delete" />
          </button>
        </div>
      </div>
      {position.lots.map((lot, index) => {
        return (
          <div key={`lot-${index}`} className={styles.row}>
            <div className={styles.cell}>
              <p className={styles.top}>{lot.quantity}</p>
            </div>
            <div className={styles.cell}>
              <p className={styles.top}>{formatDollar(lot.price)}</p>
            </div>
            <div className={styles.cell}>
              <p className={styles.top}>{formatDollar(lot.cost)}</p>
            </div>
            <div className={styles.cell}>
              <p className={styles.top}>
                {formatDollar(lot.quantity * position.currentPrice)}
              </p>
            </div>
            <div className={styles.cell}></div>
            <div className={styles.cell}></div>

            <div className={styles.cell}>
              <DeleteLotButton lotId={lot._id} ticker={position.ticker} />
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
