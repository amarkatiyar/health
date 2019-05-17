import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput,CardHeader } from 'shards-react'

export default class DrugCode1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          open: false,
          handleShowDrugCodeForm :false
      };
  }
  handleShowDrugCodeForm=() => {
    this.props.handleHideDrugCodeFormSecond();
}

render(){

    const { showForm2 } = this.state;

return(

<Card className="" style={{height:"500px",width:"600px"}}>
        <CardHeader className="p-3 " style={{backgroundColor:"#A9A9A9"}}>
            <div className="row" >
            <div  onClick ={()=>this.handleShowDrugCodeForm()} className="col-sm-1"> <i className="fas fa-arrow-left"style={{cursor:"pointer"}}></i></div>
            <div className="col-sm-11"> Medication Code</div>
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
                    <small><b>There are no Medication code set, add your Medication code here and use them quickly</b></small>
                </div>
            </div>
</Card>
    )
}
}