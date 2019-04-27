import React from 'react'
import {Row,Button,CardHeader, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput } from 'shards-react'

export default class SetForms extends React.Component{
        constructor(props) {
          super(props);
          this.state = { 
            open: false,
            
        };
    }

render(){

return(
<Card className="mb-4" style={{height:"400px",width:"400px"}}>
<CardHeader className="p-3 " style={{backgroundColor:"#A9A9A9"}}>
    <div className="row" >
        <div className="col-lg-1"> <i className="fas fa-arrow-left"></i></div>
        <div className="col-lg-9">Forms</div>
        <div className="col-lg-2"> <i className="fas fa-plus"></i></div>
    </div>
</CardHeader>
    <div className="row mt-4">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 bg-success text-left"style={{height:"40px"}}>There is no form</div>
    </div>
</Card>
    )
}
}
