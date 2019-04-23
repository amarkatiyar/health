import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput } from 'shards-react'

export default  function Add2(){
return(

    <div className="container mt-3">
    <Card className="" style={{width:"400px",height:"200px"}}>
    <CardBody>
    <form>
        <div className="row">
        <p>Speciality</p>
        </div>
        <div className="form-group row mt-3">
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
        <Button outline size="md" className="mt-3 ml-5" theme="primary">
            Save
        </Button>
    </form>
    </CardBody>        
    </Card>
    </div>
)
}