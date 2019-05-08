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
  Modal,target,Container

} from "shards-react";
import RestSetting from "../../views/RestSetting";
import SetForms from "../../views/SetForms";
import DrugCode1 from "../../views/DrugCode1";
import Procedure1 from "../../views/Procedure1";
import Hospital1 from "../../views/Hospital1";
import TestCode1 from "../../views/TestCode1";
import Symtom from "../../views/Symtom";
import VisitReason from "../../views/VisitReason";
import Procedure from "../../views/Procedure";
import NotForm from "../../views/NotForm";

export default class DropdownSplitExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showReset: false,
      setForms: false,
      drugCodeForm: false,
      showForm1:false,
      showForm2:false,
      showForm3:false,
      showForm4:false,
      showNotF: false,
      // SymtomForm:false,
      // ProblemForm:false,
      // Procedure:false,
      // VisitReasonForm:false

    };
  }


  handleShowNotForm = () => {
    this.setState({ showNotF: !this.state.showNotF });
  }


  // symtom dropdown coad//////////

  // handleSymtomCodeForm = () => {
  //   this.setState({ SymtomForm: !this.state.SymtomForm });
  // }
  // handleSymtomCodeForm = () => {
  //   this.setState({ ProblemForm: !this.state.ProblemForm });
  // }
  // handleSymtomCodeForm = () => {
  //   this.setState({ VisitReasonForm: !this.state.VisitReasonForm });
  // }
  // handleSymtomCodeForm = () => {
  //   this.setState({ Procedure: !this.state.Procedure });
  // }
  

  handleSymtomCodeForm = (e1) => {
    console.log(e1.target.value);

    // if(e1.target.value=="Symtom"){
    //   this.setState({
    //     showForm1:true,
    //     showForm2:false,
    //     showForm3:false,
    //     showForm4:false
    //   })}
    //   if(e1.target.value=="Problem"){
    //     this.setState({
    //       showForm1:false,
    //       showForm2:true,
    //       showForm3:false,
    //       showForm4:false
    //     })}
    //     if(e1.target.value=="VisitReason"){
    //       this.setState({
    //         showForm1:false,
    //         showForm2:false,
    //         showForm3:true,
    //         showForm4:false
    //       })}
    //       if(e1.target.value=="Procedure"){
    //         this.setState({
    //           showForm1:false,
    //           showForm2:false,
    //           showForm3:false,
    //           showForm4:true
    //         })}

  }


  // dropdown coad end////////////////
  handleShowReset = () => {
    this.setState({ showReset: !this.state.showReset });
  }
  handleShowForms = () => {
    this.setState({ setForms: !this.state.setForms });
  }

  handleHideForms = () => {
    this.setState({ setForms: !this.state.setForms });
  }

  handleShowDrugCodeForm = () => {
    this.setState({ showForm2: !this.state.showForm2 });
  }
  handleHideDrugCodeForm = () => {
    this.setState({ showForm2: !this.state.showForm2 });
  }
  handleShowDrugCodeForm = () => {
    this.setState({ showForm1: !this.state.showForm1 });
  }
  handleHideDrugCodeForm = () => {
    this.setState({ showForm1: !this.state.showForm1 });
  }
  
  handleShowDrugCodeForm = () => {
    this.setState({ showForm3: !this.state.showForm3 });
  }
  handleHideDrugCodeForm = () => {
    this.setState({ showForm3: !this.state.showForm3 });
  }
  

// Dropdown code//////////
  handleDrugCodeForm = (e) => {
  console.log(e.target.value);
  if(e.target.value=="Hospital1"){
    this.setState({
      showForm1:true,
      showForm2:false,
      showForm3:false
    })}
  
  if(e.target.value=="DrugCode1"){
  this.setState({
    showForm1:false,
    showForm2:true,
    showForm3:false,
    showForm4:false
  })}
  if(e.target.value=="Procedure1"){
    this.setState({
      showForm1:false,
      showForm2:false,
      showForm3:true,
      showForm4:false
    })}
    if(e.target.value=="TestCode1"){
      this.setState({
        showForm1:false,
        showForm2:false,
        showForm3:false,
        showForm4:true
      })}

  }
// Dropdown code End////////

  
  toggle = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  }
  toggle1 = () =>{
    this.setState(prevState =>{
      return {open:!prevState};
    });
  }

  render() {
    const { showReset,showNotF, } = this.state;
    const { setForms, drugCodeForm} = this.state;
    const{showForm1,showForm2,showForm3,showForm4}=this.state;
    const{VisitReasonForm,ProblemsForm,SymtomForm,ProblemForm}=this.state;
    console.log(this.state);
    
    
    return (
<Container className="main-content-container px-4 py-4">
        <div className="card">
          <CardHeader className="mb-3">
              <h6 className="card-body" className="text-success">Profile</h6>
              <p><small><b>Edit your profile,change name,email,etc.</b></small></p>
              <a href="./EditProfile">
              <Button className="mr-2" outline theme="success">
               Edit Profile
              </Button>
              </a>
          </CardHeader>
        </div>
        <div className="card mt-3">
          <CardHeader className="mb-3">
             <h6 className="text-success">Change Password</h6>
              <p><small><b>Change your password, it is recommended you change your password regular</b></small></p>
              <a href="./ChangePassword"><Button outline theme="success" className="mr-1">
                Change Password 
              </Button></a>
          </CardHeader>
        </div>
        <div className="card mt-3">
          <CardHeader className="mb-3">
              <small><h6 className="text-success"> <i className="fas fa-user mr-1"></i>Manage User</h6></small>
              <p><small><b>Manage users, you can create new user or view existing user and edit them</b></small></p>
              <a href="./ManageUser">
                <Button outline size="sm" theme="success" className="mb-2 mr-1"><i className="fas fa-user mr-1"></i>
                Manage User
              </Button></a>
          </CardHeader>
        </div>
        <div className="card mt-3">
          <CardHeader className="mb-3">
              <h6 className="text-success">FAVORITES</h6>
              <p><small><b>Set your favorite or frequently used values for Symptom, Diagnosis, Visit Reason, Procedure, Drug, Test Order, Note, Vaccine and select them quickly in Patient Health Record</b></small></p>
              <Dropdown open={this.state.open} toggle={this.toggle} group>
              <a>
                <select className="form-control  text-success" onChange={(e1)=> {this.handleSymtomCodeForm(e1)}}>
                  <option value="">Select</option>
                  <option value="symtom">SYMPTOM</option>
                  <option value="Problem">PROBLEMS</option>
                  <option value="VisitReason">VISIT REASON</option>
                  <option value="Procedure">PROCEDURE</option>
                  <option value="5">MEDICATIONS</option>
                  <option value="6">TEST ORDER</option>
                  <option value="7">NOTE</option>
                </select>
              </a>
              </Dropdown>
          </CardHeader>
          {/* <Modal open={SymtomForm} toggle1={this.toggle}>
          <Symtom />
        </Modal> */}
        {/* <Modal open={ProblemForm} toggle1={this.toggle}>
          <Problems />
        </Modal> */}
        {/* <Modal open={VisitReasonForm} toggle1={this.toggle}>
        {VisitReason && <VisitReason />}
        </Modal> */}
        {/* <Modal open={Procedure} toggle1={this.toggle}>
        {Procedure && <Procedure />}
        </Modal> */}
        </div>
        <div className="card mt-3">
          <CardHeader className="mb-3">
              <h6 className="text-success">HOSPITAL CODES</h6>
              <p><small><b>Set your hospital codes like procedure code, item/service code etc here and use them easily.</b></small></p>
              <Dropdown open={this.state.open} toggle={this.toggle}  group>
                <select name="hospital_code" className="form-control text-success" onChange={(e)=> {this.handleDrugCodeForm(e)}}>
                  <option value="">Select</option>
                  <option value="Hospital1">item/service code</option>
                  <option value="DrugCode1">Drug code</option>
                  <option value="Procedure1">Procedure code</option>
                  <option value="TestCode1">Test code</option>
                </select>
              </Dropdown>
          </CardHeader>
        <Modal open={showForm2} toggle={this.toggle}>
          <DrugCode1 handleHideDrugCodeForm={this.handleHideDrugCodeForm}/>
        </Modal>
        <Modal open={showForm1} toggle={this.toggle}>
        {showForm1 && <Hospital1  handleHideDrugCodeForm={this.handleHideDrugCodeForm}/>}
        </Modal>
        <Modal open={showForm3} toggle={this.toggle}>
        <Procedure1 handleHideDrugCodeForm={this.handleHideDrugCodeForm} />
        </Modal>
        <Modal open={showForm4} toggle={this.toggle}>
        {showForm4 && <TestCode1 handleHideDrugCodeForm={this.handleHideDrugCodeForm} />}
        </Modal>
        </div>
        <div className="card mt-3">
          <CardHeader className="mb-3">
              <h6 className="text-success">HOSPITAL SERVICE CHARGES/ TAX</h6>
              <p><small><b>Set your hospital service charges/ Tax.</b></small></p>
              <a>
                <Button outline theme="success">  <i className="fas fa-hospital mr-1"></i> service charges/tax
                </Button>
              </a>
          </CardHeader>

        </div>
        <div className="card mt-3">
          <CardHeader className="mb-3">
              <h6 className="text-success">NOTIFICATION</h6>
              <p><small><b>Set your user message notification</b></small></p>
              <a onClick={() => { this.handleShowNotForm() }}>
              <input type="checkbox" outline size="sm" theme="success" className="mb-2 mr-1"></input>
             <small><b>On complete EHR notify user*</b></small>
             </a>
             < Modal size="sm" open={showNotF} toggle={this.handleShowNotF}>
                <NotForm />
              </Modal>
          </CardHeader>
        </div>
        <div className="card mt-3">
          <CardHeader className="mb-3">
              <h6 className="text-success">SMS/E-MAIL</h6>
              <p><small><b>Set your preference to send SMS/E-mail notifications</b></small></p>
              <input type="checkbox" outline size="sm" theme="success" className="mb-2 mr-1"></input>
             <small><b>The Patient will receive text notifications and reminder</b></small><br></br>
              <input type="checkbox" outline size="sm" theme="success" className="mb-2 mr-1"></input>
              <small><b>The Patient will receive email notifications and reminder</b></small>
          </CardHeader>
        </div>
        <div className="card mt-3">
          <CardHeader className="mb-3">
              <h6 className="text-success">LOGO PRINTING</h6>
              <p><small><b>Select image with logo that will used in the reports like health records, prescription, receipts etcCompany logo will be best
                viewed in the dimensions of 200:100 pixels or 2:1 ratio. The file format should be in .jpeg or .jpg or .png or .gif.</b></small></p>
              <a href="#"><i className=" fas fa-edit"></i></a>
          </CardHeader>
        </div>
        <div className="card mt-3">
          <CardHeader className="mb-3">
              <h6 className="text-success">DOCTOR SIGNATURE</h6>
              <p><small><b>Select doctor signature image that will used in the reports like health records, prescription etc
                 Image will be best viewed in the dimensions of 300:100 pixels or 3:1 ratio. The file format should be in
                  .jpeg or .jpg or .png or .gif.</b></small></p>
              <a href="#"><i className=" fas fa-edit"></i></a>
          </CardHeader>
        </div>
        <div className="card mt-3">
          <CardHeader className="mb-3">
              <h6 className="text-success">REPORT BY EMAIL</h6>
              <p><small><b>Set your preference to receive reports via email</b></small></p>
              <Dropdown open={this.state.open} toggle={this.toggle} group>
                <select className="form-control text-success ">
                  <option value="">Weekly</option>
                  <option value="">Daily</option>
                  <option value="">Monthly</option>
                  <option value="">None</option>
                </select>
              </Dropdown>
          </CardHeader>
        </div>
        <div className="card mt-3">
          <CardHeader className="mb-3">
              <h6 className="text-success">AUDIT REPORTS</h6>
              <p><small><b>You can view your audit reports here</b></small></p>
              <a href="./AuditReport"><Button outline size="sm" theme="success" className="mb-2 mr-1">
                View Audit Reports
              </Button></a>
          </CardHeader></div>
        <div className="card mt-3">
          <CardHeader className="mb-3">
              <h6 className="text-success">CLINICAL DECISION SUPPORT</h6>
              <p><small><b>Set your Clinical Decision Support settings here</b></small></p>
              <a href="./CDS">
              <Button outline size="sm" theme="success" className="mb-2 mr-1">
                 Set Clinical Decision Report
              </Button></a>
          </CardHeader></div>
        <div className="card mt-3">
          <CardHeader className="mb-3">
              <h6 className="text-success">Forms</h6>
              <p><small><b>Create custom form use them in Electronic health record page</b></small></p>
              <Dropdown open={this.state.open} toggle={this.toggle} group>
              <a >
                <Button onClick={() => { this.handleShowForms() }} outline theme="success">Set forms</Button>
              </a>
              < Modal size="sm" open={setForms} toggle={this.handlesetForms}>
                <SetForms handleHideForms={this.handleHideForms} />
              </Modal>
              </Dropdown>
          </CardHeader>
        </div>
        <div className="card mt-3">
          <CardHeader className="mb-3">
              <h6 className="text-success">RESET ALL SETTING</h6>
              <p><small><b>Reset all your settings back to default. This will reset system, EHR and other page settings to initial like
                 account created. This will not delete any data.</b></small></p>
              <a onClick={() => { this.handleShowReset() }}>
                <Button outline size="sm" theme="success" className="mb-2 mr-1">
                  Reset All your Setting
          </Button>
              </a>
              < Modal size="sm" open={showReset} toggle={this.handleShowReset}>
                <RestSetting />
              </Modal>
          </CardHeader>
        </div>
        <div className="card mt-3"></div>
</Container>
    )
  }
}