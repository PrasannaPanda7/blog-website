import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rootType } from "../../redux/reducers/rootReducers";
import { logoutAction } from "../../redux/actions/logoutAction";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleMenu = () => {
    const menuToggleIcon = document.querySelector("#menu-toggle-icon");
    const menu = document.querySelector("#menu");
    menuToggleIcon && menuToggleIcon.classList.toggle("activated");
    menu && menu.classList.toggle("activated");
  };
  const user = useSelector((state:rootType)=> (state.loggedInUser))
  console.log(user,"hello");
  //setting the theme
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("currentTheme")
  );
  useEffect(() => {
    setCurrentTheme(currentTheme);
    if (currentTheme) document.body.classList.add(currentTheme);
  }, [currentTheme]);
  const toogleTheme = () => {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme"))
      localStorage.setItem("currentTheme", "light-theme");
    else {
      localStorage.removeItem("currentTheme");
    }
  };

  //Serach functionality
  const searchHandler = () => {
    navigate("./search");
  };

  // console.log()

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <Link to="/">
          <h2 className="logo">NewsFlash</h2>
        </Link>
        <div className="menu" id="menu">
          <ul className="list">
            <li className="list-item">
              <Link to="/" className="list-link current">
                Home
              </Link>
            </li>
            
            {user ? (
              <>
                <li className="list-item screen-lg-hidden">
                  <Link to="/" className="list-link">
                    {user.toUpperCase()}
                  </Link>
                </li>
                <li className="list-item screen-lg-hidden">
                  <Link
                    to="/"
                    className="list-link"
                    onClick={() => dispatch(logoutAction())}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="list-item screen-lg-hidden">
                  <Link to="/signin" className="list-link">
                    Sign in
                  </Link>
                </li>
                <li className="list-item screen-lg-hidden">
                  <Link to="/signup" className="list-link">
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="list list-right">
          <button
            className="btn place-items-center"
            id="theme-toggle-button"
            onClick={toogleTheme}
          >
            <i className="ri-sun-line sun-icon"></i>
            <i className="ri-moon-line moon-icon"></i>
          </button>
          <button
            className="btn place-items-center"
            id="search-icon"
            onClick={searchHandler}
          >
            <i className="ri-search-line"></i>
          </button>
          <button
            className="btn place-items-center screen-lg-hidden menu-toggle-icon"
            id="menu-toggle-icon"
            onClick={toggleMenu}
          >
            <i className="ri-menu-3-line open-menu-icon"></i>
            <i className="ri-close-line close-menu-icon"></i>
          </button>
          {user ? (
            <>
              <Link to="/" className="list-link screen-sm-hidden">
                {user.toUpperCase()}
              </Link>
              <Link
                to="/#"
                className="list-link screen-sm-hidden btn sign-up-btn "
                onClick={() => dispatch(logoutAction())}
              >
                <span>LOGOUT</span>
              </Link>
            </>
          ) : (
            <>
              <Link to="/signin" className="list-link screen-sm-hidden">
                Sign in
              </Link>
              <Link
                to="/signup"
                className="list-link screen-sm-hidden btn sign-up-btn"
              >
                <span>Sign up</span>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
