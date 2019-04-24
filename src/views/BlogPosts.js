
import React from "react";
import {

  Card,
  CardHeader,
  CardTitle,
  CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Button
} from "shards-react";
import PageTitle from "../components/common/PageTitle";

export default function BasicCardExample() {
  return (
    <div className="container">
    <div className="row mt-4 ">
    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
    <Card className="mb-2"  style={{height: "600px"}}>
      <CardHeader className="bg-light">
            <InputGroup size="md" seamless>
              <InputGroupAddon type="prepend">
                <InputGroupText>
          <i class=" text-primary fas fa-search"></i>&nbsp;
          
                </InputGroupText>
              </InputGroupAddon>
              <FormInput className="border-3 " placeholder="Search patient by name.." />
              <span className="pl-2"> <a href="./patient"><Button outline theme="success">
              <i class="fas fa-user-plus"></i> &nbsp;
        New patient
      </Button></a></span>
            </InputGroup></CardHeader>
      
            <CardBody className="p-0 pb-3">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <small>
            <a href="./patientacc">
            
            <table className="table mb-0 ">
          
             
              <tbody>
                
              
                <tr >
                  <td>prashant</td>
                  <td>890380345/prashantkatiyar10796@gmail.com</td>
                  <td>kanpur</td>
                  <td>10/07/96</td>
                  
                </tr>
                <tr>
                  <td>kamal</td>
                  <td>993091092/hdfuiafi@sjdfgmail.com</td>
                  <td>lucknow</td>
                  <td>30/2/98</td>
                 
                </tr>
                <tr>
                  <td>rana</td>
                  <td>8849902932/ranakat10894@gmail.com</td>
                  <td>delhi</td>
                  <td>10/3/94</td>
                  
                </tr>
                <tr>
                  <td>rana</td>
                  <td>8849902932/ranakat10894@gmail.com</td>
                  <td>delhi</td>
                  <td>10/3/94</td>
                  
                </tr>
                <tr>
                  <td>rana</td>
                  <td>8849902932/ranakat10894@gmail.com</td>
                  <td>delhi</td>
                  <td>10/3/94</td>
                  
                </tr>
                
              
              </tbody>
              
            </table>
            </a>
            </small></div>
          </CardBody>
    </Card>
    </div>
  
    {/* **************************this is second card************ */}
   
    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
      <Card className="mb-5"  style={{height: "600px"}}>
      <CardBody>
        <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-9 col-9">
        
      <a href="#" className="text-success font-weight-bold"><i class="far fa-calendar-alt pr-2"></i> &nbsp;CALENDER</a>
      </div>
      <div className="col-lg-2 col-md-2 col-sm-3 col-3">
      <a href="#"><i class=" text-dark fas fa-print "></i></a> &nbsp; &nbsp; 
      <a href="#"><i class=" text-dark fas fa-ellipsis-v"></i></a></div></div>
      <InputGroup size="md" seamless>
              <InputGroupAddon type="prepend">
                <InputGroupText>
                  {/* <FontAwesomeIcon icon={faSearch} /> */}
                </InputGroupText>
              </InputGroupAddon>
              <FormInput className="border-3 mt-2 bg-light " placeholder="Search Doctor user  by name.." />
            </InputGroup>
            
            
           
            </CardBody>
            </Card>
    </div>  
    </div>
    </div>
      

  
    
  );
}


