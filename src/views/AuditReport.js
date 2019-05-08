import React from "react";
import { Container, Row, Col, Card, FormInput, CardHeader, CardBody,Form,Button,Popover} from "shards-react";


import PageTitle from "../components/common/PageTitle";

class AuditReport extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            collapse: false,
            open: false
          };
        };
      
toggle1 = () => {
    this.setState({
    open: !this.state.open
    });
}
render() {
    return (
    <Container fluid className="main-content-container px-4 py-4">
    <Card small className="mb-4">
    
    <CardHeader className="border-bottom">
    <Form>
        <div className="row">
            <div className="col-lg-11">
                <h6 className="text-success" style={{ cursor: "pointer" }}><i class="far fa-credit-card"></i>&nbsp; Audit Repots</h6>
            </div>
            <div className="col-lg-1" >
                <i className="fa fa-print mr-2" style={{ cursor: "pointer" }}></i>&nbsp;
                <i className="fas fa-ellipsis-v ml-4" title="Show more options" style={{ cursor: "pointer" }} id="popover-2" onClick={this.toggle1}></i>
              </div>
                <Popover
                  placement="bottom"
                  open={this.state.open}
                  toggle1={this.toggle1}
                  target="#popover-2"
                  style={{ width: "100px" }}>
                  <table className="table table-bordered table-hover mb-0">
                    <tbody>
                    <tr>
                        <td><i className="far fa-star">&nbsp;&nbsp;Print</i></td>
                      </tr>
                      <tr>
                        <td><i className="far fa-star">&nbsp;&nbsp;Tutorial</i></td>
                      </tr>
                      <tr>
                        <td><i className="far fa-question-circle">&nbsp;&nbsp;Help</i></td>
                      </tr>
                    </tbody>
                  </table>
                </Popover>
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
}
}
export default AuditReport;