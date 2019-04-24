// import React from "react";
// import { Container, Row, Col, Card, FormInput, CardHeader,Button,Collapse, CardBody } from "shards-react";
// // import Collapse from "shards-react/collapse";
// import useCollapse from 'react-collapsed';
// import Button from "shards-react/button";
// import Collapse from "shards-react/collapse";


// import PageTitle from "../components/common/PageTitle";
// import Colors from "../components/components-overview/Colors";


// export default class Tables extends React.Component {
//   constructor(props) {
//     super(props);
//     this.toggle = this.toggle.bind(this);
//     this.state = { collapse: false };
//   }

//   toggle() {
//     this.setState({ collapse: !this.state.collapse });
//   }

//   render() {
//     return (
//       <div>
//         <Button onClick={this.toggle}>Toggle</Button>
//         <Collapse open={this.state.collapse}>
//           <div className="p-3 mt-3 border rounded">
//             <h5>😍 Now you see me!</h5>
//             <span>
//               In sagittis nibh non arcu viverra, nec imperdiet quam suscipit.
//               Sed porta eleifend scelerisque. Vestibulum dapibus quis arcu a
//               facilisis.
//             </span>
//           </div>
//         </Collapse>
//       </div>
//     );
//   }
// }


// const Tables = () => (
//   <Container fluid className="main-content-container px-4 py-4">

// <div className="row">
//     <div className="col-6">
//     <CardHeader  data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" style={{background:"aqua"}}><span id="assign-icon" className="hover icon-md fa fa-percent"> &nbsp;&nbsp; Favorite Item/Service</span></CardHeader>
//     <Card className="collapse mt-3" id="collapseExample" style={{height: "400px"}}>
//     <table>
//   <td>
//     <span class="hover icon-md fa fa-search text-success text-left" title="Search"> </span>
//     </td>
//     <FormInput  className="bg-default" id="search-string"  maxlength="40" placeholder="All"></FormInput>
//     <td>
//     <span class="hover icon-md fa fa-plus text-success text-right" title="plus"> </span>
//     </td>
//     <td>
//     <span class="hover icon-md fa fa-ellipsis-v text-success text-right" title="plus"> </span>
//     </td>
//   </table>
//     </Card>
//     {/* <CardHeader className="mt-3" style={{background:"aqua"}}><span id="assign-icon" class="hover icon-md fa fa-plus"> &nbsp;&nbsp;Item/Service Code</span></CardHeader> */}
//     {/* <CardHeader className="mt-3" style={{background:"aqua"}}><span id="assign-icon" class="hover icon-md fa fa-percent"> &nbsp;&nbsp;Service Charges/ Tax</span></CardHeader> */}
//     </div>
//     </div>















            {/* <Card small className="mb-4 col-8">
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
					</div> */}
      




        {/* <div className="row">
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
           </card> */}



    

        





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





          {/* <div className="row">
        <div className="col-8"><h6 className="text-success"> INVOICE #:</h6>
        </div>
        <div className="col-lg-1">
          <span id="save-btn" className="fa fa-ellipsis-v ml-3" data-toggle="tooltip" title="Send Message"></span>
        </div>
        <div className="col-lg-1">
          <span id="save-btn" className="fa fa-print ml-3" data-toggle="tooltip" title="Send Message"></span>
        </div>
        <div className="col-lg-1">
          <span id="save-btn" className="fa fa-print ml-3" data-toggle="tooltip" title="Print Invoice"></span>
        </div>
        <div className="col-lg-1">
          <span id="save-btn" className="fa fa-ellipsis-v ml-3" data-toggle="tooltip" title="Show List"></span>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6">
          <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Patient by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message">
          </FormInput>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6">
          <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="User by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message" />
        </div>
      </div>
      <h6 className="mt-3">Add item purchased or service received by patient, and end with payment</h6>
      <div className="row bg-info text-black">
        <div className="col-4 border">Item/Service</div>
        <div className="col-3 border text-right">Price</div>
        <div className="col-2 border text-right">Qty</div>
        <div className="col-3 border text-right">Amount</div>
      </div>
      <div class="col-xs-6 text-right mt-2">
        <button id="add-btn" class="icon-color btn btn-outline-primary btn-xs mb-5" data-toggle="tooltip" title="Add Item purchased or service offered">
          <span class="fa fa-plus"></span> <span>&nbsp;&nbsp;Add Item/Service</span>
        </button>
      </div> */}





      
          
        
  {/* </Container>
);
export default Tables; */}
