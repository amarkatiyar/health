import React from "react";
import { Container, Row, Col, Card, FormInput, CardHeader, CardBody,Form,Button} from "shards-react";


import PageTitle from "../components/common/PageTitle";

const AuditReport = () => (
    <Container fluid className="main-content-container px-4 py-4">
    <Card small className="mb-4">
    
    <CardHeader className="border-bottom">
    <Form>
        <div className="row">
        <div className="col-lg-10">
            <h6 className="text-success"><i class="far fa-credit-card"></i>&nbsp; Audit Repots</h6>
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
          <select type="text" id="subject" maxlength="255" className="form-control" placeholder="Patient by name,mobile,KPiD or e:email" 
          data-toggle="tooltip" title="Enter the subject of the message">
          <option>Patient by name,mobile,KPiD or e:email</option>
          </select>
    </div>
    <div className="col-xs-4 col-sm-4 col-md-4">
    <select type="text" id="subject" maxlength="255" className="form-control" placeholder="User by name,mobile,KPiD or e:email" data-toggle="tooltip" title="Enter the subject of the message">
    <option>Patient by name,mobile,KPiD or e:email</option>
          </select>
          {/* <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="User by name,mobile,KPiD or e:email" data-toggle="tooltip" title="Enter the subject of the message">
          </FormInput> */}
    </div>
    <div className="col-xs-2 col-sm-2 col-md-2">
          <select id="byDate" onchange="bill_report.advanceSearch();" title="" class="form-control">
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
                                                <option selected="selected" value="">Select Action</option>
                                                <option value="">read</option>
                                                <option value="">create</option>
                                                <option value="">Edit</option>
                                                <option value="">Cured</option>
                                                <option value="">Ended</option>
                                                <option value="">Delete</option>
                                                <option value="">Print</option>
                                                <option value="">Download</option>
                                            </select>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2">
            <span><a ><Button className="form-control" outline theme="success">
            <i class="fas fa-search"></i> &nbsp;
                Search
            </Button></a></span>
            </div>
    </div>
        <div className="row mt-3 text-white"style={{background:"#787878"}}>
            <div className="col border ">Date/Time</div>
            <div className="col border">Type</div>
            <div className="col border text-right">Action</div>
            <div className="col border text-right">Particular</div>
            <div className="col border text-right">Description</div>
        </div>
  
        <card small>
           <CardHeader className=" mt-4 mb-5 " style={{background:"#f0f0f0"}}><h6>Not Found</h6>
           </CardHeader> 
        </card>


    </Form>
    </CardHeader>
    </Card>
    </Container>
);

export default AuditReport;