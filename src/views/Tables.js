import React from "react";
import { Container, Row, Col, Card, FormInput, CardHeader, CardBody } from "shards-react";


import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4 py-4">
    {/* Page Header
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
    </Row>
    Default Light Table */}
            <Card small className="mb-4">
          <CardHeader className="border-bottom">

{/* <h6 className="m-0">MESSAGE</h6> */}

<div className="row">
          <div className="col-lg-11">
          <span id="help-btn" className="hover icon-md fa fa-envelope-o mt-2 mr-2" data-toggle="tooltip" title="Cancel"></span>
          Message
         </div>

         <div className="col-lg-1">
         <span id="save-btn" class="hover icon-md fa fa-ellipsis-v mt-2" data-toggle="tooltip" title="Send Message"></span>
         </div>
        </div><br></br>

            <div className="row">
            <div className="col-lg-12   d-flex justify-content-between">
            <select id="messageId" className="form-control w-25" name="msgType" onchange="message_list.setType()">
                  <option value="I">INBOX</option>
                  <option value="S">SENT MESSAGE</option>
            </select> 
            <div className="icon-color btn btn-outline-primary ml-5 " data-toggle="tooltip" title="Create New Message">
						<span className="fa fa-plus"></span>
						<span>&nbsp;&nbsp;Compose</span>
					</div>            
            </div>
            </div>

            {/* <div className="row bg-info text-black border">
        <div className="col-4 border">Item/Service</div>
        <div className="col-3 border text-right">Price</div>
        <div className="col-2 border text-right">Qty</div>
        <div className="col-3 border text-right">Amount</div>
      </div><br></br> */}
            <table className="table mt-2">
            <thead className="thead-light">
            <tr>
                <th scope="col">From</th>
               <th scope="col">Message</th>
               <th scope="col">Date</th>
           </tr>
           </thead>
           </table>
           <card small className="mb-4">
           <CardHeader className="border-bottom bg-info"><h6>Not Found</h6>
           <div class="icon-color btn btn-outline-primary" data-toggle="tooltip" title="Create New Message">
						<span class="fa fa-plus"></span>
						<span>&nbsp;&nbsp;Create Message</span>
					</div>
           </CardHeader>
           </card>



    

        
        {/* <div className="row">
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
					</div> */}
          </CardHeader>
        </Card>
  

    {/* Default Dark Table */}
    {/* <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">Active Users</h6>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
          </CardBody>
        </Card>
      </Col>
    </Row> */}
  </Container>
);
export default Tables;
