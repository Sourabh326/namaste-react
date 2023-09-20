import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {UserContext} from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const onlineStatus = useOnlineStatus();
  const {cart} = useSelector((state)=> state);
  const [loginTitle, setLoginTitle] = useState("Login");
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
          <li className="px-4 text-md text-slate-600 hover:text-slate-500"> <a>{onlineStatus ? (<i class="fa fa-circle text-green-700" aria-hidden="true"></i>) : <i class="fa fa-circle text-red-700" aria-hidden="true"></i>}</a> </li>
          <li className="px-4 text-md text-slate-600 hover:text-slate-500"> <i class="fa fa-home" aria-hidden="true"></i> {" "} <Link to="/">Home</Link> </li>
          <li className="px-4 text-md text-slate-600 hover:text-slate-500"> <Link to="/about">About</Link> </li>
          <li className="px-4 text-md text-slate-600 hover:text-slate-500"> <Link to="/contact">Contact Us</Link> </li>
          {/* <li className="px-4 text-md text-slate-600 hover:text-slate-500"> <Link to="/grocery">Grocery</Link> </li> */}
          <li className="px-4 text-md text-slate-600 hover:text-slate-500"> <Link to="/cart"> <i class="fa fa-shopping-cart" aria-hidden="true"> </i> {" "}
           Cart ({cart?.item.length }) </Link> </li>
          <button className="px-4 text-md text-slate-600 hover:text-slate-500"   onClick={()=> {
            loginTitle === "Login" ? (setLoginTitle("Logout"), setUser({username:'Sourabh'})) : (setLoginTitle("Login"),  setUser({username:'Admin'}))
          }}>{loginTitle}</button>
          <li className="px-4 text-md text-slate-600 hover:text-slate-500 font-semibold">{user.username}</li>
        </ul>
      </div>
    </div>
  ); 
};

export default Header;
