import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      {/* <div className="row">
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
      </div> */}







      <div className="row">
        <div className="col-8"><h6 className="text-success"> INVOICE #:</h6>
        </div>
        <div className="col-lg-1">
          <span id="save-btn" className="fa fa-ellipsis-v ml-3" data-toggle="tooltip" title="Send Message"></span>
        </div>
        <div className="col-lg-1">
          <span id="save-btn" className="fa fa-print ml-3" data-toggle="tooltip" title="Send Message"></span>
        </div>
        <div className="col-lg-1">
          <span id="save-btn" className="fa fa-print ml-3" data-toggle="tooltip" title="Print Invoice"></span>
        </div>
        <div className="col-lg-1">
          <span id="save-btn" className="fa fa-ellipsis-v ml-3" data-toggle="tooltip" title="Show List"></span>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6">
          <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Patient by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message">
          </FormInput>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6">
          <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="User by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message" />
        </div>
      </div>
      <h6 className="mt-3">Add item purchased or service received by patient, and end with payment</h6>
      <div className="row bg-info text-black">
        <div className="col-4 border">Item/Service</div>
        <div className="col-3 border text-right">Price</div>
        <div className="col-2 border text-right">Qty</div>
        <div className="col-3 border text-right">Amount</div>
      </div>
      <div class="col-xs-6 text-right mt-2">
        <button id="add-btn" class="icon-color btn btn-outline-primary btn-xs mb-5" data-toggle="tooltip" title="Add Item purchased or service offered">
          <span class="fa fa-plus"></span> <span>&nbsp;&nbsp;Add Item/Service</span>
        </button>
        {/* <i class="fa fa-spinner fa-spin"></i> */}
      </div>

      {/* <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Your Post Title" />
        <ReactQuill className="add-new-post__editor mb-1" />
      </Form> */}
     
    </CardBody>
  </Card>
   
);

export default Editor;
