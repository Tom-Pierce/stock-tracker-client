import PropTypes from "prop-types";
import DeleteSVG from "../assets/delete.svg";
import styles from "../css/DeleteLotButton.module.css";

const DeleteLotButton = ({ lotId, ticker }) => {
  const deleteHandler = async (ticker) => {
    await fetch(
      `${
        import.meta.env.VITE_API_URL
      }/api/portfolio/position/${ticker}/lot/${lotId}`,
      {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <button
      className={styles.deleteZipLinkBtn}
      onClick={(e) => {
        e.preventDefault();
        deleteHandler(ticker);
      }}
    >
      <img src={DeleteSVG} alt="delete" />
    </button>
  );
};

DeleteLotButton.propTypes = {
  lotId: PropTypes.string,
  ticker: PropTypes.string,
};

export default DeleteLotButton;
