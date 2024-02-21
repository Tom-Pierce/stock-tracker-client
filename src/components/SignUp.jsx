import { useState } from "react";
import styles from "../css/AuthenticationForm.module.css";

const SignUp = () => {
  const [errorMsgs, setErrorMsgs] = useState([]);

  const localClickHandler = async (e) => {
    e.preventDefault();
    const form = document.getElementById("signUpForm");
    const email = form.elements["email"].value;
    const password = form.elements["password"].value;
    const confirmPassword = form.elements["confirmPassword"].value;

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/local/signup`,
      {
        method: "post",
        mode: "cors",
        body: JSON.stringify({ email, password, confirmPassword }),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.status === 201)
      window.location.href = `${window.location.protocol}//${window.location.host}/`;

    if (res.status === 400) {
      const json = await res.json();
      setErrorMsgs(json);
    }
  };

  return (
    <div className="main">
      <form id="signUpForm" className={`box ${styles.authenticationForm}`}>
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
        <input
          type="password"
          id="confirmPasswordInput"
          name="confirmPassword"
          className={`${styles.textInput} textInput`}
          placeholder="Confirm Password"
        />
        {errorMsgs.length !== 0 ? (
          <ul>
            {errorMsgs.map((msg, index) => {
              return (
                <li className={styles.errorMessage} key={`error-msg-${index}`}>
                  {msg}
                </li>
              );
            })}
          </ul>
        ) : null}

        <div>
          <button
            className={`${styles.btn} btn`}
            type="submit"
            onClick={localClickHandler}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
