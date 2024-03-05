import { useContext } from "react";
import { UserContext } from "../App";
import Positions from "./Positions";
import Description from "./Description";

const Portfolio = () => {
  const { userPortfolio } = useContext(UserContext);

  return (
    <>
      <div className="main">
        {userPortfolio.loggedIn ? <Positions /> : <Description />}
      </div>
    </>
  );
};

export default Portfolio;
