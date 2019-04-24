// 
import React from "react";
import { CardBody,Card, Form, FormInput, FormGroup, FormSelect,Button} from "shards-react";


export default function HealthRecord() {
  return (
    <div className="container">
    <CardBody >
      <Card style={{height: "470px", width:"100%"}}>
        <div className="row mt-3">
        <div className=" col-xl-10 col-lg-10 col-md-9 col-sm-9 col-9">
      <h6 className="ml-4  text-success"><i class="fas fa-list-ul"></i> &nbsp; &nbsp; &nbsp;PATIENT MEDICAL HISTORY</h6>
      </div>
      <div className=" col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3 "><i class=" text-dark fas fa-print"></i>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<i class=" text-dark fas fa-ellipsis-v"></i></div>
     </div>
     <div className="row pl-4 mt-2 mb-2 pr-4 ">
     <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
     <select class="form-control" id="sel1" name="sellist1">
     <option value="">Pitient by name,mobile,Kpid or email</option>
     <option value="1">Option 1</option>
     <option value="2">Option 2</option>
     <option value="3">Option 3</option>
     <option value="4">Option 4</option>
      </select>
      </div>
      <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
      <select class="form-control" id="sel1" name="sellist1">
     <option value="">User by name,mobile,Kpid or e:email</option>
     <option value="1">Option 1</option>
     <option value="2">Option 2</option>
     <option value="3">Option 3</option>
     <option value="4">Option 4</option>
      </select>
      </div>
      <div className= " col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"><Button className="mr-2" outline theme="success">
      <i class="far fa-credit-card"></i>&nbsp; Report
              </Button>
      </div>
      </div>
      <div className="text-center">
      
       <table className="table mt-3">
       
         <tr className="bg-light">
           <th><small><b>Patient</b></small></th>
           <th ><small><b>KPid</b></small></th>
           <th ><small><b>Gender/Age</b></small></th>
             
        </tr>
         <tr>
           <td></td>
           <td></td>
           <td></td>
           </tr>
        
       </table>
       
      
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
      <a href="NewhealthRecord"><Button className="ml-5 mt-5 pl-5 pr-5" outline theme="success">
      <i class="fas fa-plus"></i>&nbsp; &nbsp;New HealthRecord
              </Button></a>
              </div>
  
    </Card>
    </CardBody>
    </div>
  );
 }
