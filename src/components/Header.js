import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [loginTitle, setLoginTitle] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li> <a>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</a> </li>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/about">About</Link> </li>
          <li> <Link to="/contact">Contact Us</Link> </li>
          <li> <Link to="/grocery">Grocery</Link> </li>
          <li> <Link to="/cart">Cart </Link> </li>
          <button className="login-btn" onClick={()=> {
            loginTitle === "Login" ? setLoginTitle("Logout") : setLoginTitle("Login")
          }}>{loginTitle}</button>
        </ul>
      </div>
    </div>
  ); 
};

export default Header;
