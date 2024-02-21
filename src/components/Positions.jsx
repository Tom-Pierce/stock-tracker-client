import { useContext } from "react";
import { UserContext } from "../App";

const Positions = () => {
  const { positions } = useContext(UserContext);
  console.log(positions);
};
export default Positions;
