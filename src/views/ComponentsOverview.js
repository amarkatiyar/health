// 
import React from "react";
import { CardBody,Card, Form, FormInput, FormGroup, FormSelect,Button} from "shards-react";


export default function HealthRecord() {
  return (
    <div className="container">
    <CardBody >
      <Card style={{height: "470px", width:"100%"}}>
        <div className="row mt-3">
        <div className="col-lg-10">
      <h6 className="ml-4  text-success"><i class="fas fa-list-ul"></i> &nbsp; &nbsp; &nbsp;PATIENT MEDICAL HISTORY</h6>
      </div>
      <div className="col-lg-2 "><i class="fas fa-print"></i>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<i class="fas fa-ellipsis-v"></i></div>
     </div>
     <div className="row ml-4 mt-2">
     <div className="col-lg-4">
     <select class="form-control" id="sel1" name="sellist1">
     <option value="">Pitient by name,mobile,Kpid or email</option>
     <option value="1">Option 1</option>
     <option value="2">Option 2</option>
     <option value="3">Option 3</option>
     <option value="4">Option 4</option>
      </select>
      </div>
      <div className="col-lg-4">
      <select class="form-control" id="sel1" name="sellist1">
     <option value="">User by name,mobile,Kpid or e:email</option>
     <option value="1">Option 1</option>
     <option value="2">Option 2</option>
     <option value="3">Option 3</option>
     <option value="4">Option 4</option>
      </select>
      </div>
      <div className="col-lg-4"><Button className="mr-2" outline theme="success">
      <i class="far fa-credit-card"></i>&nbsp; Report
              </Button>
      </div>
      </div>
      <div className="text-center">
      
       <table className="table mb-2 mt-5 ">
       
         <tr>
          
           <th><h6>Patient</h6></th>
           <th><h6>Kpid</h6></th>
           <th><h6>Gender Age</h6></th>
        </tr>
         <tr>
           <td></td>
           <td></td>
           <td></td>
           </tr>
        
       </table>
       
      
      </div>
      <Button className="ml-5 mt-5"style={{height: "35px", width:"200px"}} outline theme="success">
      <i class="fas fa-plus"></i>&nbsp; &nbsp;New HealthRecord
              </Button>
  
    </Card>
    </CardBody>
    </div>
  );
 }
