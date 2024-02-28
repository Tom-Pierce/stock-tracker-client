import PropTypes from "prop-types";
import styles from "../css/NewLotButton.module.css";
import AddSVG from "../assets/add.svg";
import RemoveSVG from "../assets/remove.svg";

const NewLotButton = ({ showNewLotForm, setShowNewLotForm }) => {
  return (
    <button
      className={styles.newLotButton}
      onClick={(e) => {
        e.preventDefault();
        setShowNewLotForm(!showNewLotForm);
      }}
    >
      {showNewLotForm ? (
        <img src={RemoveSVG} alt="hide new lot form" />
      ) : (
        <img src={AddSVG} alt="show new lot form" />
      )}
    </button>
  );
};

NewLotButton.propTypes = {
  setShowNewLotForm: PropTypes.func,
  showNewLotForm: PropTypes.bool,
};

export default NewLotButton;
