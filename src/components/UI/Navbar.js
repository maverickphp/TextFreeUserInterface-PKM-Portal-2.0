import React from "react";
import logo from "./logo.png";
import ReactAudioPlayer from "react-audio-player";
import { Link, useLocation, useNavigate } from "react-router-dom";
import homehero from "../pages/audios/homeaudios/homehero.mp3";
import "../../styles/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../store/authSlice";

export default function Navbar(props) {
  let location = useLocation();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeToken());
    localStorage.removeItem("access_token");
    navigate("/sign-in");
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#172b4d" }}
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <ReactAudioPlayer
                  controls
                  style={{
                    height: "35px",
                    width: "200px",
                    marginRight: "5px",
                    marginTop: "5px",
                  }}
                  src={homehero}
                />
              </li>
              <li className="nav-item ">
                <Link
                  to="/"
                  className={`btn btn-primary mx-1 my-1  ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/services#id=a"
                  className={`btn btn-secondary mx-1 my-1  ${
                    location.pathname === "/services#id=a" ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  Services
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle my-1"
                  to={"/services"}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={props.onClick}
                      to={"/services#id=a"}
                    >
                      Character Certificate
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={props.onClick}
                      to={"/services#id=b"}
                    >
                      General Police Verification
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={props.onClick}
                      to={"/services#id=c"}
                    >
                      Learner Driving License
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={props.onClick}
                      to={"/services#id=d"}
                    >
                      Driving License Renewal
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={props.onClick}
                      to={"/services#id=e"}
                    >
                      International Driving License
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={props.onClick}
                      to={"/services#id=f"}
                    >
                      Duplicate Driving License
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={props.onClick}
                      to={"/services#id=g"}
                    >
                      Endorsement of a License
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={props.onClick}
                      to={"/services#id=h"}
                    >
                      Employee Registration
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={props.onClick}
                      to={"/services#id=i"}
                    >
                      Tenants Registration
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={props.onClick}
                      to={"/services#id=j"}
                    >
                      Vehicle Verification
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={props.onClick}
                      to={"/services#id=k"}
                    >
                      Loss Report
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={props.onClick}
                      to={"/services#id=l"}
                    >
                      Crime Report
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={props.onClick}
                      to={"/services#id=m"}
                    >
                      Women Violence Report
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={props.onClick}
                      to={"/services#id=n"}
                    >
                      Copy of FIR
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link
                  to="centers"
                  className={`btn btn-success mx-1 my-1  ${
                    location.pathname === "/centers" ? "active" : ""
                  }`}
                >
                  Our Centers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className={`btn btn-danger mx-1 my-1  ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
              {token ? (
                <>
                  <li className="nav-item">
                    <Link
                      to="/myforms"
                      className={`btn btn-warning mx-1 my-1  ${
                        location.pathname === "/myforms" ? "active" : ""
                      }`}
                    >
                      My Form Submissions
                    </Link>
                  </li>
                  <li>
                    <button
                      className="btn btn-light mx-1 my-1"
                      onClick={handleLogout}
                    >
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    type="button"
                    className={`btn btn-light mx-1 my-1 ${
                      location.pathname === "/sign-in" ? "" : "active"
                    }`}
                    to="/sign-in"
                  >
                    Sign In
                  </Link>
                </li>
              )}
              {/* Urdu Functionlity */}
              {/* <button
                type="button"
                className={`btn btn-outline-danger mx-1 my-1 ${
                  location.pathname === "/urdu" ? "active" : ""
                }`}
              >
                اردو
              </button> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
