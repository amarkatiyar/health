import React from 'react'
import {Row,Button,CardHeader, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput } from 'shards-react'

export default  function SetForms(){
return(

<div className="container mt-3">
 <div className="col-lg-6">   
<Card className="mb-4" style={{height:"500px"}}>
<CardHeader className="p-3 " style={{background:"#A9A9A9"}}>
<div className="row" >
   <div className="col-lg-10"> <i className="fas fa-arrow-left">Forms</i></div>
    <div className="col-lg-2"> <i className="fas fa-plus"></i></div>
    </div>
    </CardHeader>
    <div className="row mt-4">
    <div className="col-lg-2"></div>
    <div className="col-lg-8 bg-success text-left"style={{height:"40px"}}>There is no form</div>
    </div>
</Card>
</div>
</div>
    )
}