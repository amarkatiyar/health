import React from 'react'
import {Row,Button,CardHeader, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput } from 'shards-react'

export default class SetForms extends React.Component{
        constructor(props) {
          super(props);
          this.state = { 
            open: false,
            handleShowForms :false
        };
    }

    handleShowForms=() => {
        this.props.handleHideForms();
    }

render(){
    const { setForms } = this.state;

return(
<div>
<Card  style={{height:"400px",width:"500px"}}>
    <CardHeader className="p-3 " style={{backgroundColor:"#A9A9A9"}}>
        <div className="row" >
            <div onClick ={()=>this.handleShowForms()} className="col-lg-1"> <i className="fas fa-arrow-left"></i></div>
            <div className="col-lg-9">Forms</div>
            <div onClick ={()=>this.handleShowForms()} className="col-lg-2"> <i className="fas fa-plus"></i></div>
        </div>
    </CardHeader>
    <div className="row mt-4">
        <div className="col-lg-2"></div>
        <div className="col-lg-8  text-left"style={{height:"40px",backgroundColor:"#D9EDF7"}}>There is no form</div>
    </div>
</Card>
</div>
    )
}
}
