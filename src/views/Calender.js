import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput,CardHeader } from 'shards-react'

export default class Calender extends React.Component{
render(){
return(

<Card className="mb-5 mt-4 ml-4" style={{height:"1200px",width:"900px"}}>
<CardBody>
<div className="row">
    <div className="col-sm-1"><i className="fas fa-calendar-alt"></i></div>
    <div className="col-sm-9 text-success">Calender</div>
    <div className="col-sm-1"><i class="fas fa-print"></i></div>
    <div className="col-sm-1"><i className="fas fa-ellipsis-v"></i></div>
</div>
<div className="row mt-3">
    <div className="col-lg-4">
    <div class="input-group mb-3">
    <input type="text" className="form-control" aria-describedby="basic-addon1">
    </input>
    </div>
    </div>
    <div className="col-lg-4">
    </div>
</div>

</CardBody>
</Card>
)
}
}