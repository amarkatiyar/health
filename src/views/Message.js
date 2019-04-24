import React from "react";
import { Row, Button, Card, CardBody, Form, FormInput, FormGroup,CardHeader,FormSelect,Modal, ModalBody, ModalHeader } from "shards-react";
import CreateMessage from "./CreateMessage";

class Message extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    showCreateMessageModal: false,
    }
  };
  handleShowCreateMessage= () =>{
    this.setState({showCreateMessageModal: !this.state.showCreateMessageModal});
  }
  render(){
    const { showCreateMessageModal } = this.state;
    return(
      <div className="container mt-4">
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
          <div>
          <a className="btn btn-outline-success" onClick={() => {this.handleShowCreateMessage()}}><span className="fa fa-plus"></span>
                        <span className="text-success">&nbsp;&nbsp;Compose</span></a> 
                        <Modal size="lg" open={showCreateMessageModal} toggle={this.handleShowCreateMessage}>
                           <CreateMessage />                        
                        </Modal>
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
           <card small className="mb-4" >
           <CardHeader className="border-bottom" style={{background:"#f0f0f0"}}><h6>Not Found</h6>
                    <div> 
                        <a className="btn btn-outline-success" onClick={() => {this.handleShowCreateMessage()}}><span className="fa fa-plus"></span>
                        <span className="text-success">&nbsp;&nbsp;Create Message</span></a> 
                        <Modal size="lg" open={showCreateMessageModal} toggle={this.handleShowCreateMessage}>
                           <CreateMessage />                        
                        </Modal>
                        </div> 
           </CardHeader>
           </card>
          </CardHeader>
        </Card>
    </div>
    )
    }
}
export default Message;
























// import React from "react";
// import { Row, Button, Card, CardBody, Form, FormInput, FormGroup,CardHeader,FormSelect } from "shards-react";

// class Message extends React.Component{

//   constructor(props){
//     super(props);
//     this.state = {
//     showCreateMessage: false,
//     }
//   };
//   handleShowCreateMessage= (prevState) =>{
//     this.setState({showCreateMessage: !prevState});
//   }
//   render(){
//     let { showCreateMessage } = this.state; 
//     return(
//       <div className="container mt-4">
//             <Card small className="mb-4">
//           <CardHeader className="border-bottom">
//         <div className="row">
//           <div className="col-lg-11">
//           <span id="help-btn" className="hover icon-md fa fa-envelope-o mt-2 mr-2" data-toggle="tooltip" title="Cancel"></span>
//           Message
//          </div>

//          <div className="col-lg-1">
//          <span id="save-btn" class="hover icon-md fa fa-ellipsis-v mt-2" data-toggle="tooltip" title="Send Message"></span>
//          </div>
//         </div><br></br>

//             <div className="row">
//             <div className="col-lg-12   d-flex justify-content-between">
//             <select id="messageId" className="form-control w-25" name="msgType" onchange="message_list.setType()">
//                   <option value="I">INBOX</option>
//                   <option value="S">SENT MESSAGE</option>
//             </select> 
//             <div className="icon-color btn btn-outline-primary ml-5 " data-toggle="tooltip" title="Create New Message">
// 						<span className="fa fa-plus"></span>
//                         {/* <span>&nbsp;&nbsp;Compose</span> */}
//                         <span><a href="./CreateMessage"> &nbsp;
//                          Compose
//                         </a></span>
// 					</div>            
//             </div>
//             </div>
//             <table className="table mt-2">
//             <thead className="thead-light">
//             <tr>
//                 <th scope="col">From</th>
//                <th scope="col">Message</th>
//                <th scope="col">Date</th>
//            </tr>
//            </thead>
//            </table>
//            <card small className="mb-4">
//            <CardHeader className="border-bottom bg-info"><h6>Not Found</h6>
//            {/* <div class="icon-color btn btn-outline-primary" data-toggle="tooltip" title="Create New Message">
// 						<span class="fa fa-plus"></span>
//                         <span>&nbsp;&nbsp;Create Message</span>
//                         <span><a href="./CreateMessage"> &nbsp;
//                          Create Message
//                         </a></span>CreateMessage
                        
//           </div> */}
//             <Button size="sm" className="mr-2 p-1" outline theme="success"
//                 onClick={()=> this.handleShowCreateMessage(showCreateMessage)}>
//                   <i class="fas fa-plus" /> &nbsp; Create Message
//                 </Button>
//            </CardHeader>
//            { showCreateMessage &&
//            <div style={{"zIndex":999}}>
//         <Card small className="mb-4">
//           <CardHeader className="border-bottom">
//           <div className="row">
//           <div className="col-lg-11">
//           <span id="cancel-btn" className="hover icon-md fa fa-chevron-left mt-2 mr-2" data-toggle="tooltip" title="Cancel"></span>
//           New Message
//          </div>

//          <div className="col-lg-1">
//          <span id="save-btn" class="hover icon-md fa fa-check mt-2" data-toggle="tooltip" title="Send Message"></span>
//          </div>
//         </div>
//         <br></br>
//           <div className="row">
//           <div className="col-lg-3">
//          <h6>To :*</h6><br></br>
//          <h6>Subject :</h6>
//          </div>
//          <div className="col-lg-9">
// 						<FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Search by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message"/><br></br>
//             <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Subject" data-toggle="tooltip" title="Enter the subject of the message"/>
//          </div>
//         </div>
    
//           <div>
//             <br></br>
//             <h6>Message *</h6>
//             <div className="col-xs-12">
// 							<textarea id="message" rows="5" maxlength="1500" className="form-control required"  placeholder="Message" data-toggle="tooltip" title="Enter the details of the message here"></textarea>
// 					</div>
//           </div>
//           <div className="col-xs-6 mt-3">
// 						<div id="save-btn" class="icon-color btn btn-outline-success" data-toggle="tooltip" title="Send Message">Send</div>
// 					</div>
//           </CardHeader>
//         </Card>
//            </div>
//            }
//            </card>
//           </CardHeader>
//         </Card>
//     </div>
//     )
//     }
// }
// export default Message;
































// import React from "react";
// import { Container, Row, Col, Card, FormInput, Button,CardHeader, CardBody } from "shards-react";


// import PageTitle from "../components/common/PageTitle";

// const Message = () => (
//   <Container fluid className="main-content-container px-4 py-4">
//             <Card small className="mb-4">
//           <CardHeader className="border-bottom">
//         <div className="row">
//           <div className="col-lg-11">
//           <span id="help-btn" className="hover icon-md fa fa-envelope-o mt-2 mr-2" data-toggle="tooltip" title="Cancel"></span>
//           Message
//          </div>

//          <div className="col-lg-1">
//          <span id="save-btn" class="hover icon-md fa fa-ellipsis-v mt-2" data-toggle="tooltip" title="Send Message"></span>
//          </div>
//         </div><br></br>

//             <div className="row">
//             <div className="col-lg-12   d-flex justify-content-between">
//             <select id="messageId" className="form-control w-25" name="msgType" onchange="message_list.setType()">
//                   <option value="I">INBOX</option>
//                   <option value="S">SENT MESSAGE</option>
//             </select> 
//             <div className="icon-color btn btn-outline-primary ml-5 " data-toggle="tooltip" title="Create New Message">
// 						<span className="fa fa-plus"></span>
//                         {/* <span>&nbsp;&nbsp;Compose</span> */}
//                         <span><a href="./CreateMessage"> &nbsp;
//                          Compose
//                         </a></span>
// 					</div>            
//             </div>
//             </div>
//             <table className="table mt-2">
//             <thead className="thead-light">
//             <tr>
//                 <th scope="col">From</th>
//                <th scope="col">Message</th>
//                <th scope="col">Date</th>
//            </tr>
//            </thead>
//            </table>
//            <card small className="mb-4">
//            <CardHeader className="border-bottom bg-info"><h6>Not Found</h6>
//            <div class="icon-color btn btn-outline-primary" data-toggle="tooltip" title="Create New Message">
// 						<span class="fa fa-plus"></span>
//                         {/* <span>&nbsp;&nbsp;Create Message</span> */}
//                         <span><a href="./CreateMessage"> &nbsp;
//                          Create Message
//                         </a></span>
                        
// 					</div>
//            </CardHeader>
//            </card>
//           </CardHeader>
//         </Card>
//   </Container>
// );
// export default Message;
