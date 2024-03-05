import PropTypes from "prop-types";
import styles from "../css/NewPositionButton.module.css";
import AddSVG from "../assets/add.svg";
import RemoveSVG from "../assets/remove.svg";

const NewPositionButton = ({ showNewPositionForm, setShowNewPositionForm }) => {
  return (
    <button
      className={styles.newPositionButton}
      onClick={(e) => {
        e.preventDefault();
        setShowNewPositionForm(!showNewPositionForm);
      }}
    >
      {showNewPositionForm ? (
        <img
          className={styles.test}
          src={RemoveSVG}
          alt="hide new position form"
        />
      ) : (
        <img
          className={styles.test}
          src={AddSVG}
          alt="show new position form"
        />
      )}
    </button>
  );
};

NewPositionButton.propTypes = {
  setShowNewPositionForm: PropTypes.func,
  showNewPositionForm: PropTypes.bool,
};

export default NewPositionButton;
