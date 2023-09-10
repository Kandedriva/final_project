import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useHistory } from 'react-router-dom';

/* Import Bootstrap CSS */



function CreateJob() {

  // state to handle the POST request
  const [openPosition, setOpenPosition] = useState([]);
//state to control the input
    const [newJob, setnewJob] = useState({
        company: "",
        title: "",
        link: "",
        experience: "",
        salary: "",
        location: "",
        description: ""
      });
//handle inputs change funsction
      function handleChange(event){
        const name = event.target.name;
        let value = event.target.value;
        setnewJob({
          ...newJob,
          [name]: value,
        })
      }
      const history = useHistory()
//function to handle the post request
      function addNewPostion(jobs){
        setOpenPosition([...openPosition, jobs])

      }
//POST request to create NEW JOB
      function submitJob(event){
        event.preventDefault();
        const newjobForma = {
          company: newJob.company, 
          title: newJob.title, 
          link: newJob.link, 
          experience: newJob.experience, 
          salary: newJob.salary, 
          location: newJob.location,
           description: newJob.description
          }
        console.log("Submitted")
        fetch("https://phase-2-banckend.onrender.com/availableJobs",{
          method: "POST",
          headers:{"content-type": "application/json"
    
          },
          body: JSON.stringify(newjobForma),
      })
      .then(response=>response.json())
      .then(jobs=>{
       
        addNewPostion(jobs)
      })
    
      setnewJob({
        company: "",
        title: "",
        link: "",
        experience: "",
        salary: "",
        location: "",
        description: ""
      })
      history.push("/")
      }
  return (
    <div className="form-container info">
            <h3>Open a position and receive the candidats you need</h3>

      <Form className="" onSubmit={submitJob}>
        <Form.Group controlId="formCompanyName" >
          <Form.Label>Company's name:</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" name="company" value={newJob.company}  onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="formJobTitle">
          <Form.Label>Job Title:</Form.Label>
          <Form.Control type="text" placeholder="Enter job title" name="title" value={newJob.title}  onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="formWebsite">
          <Form.Label>Company's website:</Form.Label>
          <Form.Control type="link" placeholder="Enter website" name="link" value={newJob.link}  onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="formExperience">
          <Form.Label>Experiences:</Form.Label>
          <Form.Control type="text" placeholder="Experiences required" name="experience" value={newJob.experience} onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="formSalary">
          <Form.Label>Salary:</Form.Label>
          <Form.Control type="text" placeholder="Average salary/hour" name="salary" value={newJob.salary}  onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="formLocation">
          <Form.Label>Job's Location:</Form.Label>
          <Form.Control type="text" placeholder="Location" name="location" value={newJob.location}  onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Job description:</Form.Label>
          <FloatingLabel controlId="floatingDescription" label="">
        <Form.Control type="text" placeholder="" name="description" onChange={handleChange} value={newJob.description}/>
      </FloatingLabel>        </Form.Group>

        

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateJob;
