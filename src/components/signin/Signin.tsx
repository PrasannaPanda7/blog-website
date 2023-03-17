import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import "./Signin.css";
import { IonIcon } from "react-ion-icon";
import { Link, useNavigate } from "react-router-dom";
import Modals from "../UI/Modals";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/loginAction";

const Signin = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nameHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };

  useEffect(() => {
    if (password.length >= 8 || name.length > 3) {
      const btn = document.getElementById("login-btn") as HTMLInputElement;
      btn && btn.classList.add("active");
      btn && (btn.disabled = false);
    } else {
      const btn = document.getElementById("login-btn") as HTMLInputElement;
      btn && btn.classList.contains("active") && btn.classList.remove("active");
      btn.disabled = true;
    }
  }, [password, name]);
  const passwordHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  const loginHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (name.trim().length === 0 || password.trim().length === 0) {
      setErrorMessage("Username or password can't be empty");
      return;
    }
    if (
      JSON.parse(localStorage.getItem("Users") || "0").filter(
        (uname: { username: string; password: string }) =>
          uname.username === name && uname.password === password
      ).length > 0
    ) {
      localStorage.setItem("LoggedinUser", JSON.stringify(name));
      dispatch(loginAction());
      navigate("../");
    } else {
      setErrorMessage("Username or password didn't match");
    }
    setName("");
    setPassword("");
  };
  const errorHandler = () => {
    setErrorMessage("");
  };

  return (
    <>
      {errorMessage && <Modals message={errorMessage} onClick={errorHandler} />}

      <div className="wrapper">
        <div className="form_box login">
          <h2>SIGNIN</h2>
          <form onSubmit={loginHandler}>
            <div className="input-box">
              <span className="icon">
                <IonIcon name="person" />
              </span>
              <input
                className="user-input"
                type="text"
                id="uname"
                name="uname"
                value={name}
                placeholder="Username"
                onChange={nameHandler}
              />
            </div>
            <div className="input_box">
              <div className="icon">
                <IonIcon name="lock-closed" />
              </div>
              <input
                className="user-input"
                type="password"
                id="pass"
                name="pass"
                value={password}
                placeholder="Password"
                onChange={passwordHandler}
              />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <Link to="#">Forgot Password</Link>
            </div>

            <button className="btn login-btn" id="login-btn">
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account?
                <Link to="/signup">Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
