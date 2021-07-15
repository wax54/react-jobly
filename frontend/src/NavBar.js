import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
    <div className="Navbar">
        Hi Im the Navbar Component
        <NavLink exact to="/">          Home               </NavLink>
        <NavLink exact to="/profile">   Profile            </NavLink>
        <NavLink exact to="/companies">   companies         </NavLink>
        <NavLink exact to="/companies/apple">   companies/apple   </NavLink>
        <NavLink exact to="/jobs">   jobs              </NavLink>
        <NavLink exact to="/login">   login             </NavLink>
        <NavLink exact to="/signup">   signup            </NavLink>

    </div> 
);
export default NavBar