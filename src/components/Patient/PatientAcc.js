import React from "react";
import {
  Button,
  Card,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "shards-react";
import Profile from "./Profile";
import Personal from "./Personal";
import Alternatecontact from "./Alternatecontact";
import Contact from "./Contact";
import Careteam from "./Careteam";

class PatientAcc extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      showAddress: false,
      showPersonal: false,
      showAlternatecontact: false,
      showCreatemember: false,
      showProfile: false,
      open: false
    };
  }
  toggle() {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
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
      <div className="container" style={{ fontFamily: " Geneva" }}>
        <div className="d-flex content-justify-arround mt-4 mb-3">
          <div>
            <h5>Patient Account</h5>
          </div>
          <div className="ml-auto  ">
            <Dropdown open={this.state.open} toggle={this.toggle}>
              <i class="fas fa-print  " />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <DropdownToggle className="bg-light border-0">
                <i class="fas fa-ellipsis-v text-dark  pr-2" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <i class="fas fa-print" />
                  &nbsp; &nbsp;print
                </DropdownItem>
                <DropdownItem>
                  <i class="far fa-file-word" />
                  &nbsp; &nbsp;Export CCD
                </DropdownItem>
                <DropdownItem>
                  <i class="fas fa-question" /> &nbsp; &nbsp;Help
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="d-flex content-justify-arround mb-3">
          <div>
            <a href="components-overview">
              <Button className="mr-2" outline theme="success">
                <i class="fas fa-list-ul" /> &nbsp; Health Record
              </Button>
            </a>
          </div>
          <div>
            <a href="NewhealthRecord">
              <Button outline theme="success">
                <i class="fas fa-plus" /> &nbsp; New Health Record
              </Button>
            </a>
          </div>
        </div>

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
                {/* {showCompose && (
          <Compose
          handleshowCompose={this.handleshowCompose}
          showCompose={this.state.showCompose}
         />
        
           ) } */}
              </CardBody>
              {showPersonal && (
                <Personal
                  handleshowPersonal={this.handleshowPersonal}
                  showPersonal={this.state.showPersonal}
                />
              )}
            </Card>

            <Card className="mb-3" style={{ height: "240px" }}>
              <CardBody>
                <div className="row">
                  <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                    {" "}
                    <h6 className="text-success">Alternate Contact</h6>
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
              {showAlternatecontact && (
                <Alternatecontact
                  handleshowAlternatecontact={this.handleshowAlternatecontact}
                  showAlternatecontact={this.state.showAlternatecontact}
                />
              )}
            </Card>

            <Card className="mb-3" style={{ height: "240px" }}>
              <CardBody>
                <h6 className="text-success">Upcoming Appoinment</h6>
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
              {showProfile && (
                <Profile
                  handleShowProfile={this.handleShowProfile}
                  showProfile={this.state.showProfile}
                />
              )}
            </Card>
            {/* {showPersonal && (
                <Personal
                handleshowPersonal={this.handleshowPersonal}
                  showPersonal={this.state.showPersonal}
                />
              )} */}

            <Card className="mb-3" style={{ height: "240px" }}>
              <CardBody>
                <h6 className="text-success">Contact</h6>

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
              {showAddress && (
                <Contact
                  handleShowAddress={this.handleShowAddress}
                  showAddress={this.state.showAddress}
                />
              )}
            </Card>

            <Card className="mb-3" style={{ height: "240px" }}>
              <CardBody>
                <div className="row">
                  <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                    {" "}
                    <h6 className="text-success">Care team Member</h6>
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
              {showCreatemember && (
                <Careteam
                handleShowCreatemember={this.handleShowCreatemember}
                  showCreatemember={this.state.showCreatemember}
                />
              )}
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
