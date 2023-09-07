import React, { useState } from "react";
import { NavLink } from "react-router-dom";




function NavBar(){

    return (
   
        
    <div className="navbar">
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