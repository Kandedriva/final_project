import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';


function AvailableJobFormat({title, Company, experiences, average, location, description, website}){

    const [follow, setFollow] = useState(true);

const history = useHistory()
    function handleClick(){
        history.push("/apply")

    }

    function handleFollow(){
        setFollow(!follow)

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
            <Button variant="info" onClick={handleClick}>Apply</Button>{' '}
            {<p><Button variant="outline-info" className="follow" onClick={handleFollow}>{follow? "follow" : "You're following"} {Company}</Button></p>}
        </Form.Group>
            


        </div>
    )
}

export default AvailableJobFormat;