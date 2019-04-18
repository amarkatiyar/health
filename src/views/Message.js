import React from "react";
import { Container, Row, Col, Card, FormInput, Button,CardHeader, CardBody } from "shards-react";


import PageTitle from "../components/common/PageTitle";

const Message = () => (
  <Container fluid className="main-content-container px-4 py-4">
            <Card small className="mb-4">
          <CardHeader className="border-bottom">
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
                        {/* <span>&nbsp;&nbsp;Compose</span> */}
                        <span><a href="./CreateMessage"> &nbsp;
                         Compose
                        </a></span>
					</div>            
            </div>
            </div>
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
                        {/* <span>&nbsp;&nbsp;Create Message</span> */}
                        <span><a href="./CreateMessage"> &nbsp;
                         Create Message
                        </a></span>
                        
					</div>
           </CardHeader>
           </card>
          </CardHeader>
        </Card>
  </Container>
);
export default Message;
