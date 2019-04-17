import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <div className="row">
        <div className="col-lg-11 mb-3">
          <span id="cancel-btn" className="hover icon-md fa fa-arrow-left mt-2 mr-2" data-toggle="tooltip" title="Cancel"></span>
          Item/Service
         </div>
        <div className="col-lg-1">
          <span id="save-btn" class="hover icon-md fa fa-check mt-2" data-toggle="tooltip" title="Send Message"></span>
        </div>

        <div className="col-lg-12 bg-primary"><h6 className="text-white">Search select item/service, enter price and quantity</h6></div>
      </div>
      <div className="row mt-4">
        <div className="col-4 text-right">
          <h6>Item/Service *</h6><br></br>
          <h6>Price *</h6><br></br>
          <h6>Quantity *</h6><br></br>
          <h6>Amount</h6>
        </div>
        <div className="col-8">
          <div className="col-lg-12">
            <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Search or Enter Item/Service" data-toggle="tooltip" title="Enter the subject of the message" />
          </div><br></br>
          <div className="col-lg-12">
            <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Price" data-toggle="tooltip" title="Enter the subject of the message" />
          </div><br></br>
          <div className="col-lg-12">
            <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Quntity" data-toggle="tooltip" title="Enter the subject of the message" />
          </div><br></br>
          <div className="col-lg-12">
            <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="NaN" data-toggle="tooltip" title="Enter the subject of the message" />
          </div>
        </div>
      </div>
      <span class="text-muted">Add as favorite</span>
      <div className="col-xs-6 mt-3">
        <div id="save-btn" class="icon-color btn btn-outline-success" data-toggle="tooltip" title="">Save</div>
      </div>

    </CardBody>
  </Card>
   
);

export default Editor;
