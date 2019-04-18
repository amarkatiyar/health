
import React from "react";
import { CardBody,Card, Form, FormInput, FormGroup, FormSelect,Button} from "shards-react";


export default function FormExample() {
  return (
    <div className="container">
    <CardBody >
      <Card style={{height: "470px", width:"450px"}}>
      <h6 className="ml-4 mt-3 text-success">CREATE PATIENT ACCOUNT</h6>
      <p className="ml-4"><small>Enter new patient's First name, Last name, Gender and press the create Button</small></p>
   
    <Form>
      <div className="container">
      <FormGroup>
        <div className="row">
        <div className="col-lg-4">
        <label htmlFor="#firstname">Firstname</label>
        </div>
        <div className="col-lg-8">
        <FormInput type="text" id="#firstname" placeholder="firstname" />
        </div>
        </div>
      </FormGroup>
      <FormGroup>
      <div className="row">
      <div className="col-lg-4">
        <label htmlFor="#lastname">Lastname</label>
      </div>
      <div className="col-lg-8">
        <FormInput type="text" id="#number" placeholder="lastname" />
        </div>
        </div>
      </FormGroup>


      <FormGroup>
      <div className="row">
        <div className="col-lg-4">
      <label htmlFor="#Gender">Gender</label>
      </div>
      <div className="col-lg-8">
      <FormSelect>
      <option value="first">Male</option>
      <option value="second">Female</option>
      <option value="third">
        Other
      </option>
    </FormSelect>
    </div>
    </div>
    </FormGroup>

    <FormGroup>
      <div className="row">
      <div className="col-lg-4">
      <label htmlFor="#date">Date of Birth</label>
      </div>
      <div className="col-lg-8">
      <FormInput id="#date" placeholder="10/07/96" />
     </div>
     </div>
    </FormGroup>

    <FormGroup>
      <div className="row">
      <div className="col-lg-4">
      <label htmlFor="#email">Email id</label>
      </div>
      <div className="col-lg-8">
      <FormInput type="email" id="#email" placeholder="Patient email id" />
      </div> 
      </div>
    </FormGroup>

    <FormGroup>
    <div className="row">
    <div className="col-lg-4">
      <label htmlFor="#number">Number</label>
    </div>
    <div className="col-lg-8">
      <FormInput type="number" id="#number" placeholder="+91 8840091275" />
    </div>
    </div>
    </FormGroup>

    <span className="text-center"><a href="#"><Button className="font-weight-bold mr-3" style={{height: "30px", width:"100px",}} outline theme="success">
    <i class="fas fa-check"></i>&nbsp; &nbsp;Create
      </Button></a>
      <a href="#"><Button className="font-weight-bold" style={{height: "30px", width:"100px"}}outline theme="success">
      <i class="fas fa-times"></i>&nbsp; Cancel
      </Button></a></span>
      


      

    </div>
    </Form>
    </Card>
    </CardBody>
    </div>
  );
 }
