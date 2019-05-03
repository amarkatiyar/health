import React from "react";
import { Container,Card, FormInput, CardHeader,Button } from "shards-react";

  class Billings extends React.Component{
    constructor(props){
      super(props);
      this.state = {
      showNewRecipt:false,
      }  
    };
    handleshowNewRecipt = (prevState) =>{
      this.setState({showNewRecipt: !prevState});
      }
      render(){
        let {showNewRecipt} = this.state;
       
      return(
    <Container fluid className="main-content-container px-4 py-4">
    <Card small className="mb-4">
    <CardHeader className="border-bottom">
   <div className="row">
   <div className="col-lg-10">
   <span id="save-btn" className="text-success fa fa-credit-card mr-2" data-toggle="tooltip" title="" style={{cursor:"pointer" }}></span>
      <a className="text-success">BILLING</a>
   </div>
   <div className="col-lg-1">
   <span id="save-btn" className="fa fa-print ml-5" data-toggle="tooltip" title="print" style={{cursor:"pointer" }}></span>
   </div>
   <div className="col-lg-1" >
         <Card  style={{height:"0px"}}>
         <div className=" ml-5 pr-3"><i class="fas fa-ellipsis-v" title="Show more options" style={{cursor:"pointer" }} onClick={()=> this.handleshowNewRecipt(showNewRecipt)}></i>
          </div>
         { showNewRecipt &&
            <div style={{"zIndex":999}}>
            <div className="row">
          <table className=" table table-bordered table-hover table-light table-sm mr-2 " style={{width:"10px"}}>
          <tbody className="text-success">
    <tr>
      <td><a href="./NewBill"><i className="fa fa-plus text-success">&nbsp;&nbsp;New&nbsp;Recipt</i></a></td>
    </tr>
    <tr>
      <td><i className="fa fa-print">&nbsp;&nbsp;Print</i></td>
    </tr>
    <tr>
      <td><i className="fa fa-file-excel">&nbsp;&nbsp;Export</i></td>
    </tr>
    <tr>
      <td><a href="https://www.youtube.com/watch?v=KKviZ_88ggs"><i className="fab fa-youtube text-success">&nbsp;&nbsp;Tutorial&nbsp;Video</i></a></td>
    </tr>
    <tr>
    <td><i className="fa fa-question-circle">&nbsp;&nbsp;Help</i></td>
    </tr>
  </tbody>
         </table>
             </div> 
             </div>
           }
         </Card>
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
    <div className="col-xs-6 col-sm-6 col-md-2">
      {/* <button id="advanceSearching" class="icon-color btn btn-success form-control" title="Select or enter search criteria and press search button here" onclick="bill_report.advanceSearch();">
		<span className="fa fa-search"></span>
		<span>&nbsp;&nbsp;Search</span>
  </button> */}
   <span><a ><Button className="pl-4 pr-4" outline theme="success">
      <i class="fas fa-search"></i> &nbsp;
        Search
      </Button></a></span>
    </div>
    <div className="col-xs-2 col-sm-2 col-md-2">
    {/* <button id="advanceSearching" class="icon-color btn btn-success form-control" title="Create new Bill" onclick="bill_report.advanceSearch();">
		<span class="fa fa-plus"></span>
		<span>&nbsp;&nbsp;<a className="text-white" href="./NewBill">New Bill</a></span>
  </button> */}
    <span><a href="./NewBill"><Button className="pl-4 pr-4" outline theme="success">
      <i class="fas fa-plus"></i> &nbsp;
        New Bill
      </Button></a></span>
    </div>
  </div>
  <div className="row mt-3" style={{height: "35px",background:"#b4b4b4"}}>
 <div className="col-3 border-white">Date</div>
 <div className="col-5 border">Particulare</div>
 <div className="col-2 border text-right">Amount</div>
 <div className="col-2 border text-right">Paid</div>
  </div>
  
  <div className="row mt-1">
 <div className="col-3 ">Total<br></br><i>0.00</i></div>
 <div className="col-5 "><a className="text-success">Paid</a><br></br><i>0.00</i></div>
 <div className="col-2 ">Unpaid<br></br><i>0.00</i></div>
 <div className="col-2 text-right"><a className="text-primary">Overpaid</a><br></br><i>0.00</i></div>
  </div>

  <card small>
           <CardHeader className="border-bottom mt-4 mb-5" style={{background:"#f0f0f0"}}><h6>Not Found</h6>
           {/* <div class="icon-color btn btn-outline-success" data-toggle="tooltip" title="Create New Message">
				<span class="fa fa-plus"></span>
                        <span><a className="text-black" title="Create new Bill" href="./NewBill"> &nbsp;
                         Create Bill
                        </a></span>
    </div> */}
    <span><a href="./NewBill"><Button className="pl-4 pr-4" outline theme="success">
      <i class="fas fa-plus"></i> &nbsp;
        Create Bill
      </Button></a></span>
           </CardHeader>
           </card>
    </CardHeader>
    </Card>
    </Container>
      )
      }
  }
export default Billings;