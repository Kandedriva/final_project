import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';






function NavBar(){

    const history = useHistory();

    function handleLogOut(){
        sessionStorage.clear();
        history.push("/logout")

    }
    return (
        
    <div className="">

<Navbar bg="primary" data-bs-theme="dark" className="navbar">
        <Container>
          <Navbar.Brand href="/">Job List </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/list">Your Applications</Nav.Link>
            <Nav.Link href="/create-Job">Open a position</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>





    {/* <button onClick={handleLogOut}>Logout</button>
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
            </NavLink> */}
    </div>
   
    )
}

export default NavBar;