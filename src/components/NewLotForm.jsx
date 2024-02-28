import { useContext } from "react";
import styles from "../css/LotForms.module.css";
import PropTypes from "prop-types";
import { UserContext } from "../App";

const NewLotForm = ({ ticker, setErrorMsgs, setShowNewLotForm }) => {
  const { reFetch, setReFetch } = useContext(UserContext);

  const addLotHandler = async (e) => {
    e.preventDefault();
    const quantity = document.getElementById("newLotQuantity").value;
    const price = document.getElementById("newLotPrice").value;
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/portfolio/position/${ticker}/lot`,
        {
          method: "POST",
          mode: "cors",
          body: JSON.stringify({ quantity, price }),
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 400) {
        // setErrorMsgs(json);
      }
      if (res.status === 201) {
        // setErrorMsgs([]);
        setShowNewLotForm(false);
        setReFetch(!reFetch);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className={styles.lotForm}>
      <input type="number" id="newLotQuantity" placeholder="buy quantity" />
      <input type="number" id="newLotPrice" placeholder="buy price" />
      <button type="submit" onClick={addLotHandler}>
        add lot
      </button>
    </form>
  );
};

NewLotForm.propTypes = {
  ticker: PropTypes.string,
  setErrorMsgs: PropTypes.func,
  setShowNewLotForm: PropTypes.func,
};

export default NewLotForm;
