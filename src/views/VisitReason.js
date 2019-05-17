import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput,CardHeader } from 'shards-react'

export default class VisitReason extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          open: false,
          handleShowVisitReasonForm :false
      };
  }
  handleShowVisitReasonForm=() => {
    this.props. handleHideVisitReasonForm();
}
render(){
    const { VisitReason } = this.state;
return(
<Card style={{height:"500px",width:"600px"}}>
    <CardHeader className="p-3 " style={{background:"#A9A9A9"}}>
    <div className="row" >
    <div onClick ={()=>this.handleShowVisitReasonForm()} className="col-sm-1"> 
        <i className="fas fa-arrow-left"style={{cursor:"pointer"}}></i></div>
        <div className="col-sm-11"> Favourite Visit Reasons</div>
    </div>
    </CardHeader>
    <div className=" p-3" style={{background:"hsl(0, 0%, 94%)"}}>
        <div className="row">
            <div className="col-sm-10"><i className="fas fa-search"style={{cursor:"pointer"}}></i></div>
            <div className="col-sm-1"><span className=" hover icon-md fas fa-plus"style={{cursor:"pointer"}}></span></div>
            <div className="col-sm-1"><span className=" hover icon-md fas fa-ellipsis-v"style={{cursor:"pointer"}}></span></div>
        </div>
    </div>
            <div className="row mt-4">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 bg-success text-left"style={{height:"40px"}}>
                <small><b>There are no favorite visit reason set, add your favorite visit reasons and use them quickly in EHR</b></small>
                </div>
            </div>
</Card>
)
}
}