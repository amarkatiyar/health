// @ Author Manohar
import React from "react";
import { Card, CardHeader, Modal, Container, Collapse, FormInput, InputGroup, InputGroupAddon, InputGroupText, Button, Popover } from "shards-react";
import CreateMessage from "./CreateMessage";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      showCreateMessageModal: false,
      open: false
    };
  };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }
  handleshowFavorite = (prevState) => {
    this.setState({ showFavorite: !prevState });
  }
  handleshowStar = (prevState) => {
    this.setState({ showStar: !prevState });
  }
  handleShowCreateMessage = () => {
    this.setState({ showCreateMessageModal: !this.state.showCreateMessageModal });
  }
  handleHideCreateMessage = () => {
    this.setState({ showCreateMessageModal: !this.state.showCreateMessageModal });
  }

  toggle1 = () => {
    this.setState({ open: !this.state.open });
  }
  render() {
    const { showCreateMessageModal } = this.state;
    return (
      <Container fluid className="main-content-container px-4 py-4">
        <Card small className="">
          <CardHeader className="mb-4">
            <div className="row">
              <div className="col-lg-10 text-success" >
                <i className="fas fa-envelope mr-3" style={{ cursor: "pointer" }}></i><a className="text-success">Message</a>
              </div>

              <div className="col-lg-1" >
                <Card style={{ height: "0px" }} onClick={this.toggle}>
                  <div className=" ml-5 pr-3 "><i className="far fa-star" title="Show my favorite message" style={{ cursor: "pointer" }} ></i>
                  </div>

                  <div className="col-lg-12 d-flex justify-content-end">
                    <Collapse open={this.state.collapse} className="mr-5 ">
                      <CardHeader style={{ background: "hsl(0, 50%, 95%)", width: "300px" }}>
                        <a className="fa fa-chevron-left">&nbsp;&nbsp;Favorite Message</a>
                      </CardHeader>
                      <Card className="mt-0" style={{ height: "350px", width: "300px" }}>
                        <InputGroup size="md" seamless>
                          <InputGroupAddon type="prepend">
                            <InputGroupText>
                              <i class="fas fa-search"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <FormInput className="border-3" placeholder="All" />
                          <InputGroupAddon type="append">
                            <InputGroupText>
                              <i class="fas fa-plus"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                        <div class="alert bg-info text-white font-weight-normal mt-3">
                          <small>There are no favorite item/service set, add your favorite and use them quickly in billing</small>
                        </div>
                      </Card>
                    </Collapse>
                  </div>
                </Card>
              </div>

              <div className="col-lg-1" >
                <div className=" ml-4 pr-3"><i class="fas fa-ellipsis-v" title="Show more options" style={{ cursor: "pointer" }} id="popover-2" onClick={this.toggle1}></i>
                </div>
                <Popover placement="bottom" open={this.state.open} toggle1={this.toggle1} target="#popover-2" style={{ width: "100px" }}>
                  <table className="table table-bordered table-hover mb-0">
                    <tbody>
                      <tr>
                        <td><i className="far fa-star">&nbsp;&nbsp;Favorite</i></td>
                      </tr>
                      <tr>
                        <td><i className="far fa-question-circle">&nbsp;&nbsp;Help</i></td>
                      </tr>
                    </tbody>
                  </table>
                </Popover>
              </div>
            </div><br></br>
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-between">
                <select className="form-control w-25">
                  <option value="I">INBOX</option>
                  <option value="S">SENT MESSAGE</option>
                </select>
                {/* <div>
                  <span><a onClick={() => { this.handleShowCreateMessage() }}>
                    <Button className="pl-4 pr-4" outline theme="success">
                      <i class="fas fa-plus"></i> &nbsp;
                        Compose
                    </Button></a></span>
                  <Modal size="lg" open={showCreateMessageModal} toggle={this.handleShowCreateMessage}>
                    <CreateMessage handleHideCreateMessage={this.handleHideCreateMessage} />
                  </Modal>
                </div> */}
              </div>
            </div>
            <table className="table mt-3">
              <tr style={{ background: "#f0f0f0" }}>
                <th>
                  <small>
                    <b>From</b>
                  </small>
                </th>
                <th>
                  <small>
                    <b>Message</b>
                  </small>
                </th>
                <th>
                  <small>
                    <b>Date</b>
                  </small>
                </th>
              </tr>
              <tr>
                <td />
                <td />
                <td />
              </tr>
            </table>
            <card small className="mb-4" >
              <CardHeader className="border-bottom" style={{ background: "#f0f0f0" }}><h6>Not Found</h6>
                <div>
                  <span><a onClick={() => { this.handleShowCreateMessage() }}>
                    <Button outline theme="success">
                      <i class="fas fa-plus"></i> &nbsp;
                        Create Message
                    </Button></a></span>
                  <Modal size="lg" open={showCreateMessageModal} toggle={this.handleShowCreateMessage}>
                    <CreateMessage handleHideCreateMessage={this.handleHideCreateMessage} />
                  </Modal>
                </div>
              </CardHeader>
            </card>
          </CardHeader>
        </Card>
      </Container>
    )
  }
}
export default Message;