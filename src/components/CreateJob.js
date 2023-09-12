import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useHistory } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { toast } from 'react-toastify';

/* Import Bootstrap CSS */



function CreateJob({openPosition, setOpenPosition, addNewPostion}) {

  // state to handle the POST request
  // const [openPosition, setOpenPosition] = useState([]);
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
      // function addNewPostion(jobs){
      //   setOpenPosition([...openPosition, jobs])

      // }
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
      toast.success("Your work position has been created with succuss.!!!")
      history.push("/")
      }
  return (
    <div className="job-creation">


<Form onSubmit={submitJob}>
    <h2 className="CreatgH2">Open a position and receive the candidats you need</h2>
      <InputGroup className="mb-3 " >
        <InputGroup.Text id="basic-addon1">Company's name:</InputGroup.Text>
        <Form.Control
        name="company"
         value={newJob.company}  
         onChange={handleChange}
          placeholder="company"
          aria-label="company"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
         name="title"
         value={newJob.title}  
         onChange={handleChange}
          placeholder="The job title"
          aria-label="The job title"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">Title</InputGroup.Text>
      </InputGroup>

      <Form.Label htmlFor="basic-url">Company's valid URL</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://example.com/company/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" name="link" value={newJob.link} onChange={handleChange} />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Salary $:</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" placeholder="Average salary/hour" name="salary" value={newJob.salary} onChange={handleChange}/>
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
<div className="post-new-job">
      <Form.Group controlId="formAddress" className="post-new-job">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Workplace" name="location" value={newJob.location} onChange={handleChange}/>
        </Form.Group>

      <InputGroup className="post-new-job">
        <InputGroup.Text>Experience</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" placeholder="Years of Experiences required" name="experience" value={newJob.experience} onChange={handleChange}/>
      </InputGroup>

      <InputGroup className="post-new-job">
        <InputGroup.Text>Job description:</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" placeholder="More details about the position" name="description" onChange={handleChange} value={newJob.description}/>
      </InputGroup>

      <Button 
      type="submit"
      variant="secondary" 
      className="SignIn">
      Secondary
      </Button>{' '}
      </div>
      </Form>

    </div>
  );
}

export default CreateJob;
