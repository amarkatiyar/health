import React from 'react'
import {Row,Button, Card, CardBody } from 'shards-react'

export default  function ManageUser(){
    return(
        <div className="container mt-3">
        <Card>
                <CardBody>
                <div className="row">
                <h5 className="text-primary ml-3">MANAGE USER</h5>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                    <div class="input-group">
                    <input type="text" class="form-control" placeholder=" search by Username or email" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <Button outline size="sm" theme="primary" className="ml-2">
                    <a href="./NewUser"><i class="fas fa-plus"></i> &nbsp; New User</a>
                    </Button>
                    </div>
                </div>
                <div className="mt-3">
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
                </div>
                </CardBody>
        </Card>
        </div>
    )
}