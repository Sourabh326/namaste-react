import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  const [loginTitle, setLoginTitle] = useState("Login");

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
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={()=> {
            loginTitle === "Login" ? setLoginTitle("Logout") : setLoginTitle("Login")
          }}>{loginTitle}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
