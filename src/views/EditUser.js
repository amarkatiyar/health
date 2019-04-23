import React from 'react'
import {Row,Button, Card, CardBody } from 'shards-react'


export default  function EditUser(){
    return(
    <div className="container">
        <h6 className="mt-3 text-primary">ADMINISTRATOR ACCOUNT</h6>
        <div className="row mt-3">
                <div className="col lg-6">
                    <Card style={{height:"250px"}}>
                        <CardBody>   
                        </CardBody>
                    </Card>
                </div>
                <div className="col lg-6">
                <Card style={{height:"250px"}}>
                        <CardBody> 
                        <a href="./Edit1"><i class="far fa-edit"></i></a> 
                        </CardBody>
                </Card>
                </div>
        </div>
        <div className="row mt-3">
                <div className="col lg-6">
                    <Card style={{height:"250px"}}>
                        <CardBody> 
                        <h6 className="text-primary">CONTACT</h6>
                        <a href="#"><Button size="sm" className="mr-2 p-1" outline theme="primary">
                        <i class="fas fa-plus"></i> &nbsp;
                        Add
                        </Button></a>  
                        </CardBody>
                    </Card>
                </div>
                <div className="col lg-6">
                <Card style={{height:"250px"}}>
                        <CardBody>  
                        <h6 className="text-primary">PERSONAL</h6>
                        <a href="./Edit2"><i class="far fa-edit"></i></a>
                        </CardBody>
                </Card>
                </div>
        </div>
        <div className="row mt-3">
                <div className="col lg-6">
                    <Card style={{height:"180px"}}>
                        <CardBody>
                        <h6 className="text-primary">SPECIALITY</h6>
                        <a href="./Add2"><Button size="sm" className="mr-2 p-1" outline theme="primary">
                        <i class="fas fa-plus"></i> &nbsp;
                        Add
                        </Button></a>     
                        </CardBody>
                    </Card>
                </div>
                <div className="col lg-6"></div>
        </div>
        <a href="#"><Button  className="mr-2 mt-3 mb-3" outline theme="primary"><i class="fas fa-print"></i> &nbsp;Print Id Card </Button></a>
        <a href="#"><Button  className="mr-2 mt-3 mb-3" outline theme="primary"><i class="fas fa-arrow-left"></i> &nbsp; Back </Button></a>
    </div>
    )
}