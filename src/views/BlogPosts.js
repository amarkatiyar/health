
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
import axios from 'axios';




 class BasicCardExample extends React.Component {

  componentDidMount = () => {
    // http://192.168.0.122:5001/patientList
    let docID = sessionStorage.getItem("docID");
    axios.get(`http://192.168.0.122:5001/PatientList?doc_ID=${docID}`)
            .then(function(response) {
              const res = response;
              console.log(res);
              console.log("axios");
              
              // if (res.status === 200) {
              //   props.actionAddVideo(res.data);
              // }
  
            })
            .catch(function() {
              console.log("Server issue / no data found");
            });
  }

  render() {
  return (
    <div className="container"style={{fontFamily:"Times"}}>
    <div className="row mt-4 ">
    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
    <Card className="mb-2"  style={{height: "700px"}}>
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
      
            <div className="p-0 pb-3">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <small>
            <a href="./patientacc">
            
            <table className="table mb-0 ">
          
             
              <tbody style={{fontSize:"12px"}}>
                
              
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
          </div>
    </Card>
    </div>
  
    {/* **************************this is second card************ */}
   
    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
    <div style={{fontFamily:" Times"}}>  
    
    <Card className="mb-5"  style={{height: "700px"}}>
    <div class="d-flex justify-content-around ml-4 mt-3 mr-4">
    <div className="">
    <a href="#" > <i class="text-warning far fa-calendar-alt pr-2"style={{fontSize:"20px"}}></i>&nbsp;&nbsp;&nbsp;&nbsp;<span className=" text-success">CALENDER</span></a>
    </div>
    <div className="ml-auto">
    <a href="#"><i class=" text-dark fas fa-print "></i></a> &nbsp; &nbsp; &nbsp; &nbsp; 
    <a href="#"><i class=" text-dark fas fa-ellipsis-v"></i></a>
    </div>
    </div>
   <div className="row pl-3 pt-3 pr-3">

    <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
      <select class="form-control bg-light" id="sel1" name="sellist1">
     <option value="">Search Doctor/user by name,mobile,Kpid or e:email</option>
     <option value="1">Option 1</option>
     <option value="2">Option 2</option>
     <option value="3">Option 3</option>
     <option value="4">Option 4</option>
      </select>
      </div>
      <div className="col-lg-2"></div>
      <div className="col-lg-10 col-md-10 col-sm-10 col-10">
      <div className="">
      <Button outline theme="success">
      <i class="fas fa-chevron-left"></i>
      </Button>&nbsp;
      <Button outline theme="success">
        Today
      </Button>&nbsp;
      <Button outline theme="success">
        3 Days
      </Button>&nbsp;
      <Button outline theme="success">
        Week
      </Button>&nbsp;
      <Button outline theme="success">
        Month
      </Button>&nbsp;
      <Button outline theme="success">
      <i class="fas fa-chevron-right"></i>
      </Button>
      </div>
      
      </div>
      </div>
     
     <table className="table table-bordered mt-3">

      <tr className="text-success bg-light text-center"style={{fontSize:"12px"}}>
        <td>2019-05-06 Mon &nbsp;&nbsp;<i class='fas fa-edit  text-dark'></i></td>
        <td>2019-05-06 Tue &nbsp;&nbsp;<i class='fas fa-edit  text-dark'></i></td>
        <td>2019-05-06 Wed &nbsp;&nbsp;<i class='fas fa-edit  text-dark'></i></td>
      </tr>
    
    <tbody style={{fontSize:"11px"}}>
      <tr>
        <td>9:30 am</td>
        <td>9:30 am</td>
        <td>9:30 am</td>
      </tr>
      <tr>
        <td>10:00 am</td>
        <td>10:00 am</td>
        <td>10:00 am</td>
      </tr>
      <tr>
        <td>10:30 am</td>
        <td>10:30 am</td>
        <td>10:30 am</td>
      </tr>
      <tr>
        <td>11:00 am</td>
        <td>11:00 am</td>
        <td>11:00 am</td>
      </tr>
      <tr>
        <td>11:30 am</td>
        <td>11:30 am</td>
        <td>11:30 am</td>
      </tr>
      <tr>
        <td>12:00 am</td>
        <td>12:00 am</td>
        <td>12:00 am</td>
      </tr>
      <tr>
        <td>12:30 am</td>
        <td>12:30 am</td>
        <td>12:30 am</td>
      </tr>
      <tr>
        <td>1:00 am</td>
        <td>1:00 am</td>
        <td>1:00 am</td>
      </tr>
      <tr>
        <td>1:30 am</td>
        <td>1:30 am</td>
        <td>1:30 am</td>
      </tr>
    </tbody>
  </table>
    </Card>
    
    </div>
    </div>  
    </div>
    </div>
      

  
    
  );
}
 }
export default   BasicCardExample;

