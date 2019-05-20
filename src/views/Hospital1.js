import React from 'react'
import {Card,
    CardHeader } from 'shards-react'

export default  class Hospital1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          open: false,
          handleShowDrugCodeForm :false
      };
  }
  handleShowDrugCodeForm=() => {
    this.props.handleHideDrugCodeFormFirst();
}
render(){
    const { showForm1 } = this.state;

return(
<div className="row">
    <div className="col-2"></div>
    <div className="col-8">
    <Card style={{height:"500px",width:"600px" }}>
     <CardHeader className="p-3" style={{background:"#A9A9A9"}}>
        <div className="row" >
        <div onClick ={()=>this.handleShowDrugCodeForm()} className="col-sm-1"> <i className="fas fa-arrow-left" style={{cursor:"pointer"}}></i></div>
            <div className="col-sm-1"style={{cursor:"pointer"}}> <i class="fas fa-hospital"></i></div>
            <div className="col-sm-10"> Item/Service Code</div>
        </div>
        </CardHeader>
        <div className=" p-3" style={{background:"hsl(0, 0%, 94%)"}}>
            <div className="row">
                <div className="col-sm-9"><i class="fas fa-search"style={{cursor:"pointer"}}></i></div>
                <div className="col-sm-1"><span className=" hover icon-md fas fa-paperclip"style={{cursor:"pointer"}}></span></div>
                <div className="col-sm-1"><span className=" hover icon-md fas fa-plus"style={{cursor:"pointer"}}></span></div>
                <div className="col-sm-1"><span className=" hover icon-md fas fa-ellipsis-v"style={{cursor:"pointer"}}></span></div>
            </div>
        </div>
            <div className="row mt-4">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 bg-success text-left"style={{height:"40px"}}>
                <small><b>There are no Item/Service code set, add your Item/Service code here and use them quickly</b></small>
                </div>
            </div> 
</Card>
</div>
<div className="col-2"></div>
</div>
)
}
}