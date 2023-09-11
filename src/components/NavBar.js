import React, { useEffect, useState } from "react";
import { NavLink, useHistory,  } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";


function NavBar(){
    const history = useHistory();

    useEffect(() => {
        let email = sessionStorage.getItem("email");
        if (email === "" || email === null) history.push("/logout");
      }, []);
    
      const handleLogout = () => {
        // Clear user's session storage
        sessionStorage.removeItem("email");
    
        // Navigate to the "/logout" path
        history.push("/logout");
      };
    
    
    return (
        
    <div className="">
<Navbar bg="primary" data-bs-theme="dark" className="navbar">
        <Container>
        
          <Navbar.Brand href="/">Job List </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/list">Your Applications</Nav.Link>
            <Nav.Link href="/create-Job">Open a position</Nav.Link>           

          </Nav>
          <Button className="logOut"  onClick={handleLogout}>Logout</Button>
        </Container>
      </Navbar>
    </div>
   
    )
}

export default NavBar;