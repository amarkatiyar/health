import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput } from 'shards-react'

export default  function Edit2(){
return(

    <div className="container mt-3">
    <Card className="" style={{width:"600px",height:"400px"}}>
    <CardBody>
    <form>

        <div class="form-group row mt-3">
                 <label for="Ad_status" class="col-sm-6 text-primary">Administrator status*</label>
                    <div class="col-sm-6">
                        <div class="dropdown">
                            <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" >
                                Gender
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Male</a>
                                <a class="dropdown-item" href="#">Female</a>
                                <a class="dropdown-item" href="#">Other</a>
                            </div>
                        </div>
                    </div>
        </div>
        <div className="row">
            <div className="col-6 ">
            <label for="Education" className="text-primary">Education*</label>
            </div>
            <div className="col-6">
            <input type="text" className="form-control"  placeholder="Fname"></input>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-6 ">
            <label for="l_no" className="text-primary">Licence Number*</label>
            </div>
            <div className="col-6">
            <input type="text" className="form-control"  placeholder="Fname"></input>
            </div>
        </div>
        <Button outline size="md" className="mt-3 ml-5" theme="primary">
            Save
        </Button>
    </form>
    </CardBody>        
    </Card>
    </div>
)
}