import React from "react";
import { Row, Button, Card, CardBody } from "shards-react";
import Profile from "./Profile";
import Personal from "./Personal";
import Alternatecontact from "./Alternatecontact";
import Contact from "./Contact";
import Careteam from "./Careteam";

class PatientAcc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddress: false,
      showPersonal: false,
      showAlternatecontact: false,
      showCreatemember: false,
      showProfile: false
    };
  }

  handleShowAddress = prevState => {
    this.setState({ showAddress: !prevState });
  };

  handleshowPersonal = prevState => {
    this.setState({ showPersonal: !prevState });
  };

  handleshowAlternatecontact = prevState => {
    this.setState({ showAlternatecontact: !prevState });
  };

  handleShowCreatemember = prevState => {
    this.setState({ showCreatemember: !prevState });
  };

  handleShowProfile = prevState => {
    this.setState({ showProfile: !prevState });
  };

  render() {
    let { showAddress } = this.state;
    let { showAlternatecontact } = this.state;
    let { showPersonal } = this.state;
    let { showCreatemember } = this.state;
    let { showProfile } = this.state;

    return (
      <div className="container">
        <Row className="mt-4">
          {/* ************this first column******** */}
          <div className="col-lg-10 col-md-10 col-sm-10 col-9">
            <p>Patient Account</p>
            <div className="mb-4">
              {" "}
              <a href="#">
                <Button className="mr-2" outline theme="success">
                  <i class="fas fa-list-ul" /> &nbsp; Health Record
                </Button>
              </a>
              <a href="#">
                <Button outline theme="success">
                  <i class="fas fa-plus" /> &nbsp; New Health Record
                </Button>
              </a>
            </div>
          </div>
          {/* ***********************second column************* */}
          <div className="col-lg-2  col-md-2 col-sm-2 col-3">
            <a href="#">
              <i class="fas fa-print" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">
              <i class="fas fa-ellipsis-v" />
            </a>
          </div>
        </Row>
        <div className="row">
          <div className="col-lg-6">
            <Card className="mb-3" style={{ height: "240px" }}>
              <CardBody>profile photo</CardBody>
            </Card>

            <Card className="mb-3" style={{ height: "240px" }}>
              <CardBody>
                <h6 className="text-success">
                  Personal &nbsp;{" "}
                  <i
                    class="far fa-edit"
                    onClick={() => this.handleshowPersonal(showPersonal)}
                  />
                </h6>
              </CardBody>
              {showPersonal && <Personal />}
            </Card>

            <Card className="mb-3" style={{ height: "240px" }}>
              <CardBody>
                <div className="row">
                  <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                    {" "}
                    <h6 className="text-success">ALTERNATE CONTACT</h6>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                    <i
                      class="fas fa-plus"
                      onClick={() =>
                        this.handleshowAlternatecontact(showAlternatecontact)
                      }
                    />
                  </div>
                </div>
              </CardBody>
              {showAlternatecontact && <Alternatecontact />}
            </Card>

            <Card className="mb-3" style={{ height: "240px" }}>
              <CardBody>
                <h6 className="text-success">UPCOMING APPOINTMENTS</h6>
              </CardBody>
            </Card>
          </div>

          <div className="col-lg-6">
            <Card className="mb-3" style={{ height: "240px" }}>
              <CardBody>
                <div className="text-success">
                  <i
                    class="far fa-edit"
                    onClick={() => this.handleShowProfile(showProfile)}
                  />{" "}
                  profile
                </div>
              </CardBody>
              {showProfile && <Profile />}
            </Card>

            <Card className="mb-3" style={{ height: "240px" }}>
              <CardBody>
                <h6 className="text-success">CONTACT</h6>

                <Button
                  size="sm"
                  className="mr-2 p-1"
                  outline
                  theme="success"
                  onClick={() => this.handleShowAddress(showAddress)}
                >
                  <i class="fas fa-plus" /> &nbsp; Add
                </Button>
              </CardBody>
              {showAddress && <Contact />}
            </Card>

            <Card className="mb-3" style={{ height: "240px" }}>
              <CardBody>
                <div className="row">
                  <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                    {" "}
                    <h6 className="text-success">CARE TEAM MEMBER</h6>
                  </div>
                  <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                    <i
                      class="fas fa-plus"
                      onClick={() =>
                        this.handleShowCreatemember(showCreatemember)
                      }
                    />
                  </div>
                </div>
              </CardBody>
              {showCreatemember && <Careteam />}
            </Card>
          </div>
          <div className="mb-2 ml-3">
            <a href="#">
              <Button className="mr-2" outline theme="success">
                <i class="fas fa-print" /> &nbsp;Print Id Card{" "}
              </Button>
            </a>
            <a href="#">
              <Button className="mr-2" outline theme="success">
                <i class="far fa-trash-alt" /> &nbsp;Delete{" "}
              </Button>
            </a>
            <a href="#">
              <Button className="mr-2" outline theme="success">
                <i class="fas fa-arrow-left" /> &nbsp; Back{" "}
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientAcc;
