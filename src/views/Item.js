import React from "react";
import {Row, Col,FormInput, CardHeader } from "shards-react";

    class Item extends React.Component{
      constructor(props){
        super(props);
        this.state = {
          handleShowItem: false,
        }
      };
      handleShowItem = () =>{
        this.props.handleHideItem();
      }
      render(){
        const { handleShowItem } = this.state;
    return (
       <Row>
       <Col>
       <CardHeader className="border-bottom" style={{width:"800px",height:"400px"}}>
<div className="row mb-3">
<div className="col-lg-11 text-left">
<a onClick={()=> this.handleShowItem()}><i className="hover icon-md fa fa-arrow-left mt-2 mr-2" title="cancle"></i></a>Item/Service
{/* <span id="cancle-btn" className="hover icon-md fa fa-arrow-left" data-toggle="tooltip" title="Cancle">&nbsp;&nbsp;&nbsp;&nbsp;Item/Service</span> */}
</div>
<div className="col-lg-1">
<span id="save-btn" className="fa fa-ellipsis-v ml-3" data-toggle="tooltip" title="Save"></span>
</div>
</div>
<h6 className="text-success text-left" style={{height: "35px",background:"gray"}}>Search select item/service, enter price and quantity</h6>
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
<span className="text-muted "><i className="far fa-star mr-3 "></i>Add as favorite</span>
<div class="col-xs-6 mt-3 mb-5 ">
        <div id="save-btn" class="icon-color btn btn-success">Save</div>
 </div>
</CardHeader>
       </Col>
     </Row>
)
}
}
export default Item;
