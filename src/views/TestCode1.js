import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput,CardHeader } from 'shards-react'

export default class TestCode1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          open: false,
          handleShowDrugCodeForm :false
      };
  }
  handleShowDrugCodeForm=() => {
    this.props.handleHideDrugCodeFormFour();
}

render(){
    const { showForm4 } = this.state;

return(
<div className="row">
<Card style={{height:"500px",width:"600px"}}> 
    <Form>
        <CardHeader className="p-3 " style={{background:"#A9A9A9"}}>
            <div className="row" >
                <div onClick ={()=>this.handleShowDrugCodeForm()}>  <i className="fas fa-arrow-left ml-1"style={{cursor:"pointer"}}></i>&nbsp;
                Test Code
                </div>
            </div>
        </CardHeader>
    <div className="p-3" style={{background:"hsl(0, 0%, 94%)"}}>
        <div className="row">
            <div className="col-sm-9"><i class="fas fa-search"style={{cursor:"pointer"}}></i></div>
            <div className="col-sm-1"><span className=" hover icon-md fas fa-paperclip"style={{cursor:"pointer"}}></span></div>
            <div className="col-sm-1"><span className=" hover icon-md fas fa-plus"style={{cursor:"pointer"}}></span></div>
            <div className="col-sm-1"><span className=" hover icon-md fas fa-ellipsis-v"style={{cursor:"pointer"}}></span></div>
        </div>
    </div>
        <div className="mt-4">
                <div className=" bg-success"style={{height:"40px"}}>
                    <small><b>There are no Test code set, add your Test code here and use them quickly</b></small>
                </div>
        </div>
    </Form>
</Card>
</div>
)
}
}