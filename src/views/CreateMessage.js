import React from "react";
import {Row, Col, CardHeader,FormInput } from "shards-react";

    class CreateMessage extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        handleShowCreateMessage: false,
      }
    };
  
    handleShowCreateMessage = () =>{
    
      this.props.handleHideCreateMessage();
    }
    render(){
      const { ShowCreateMessage } = this.state;

    return (
        <Row>
        <Col >
          <CardHeader className="border-bottom" style={{width:"1000px",height:"420px"}}>
          <div className="row">
          <div className="col-lg-12">       
          <a onClick={()=> this.handleShowCreateMessage()}><i className="hover icon-md fa fa-chevron-left mt-2 mr-2"></i></a>
          New Message
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
            <h6>Message *<i className="far fa-star ml-3"></i></h6>
            <div className="col-xs-12">
							<textarea id="message" rows="5" maxlength="1500" className="form-control required"  placeholder="Message" data-toggle="tooltip" title="Enter the details of the message here"></textarea>
					</div>
          </div>
          <div className="col-xs-6 mt-3">
						<div id="save-btn" class="icon-color btn btn-outline-success" data-toggle="tooltip" title="Send Message">Send</div>
          </div>
          </CardHeader>
      </Col>
      
    </Row>
)
}      
}
export default CreateMessage;
