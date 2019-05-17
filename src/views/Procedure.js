import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput,CardHeader } from 'shards-react'

export default class Procedure extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          open: false,
          handleShowProcedureForm :false
      };
  }
  handleShowProcedureForm=() => {
    this.props. handleHideProcedureForm();
}
render(){
    const { Procedure } = this.state;
return(  
<Card style={{height:"500px",width:"600px"}}>
    <CardHeader className="p-3 " style={{background:"#A9A9A9"}}>
    <div className="row" >
    <div onClick ={()=>this.handleShowProcedureForm()} className="col-sm-1"> <i className="fas fa-arrow-left"></i></div>
        
        <div className="col-sm-11"> Favourite Procedure</div>
    </div>
    </CardHeader>
    <div className=" p-3" style={{background:"hsl(0, 0%, 94%)"}}>
    <div className="row">
        <div className="col-sm-10">hdfdfh</div>
        <div className="col-sm-1"><span className=" hover icon-md fas fa-plus"></span></div>
        <div className="col-sm-1"><span className=" hover icon-md fas fa-ellipsis-v"></span></div>
    </div>
    </div>
            <div className="row mt-4">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 bg-success text-left"style={{height:"40px"}}>
                <p>There are no Item/Service code set, add your Item/Service code here and use them quickly</p>
                </div>
            </div>
</Card>
)
}
}