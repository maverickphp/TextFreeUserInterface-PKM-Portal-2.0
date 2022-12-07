import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/FooterCard.css";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import HomeIcon from "@mui/icons-material/Home";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../store/authSlice";

export default function FooterCard() {
  tippy("#myButton1", {
    content: "Add Text here",
  });
  tippy("#myButton2", {
    content: "Add Text here",
  });
  tippy("#myButton3", {
    content: "Add Text here",
  });
  tippy("#myButton4", {
    content: "Add Text here",
  });
  tippy("#myButton5", {
    content: "Add Text here",
  });
  tippy("#myButton6", {
    content: "Add Text here",
  });
  const myStyle = {
    height: 70,
    fontSize: 45,
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    margin: "auto",
  };

  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch(removeToken());
    localStorage.removeItem('access_token')
    navigate('/sign-in')
  }

  return (
    <div>
      <div
        className="card-group"
        style={{
          backgroundColor: "rgb(33 37 41)",
        }}
      >
        <Link className="card" to={"/"}>
          <HomeIcon id="#myButton1" style={myStyle} />
        </Link>

        <Link className="card" to={"services"}>
          <LocalPoliceIcon id="#myButton2" style={myStyle} />
        </Link>

        <Link className="card" to={"centers"}>
          <BusinessCenterIcon id="#myButton3" style={myStyle} />
        </Link>

        <Link className="card" to={"contact"}>
          <AddIcCallIcon id="#myButton4" style={myStyle} />
        </Link>

        <Link className="card" to={"sign-in"}>
          <VpnKeyIcon id="#myButton5" style={myStyle} />
        </Link>

        <Link className="card" to={'sign-up'} onClick={handleLogout}>
          <ExitToAppIcon id="#myButton6" style={myStyle} />
        </Link>
      </div>
    </div>
  );
}
