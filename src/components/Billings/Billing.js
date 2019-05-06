// 
import React from "react";
import { CardBody,Card,FormInput, FormGroup,Button,ButtonGroup} from "shards-react";


export default function Billing() {
  return (
    <div className="container"style={{fontFamily:" Times"}}>
    
      <Card className="mt-3 mb-3" >
      {/* <CardBody > */}
        <div className="row pt-4">
        <div className=" col-xl-10 col-lg-10 col-md-9 col-sm-9 col-9 ">
      <a href="#"><i class=" text-success far fa-credit-card pl-5"></i><span className="pl-4 text-success">BILLING</span></a>
      </div>
      <div className=" col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3 "><i class=" text-dark fas fa-print"></i>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<i class=" text-dark fas fa-ellipsis-v"></i></div>
     </div>
     <div className="row pl-4 pt-4 mb-2 pr-4 ">
     <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
     <select className="form-control bg-light" id="sel2" name="sellist2">
     <option value="">Pitient by name,mobile,Kpid or email</option>
     <option value="1">Option 1</option>
     <option value="2">Option 2</option>
     <option value="3">Option 3</option>
     <option value="4">Option 4</option>
      </select>
      </div>
      <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
      <select className="form-control bg-light" id="sel2" name="sellist2">
     <option value="">User by name,mobile,Kpid or e:email</option>
     <option value="1">Option 1</option>
     <option value="2">Option 2</option>
     <option value="3">Option 3</option>
     <option value="4">Option 4</option>
      </select>
      </div>

      <div className= " col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 mb-3">
     <select className="form-control bg-light" id="sel3" name="sellist3">
     <option value="">Date</option>
     <option value="1">all</option>
     <option value="2">today </option>
     <option value="3">yesterday</option>
     <option value="4">this week</option>
      </select>
      </div>

      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12 mb-3">
      <select className="form-control bg-light" id="sel3" name="sellist3">
     <option value="">Group by</option>
     <option value="1">none</option>
     <option value="2">date </option>
     <option value="3">User</option>
     <option value="4">Option 4</option>
      </select>
      </div>

      </div>

     
     <div className="row pl-4 pr-4">
     <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
     <select className="form-control bg-light" id="sel3" name="sellist3">
     <option value="">Payment</option>
     <option value="1">all</option>
     <option value="2">paid </option>
     <option value="3">unpaid</option>
     <option value="4">Option 4</option>
      </select>
      </div>

      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
      <FormGroup>
        <FormInput className="bg-light" type="text" id="#invoice Id" placeholder="Invoice Id" />
      </FormGroup></div>
      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
      <div>
        <Button className="" outline theme="success">
        <i className="fas fa-search"></i> &nbsp; &nbsp;Search.....
        </Button>
      </div>
      </div>

      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
      <div><a href="CreateBill">
        <Button className="" outline theme="success">
        <i className="fas fa-plus "></i> &nbsp; &nbsp;
        New Bill
        </Button></a>
      </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-4"></div>

          
                
      </div>


      <div className="text-center">
      
       <table className="table mt-3">
       
         <tr className="bg-light" style={{fontFamily:" Geneva"}}>
           <th scope="col " className="border-1">Date</th>
           <th scope="col " className="border-1">Particular</th>
           <th scope="col " className="border-1" >Amount</th>
           <th scope="col " className="border-1">Paid</th>    
        </tr>
         <tr>
           <td>22/04/2019</td>
           <td>0.0</td>
           <td>00.0</td>
           <td>000.0</td>
           </tr>
        
       </table>
       
      
      </div>
      <div className="pt-5 pl-5 pb-5 "><a href="CreateBill">
        <Button className="font-weight-bold" outline theme="success">
        <i className="fas fa-plus mr-2 "></i> &nbsp; 
        Create Bill
        </Button></a>
      </div>
  
      {/* </CardBody> */}
    </Card>
    
    </div>
  );
 }
