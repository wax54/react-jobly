import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./UserContext";

const NavBar = () => {
    const  { user, logoutUser} = useContext(UserContext);
    const LoggedInLinks = [
        <NavLink exact to="/" >         Home        </NavLink>,
        <NavLink exact to="/companies"> companies   </NavLink>,
        <NavLink exact to="/jobs">      jobs        </NavLink>,
        <span className="NavBar-greeting"> 
            Hello, <NavLink exact to="/profile">{user.username}</NavLink>!
        </span>,
        <NavLink exact to="/" onClick={logoutUser}>
                                        logout
        </NavLink>,
    ]

    const LoggedOutLinks = [
        <NavLink exact to = "/" >   Home    </NavLink>,
        <NavLink exact to="/login"> login   </NavLink>,
        <NavLink exact to="/signup">Signup  </NavLink>,
    ]

    return (
        <div className="NavBar">
            {user.username ? LoggedInLinks : LoggedOutLinks}
        </div> 
)};
export default NavBar