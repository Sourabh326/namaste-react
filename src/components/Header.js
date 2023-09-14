import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {UserContext} from "../utils/UserContext";

const Header = () => {

  const [loginTitle, setLoginTitle] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {user, setUser} = useContext(UserContext);
  
  return (
    <div className="flex justify-between items-center bg-gray-50 shadow-md">
      <div className="logo-container">
        <img
          className="w-28"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-md text-slate-600"> <a>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</a> </li>
          <li className="px-4 text-md text-slate-600"> <Link to="/">Home</Link> </li>
          <li className="px-4 text-md text-slate-600"> <Link to="/about">About</Link> </li>
          <li className="px-4 text-md text-slate-600"> <Link to="/contact">Contact Us</Link> </li>
          <li className="px-4 text-md text-slate-600"> <Link to="/grocery">Grocery</Link> </li>
          <li className="px-4 text-md text-slate-600"> <Link to="/cart">Cart </Link> </li>
          <button className="px-4 text-md text-slate-600"   onClick={()=> {
            loginTitle === "Login" ? (setLoginTitle("Logout"), setUser({username:'Sourabh'})) : (setLoginTitle("Login"),  setUser({username:'Admin'}))
          }}>{loginTitle}</button>
          <li className="px-4 text-md text-slate-600 font-semibold">{user.username}</li>
        </ul>
      </div>
    </div>
  ); 
};

export default Header;
