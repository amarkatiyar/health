import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput } from 'shards-react'

export default  function RestSetting(){
return(

<div className="container mt-3">
    <Card className="" style={{width:"500px",height:"250px"}}>
    <CardBody>
        <h6 className="text-primary">RESET ALL SETTING</h6>
        <p>Are you sure?<br></br>
        All user preferences updated by you will return to their default settings</p>
        <div className="row ml-5">
        <Button outline size="sm" theme="primary" className="">
        Reset
      </Button>
      <Button outline size="sm" theme="primary" className=" ml-3">
        Cancel
      </Button>
      </div>
    </CardBody>
    </Card>
</div>
)
}