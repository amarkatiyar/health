import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, } from 'shards-react'


export default class Edit1 extends React.Component{
    constructor(props) {
    super(props);
    this.state = { 
    open: false 
    };
    }
      
     toggle = () => {
    this.setState(prevState => {
    return { open: !prevState.open };
    });
    }
      
    render(){
    return(
    // <div className="container mt-3">
     <Card className="" style={{width:"600px",height:"400px"}}>
     <CardBody>
     <Row className="mt-0">
                   <div className="col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="fas fa-arrow-left mr-3"></i></h6></div>
                   <div className="col-lg-2 col-md-2 col-sm-2 col-2"><i class="fas fa-check"></i></div>
                 
                 </Row>
     <form>
         <div className="row">
             <div className="col-6 ">
             <label for="H_name" className="text-success">Hospital Name*</label>
             </div>
             <div className="col-6">
             <input type="text" className="form-control"  placeholder="Fname"></input>
             </div>
         </div>
         <div className="row mt-3">
             <div className="col-6 ">
             <label for="F_name" className="text-success">First Name*</label>
             </div>
             <div className="col-6">
             <input type="text" className="form-control"  placeholder="Fname"></input>
             </div>
         </div>
         <div className="row mt-3">
             <div className="col-6 ">
             <label for="L_name" className="text-success">Last Name*</label>
             </div>
             <div className="col-6">
             <input type="text" className="form-control"  placeholder="Fname"></input>
             </div>
         </div>
         <div class="form-group row mt-3">
                  <label for="Ad_status" class="col-sm-6 text-success">Administrator status*</label>
                  <Dropdown open={this.state.open} toggle={this.toggle} group></Dropdown>
                  <Dropdown open={this.state.open} toggle={this.toggle} group>
                        <Button outline size="md ml-3" theme="success" >Active</Button>
                        <DropdownToggle split />
                        <DropdownMenu>
                        <a href=""><DropdownItem>Doctor</DropdownItem></a>
                        <DropdownItem>Standard User</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                  {/* <Dropdown open={this.state.open} toggle={this.toggle} group></Dropdown> */}
                  <Dropdown open={this.state.open} toggle={this.toggle} group>
                    <select className="form-control ml-3 ">
                      <option value="">ACTIVE</option>
                      <option value="1">DEACTIVE</option>
                      {/* <option value="2">Other</option> */}
                      </select>
                    </Dropdown>
         </div>
         <div className="row mt-3">
             <div className="col-6 ">
             <label for="Mo_number" className=" text-success">Mobile Number</label>
             </div>
             <div className="col-6">
             <input type="text" className="form-control"  placeholder="Fname"></input>
             </div>
         </div>
         <Button outline size="md" className="mt-3 ml-5" theme="success">
             Save
         </Button>
     </form>
     </CardBody>        
     </Card>

        )
    }
  }

