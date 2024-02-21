import { useState } from "react";
import styles from "../css/AuthenticationForm.module.css";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState(undefined);

  const localClickHandler = async (e) => {
    e.preventDefault();
    const form = document.getElementById("loginForm");
    const email = form.elements["email"].value;
    const password = form.elements["password"].value;

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/local/login`,
      {
        method: "post",
        mode: "cors",
        body: JSON.stringify({ email, password }),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status === 200)
      window.location.href = `${window.location.protocol}//${window.location.host}/`;

    if (res.status === 401) {
      const json = await res.json();
      setErrorMsg(json.message);
    }
  };

  return (
    <div className="main">
      <form id="loginForm" className={`box ${styles.authenticationForm}`}>
        <input
          type="email"
          id="emailInput"
          name="email"
          className={`${styles.textInput} textInput`}
          placeholder="Email"
        />
        <input
          type="password"
          id="passwordInput"
          name="password"
          className={`${styles.textInput} textInput`}
          placeholder="Password"
        />

        {errorMsg ? <p>{errorMsg}</p> : null}

        <div>
          <button
            className={`${styles.btn} btn`}
            type="submit"
            onClick={localClickHandler}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
