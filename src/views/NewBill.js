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
      <div className="row text-white" style={{height: "35px",background:"#b4b4b4"}}>
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
    </CardBody >
  </Card>
    </div>
    <div className="col-4">
    <CardHeader  style={{background:"aqua"}}><span id="assign-icon" class="hover icon-md fa fa-percent"> &nbsp;&nbsp; Favorite Item/Service</span></CardHeader>
    <Card className="mt-3" style={{height: "400px"}}>
    <table>
  <td>
    <span class="hover icon-md fa fa-search text-success text-left" title="Search"> </span>
    </td>
    <FormInput  className="bg-default" id="search-string"  maxlength="40" placeholder="All"></FormInput>
    <td>
    <span class="hover icon-md fa fa-plus text-success text-right" title="plus"> </span>
    </td>
    <td>
    <span class="hover icon-md fa fa-ellipsis-v text-success text-right" title="plus"> </span>
    </td>
  </table>
    </Card>
    <CardHeader className="mt-3" style={{background:"aqua"}}><span id="assign-icon" class="hover icon-md fa fa-plus"> &nbsp;&nbsp;Item/Service Code</span></CardHeader>
    <CardHeader className="mt-3" style={{background:"aqua"}}><span id="assign-icon" class="hover icon-md fa fa-percent"> &nbsp;&nbsp;Service Charges/ Tax</span></CardHeader>
    </div>
    </div>
  </Container>
)
}

