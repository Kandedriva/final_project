import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';


function AvailableJobFormat({title, Company, experiences, average, location, description, website}){
const history = useHistory()
    function handleClick(){
        history.push("/apply")

    }
    return (
        <div className="display-job">
        <Form.Group controlId="formAddress">
        <h3>The job's Title:  { title}</h3>
            <h5>Company: {Company}</h5>
            <strong><p>Visite use: {website}</p></strong>
            <span>Years of experience riquire: {experiences } </span>
            <p>Average salary: {average} </p>
            <p>Location: {location} </p>
            <p>Job details: {description} </p>
            {/* <Button variant="outline-light" >Apply</Button>{' '} */}
            <Button variant="info" onClick={handleClick}>Apply</Button>{' '}


            {/* <button onClick={handleClick}>Apply</button> */}
          
        </Form.Group>
            


        </div>
    )
}

export default AvailableJobFormat;