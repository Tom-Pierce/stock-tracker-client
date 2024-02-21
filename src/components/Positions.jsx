import { useContext } from "react";
import { UserContext } from "../App";

const Positions = () => {
  const { userPortfolio } = useContext(UserContext);
  console.log(userPortfolio);
};
export default Positions;
