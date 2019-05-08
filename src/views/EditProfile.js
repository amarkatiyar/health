import React from 'react'
import {Row,Button, Card, CardBody, Modal, ModalBody, ModalHeader,Col,Image } from 'shards-react'
import Edit2 from './Edit2';
import Edit1 from './Edit1';
import Add2 from './Add2';
import Add1 from './Add1';

export default class EditProfile extends React.Component{
    constructor(props) {
      super(props);
      this.state = { 
        open: false,
        showEditModal: false,
        showEditModal2: false,
        showAddModal2: false,
        showAddModal1: false
    };
    }

    
    handleShowEdit1 = () =>{
        //e.preventDefault();
        this.setState({showEditModal: !this.state.showEditModal});
    }
    handleHideEdit1 = () =>{
        //e.preventDefault();
        this.setState({showEditModal: !this.state.showEditModal});
    }
    
    handleShowEdit2 = () =>{
        //e.preventDefault();
        this.setState({showEditModal2: !this.state.showEditModal2});
    }

    handleHideEdit2 = () =>{
        //e.preventDefault();
        this.setState({showEditModal2: !this.state.showEditModal2});
    }
    
    handleShowAdd1 = () =>{
        //e.preventDefault();
        this.setState({showAddModal1: !this.state.showAddModal1});
    }

    handleHideAdd1 = () =>{
        //e.preventDefault();
        this.setState({showAddModal1: !this.state.showAddModal1});
    }

    handleShowAdd2 = () =>{
        //e.preventDefault();
        this.setState({showAddModal2: !this.state.showAddModal2});
    }

    handleHideAdd2 = () =>{
        //e.preventDefault();
        this.setState({showAddModal2: !this.state.showAddModal2});
    }
    
render(){
    const {showEditModal} = this.state;
    const {showEditModal2} = this.state;
    const {showAddModal2} = this.state;
    const {showAddModal1} = this.state;
    
    //  let { showEdit1 } = this.state;


    return(
    <div className="container">
        <h6 className="mt-3 text-success">ADMINISTRATOR ACCOUNT</h6>
        <div className="row mt-3">
                <div className="col lg-6">
                    <Card style={{height:"250px"}}>
                    <p>Profile Photo</p>
                    </Card>
                </div>
                <div className="col lg-6">
                <Card style={{height:"250px"}}>
                        {/* <CardBody> */}
                        <div className="ml-3 mt-1"> 
                        <small><h5>Katiyar Organization21456636</h5>
                        <p>Dr. Amar Katiyar<br></br>
                        KPID:3214-658<br></br>
                        amarkatiyar70@gmil.com<br></br>
                        ACTIVE<br></br>
                        +91 9807242329<br></br>
                        ADMINISTRATOR
                        </p></small>
                        <a onClick={() => {this.handleShowEdit1()}}><i className="far fa-edit"></i></a> 
                        <Modal size="sm" open={showEditModal} toggle={this.handleShowEdit1}>
                            <Edit1 handleHideEdit1={this.handleHideEdit1}/>
                        </Modal>
                        </div>                        
                        {/* </CardBody> */}
                </Card>
                </div>
        </div>
        <div className="row mt-3">
                <div className="col lg-6">
                    <Card style={{height:"250px"}}>
                        <CardBody> 
                        <h6 className="text-success">CONTACT</h6>
                        <a onClick={() => {this.handleShowAdd1()}}><Button size="sm" className="mr-2 p-1" outline theme="success">
                        <i class="fas fa-plus"></i> &nbsp;
                        Add
                        </Button></a>
                        <Modal size="sm" open={showAddModal1} toggle={this.handleShowAdd1}>
                        <Add1 handleHideAdd1={this.handleHideAdd1}/>
                        </Modal>
                        </CardBody>
                    </Card>
                </div>
                <div className="col lg-6">
                <Card style={{height:"250px"}}>
                        <CardBody>  
                        <h6 className="text-success">PERSONAL</h6>
                        <div>
                           <small> <p>Gender:<br></br>
                            Education:<br></br>License No:<br></br>
                            </p></small>
                                <a onClick={() => {this.handleShowEdit2()}}><i class="far fa-edit"></i></a>
                                <Modal size="sm" open={showEditModal2} toggle={this.handleShowEdit2}>
                                    <Edit2 handleHideEdit2={this.handleHideEdit2}/>
                                </Modal>
                        </div>
                        </CardBody>
                </Card>
                </div>
        </div>
        <div className="row mt-3">
                <div className="col-md-6">
                    <Card style={{height:"180px"}}>
                        <CardBody>
                        <h6 className="text-success">SPECIALITY</h6>
                        <a  onClick={() => {this.handleShowAdd2()}}><Button size="sm" className="mr-2 p-1" outline theme="success">
                        <i class="fas fa-plus"></i> &nbsp;
                        Add
                        </Button></a>
                        < Modal size="sm" open={showAddModal2} toggle={this.handleShowAdd2}>
                        <Add2 handleHideAdd2={this.handleHideAdd2} />
                        </Modal>
                        </CardBody>
                    </Card>
                </div>
                <div className="col lg-6"></div>
        </div>
        <a href="#"><Button  className="mr-2 mt-3 mb-3" outline theme="success"><i class="fas fa-print"></i> &nbsp;Print Id Card </Button></a>
        <a href="./user-profile-lite"><Button  className="mr-2 mt-3 mb-3" outline theme="success"><i class="fas fa-arrow-left"></i> &nbsp; Back </Button></a>
    </div>
    )
}
      }