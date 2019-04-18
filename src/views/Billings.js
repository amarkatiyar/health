import React from "react";
import { Container, Row, Col, Card, FormInput, CardHeader, CardBody } from "shards-react";


import PageTitle from "../components/common/PageTitle";

const Billings = () => (
    <Container fluid className="main-content-container px-4 py-4">
    <Card small className="mb-4">
    <CardHeader className="border-bottom">
   <div className="row">
   <div className="col-lg-10">
   <span id="save-btn" className="text-primary fa fa-credit-card mr-2" data-toggle="tooltip" title="Send Message"></span>
      Billing
   </div>
   <div className="col-lg-1">
   <span id="save-btn" className="fa fa-print ml-5" data-toggle="tooltip" title="Send Message"></span>
   </div>
   <div className="col-lg-1">
   <span id="save-btn" className="fa fa-ellipsis-v ml-3" data-toggle="tooltip" title="Send Message"></span>
   </div>
   </div>

   <div className="row mt-3">
   <div className="col-xs-4 col-sm-4 col-md-4">
          <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Patient by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message">
          </FormInput>
    </div>
    <div className="col-xs-4 col-sm-4 col-md-4">
          <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Patient by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message">
          </FormInput>
    </div>
    <div className="col-xs-2 col-sm-2 col-md-2">
          <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Patient by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message">
          </FormInput>
    </div>
    <div className="col-xs-2 col-sm-2 col-md-2">
          <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Patient by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message">
          </FormInput>
    </div>
   </div>

  <div className="row mt-3">
  <div className="col-xs-2 col-sm-2 col-md-2">
          <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Patient by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message">
          </FormInput>
    </div>
    <div className="col-xs-2 col-sm-2 col-md-2">
          <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Invoice" data-toggle="tooltip" title="Enter the subject of the message">
          </FormInput>
    </div>
    <div className="col-xs-2 col-sm-2 col-md-2">
          <button id="advanceSearching" class="icon-color btn btn-success form-control" title="Select or enter search criteria and press search button here" onclick="bill_report.advanceSearch();">
									<span class="fa fa-search"></span>
									<span>&nbsp;&nbsp;Search</span>
								</button>
    </div>
    <div className="col-xs-2 col-sm-2 col-md-2">
    <button id="advanceSearching" class="icon-color btn btn-success form-control" title="Select or enter search criteria and press search button here" onclick="bill_report.advanceSearch();">
									<span class="fa fa-plus"></span>
									<span>&nbsp;&nbsp;New Bill</span>
								</button>
    </div>
  </div>
  <div className="row bg-primary mt-3">
 <div className="col-3 border">Date</div>
 <div className="col-5 border">Particulare</div>
 <div className="col-2 border">Paid</div>
 <div className="col-2 border">Amount</div>
  </div>
    </CardHeader>
    </Card>
    </Container>
);

export default Billings;
