import styles from "../css/NewLotForm.module.css";
import PropTypes from "prop-types";

const NewLotForm = ({ ticker, setErrorMsgs }) => {
  const addLotHandler = async (e) => {
    e.preventDefault();
    const quantity = document.getElementById("lotQuantity").value;
    const price = document.getElementById("lotPrice").value;
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

      const json = await res.json();
      if (res.status === 400) {
        setErrorMsgs(json);
      }
      if (res.status === 201) {
        setErrorMsgs([]);
      }
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className={styles.newLotForm}>
      <input type="number" id="lotQuantity" placeholder="quantity" />
      <input type="number" id="lotPrice" placeholder="price" />
      <button type="submit" onClick={addLotHandler}>
        add lot
      </button>
    </form>
  );
};

NewLotForm.propTypes = {
  ticker: PropTypes.string,
  setErrorMsgs: PropTypes.func,
};

export default NewLotForm;
