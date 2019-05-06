// 
import React from "react";
import { CardBody,Card, Form, FormInput, FormGroup, FormSelect,Button} from "shards-react";


  class  HealthRecord extends React.Component{

  
  render() {
  return (
    <div className="container" style={{fontFamily:"Times"}}>
    <CardBody >
      <Card style={{height: "470px", width:"100%"}}>
        <div className="row mt-3">
        <div className=" col-xl-10 col-lg-10 col-md-9 col-sm-9 col-9">
      <h6 className="ml-4"><i class=" text-danger fas fa-list-ul"></i> &nbsp; &nbsp; &nbsp;<span className="text-success">PATIENT MEDICAL HISTORY</span></h6>
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
       
         <tr className="bg-light"style={{fontFamily:" Geneva"}}>
           <th scope="col " className="border-2">Patient</th>
           <th scope="col " className="border-2">KPid</th>
           <th scope="col " className="border-2">Gender/Age</th>
             
        </tr>
         <tr>
           <td></td>
           <td></td>
           <td></td>
           </tr>
        
       </table>
       
      
      </div>
      <div className="">
      <a href="NewhealthRecord"><Button className="ml-5 mt-5 pl-5 pr-5" outline theme="success">
      <i class="fas fa-plus"></i>&nbsp; &nbsp;New HealthRecord
              </Button></a>
              </div>
  
    </Card>
    </CardBody>
    </div>
  );
 }
}
 export default  HealthRecord;
