import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput } from 'shards-react'

export default  function HospitalService(){
return(

    <div className="container mt-3">
    <Card className="" style={{width:"600px",height:"450px"}}>
    <row className="row form-control p-3 bg-primary text-dark ml-1">
    <i className="fas fa-arrow-left">% Service Charges/Tax</i>
    </row>
    <div className="row form-control p-3 bg-success text-dark ml-1">
    <i><div className="fas fa-plus ml-5" ></div></i>
    </div>
    <CardBody>

    </CardBody>
    </Card>
    </div>
)
}