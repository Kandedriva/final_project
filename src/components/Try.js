import React, { useState } from 'react';
import { Button,  } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';


function Try(){
return(
    <div className="logIn"> 

<Form>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter city" />
        </Form.Group>

        </Form>



    </div>
)
}

export default Try