import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal
  
} from "shards-react";
import RestSetting from "../../views/RestSetting";
import SetForms from "../../views/SetForms";

export default class DropdownSplitExample extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      open: false,
      showReset: false,
      setForms:false
    };
  }
  handleShowReset=()=>{
    this.setState({showReset: !this.state.showReset});
}
handleShowForms=()=>{
  this.setState({setForms: !this.state.setForms});
}

  toggle = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  }

  render(){
    const{showReset}=this.state;
    const{setForms}=this.state;

    return(

<Card small className="">
<div className="card">
    <CardHeader className="border-bottom mb-3">
      <div  className="mb-3 mx-auto">
        <h6 className="card-body" className="text-success">Profile</h6>
        <p className="body" style={{fontSize:"" }}>Edit your profile,change name,email,etc.</p>
        <Button outline size="sm" theme="success" className="mb-2 mr-1">
        <a className="text-success" href="./EditProfile"> Edit Profile</a>
      </Button>
      </div>
    </CardHeader>
  </div>
  <div className="card mt-3">
    <CardHeader className="border-bottom ">
      <div className="mb-3 mx-auto">
        <h6 className="text-success">Change Password</h6>
        <p>Change your password, it is recommended you change your password regular</p>
        <Button outline size="sm" theme="success" className="mb-2 mr-1">
        <a className="text-success" href="./ChangePassword">Change Password </a>
      </Button>
      </div>
    </CardHeader>
  </div>
  <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-success">Manage User</h6>
        <p>Manage users, you can create new user or view existing user and edit them</p>
        <Button outline size="sm" theme="success" className="mb-2 mr-1">
        <a className="text-success" href="./ManageUser">Manage User</a>
      </Button>
      </div>
    </CardHeader>
  </div>
  <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-success">FAVORITES</h6>
        <p>Set your favorite or frequently used values for Symptom, Diagnosis, Visit Reason, Procedure, Drug, Test Order, Note, Vaccine and select them quickly in Patient Health Record</p>
        <Dropdown open={this.state.open} toggle={this.toggle} group>
        <select className="form-control ml-3 ">
                      <option value="">SYMPTOM</option>
                      <option value="1">PROBLEMS</option>
                      <option value="1">VISIT REASON</option>
                      <option value="1">PROCEDURE</option>
                      <option value="1">MEDICATIONS</option>
                      <option value="1">TEST ORDER</option>
                      <option value="1">NOTE</option>
                     
                      </select>
        
      </Dropdown>
      </div>
    </CardHeader>
  </div>
  <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-success">HOSPITAL CODES</h6>
        <p>Set your hospital codes like procedure code, item/service code etc here and use them easily.</p>
        <Dropdown open={this.state.open} toggle={this.toggle} group>
        <select className="form-control ml-3 ">
                      <option value="">item/service code</option>
                      <option value="1">Drug code</option>
                      <option value="1">Procedure code</option>
                      <option value="1">Test code</option>
                     
                      </select>
      </Dropdown>
      </div>
    </CardHeader>
  </div>
  <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-success">HOSPITAL SERVICE CHARGES/ TAX</h6>
        <p>Set your hospital service charges/ Tax.</p>
        <Dropdown open={this.state.open} toggle={this.toggle} group>
        <select className="form-control ml-3 ">
                      <option value="">service charges/tax</option>
                      
                      </select>
      </Dropdown>
      </div>
    </CardHeader>
  </div>
  <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-success">NOTIFICATION</h6>
        <p>Set your user message notification</p>
        <input type="checkbox" outline size="sm" theme="success" className="mb-2 mr-1"></input>
        On complete EHR notify user*
      </div>
    </CardHeader>
  </div>
  <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-success">SMS/E-MAIL</h6>
        <p>Set your preference to send SMS/E-mail notifications</p>
        <input type="checkbox" outline size="sm" theme="success" className="mb-2 mr-1"></input>
        The Patient will receive text notifications and reminder<br></br>
        <input type="checkbox" outline size="sm" theme="success" className="mb-2 mr-1"></input>
        The Patient will receive email notifications and reminder
      </div>
    </CardHeader>
  </div>
  <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-success">LOGO PRINTING</h6>
        <p>Select image with logo that will used in the reports like health records, prescription, receipts etcCompany logo will be best 
        viewed in the dimensions of 200:100 pixels or 2:1 ratio. The file format should be in .jpeg or .jpg or .png or .gif.</p>
      <a href="#"><i className=" fas fa-edit"></i></a>
       
      </div>
    </CardHeader>
  </div>
  <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-success">DOCTOR SIGNATURE</h6>
        <p>Select doctor signature image that will used in the reports like health records, prescription etc
           Image will be best viewed in the dimensions of 300:100 pixels or 3:1 ratio. The file format should be in 
           .jpeg or .jpg or .png or .gif.</p>
           <a href="#"><i className=" fas fa-edit"></i></a>
      </div>
    </CardHeader>
  </div>
  <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-success">REPORT BY EMAIL</h6>
        <p>Set your preference to receive reports via email</p>
        <Dropdown open={this.state.open} toggle={this.toggle} group>
        <select className="form-control ml-3 ">
                      <option value="">Weekly</option>
                      <option value="">Daily</option>
                      <option value="">Monthly</option>
                      <option value="">None</option>
                     
                      </select>
      </Dropdown>
      </div>
    </CardHeader>
    </div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-success">AUDIT REPORTS</h6>
        <p>You can view your audit reports here</p>
        <Button outline size="sm" theme="success" className="mb-2 mr-1">
        <a className="text-success" href="./AuditReport">View Audit Reports</a>
      </Button>
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-success">CLINICAL DECISION SUPPORT</h6>
        <p>Set your Clinical Decision Support settings here</p>
        <Button outline size="sm" theme="success" className="mb-2 mr-1">
       <a className="text-success" href="./CDS"> Set Clinical Decision Report</a>
      </Button>
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-success">Forms</h6>
        <p>Create custom form use them in Electronic health record page</p>
        {/* <Dropdown open={this.state.open} toggle={this.toggle} group> */}
       <a onClick={() => {this.handleShowForms()}}> <Button outline  theme="success">Set forms</Button></a>
       < Modal size="sm" open={setForms} toggle={this.handlesetForms}>
      <SetForms/>
      </Modal>
        {/* <DropdownToggle split /> */}
      {/* </Dropdown> */}
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-success">RESET ALL SETTING</h6>
        <p>Reset all your settings back to default. This will reset system, EHR and other page settings to initial like 
           account created. This will not delete any data.</p>
        <a onClick={() => {this.handleShowReset()}}><Button outline size="sm" theme="success" className="mb-2 mr-1">
        Reset All your Setting
      </Button></a>
      < Modal size="sm" open={showReset} toggle={this.handleShowReset}>
      <RestSetting/>
      </Modal>
      </div>
    </CardHeader></div>
    <div className="card mt-3"></div>

  </Card>
    )
  }
}