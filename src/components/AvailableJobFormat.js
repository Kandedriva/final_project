import React from "react";
import { useHistory } from "react-router-dom";


function AvailableJobFormat({title, Company, experiences, average, location, description, website}){
const history = useHistory()
    function handleClick(){
        history.push("/apply")

    }
    return (
        <div>
            <h3>The job's Title:  { title}</h3>
            <h5>Company: {Company}</h5>
            <strong><p>Visite use: {website}</p></strong>
            <span>Years of experience riquire: {experiences } </span>
            <p>Average salary: {average} </p>
            <p>Location: {location} </p>
            <p>Job details: {description} </p>
            <button onClick={handleClick}>Apply</button>


        </div>
    )
}

export default AvailableJobFormat;