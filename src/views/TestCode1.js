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
  handleShowDrugCodeForm=(showForm4) => {
    this.props.handleHideDrugCodeForm(showForm4);
}

render(){
    const { showForm4 } = this.state;

return(
<div className="row">
<Card style={{height:"500px",width:"600px"}}> 
    <Form>
        <CardHeader className="p-3 " style={{background:"#A9A9A9"}}>
            <div className="row" >
                <div onClick ={()=>this.handleShowDrugCodeForm(showForm4)} className="col-sm-1">  <i className="fas fa-arrow-left"></i>
                </div>
                <div className="col-sm-11">Test Code</div>
            </div>
        </CardHeader>
    <div className="p-3" style={{background:"hsl(0, 0%, 94%)"}}>
        <div className="row">
            <div className="col-sm-9">hdfdfh</div>
            <div className="col-sm-1"><span className=" hover icon-md fas fa-paperclip"></span></div>
            <div className="col-sm-1"><span className=" hover icon-md fas fa-plus"></span></div>
            <div className="col-sm-1"><span className=" hover icon-md fas fa-ellipsis-v"></span></div>
        </div>
    </div>
        <div className="mt-4">
                <div className=" bg-success"style={{height:"40px"}}>
                    <p>There are no Procedure Code code here and use them quickly</p>
                </div>
        </div>
    </Form>
</Card>
</div>
)
}
}