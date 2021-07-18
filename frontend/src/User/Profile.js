import React, { useContext } from "react";
import UserContext from "../UserContext";

const Profile = () => {
    const { user } = useContext(UserContext);
    return (
        <div className="Profile">
            {Object.keys(user).map(prop => {
                return (user[prop] ? <span key={prop}>{prop} - {user[prop]}<br /></span> : null)
            })}
        </div> 
)};
export default Profile