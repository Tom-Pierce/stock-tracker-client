import { Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio";
import SignUp from "./SignUp";
import Login from "./Login";

const routes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Portfolio />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default routes;
