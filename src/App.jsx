import Header from "./components/Header";
import Routes from "./components/Routes";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import "./css/reset.css";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}api/portfolio/position`,
        {
          method: "GET",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await res.json();
      console.log(json);
    };
    fetchData();
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
