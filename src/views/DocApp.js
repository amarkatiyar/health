// @ Author Manohar
import React, { Component } from "react";
import { Button, CardBody,FormInput,Progress } from "shards-react";

class DocApp extends Component {
    render() {
        return (
            <CardBody className="" >
                <div className="row mb-3">
                    <div className="col-xs-12 text-left">
                        <i className="fa fa-arrow-left mt-2 mr-2" style={{ cursor: "pointer" }} title="cancle"></i>Appointment
                    </div>
                    {/* <div className="col-lg-1 text-left">
                        <i className="fa fa-check mt-2 mr-2" style={{ cursor: "pointer" }} title="save"></i>
                    </div> */}
                </div>
                <h6 className="" style={{ height: "35px", background: "#f0f0f0" }}>&nbsp;&nbsp;<small>Search select patient and/or enter any visit reason</small></h6>
                <h6><small>Patient</small></h6>
                <div className="col-xs-12">
                    <select className="form-control" type="text">
                        <option selected="selected" value="">Search by name,K*Id,e-email here</option>
                        <option>All</option>
                        <option>mkchaudhary002@gmail.com</option>
                        <option>Manohar</option>
                    </select>
                </div><br></br>
                <div className="text-right">
                    <Button outline theme="success"> <i class="fas fa-user-plus"></i> &nbsp;New Patient</Button>&nbsp;
                </div>
                <h6><small>Description</small></h6>
                <div className="col-xs-12">
                    <textarea class="form-control" rows="2" placeholder="Chief compliant or non patient appointment node" />
                </div>
                
                <div class="col-xs-6 mt-3 mb-5 ">
                    <span><Button outline theme="success">Save</Button></span>
                </div>
            </CardBody>
        )
    }
}
export default DocApp;
