import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";

const UserAccountDetails = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      {/* <h6 className="m-0">{title}</h6> */}
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
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
            <div className="row">
            <div className="col-xs-7 col-sm-5 col-md-4">
                  <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Patient by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message"/>
            </div>
            <div className="col-xs-7 col-sm-5 col-md-4">
                <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="User by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message"/>
            </div>

            <div className="col-xs-3 col-sm-2 col-md-2">
            <select id="messageId" className="form-control" name="msgType" onchange="message_list.setType()">
                  <option value="D">Date</option>
                  <option value="A">All</option>
                  <option value="T">Today</option>
                  <option value="Y">Yesterday</option>
                  <option value="T">This Week</option>
                  <option value="T">This Month</option>
                  <option value="P">Past Week</option>
                  <option value="P">Past Month</option>
                  <option value="C">Custom Date</option>
            </select> 
            </div>

            <div className="col-xs-3 col-sm-2 col-md-2">
            <select id="messageId" className="form-control" name="msgType" onchange="message_list.setType()">
                  <option value="G">Group By</option>
                  <option value="D">Date</option>
                  <option value="N">None</option>
                  <option value="U">User</option>
            </select> 
            </div>
            </div>

            <div className="row">
            <div className="col-xs-3 col-sm-2 col-md-2 py-4">
            <select id="messageId" className="form-control" name="msgType" onchange="message_list.setType()">
                  <option value="P">Payment</option>
                  <option value="A">All</option>
                  <option value="P">Paid</option>
                  <option value="U">Unpaid</option>
            </select> 
            </div>
            <div className="col-xs-6 col-sm-2 form-group py-4">
                    <FormInput id="searchInvoiceId" class="form-control" maxlength="40" placeholder="Invoice ID" title="Enter Invoice ID">
                  </FormInput>
           </div>
           <div class="col-xs-6 col-sm-2 form-group py-4">
                    <button id="advanceSearching" class="icon-color btn btn-outline-primary form-control" title="Select or enter search criteria and press search button here" onclick="bill_report.advanceSearch();">
                        <span class="fa fa-search"></span>
                        <span>&nbsp;&nbsp;Search</span>
                    </button>
                </div>
                <div class="col-xs-6 col-sm-2 form-group py-4">
								<button id="new" class="icon-color btn btn-outline-primary form-control" data-toggle="tooltip" title="Create new Bill" onclick="bill_report.newReceipt();">
									<span class="fa fa-plus"></span>
									<span>&nbsp;&nbsp;New Bill</span>
								</button>
							</div>
            </div>

            <div className="row">
            <table className="table mt-1">
            <thead className="thead-light">
            <tr>
                <th scope="col">Date</th>
               <th scope="col">Particular</th>
               <th scope="col">Amount</th>
               <th scope="col">Paid</th>
           </tr>
           </thead>
           <thead>
            <tr>
               <th scope="col">Total</th>
               <th scope="col">Paid</th>
               <th scope="col">Unpaid</th>
               <th scope="col">Overpaid</th>
           </tr>
           </thead>
           </table>
            </div>
            <card small className="mb-4">
           <CardHeader className="border-bottom bg-info"><h6>Not Found</h6>
           <div class="icon-color btn btn-outline-primary" data-toggle="tooltip" title="Create New Message">
						<span class="fa fa-plus"></span>
						<span>&nbsp;&nbsp;Create Bill</span>
					</div>
           </CardHeader>
           </card>



              {/* <Row form>
                First Name
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">First Name</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="First Name"
                    value="Sierra"
                    onChange={() => {}}
                  />
                </Col>
                Last Name
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">Last Name</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Last Name"
                    value="Brooks"
                    onChange={() => {}}
                  />
                </Col>
              </Row> */}
              {/* <Row form>
                Email
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value="sierra@example.com"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </Col>
                Password
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Password</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value="EX@MPL#P@$$w0RD"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col>
              </Row> */}
              {/* <FormGroup>
                <label htmlFor="feAddress">Address</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value="1234 Main St."
                  onChange={() => {}}
                />
              </FormGroup> */}
              {/* <Row form>
                City
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">City</label>
                  <FormInput
                    id="feCity"
                    placeholder="City"
                    onChange={() => {}}
                  />
                </Col>
                State
                <Col md="4" className="form-group">
                  <label htmlFor="feInputState">State</label>
                  <FormSelect id="feInputState">
                    <option>Choose...</option>
                    <option>...</option>
                  </FormSelect>
                </Col>
                Zip Code
                <Col md="2" className="form-group">
                  <label htmlFor="feZipCode">Zip</label>
                  <FormInput
                    id="feZipCode"
                    placeholder="Zip"
                    onChange={() => {}}
                  />
                </Col>
              </Row> */}
              {/* <Row form>
                Description
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Description</label>
                  <FormTextarea id="feDescription" rows="5" />
                </Col>
              </Row>
              <Button theme="accent">Update Account</Button> */}
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
