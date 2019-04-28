import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button,Container
} from "shards-react";

const UserAccountDetails = ({ title }) => (
<Container className="main-content-container px-4 py-4">
<div style={{position:"fixed"}}>
            <Card className="">
            <Button outline  theme="success">
                        Edit Profile
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        Change Password
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        Manage User
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        Set favourites
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        Change Password
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        Manage User
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        Set favourites
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        Set Hospital Codes
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        Set Hospital Service Charges/Tax
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        Notification
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        SMS/EMAIL
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        Print logo
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        Doctor Signature
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        Report By Email
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        Audit Report
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                  Clinical Decision Report
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        Forms
                    </Button>  
            </Card>

            <Card className="mt-1">
            <Button outline  theme="success">
                        Reset All Setting
                    </Button>  
            </Card>
         </div>
</Container>
);

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
