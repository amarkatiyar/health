
import React from "react";
import {
     Card, 
     Button,
    Dropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,} from "shards-react";


  class  HealthRecord extends React.Component{
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        open: false,
      };
    }
    toggle() {
      this.setState(prevState => {
        return { open: !prevState.open };
      });
    }

  
  render() {
  return (
    <div className="container mt-4 mb-4" style={{fontFamily:"Times"}}>
    
      <Card style={{height: "470px", width:"100%"}}>
       

     <div className="d-flex justify-content-arround p-4">
     <div className="">
     <h6 className=""><i class=" text-danger fas fa-list-ul"style={{fontSize:"20px"}}></i> &nbsp; &nbsp; &nbsp;<span className="text-success">PATIENT MEDICAL HISTORY</span></h6>
     </div>
     <div className="ml-auto">
     <Dropdown open={this.state.open} toggle={this.toggle}>
            <i class=" text-dark fas fa-print" />&nbsp; &nbsp; &nbsp;&nbsp;
            
        <DropdownToggle className="bg-white border-0 "><i class=" text-dark fas fa-ellipsis-v"style={{ fontSize: "15px" }} /></DropdownToggle>
        <DropdownMenu right>
          <DropdownItem><i class="fas fa-list-ul"></i>&nbsp; &nbsp;My EHR</DropdownItem>
          <DropdownItem><i class="fas fa-print"></i>&nbsp; &nbsp;print</DropdownItem>
          <DropdownItem> <i class="fab fa-youtube"></i>&nbsp; &nbsp;Tutorial video</DropdownItem>
          <DropdownItem> <i class="fas fa-question"></i>&nbsp; &nbsp;Help</DropdownItem>
        </DropdownMenu>
      </Dropdown>
     </div>
  
     
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
    
    </div>
  );
 }
}
 export default  HealthRecord;
