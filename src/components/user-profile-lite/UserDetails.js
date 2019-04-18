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
  
} from "shards-react";

export default class DropdownSplitExample extends React.Component{
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

<Card small className="">
<div className="card">
    <CardHeader className="border-bottom mb-3">
      <div  className="mb-3 mx-auto">
        <h6 className="card-body" className="text-primary">Profile</h6>
        <p>Edit your profile,change name,email,etc.</p>
        <Button outline size="sm" theme="primary" className="mb-2 mr-1">
        <a href="./EditUser"> Edit Profile</a>
      </Button>
      </div>
    </CardHeader>
    </div>
    <div className="card mt-3">
    <CardHeader className="border-bottom ">
      <div className="mb-3 mx-auto">
        <h6 className="text-primary">Change Password</h6>
        <p>Change your password, it is recommended you change your password regularl</p>
        <Button outline size="sm" theme="primary" className="mb-2 mr-1">
        Change Password
      </Button>
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-primary">Manage User</h6>
        <p>Manage users, you can create new user or view existing user and edit them</p>
        <Button outline size="sm" theme="primary" className="mb-2 mr-1">
        Manage User
      </Button>
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-primary">FAVORITES</h6>
        <p>Set your favorite or frequently used values for Symptom, Diagnosis, Visit Reason, Procedure, Drug, Test Order, Note, Vaccine and select them quickly in Patient Health Record</p>
        <Dropdown open={this.state.open} toggle={this.toggle} group>
        <Button outline size="sm" theme="primary" >set favourite</Button>
        <DropdownToggle split />
        <DropdownMenu>
          <DropdownItem>Symptom</DropdownItem>
          <DropdownItem>Problems</DropdownItem>
          <DropdownItem>Visit Reason</DropdownItem>
          <DropdownItem>Procedure</DropdownItem>
          <DropdownItem>Medications</DropdownItem>
          <DropdownItem>Test Order</DropdownItem>
          <DropdownItem>Note</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-primary">HOSPITAL CODES</h6>
        <p>Set your hospital codes like procedure code, item/service code etc here and use them easily.</p>
        <Dropdown open={this.state.open} toggle={this.toggle} group>
        <Button outline  theme="primary">Hospital codes</Button>
        <DropdownToggle split />
        <DropdownMenu>
          <DropdownItem>item/service code</DropdownItem>
          <DropdownItem>Drug code</DropdownItem>
          <DropdownItem>Procedure code</DropdownItem>
          <DropdownItem>Test code</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-primary">HOSPITAL SERVICE CHARGES/ TAX</h6>
        <p>Set your hospital service charges/ Tax.</p>
        <Dropdown open={this.state.open} toggle={this.toggle} group>
        <Button outline  theme="primary">HOSPITAL SERVICE CHARGES/ TAX</Button>
        <DropdownToggle split />
        <DropdownMenu>
          <DropdownItem>service charges/tax</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-primary">NOTIFICATION</h6>
        <p>Set your user message notification</p>
        <input type="checkbox" outline size="sm" theme="primary" className="mb-2 mr-1"></input>
        On complete EHR notify user*
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-primary">SMS/E-MAIL</h6>
        <p>Set your preference to send SMS/E-mail notifications</p>
        <input type="checkbox" outline size="sm" theme="primary" className="mb-2 mr-1"></input>
        The Patient will receive text notifications and reminder<br></br>
        <input type="checkbox" outline size="sm" theme="primary" className="mb-2 mr-1"></input>
        The Patient will receive email notifications and reminder
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-primary">LOGO PRINTING</h6>
        <p>Select image with logo that will used in the reports like health records, prescription, receipts etcCompany logo will be best 
        viewed in the dimensions of 200:100 pixels or 2:1 ratio. The file format should be in .jpeg or .jpg or .png or .gif.</p>
        <Button outline size="sm" theme="primary" className="mb-2 mr-1">
        company logo
      </Button>
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-primary">DOCTOR SIGNATURE</h6>
        <p>Select doctor signature image that will used in the reports like health records, prescription etc
           Image will be best viewed in the dimensions of 300:100 pixels or 3:1 ratio. The file format should be in 
           .jpeg or .jpg or .png or .gif.</p>
        <Button outline size="sm" theme="primary" className="mb-2 mr-1">
        Edit signature
      </Button>
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-primary">REPORT BY EMAIL</h6>
        <p>Set your preference to receive reports via email</p>
        <Dropdown open={this.state.open} toggle={this.toggle} group>
        <Button outline  theme="primary">Weekly</Button>
        <DropdownToggle split />
        <DropdownMenu>
          <DropdownItem>Weekly</DropdownItem>
          <DropdownItem>Daily</DropdownItem>
          <DropdownItem>Monthly</DropdownItem>
          <DropdownItem>None</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-primary">AUDIT REPORTS</h6>
        <p>You can view your audit reports here</p>
        <Button outline size="sm" theme="primary" className="mb-2 mr-1">
        View Audit Reports
      </Button>
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-primary">CLINICAL DECISION SUPPORT</h6>
        <p>Set your Clinical Decision Support settings here</p>
        <Button outline size="sm" theme="primary" className="mb-2 mr-1">
        Set Clinical Decision Report
      </Button>
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-primary">Forms</h6>
        <p>Create custom form use them in Electronic health record page</p>
        <Dropdown open={this.state.open} toggle={this.toggle} group>
        <Button outline  theme="primary">Set forms</Button>
        <DropdownToggle split />
      </Dropdown>
      </div>
    </CardHeader></div>
    <div className="card mt-3">
    <CardHeader className="border-bottom">
      <div className="mb-3 mx-auto">
        <h6 className="text-primary">RESET ALL SETTING</h6>
        <p>Reset all your settings back to default. This will reset system, EHR and other page settings to initial like 
           account created. This will not delete any data.</p>
        <Button outline size="sm" theme="primary" className="mb-2 mr-1">
        Reset All your Setting
      </Button>
      </div>
    </CardHeader></div>
    <div className="card mt-3"></div>

  </Card>
    )
  }
}