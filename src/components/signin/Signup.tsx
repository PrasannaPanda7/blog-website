import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import "./Signin.css";
import Modals from "../UI/Modals";
import { IonIcon } from "react-ion-icon";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/loginAction";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCPassword] = useState<string>("");
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const addClass = () => {
    const requireBlock = document.getElementById("requirements") as HTMLElement;
    requireBlock.classList.add("active");
  };
  const removeClass = () => {
    const requireBlock = document.getElementById("requirements") as HTMLElement;
    requireBlock.classList.remove("active");
  };
  const usernameHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setUsername(evt.target.value);
  };
  const passwordHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
    passwordValidater();
  };

  useEffect(() => {
    passwordValidater();
  }, [password]);

  const passwordValidater = () => {
    // checking password validation
    const newPassword = password.trim();
    if (
      newPassword.search(/[a-z]/) >= 0 &&
      newPassword.search(/[A-Z]/) >= 0 &&
      newPassword.search(/[0-9]/) >= 0 &&
      (newPassword.includes("@") || newPassword.includes("_")) &&
      newPassword.length >= 8
    ) {
      setIsValidPassword(true);
      const btn = document.getElementById("login-btn") as HTMLInputElement;
      btn && btn.classList.add("active");
      btn.disabled = false;
    } else {
      const btn = document.getElementById("login-btn") as HTMLInputElement;
      btn.classList.contains("active") && btn.classList.remove("active");
      btn.disabled = true;
    }
    // css changes
    if (password.trim().search(/[a-z]/) !== -1) {
      (document.getElementById("case1") as HTMLElement).style.color = "green";
    } else {
      (document.getElementById("case1") as HTMLElement).style.color = "red";
    }
    if (password.trim().search(/[A-Z]/) !== -1) {
      (document.getElementById("case2") as HTMLElement).style.color = "green";
    } else {
      (document.getElementById("case2") as HTMLElement).style.color = "red";
    }
    if (password.trim().search(/[0-9]/) !== -1) {
      (document.getElementById("case3") as HTMLElement).style.color = "green";
    } else {
      (document.getElementById("case3") as HTMLElement).style.color = "red";
    }
    if (password.trim().search(/[#@?$%&*_-]/) !== -1) {
      (document.getElementById("case4") as HTMLElement).style.color = "green";
    } else {
      (document.getElementById("case4") as HTMLElement).style.color = "red";
    }
    if (password.trim().length >= 8) {
      (document.getElementById("case5") as HTMLElement).style.color = "green";
    } else {
      (document.getElementById("case5") as HTMLElement).style.color = "red";
    }
  };
  const cpasswordHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setCPassword(evt.target.value);
  };

  const signupHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (
      name.trim().length === 0 &&
      password.trim().length === 0 &&
      cpassword.trim().length === 0
    ) {
      setErrorMessage("Input fields can't be empty");
      return;
    }
    if (!isValidPassword) {
      setErrorMessage("Password didn't match the requirements");
      return;
    }
    if (password !== cpassword) {
      setErrorMessage("Password didn't match");
      return;
    }
    const user = {
      username: name,
      password,
    };

    if (!localStorage.getItem("Users")) {
      const users = [user];
      localStorage.setItem("Users", JSON.stringify(users));
      localStorage.setItem("LoggedinUser", JSON.stringify(user.username));
    } else {
      const users = JSON.parse(localStorage.getItem("Users") || "0");
      users.push(user);
      localStorage.setItem("Users", JSON.stringify(users));
      localStorage.setItem("LoggedinUser", JSON.stringify(user.username));
    }
    setUsername("");
    setPassword("");
    setCPassword("");
    dispatch(loginAction());
    navigate("../");
  };

  const errorHandler = () => {
    setErrorMessage("");
  };

  return (
    <div className="login">
      {errorMessage && <Modals message={errorMessage} onClick={errorHandler} />}
      <div className="wrapper">
        <div className="form_box login">
          {/* <img
            className="user_image"
            src={require("../images/149071.png")}
            alt="nahi h"
          /> */}
          <h2>SIGNUP</h2>
          <form onSubmit={signupHandler}>
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
                onChange={usernameHandler}
              />
              <label></label>
            </div>

            <div className="pass input-box">
              <div className="icon">
                <IonIcon name="lock-closed" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onClick={addClass}
                onBlur={removeClass}
                className="user-input"
                onChange={passwordHandler}
                value={password}
              />
              <div className="requirements" id="requirements">
                <ul className="requirements-ul">
                  <li id="case1">
                    <span>A lowercase Character</span>
                  </li>
                  <li id="case2">
                    <span>An uppercase Character</span>
                  </li>
                  <li id="case3">
                    <span>A Number</span>
                  </li>
                  <li id="case4">
                    <span>A Special Character</span>
                  </li>
                  <li id="case5">
                    <span>Minimum 8 Characters</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="input_box">
              <div className="icon">
                <IonIcon name="lock-closed" />
              </div>
              <input
                className="user-input"
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="Confirm Password"
                onChange={cpasswordHandler}
                value={cpassword}
              />
              <label></label>
            </div>
            <button className="btn login-btn" id="login-btn">
              Signup
            </button>
            <div className="login-register">
              <p>
                Already have an account.
                <Link to="/signin"> Signin</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
