import React from 'react'
import {Row,Button, Card, CardBody,Form } from 'shards-react'

export default  function ChangePassword(){
    return(
    // <div className="container mt-3">
    <Form>
        <Card className="px-4 ml-3 mt-3 mb-5" style={{width:"680px",height:"300px"}}>
            <CardBody>
            <h5 className=" ml-2 text-success">CHANGE PASSWORD</h5>
            <p className="ml-2">Enter current password, new password and press Save button</p>
            <div class="row ml-5">
                <div classname="col-4 ml-5">
                <h6 class="mt-2">Current Password*</h6>
                <h6 class="mt-3">New Password*</h6>
                <h6 class="mt-3">Confirm New Password*</h6>
                </div>
                <div className="col-8">
                <input  type="password" class="form-control" id="" placeholder="Password"></input>
                <input  type="password" class="form-control mt-2" id="" placeholder="Password"></input>
                <input  type="password" class="form-control mt-2" id="" placeholder="Password"></input>
                </div>
            </div>
            <div class="row ml-5">
                <div class="col-8 ml-4 mt-3">
                        <Button outline size="sm" theme="success" className="mb-2 ml-5"><i class="fas fa-check mr-2"></i>
                            change
                        </Button>
                        <Button outline size="sm" theme="success" className="mb-2 ml-5"><i class="fas fa-times mr-2"></i>
                            cancel
                        </Button>
                </div>
            </div>
            </CardBody>
        </Card>
    </Form>
    // </div>
    )
}