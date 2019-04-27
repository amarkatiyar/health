import React from "react";
import { Container, Row, Col, Card, FormInput, CardHeader, CardBody,Form,Dropdown,DropdownItem,Button,
DropdownMenu,DropdownToggle } from "shards-react";

export default class PatHealth extends React.Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        open: false,
    };
}

toggle() {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  }

render() {

return(
    <Container fluid className="main-content-container px-4 py-4">
   
    {/* <Card small className="mb-10"> */}
    <CardHeader className="border-bottom">
            <Form>
            <div className="row mr-3">
                <div className="col-lg-11">
                    <h6 className="text-success">Patient Medical History</h6>
                </div>
                <div className="col-lg-1">
                <span id="save-btn" className="fa fa-print ml-5" data-toggle="tooltip" title="Send Message"></span>
                </div>
            </div>

            <div className="mt-3">
                <div className="row ml-3">
                <Dropdown open={this.state.open} toggle={this.toggle} group>
                    <Button theme="success"> Dropdown</Button>
                    <DropdownToggle theme="success" split />
                    <DropdownMenu>
                    <DropdownItem>Date Created</DropdownItem>
                    <DropdownItem>Time Filter</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                </div>
                <div className="row mr-3 mt-2">
                    <div className="col-lg-10"></div>
                    <div className="col-lg-1">
                        <button type="button" className="btn btn-outline-success btn-sm ml-1">
                            View
                        </button>
                    </div>
                    <div className="col-lg-1">
                    <button type="button" className="btn btn-outline-success btn-sm ">
                            Download
                    </button>
                    </div>
                </div>

            </div>

            <div className="row mt-4 ml-2">
                <div className="col-lg-4">img
                    {/* <div className="ratio img-responsive img-circle"
                    style="background-image: url(cat.png);"
                    >
                    </div> */}
                
                </div>
                <div className="col-lg-2">Patient</div>
                <div className="col-lg-2">KPiD</div>
                <div className="col-lg-2">Gender/Age</div>
            </div>

                    <Card className="mt-5 mb-4">
                    <CardBody className="ml-3"style={{backgroundColor:"#f0f0f0"}}>
                        Not Found
                    </CardBody>
                    </Card>

            </Form>
    </CardHeader>
</Container>
);
}
}