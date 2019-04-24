import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput } from 'shards-react'

export default  function NewUser(){
return(

    <div className="container mt-3">
    <Card className="" style={{width:"600px",height:"450px"}}>
        <CardBody>
        <h6 className="text-success">CREATE USER ACCOUNT</h6>
                 <p>Enter new user name, email id, select user type and press create button</p>
                 {/* .....form...... */}
                 <form>
                         <div class="form-group row">
                             <label for="Fname" class="col-sm-6 col-form-label">FirstName</label>
                             <div class="col-sm-6">
                             <input type="text" class="form-control"  placeholder="Fname"></input>
                             </div>
                         </div>
                         <div class="form-group row">
                             <label for="Lname" class="col-sm-6 col-form-label">LastName</label>
                             <div class="col-sm-6">
                             <input type="text" class="form-control"  placeholder="Lname"></input>
                             </div>
                         </div>
                         <div class="form-group row">
                             <label for="staticEmail" class="col-sm-6 col-form-label">Email</label>
                             <div class="col-sm-6">
                             <input type="text"  class="form-control" id="staticEmail" placeholder="email"></input>
                             </div>
                         </div>
                         <div class="form-group row">
                             <label for="staticEmail" class="col-sm-6 col-form-label">UserType</label>
                             <div class="col-sm-6">
                             <div class="dropdown">
                             <select className="form-control ">
                                    <option value="1">Standard User</option>
                                    <option value="">Doctor</option>
                                   
                                    {/* <option value="2">Other</option> */}
                                    </select>
                                 {/* <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" >
                                     Standard User
                                 </button>
                                 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                     <a class="dropdown-item" href="#">Doctor</a>
                                     <a class="dropdown-item" href="#">Standard User</a>
                                 </div> */}
                             </div>
                             </div>
                         </div>
                        <div class="form-group row">
                             <label for="staticEmail" class="col-sm-6 ml col-form-label">MobileNo</label>
                             <div class="col-sm-6">
                            mobilenuberbox
                             </div>
                         </div>
                       
                         <div class="form-group row">
                         <div class="col-6"></div>
                         <div class="col-6">
                         <Button outline size="sm" class="form-control" theme="success" className="mb-2">
                             CREATE
                         </Button>
                         </div>
                         </div>
                </form>
        </CardBody>
        </Card>
    </div>
    )
}