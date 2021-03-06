import React from 'react'
import {Row,Button, Card, CardBody } from 'shards-react'

export default  function ManageUser(){
    return(
        <div className="container mt-3 mb-5">
        <Card>
                <CardBody>
                <div className="row">
                <h5 className="text-success ml-3">MANAGE USER</h5>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                    <div class="input-group">
                    <input type="text" className="form-control outline-success"  placeholder=" search by Username or email" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-2">
                    <a href="./NewUser">
                    <Button outline size="sm" theme="success" className="ml-2">
                    <i class="fas fa-plus"></i> &nbsp; New User
                    </Button></a>
                    </div>
                </div>
                <div className="mt-3">
                <a href="./M_user1"> 
                <table className="table table-hover">
                    <thead className="text-small">
                        <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">User Type</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        {/* <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td> */}
                        </tr>
                        <tr>
                        {/* <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td> */}
                        </tr>
                    </tbody>
                    </table>
                </a>
                </div>
                </CardBody>
        </Card>
        </div>
    )
}