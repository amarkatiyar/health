import React from 'react'
import {Row,Button, Card, CardBody } from 'shards-react'



export default function CardBodyExample() {
  return (
    <div className="container">
    <Row>
      {/* ************this first column******** */}
    <div className="col lg-6 mt-4"><p>Patient Account</p>
   <div className="mb-4"> <a href="3"><Button className="mr-2" outline theme="success">
   <i class="fas fa-laptop-medical"></i> &nbsp;
        Health Record
      </Button></a>
      <a href="#"><Button outline theme="success">
      <i class="fas fa-plus"></i> &nbsp;
        New Health Record 
      </Button></a></div>
    </div>
    {/* ***********************second column************* */}
    <div className="col lg-6 mt-4">second
    </div>
    </Row>

    <div className="row">
    <div className="col lg-6">
    <Card className="mb-3"  style={{height: "240px"}}>
      <CardBody>
        Nunc quis nisl ac justo elementum sagittis in quis justo.
      </CardBody>
    </Card>

    <Card className="mb-3" style={{height: "240px"}}> 
      <CardBody>
        < h6 className="text-success">Personal &nbsp; <a href="#"><i class="far fa-edit"></i></a></h6>
      </CardBody>
    </Card>

    <Card className="mb-3" style={{height: "240px"}}> 
      <CardBody>
      <div className="row"><div className="col-lg-10">  <h6 className="text-success">ALTERNATE CONTACT</h6></div><div className="col-lg-2"><a href="#"><i class="fas fa-plus"></i></a></div></div>
      </CardBody>
    </Card>

    <Card className="mb-3" style={{height: "240px"}}> 
      <CardBody>
        <h6 className="text-success">UPCOMING APPOINTMENTS</h6>
      </CardBody>
    </Card>
    <div className="mb-2">
    <a href="#"><Button  className="mr-2" outline theme="success"><i class="fas fa-print"></i> &nbsp;Print Id Card </Button></a>
    <a href="#"><Button  className="mr-2" outline theme="success"><i class="far fa-trash-alt"></i> &nbsp;Delete </Button></a>
    <a href="#"><Button  className="mr-2" outline theme="success"><i class="fas fa-arrow-left"></i> &nbsp; Back </Button></a>
    </div>
       
    


    </div>

    <div className="col lg-6">

    <Card className="mb-3" style={{height: "240px"}}> 
      <CardBody>
         <a href="#"><i class="far fa-edit"></i></a>
      </CardBody> 
    </Card>

    <Card  className="mb-3" style={{height: "240px"}}> 
      <CardBody>
  <h6 className="text-success">CONTACT</h6>
  <a href="#"><Button size="sm" className="mr-2 p-1" outline theme="success">
  <i class="fas fa-plus"></i> &nbsp;
        Add
      </Button></a>
      </CardBody>
    </Card>

    <Card className="mb-3" style={{height: "240px"}}> 
      <CardBody>
      <div className="row"><div className="col-lg-10">  <h6 className="text-success">CARE TEAM MEMBER</h6></div><div className="col-lg-2"><a href="#"><i class="fas fa-plus"></i></a></div></div>
      </CardBody>
    </Card>

    
    </div>
    
    </div>
    </div>
    
  
    

    
  )
}

