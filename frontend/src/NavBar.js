import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "./UserContext";

const NavBar = () => {
    const  { user, logoutUser} = useContext(UserContext);
    return (
        <div className="NavBar">
            
            <NavLink exact to="/">          Home        </NavLink>
            <NavLink exact to="/profile">   Profile     </NavLink>
            <NavLink exact to="/companies"> companies   </NavLink>
            <NavLink exact to="/jobs">      jobs        </NavLink>
            {user ? 
                <>  
                    <span className="NavBar-greeting"> 
                        Hello, {user.username}! 
                    </span>
                    <NavLink exact to="/" onClick={logoutUser}>
                        logout
                    </NavLink>

                </> 
                : 
                <>
                    <NavLink exact to="/login">
                        login
                    </NavLink>
                    <NavLink exact to="/signup">
                        signup
                    </NavLink>
                </>
            }
           

        </div> 
)};
export default NavBar