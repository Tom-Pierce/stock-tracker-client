import Header from "./components/Header";
import Routes from "./components/Routes";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import "./css/reset.css";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

function App() {
  const [userPortfolio, setUserPortfolio] = useState({ loggedIn: false });
  const [reFetch, setReFetch] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/portfolio/position`,
        {
          method: "GET",
          mode: "cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        const userData = await res.json();
        setUserPortfolio({ ...userData, loggedIn: true });
      } else {
        setUserPortfolio({ loggedIn: false });
      }
    };
    fetchData();
  }, [reFetch]);

  return (
    <>
      <UserContext.Provider
        value={{
          userPortfolio,
          setUserPortfolio,
          reFetch,
          setReFetch,
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
