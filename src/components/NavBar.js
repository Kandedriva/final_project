import React from "react";
import { NavLink } from "react-router-dom";


function NavBar(){
    return (
    <div>
            <NavLink to="/" exact>
                Available 
            </NavLink>
            <NavLink to ="/list" exat>
                waiting list
            </NavLink>
            <NavLink to="/Create Job">
                Open a position
            </NavLink>
            <NavLink to="/Logout">
                Logout
            </NavLink>
    </div>
    )
}

export default NavBar;