import { useContext } from "react";
import { UserContext } from "../App";
import Positions from "./Positions";
import Loader from "./Loader";

const Portfolio = () => {
  const { userPortfolio } = useContext(UserContext);
  return <>{userPortfolio.loggedIn ? <Positions /> : <Loader />}</>;
};

export default Portfolio;
