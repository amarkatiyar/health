
import React from "react";
import {

  Card,
  CardHeader,
  CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Button
} from "shards-react";


export default function BasicCardExample() {
  return (
    <div className="container mb-5"style={{fontFamily:" Times"}}>
    <div className="row mt-4">
    <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
    <Card  style={{height: "600px"}}>
      <CardHeader className="bg-light">
            <InputGroup size="md" seamless>
              <InputGroupAddon type="prepend">
                <InputGroupText>
                <i class=" text-primary fas fa-search"></i>
                </InputGroupText>
              </InputGroupAddon>
              <FormInput className="border-3 " placeholder="Search patient by name.." />
              <span className="ml-2 mr-2"> <a href="#"><Button outline theme="success">
              <i class="fas fa-bars"></i> &nbsp;
          Report
      </Button></a></span><span><a href="./patient"><Button outline theme="success">
      <i class="fas fa-user-plus"></i> &nbsp;
        New patient
      </Button></a></span>
            </InputGroup></CardHeader>
      
            <CardBody className="p-0 pb-3"><small>
            <a href="./patientacc">  
            <table className="table mb-0">
          
              <thead className="bg-light">
                <tr>
                  <th scope="col " className="border-0">
                  Patient Name/KPiD
                  </th>
                  <th scope="col" className="border-0">
                  Phone/Email
                  </th>
                  <th scope="col" className="border-0">
                  Address
                  </th>
                  <th scope="col" className="border-0">
                  Birth Date
                  </th>
                </tr>
              </thead>
              
              <tbody style={{fontSize:"12px"}}>
                <tr>
                  <td>1/prashant</td>
                  <td>890380345/prashantkatiyar10796@gmail.com</td>
                  <td>kanpur</td>
                  <td>10/07/96</td>
                  
                </tr>
                <tr>
                  <td>2 /kamal</td>
                  <td>993091092/hdfuiafi@sjdfgmail.com</td>
                  <td>lucknow</td>
                  <td>30/2/98</td>
                 
                </tr>
                <tr>
                  <td>3/rana</td>
                  <td>8849902932/ranakat10894@gmail.com</td>
                  <td>delhi</td>
                  <td>10/3/94</td>
                  
                </tr>
                
              </tbody>
            
            </table>
          </a>
            </small>
          </CardBody>
    </Card>
    </div>   
   
    </div>
    </div>
      

  
    
  );
}
