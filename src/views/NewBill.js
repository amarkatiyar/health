import React from "react";
import { Container, Row, Col, Card, FormInput, CardHeader, CardBody } from "shards-react";


  export default function NewBill() {
    return (
      <Container fluid className="main-content-container px-4 py-4">
    <div className="row">
    <div className="col-8">
    <Card style={{height: "600px"}}>
    <CardBody>
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
      <div className="row bg-info text-black" style={{height: "35px"}}>
        <div className="col-4 border">Item/Service</div>
        <div className="col-3 border text-right">Price</div>
        <div className="col-2 border text-right">Qty</div>
        <div className="col-3 border text-right">Amount</div>
      </div>
      <div class="col-xs-6 text-right mt-2">
        <button id="add-btn" class="icon-color btn btn-outline-primary btn-xs mb-5" data-toggle="tooltip" title="Add Item purchased or service offered">
          <span class="fa fa-plus"></span> <span>&nbsp;&nbsp;<a href="./Item">Add Item/Service</a></span>
        </button>
      </div>
    </CardBody>
  </Card>
    </div>
    <div className="col-4">
    <Card>
      <CardHeader style={{background:"aqua"}}>Favorite Item/Service</CardHeader>
      <span id="assign-icon" className="hover icon-md fa fa-search">
      <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Patient by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message">
          </FormInput></span>
    </Card>
    </div>
    </div>

  </Container>
)
}

