// @Author Prashant

import React from "react";
import {
  Card,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from "shards-react";
import Doctorshedule from "./Doctorshedule";
class Calender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showShedule: false,
         
        };
      }
      handleShowShedule = prevState => {
        this.setState({ showShedule: !prevState });
      };
  

  render() {
    let { showShedule } = this.state;


    return (
    <div className="container mb-4 mt-4"style={{fontFamily:" Times"}}>  
    
    <Card className="mb-5"  style={{height: "700px"}}>
    <div class="d-flex justify-content-around pl-4 pr-4 pt-4">
    <div className="">
    <a href="#" > <i class="text-warning far fa-calendar-alt pr-2" style={{fontSize:"20px"}}></i>&nbsp;&nbsp;&nbsp;&nbsp;<span className=" text-success">CALENDER</span></a>
    </div>
    <div className="ml-auto">
    <a href="#"><i class=" text-dark fas fa-print "></i></a> &nbsp; &nbsp; &nbsp; &nbsp; 
    <a href="#"><i class=" text-dark fas fa-ellipsis-v"></i></a>
    </div>
    </div>
   <div className="row pl-3 pt-3 pr-3">

    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-3">
      <select class="form-control" id="sel1" name="sellist1">
     <option value="">Search Doctor/user by name,mobile,Kpid or e:email</option>
     <option value="1">Option 1</option>
     <option value="2">Option 2</option>
     <option value="3">Option 3</option>
     <option value="4">Option 4</option>
      </select>
      </div>
      <div className="col-lg-3"></div>
      <div className="col-lg-5 col-md-12 col-sm-12 col-12">
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
     <h6 className="pl-3"> <small>Click on the date to set doctor/user schedule, hours and web appointments.Click on the time slot for the patient appointment.</small></h6>
     <table class="table table-bordered">

      <tr className=" bg-light "style={{fontSize:"13px"}}>
        <td className="text-center text-success">2019-05-06 Mon  &nbsp;<i class='fas fa-edit text-dark'  onClick={() => this.handleShowShedule(showShedule)}></i></td>
        {showShedule && <Doctorshedule />}
        <td className="text-center text-success">2019-05-06 Tue  &nbsp;<i class='fas fa-edit text-dark'></i></td>
        <td className="text-center text-success">2019-05-06 Wed &nbsp;<i class='fas fa-edit  text-dark'></i></td>
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
    
    
    
    );
  }
}

export default Calender;
