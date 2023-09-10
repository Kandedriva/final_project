import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";





function NavBar(){

    const history = useHistory();

    function handleLogOut(){
        sessionStorage.clear();
        history.push("/logout")

    }
    return (
        
    <div className="navbar">
    <button onClick={handleLogOut}>Logout</button>
            <NavLink to="/" exact>
                Job List 
            </NavLink>
            <NavLink to ="/list" exact>
                <span>Your Applications</span>
            </NavLink>
            <NavLink to="/create-Job" exact>
                Open a position
            </NavLink>
            <NavLink to="/logout" exact>
                Logout
            </NavLink>
    </div>
   
    )
}

export default NavBar;