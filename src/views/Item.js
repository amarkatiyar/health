import React from "react";
import { Container, Row, Col, Card, FormInput, CardHeader, CardBody } from "shards-react";


  export default function Item() {
    return (
        <Container fluid className="main-content-container px-4 py-4">

        <Card small className="mb-4 col-8">
      <CardHeader className="border-bottom">

      <div className="row">
    <div className="col-11"><span id="cancle-btn" className="hover icon-md fa fa-arrow-left" data-toggle="tooltip" title="Cancle">&nbsp;&nbsp;&nbsp;&nbsp;Item/Service</span>
    </div>
    <div className="col-lg-1">
      <span id="save-btn" className="fa fa-ellipsis-v ml-3" data-toggle="tooltip" title="Save"></span>
    </div>
  </div>
  <h6 className="mt-3 text-success" style={{height: "35px",background:"gray"}}>Search select item/service, enter price and quantity</h6>
  <div className="row">
  <div className="col-4 text-right">
  <h6>Item/Service *</h6><br></br>
  <h6>Price *</h6><br></br>
  <h6>Quantity*</h6><br></br>
  <h6>Amount</h6>
  </div>
  <div className="col-8">
  <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Search or Enter Item/Service" data-toggle="tooltip" title="Enter the subject of the message">
      </FormInput><br></br>
      <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Price" data-toggle="tooltip" title="Enter the subject of the message">
      </FormInput><br></br>
      <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Quantity" data-toggle="tooltip" title="Enter the subject of the message">
      </FormInput><br></br>
      <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="NaN" data-toggle="tooltip" title="Enter the subject of the message">
      </FormInput>
  </div>
  </div>
  <span class="text-muted">Add as favorite</span>
  <div class="col-xs-6 mt-3 mb-5">
                    <div id="save-btn" class="icon-color btn btn-success">Save</div>
                </div>
     
    </CardHeader>
  </Card>
  </Container>
)
}

