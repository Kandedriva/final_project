import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
 
function Welcome() {
  const history = useHistory();

function logInClick(){
  history.push("/login");
}
function createClick(){
  history.push("/register")

}

    return (
      <div className="homePage">
<Form.Group controlId="formAddress">
<h1>Welcome to Dream Job</h1>
<span>
Dream Job serves as the ultimate platform for anyone, 
whether you're actively seeking employment or an employer in search of talent. 
Regardless of your educational background, Dream Job is tailored to meet your needs.<br/>
On Dream Job, job seekers have the freedom to browse a comprehensive list of job opportunities. 
They can select positions that align with their preferences, explore job descriptions, and visit companies' websites for deeper insights.
 By following these companies, they can stay updated and receive notifications whenever new job openings become available.
 Moreover, job seekers have the flexibility to apply for multiple positions at their discretion.<br/>
 Dream Job offers employers the perfect platform to post job listings and eagerly await applications from ideal candidates.<br/>
</span>
<Button
type="button" 
name="button"
 onClick={logInClick}
 variant="outline-primary" 
 className="sign">
 Log In
 </Button>{' '}
<Button
type="button" 
name="button" 
onClick={createClick}
 variant="outline-success"
  className="sign">
  Register
  </Button>{' '}
          
        </Form.Group>
        </div>
     
    );
  }

  export default Welcome;
  