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
          <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Patient by name,mobile,KPiD or e:email" data-toggle="tooltip" title="Enter the subject of the message">
          </FormInput>
    </div>
    <div className="col-xs-4 col-sm-4 col-md-4">
          <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="User by name,mobile,KPiD or e:email" data-toggle="tooltip" title="Enter the subject of the message">
          </FormInput>
    </div>
    <div className="col-xs-2 col-sm-2 col-md-2">
          <select id="byDate" onchange="bill_report.advanceSearch();" title="Select date or enter custom date" class="form-control">
									<option selected="selected" value="">Date</option>
									<option value="">All</option>
									<option value="TODAY">Today</option>
									<option value="YESTERDAY">Yesterday</option>
									<option value="THISWEEK">This Week</option>
									<option value="THISMONTH">This Month</option>
									<option value="PASTWEEK">Past Week</option>
									<option value="PASTMONTH">Past Month</option>
									<option value="PARTICULAR">Custom Date</option>
								</select>
    </div>
    <div className="col-xs-2 col-sm-2 col-md-2">
    <select id="byDate" onchange="bill_report.advanceSearch();" title="Select date or enter custom date" class="form-control">
									<option selected="selected" value="">Group By</option>
									<option value="">None</option>
									<option value="">Date</option>
									<option value="">User</option>
								</select>
    </div>
   </div>

  <div className="row mt-3">
  <div className="col-xs-2 col-sm-2 col-md-2">
  <select id="byDate" onchange="bill_report.advanceSearch();" title="Select date or enter custom date" class="form-control">
									<option selected="selected" value="">Payment</option>
									<option value="">All</option>
									<option value="">Paid</option>
									<option value="">Unpaid</option>
								</select>
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
									<span>&nbsp;&nbsp;<a href="./NewBill">New Bill</a></span>
								</button>
    </div>
  </div>
  <div className="row bg-primary mt-3">
 <div className="col-3 border">Date</div>
 <div className="col-5 border">Particulare</div>
 <div className="col-2 border text-right">Amount</div>
 <div className="col-2 border text-right">Paid</div>
  </div>
  
  <div className="row mt-1">
 <div className="col-3 ">Total<br></br><i>0.00</i></div>
 <div className="col-5 ">Paid<br></br><i>0.00</i></div>
 <div className="col-2 ">Unpaid<br></br><i>0.00</i></div>
 <div className="col-2 text-right">Overpaid<br></br><i>0.00</i></div>
  </div>

  <card small>
           <CardHeader className="border-bottom bg-info mt-4 mb-5"><h6>Not Found</h6>
           <div class="icon-color btn btn-outline-primary" data-toggle="tooltip" title="Create New Message">
						<span class="fa fa-plus"></span>
                        {/* <span>&nbsp;&nbsp;Create Message</span> */}
                        <span><a href="./NewBill"> &nbsp;
                         Create Bill
                        </a></span>
                        
					</div>
           </CardHeader>
           </card>
  
    </CardHeader>
    </Card>
    </Container>
);

export default Billings;
