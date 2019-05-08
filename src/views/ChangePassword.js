import React from 'react'
import {Row,Button, Card, CardBody,Form } from 'shards-react'

export default  function ChangePassword(){
    return(
        <Card className="px-4 ml-3 mt-3 mb-5" style={{width:"680px",height:"300px"}}>
        <Form>
            <CardBody>
            <h6 className=" ml-2 text-success">CHANGE PASSWORD</h6>
            <p className="ml-2">Enter current password, new password and press Save button</p>
            <div class="row ml-5">
                <div classname="col-4 ml-5">
                <h6 class="mt-2"><b>Current Password*</b></h6>
                <h6 class="mt-3"><b>New Password*</b></h6>
                <h6 class="mt-3"><b>Confirm New Password*</b></h6>
                </div>
                <div className="col-8">
                <input  type="password" class="form-control" id="" placeholder="Password"></input>
                <input  type="password" class="form-control mt-2" id="" placeholder="Password"></input>
                <input  type="password" class="form-control mt-2" id="" placeholder="Password"></input>
                </div>
            </div>
            <div class="row ml-5">
                <div class="col-8 ml-4 mt-3">
                        <Button outline size="sm" theme="success" className="mb-2 ml-4"><i class="fas fa-check mr-2"></i>
                            change
                        </Button>
                        <a href="./user-profile-lite"> <Button outline size="sm" theme="success" className="mb-2 ml-4"><i class="fas fa-times mr-2"></i>
                            cancel
                        </Button></a>
                </div>
            </div>
            </CardBody>
        </Form>
    </Card>
    )
}