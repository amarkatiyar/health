import React from "react";
import { Container, Row, Col, Card, CardHeader,FormInput, CardBody } from "shards-react";

  export default function CreateMessage() {
    return (
  // <Container fluid className="main-content-container px-4 py-4">
        <Row>
        <Col >
        {/* <Card small className="mb-4"> */}
          <CardHeader className="border-bottom" style={{width:"1000px",height:"500px"}}>
          <div className="row">
          <div className="col-lg-11">
          <span id="cancel-btn" className="hover icon-md fa fa-chevron-left mt-2 mr-2" data-toggle="tooltip" title="Cancel"></span>
          New Message
         </div>

         <div className="col-lg-1">
         <span id="save-btn" class="hover icon-md fa fa-check mt-2" data-toggle="tooltip" title="Send Message"></span>
         </div>
        </div>
        <br></br>
          <div className="row">
          <div className="col-lg-3">
         <h6>To :*</h6><br></br>
         <h6>Subject :</h6>
         </div>
         <div className="col-lg-9">
						<FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Search by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message"/><br></br>
            <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Subject" data-toggle="tooltip" title="Enter the subject of the message"/>
         </div>
        </div>
    
          <div>
            <br></br>
            <h6>Message *</h6>
            <div className="col-xs-12">
							<textarea id="message" rows="5" maxlength="1500" className="form-control required"  placeholder="Message" data-toggle="tooltip" title="Enter the details of the message here"></textarea>
					</div>
          </div>
          <div className="col-xs-6 mt-3">
						<div id="save-btn" class="icon-color btn btn-outline-success" data-toggle="tooltip" title="Send Message">Send</div>
					</div>
          </CardHeader>
        {/* </Card> */}
      </Col>
    </Row>
  // </Container>
)
}

