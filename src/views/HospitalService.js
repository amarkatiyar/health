import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput,CardHeader } from 'shards-react'

export default  function HospitalService(){
return(

<div className="container mt-3">
 <div className="col-sm-8">   
<Card className="mb-4" style={{height:"500px"}}>
<CardHeader className="p-3 " style={{background:"#A9A9A9"}}>
<div className="row" >
   <div className="col-sm-1"> <i className="fas fa-arrow-left"></i></div>
    <div className="col-sm-1"> %</div>
    <div className="col-sm-10">Service Charges/ Tax</div>
</div>
</CardHeader>
<div className=" p-3" style={{background:"hsl(0, 0%, 94%)"}}>
<div className="row">
    <div className="col-sm-10">hdfdfh</div>
    <div className="col-sm-2"><a><i className="fas fa-plus"></i></a></div>
</div>
</div>
            <div className="row mt-4">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 bg-success text-left"style={{height:"40px"}}>
                <p>Add your Service Charges/Tax code here and use them quickly</p>
                </div>
            </div>
</Card>
</div>
</div>
)
}