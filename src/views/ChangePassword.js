import React from 'react'
import {Row,Button, Card, CardBody, Modal, ModalBody, ModalHeader,Col,Form } from 'shards-react'

export default class ChangePassword extends React.Component{
    constructor(props) {
      super(props);
      this.state = { 
        open: false,
    };
    }

    
render(){
    return(
    <div className="container">
    <div>
    <Card className="px-4 ml-3 mt-3 mb-5" style={{width:"680px",height:"300px"}}>
        <h6 className=" ml-2 text-success">CHANGE PASSWORD</h6>
                 <p className="ml-2">Enter current password, new password and press Save button</p>
                 <div class="row ml-5">
                     <div classname="col-4 ml-5">
                     <h6 class="mt-2">Current Password*</h6>
                     <h6 class="mt-3">New Password*</h6>
                     <h6 class="mt-3">Confirm New Password*</h6>
                     </div>
                     <div className="col-8">
                     <input  type="password" class="form-control" id="" placeholder="Password"></input>
                     <input  type="password" class="form-control mt-2" id="" placeholder="Password"></input>
                     <input  type="password" class="form-control mt-2" id="" placeholder="Password"></input>
                     </div>
                 </div>
        <div className="mt-4 ml-5">
        <a href="#"><Button  className="" outline theme="success"><i class="fas fa-check"></i> &nbsp;Change </Button></a>&nbsp;
        <a href="./user-profile-lite"><Button  className="" outline theme="success"><i class="fas fa-arrow-left"></i> Cancel </Button></a>
        </div>
    </Card>
    </div>
    </div>
    )
}
      }