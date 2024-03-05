import PropTypes from "prop-types";
import styles from "../css/NewPositionForm.module.css";
import { useContext } from "react";
import { UserContext } from "../App";

const NewPositionForm = ({ setShowNewLotForm, setErrorMsgs }) => {
  const { reFetch, setReFetch } = useContext(UserContext);

  const addPositionHandler = async (e) => {
    e.preventDefault();
    const ticker = document.getElementById("newPositionTicker").value;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/portfolio/position/`,
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({ ticker }),
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await res.json();

      if (res.status === 409) {
        setErrorMsgs([json.message]);
      }
      if (res.status === 400) {
        setErrorMsgs(json);
      }
      if (res.status === 201) {
        setErrorMsgs([]);
        setShowNewLotForm(false);
        setReFetch(!reFetch);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.positionForm}>
      <input type="text" id="newPositionTicker" placeholder="ticker" />
      <button type="submit" onClick={addPositionHandler}>
        add position
      </button>
    </form>
  );
};

NewPositionForm.propTypes = {
  setShowNewLotForm: PropTypes.func,
  setErrorMsgs: PropTypes.func,
};

export default NewPositionForm;
