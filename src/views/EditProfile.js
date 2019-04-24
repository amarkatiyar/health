import React from 'react'
import {Row,Button, Card, CardBody, Modal, ModalBody, ModalHeader } from 'shards-react'
import DropdownSplitExample1 from './Edit1';
import Edit2 from './Edit2';
import Edit1 from './Edit1';
import Add2 from './Add2';

export default class DropdownSplitExample extends React.Component{
    constructor(props) {
      super(props);
      this.state = { 
        open: false,
        showEditModal: false,
        showEditModal2: false,
        showAddModal2: false
    };
    }

    handleShowEdit1 = () =>{
        //e.preventDefault();
        this.setState({showEditModal: !this.state.showEditModal});
    }
    handleShowEdit2 = () =>{
        //e.preventDefault();
        this.setState({showEditModal2: !this.state.showEditModal2});
    }
    handleShowAdd2 = () =>{
        //e.preventDefault();
        this.setState({showAddModal2: !this.state.showAddModal2});
    }
    
render(){
    const {showEditModal} = this.state;
    const {showEditModal2} = this.state;
    const {showAddModal2} = this.state;
    //  let { showEdit1 } = this.state;


    return(
    <div className="container">
        <h6 className="mt-3 text-primary">ADMINISTRATOR ACCOUNT</h6>
        <div className="row mt-3">
                <div className="col lg-6">
                    <Card style={{height:"250px"}}>
                        <CardBody> 
                        <div class="text-center" >
                            <img src="..." className="rounded" alt="..." style={{width:"200px",height:"200px"}}></img>
                            </div>  
                        </CardBody>
                    </Card>
                </div>
                <div className="col lg-6">
                <Card style={{height:"250px"}}>
                        <CardBody>
                        <div> 
                        <a onClick={() => {this.handleShowEdit1()}}><i className="far fa-edit"></i></a> 
                        <Modal size="sm" open={showEditModal} toggle={this.handleShowEdit1}>
                        <ModalHeader>Header</ModalHeader>
                        <ModalBody>
                            <Edit1 />
                        </ModalBody>
                        </Modal>
                        </div>                        
                        </CardBody>
                </Card>
                </div>
        </div>
        <div className="row mt-3">
                <div className="col lg-6">
                    <Card style={{height:"250px"}}>
                        <CardBody> 
                        <h6 className="text-primary">CONTACT</h6>
                        <a href="#"><Button size="sm" className="mr-2 p-1" outline theme="primary">
                        <i class="fas fa-plus"></i> &nbsp;
                        Add
                        </Button></a>  
                        </CardBody>
                    </Card>
                </div>
                <div className="col lg-6">
                <Card style={{height:"250px"}}>
                        <CardBody>  
                        <h6 className="text-primary">PERSONAL</h6>
                        
                        <a onClick={() => {this.handleShowEdit2()}}><i class="far fa-edit"></i></a>
                        <Modal size="sm" open={showEditModal2} toggle={this.handleShowEdit2}>
                        <ModalHeader>Header</ModalHeader>
                        <ModalBody>
                            <Edit2 />
                        </ModalBody>
                        </Modal>
                        </CardBody>
                </Card>
                </div>
        </div>
        <div className="row mt-3">
                <div className="col lg-6">
                    <Card style={{height:"180px"}}>
                        <CardBody>
                        <h6 className="text-primary">SPECIALITY</h6>
                        <a  onClick={() => {this.handleShowAdd2()}}><Button size="sm" className="mr-2 p-1" outline theme="primary">
                        <i class="fas fa-plus"></i> &nbsp;
                        Add
                        </Button></a>
                        <Modal size="sm" open={showAddModal2} toggle={this.handleShowAdd2}>
                        <ModalHeader>Header</ModalHeader>
                        <ModalBody>
                            <Add2/>
                        </ModalBody>
                        </Modal>
                        </CardBody>
                    </Card>
                </div>
                <div className="col lg-6"></div>
        </div>
        <a href="#"><Button  className="mr-2 mt-3 mb-3" outline theme="primary"><i class="fas fa-print"></i> &nbsp;Print Id Card </Button></a>
        <a href="#"><Button  className="mr-2 mt-3 mb-3" outline theme="primary"><i class="fas fa-arrow-left"></i> &nbsp; Back </Button></a>
    </div>
    )
}
      }