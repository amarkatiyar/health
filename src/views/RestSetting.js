import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput } from 'shards-react'

export default  function RestSetting(){
return( 
    <Card  style={{width:"500px",height:"250px"}}>
    <CardBody>
      <Form>
        <h6 className="text-success">RESET ALL SETTING</h6>
        <p>Are you sure?<br></br>
        All user preferences updated by you will return to their default settings</p>
        <div className="row ml-5">
        <Button outline size="sm" theme="success" className="">
        Reset
      </Button>
      <Button outline size="sm" theme="success" className=" ml-3">
        Cancel
      </Button>
      </div>
      </Form>
    </CardBody>
    </Card>
)
}