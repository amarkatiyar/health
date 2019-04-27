import React from "react";
// import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  Container,
  CardBody,
  Form

} from "shards-react";

export default class Patsetting extends React.Component {
render(){
return(
<Container className="main-content-container px-4 py-4">

<div className="row ml-2">Setting</div>
<Form className="mt-3">
    <div className="row">
        <div className="col-7">
            <Card>
                <CardBody>
                    <h6 className="text-success">Profile</h6>
                    <p>Edit your profile,change name,email,etc.</p>
                    <a href="./EditProfile">
                    <Button className="mr-2" outline theme="success">
                    Edit Profile
                    </Button>
                    </a>
                </CardBody>
            </Card>

            <Card className="mt-3">
                <CardBody>
                        <h6 className="text-success">Change Password</h6>
                        <p>Change your password, it is recommended you change your password regular</p>
                        <a href="./ChangePassword"><Button outline theme="success" className="mr-1">
                        Change Password 
                    </Button></a>
                </CardBody>
            </Card>

            <Card className="mt-3"outline  theme="success">
                <CardBody>
                    <h6 className="text-success">AUTHORIZED USER</h6>
                    <p>Set your preferred Authorized users</p>
                    <input type="checkbox" outline size="sm" theme="success" className=" mr-1"></input>
                    Provide authorization to users*
                </CardBody>
            </Card>

            <Card className="mt-3">
                <CardBody>
                <h6 className="text-success">AUDIT REPORTS</h6>
                    <p>You can view your audit reports here</p>
                    <a href="./AuditReport"><Button outline  theme="success" className="mr-1">
                        View Audit Reports
                    </Button></a>
                </CardBody>
            </Card>

        </div>





         <div className="col-2">
         <div style={{position:'fixed'}}>
            <Card className="">
            <Button outline  theme="success">
                        View Audit Reports
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        View Audit Reports
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        View Audit Reports
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        View Audit Reports
                    </Button>  
            </Card>
         </div>
         </div>
 </div>
 </Form>
            
</Container>
        )
    }
}