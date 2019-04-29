import React from "react";
import { Container,Card, FormInput, CardHeader } from "shards-react";

// const Billings = () => (
  class Billings extends React.Component{
    constructor(props){
      super(props);
      this.state = {
      showVisitReasons:false,
      }
         
    };
    handleshowVisitReasons = (prevState) =>{
      this.setState({showVisitReasons: !prevState});
      }
      render(){
        let {showVisitReasons} = this.state;
       
      return(
    <Container fluid className="main-content-container px-4 py-4">
    <Card small className="mb-4">
    <CardHeader className="border-bottom">
   <div className="row">
   <div className="col-lg-10">
   <span id="save-btn" className="text-primary fa fa-credit-card mr-2" data-toggle="tooltip" title=""></span>
      <a className="text-success">BILLING</a>
   </div>
   <div className="col-lg-1">
   <span id="save-btn" className="fa fa-print ml-5" data-toggle="tooltip" title="print"></span>
   </div>
   <div className="col-lg-1" >
         <Card  style={{height:"0px"}}>
         <div className=" ml-5 pr-3"><i class="fas fa-ellipsis-v" onClick={()=> this.handleshowVisitReasons(showVisitReasons)}></i>
          </div>
         { showVisitReasons &&
            <div style={{"zIndex":999}}>
            <div className="row">
          <table className=" table table-bordered table-hover table-success table-sm " style={{width:"10px"}}>
          <tbody>
    <tr>
      <td><i className="fa fa-plus">&nbsp;&nbsp;New Recipt</i></td>
    </tr>
    <tr>
      <td><i className="fa fa-print">&nbsp;&nbsp;Print</i></td>
    </tr>
    <tr>
      <td><i className="fa fa-file-excel">&nbsp;&nbsp;Export</i></td>
    </tr>
    <tr>
      <td><i className="fab fa-youtube">&nbsp;&nbsp;Tutorial Video</i></td>
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
    <div className="col-xs-2 col-sm-2 col-md-2">
      <button id="advanceSearching" class="icon-color btn btn-success form-control" title="Select or enter search criteria and press search button here" onclick="bill_report.advanceSearch();">
		<span className="fa fa-search"></span>
		<span>&nbsp;&nbsp;Search</span>
	</button>
    </div>
    <div className="col-xs-2 col-sm-2 col-md-2">
    <button id="advanceSearching" class="icon-color btn btn-success form-control" title="Create new Bill" onclick="bill_report.advanceSearch();">
		<span class="fa fa-plus"></span>
		<span>&nbsp;&nbsp;<a className="text-white" href="./NewBill">New Bill</a></span>
	</button>
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
           <div class="icon-color btn btn-outline-success" data-toggle="tooltip" title="Create New Message">
				<span class="fa fa-plus"></span>
                        <span><a className="text-black" title="Create new Bill" href="./NewBill"> &nbsp;
                         Create Bill
                        </a></span>
		</div>
           </CardHeader>
           </card>
    </CardHeader>
    </Card>
    </Container>
      )
      }
  }
export default Billings;


























































// import React from "react";
// import {Row, Col,CardHeader } from "shards-react";


//  class Form extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       handleShowForm: false,
//     }
//   };

//   handleShowForm = () =>{
  
//     this.props.handleHideForm();
//   }
//    render(){
//     const { ShowForm } = this.state;
//      return(
     
      
//         <Row style={{width:"10px",height:"200px"}}>
//           <CardHeader className="" style={{width:"1000px",height:"200px"}}>
//        <div className="row">
//        <div className="">
//        <table className=" table table-bordered table-hover">
//           <tbody>
//             <tr>
//               <td><i className="far fa-star">&nbsp;&nbsp;Favorite</i></td>
//             </tr>
//             <tr>
//             <td><i className="fa fa-question-circle">&nbsp;&nbsp;Help</i></td>
//             </tr>
//           </tbody>
//          </table>
//        </div>
//        </div>
//         </CardHeader>
//         </Row>
        
//          <Col className="col-2 mt-3 ml-3"> 
// <table className=" table table-bordered table-hover">
//   <tbody>
//     <tr>
//       <td><i className="fa fa-plus">&nbsp;&nbsp;New Recipt</i></td>
//     </tr>
//     <tr>
//       <td><i className="fa fa-print">&nbsp;&nbsp;Print</i></td>
//     </tr>
//     <tr>
//       <td><i className="fa fa-file-excel">&nbsp;&nbsp;Export</i></td>
//     </tr>
//     <tr>
//       <td><i className="fab fa-youtube">&nbsp;&nbsp;Tutorial Video</i></td>
//     </tr>
//     <tr>
//     <td><i className="fa fa-question-circle">&nbsp;&nbsp;Help</i></td>
//     </tr>
//   </tbody>
//  </table>
// </Col> 
   
//    )
//    }
//  }
//  export default Form;




























































// import React from 'react'
// import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
//     FormSelect,FormInput,
//     Dropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem, } from 'shards-react'

// export default class Form1 extends React.Component{
//     constructor(props) {
//     super(props);
//     this.state = { 
//     open: false 
//     };
//     }
//      toggle = () => {
//     this.setState(prevState => {
//     return { open: !prevState.open };
//     });
//     } 
//     render(){
//     return(
//      <Card className="ml-3 mt-3" style={{width:"600px",height:"400px"}}>
//      <CardBody>
//      <Row className="mt-0" style={{background:"#f0f0f0",height:"60px"}}>
//                    <div className="col-lg-11 col-md-11 col-sm-11 col-11"><h6><i className="fas fa-arrow-left mt-3"> Form</i></h6></div>
//                    <div className="col-lg-1 col-md-1 col-sm-1 col-1 mb-5"><i className="fas fa-plus mt-3"></i></div>
                
//     </Row>  
//     <h6 className="mt-3" style={{background:"#f0f0f0", height:"40px"}}><a className="ml-2">There are no form</a></h6>    
//     <FormInput type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name"></FormInput>
//      </CardBody>        
//      </Card>

//         )
//     }
//   }

