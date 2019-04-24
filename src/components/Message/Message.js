import React from "react";
import {
  Row,
  Button,
  Card,
  CardBody,
  Form,
  FormInput,
  FormGroup,
  FormSelect
} from "shards-react";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreatemessage: false,
      showCompose: false
    };
  }

  handleShowCreatemessage = prevState => {
    this.setState({ showCreatemessage: !prevState });
  };

  handleshowCompose = prevState => {
    this.setState({ showCompose: !prevState });
  };

  render() {
    let { showCreatemessage } = this.state;
    let { showCompose } = this.state;

    return (
      <div className="container">
        <Card className="mt-4 mb-3">
          <div className="row mt-3">
            <div className=" col-xl-10 col-lg-10 col-md-9 col-sm-8 col-8">
              <h6 className="ml-4  text-success">
                <i class="far fa-envelope" /> &nbsp; &nbsp; &nbsp;Message
              </h6>
            </div>
            <div className=" col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 ">
              <i class=" text-dark far fa-star" />&nbsp; &nbsp; &nbsp;&nbsp;
              &nbsp; &nbsp;<i class=" text-dark fas fa-ellipsis-v" />
            </div>
          </div>

          <div className="row pt-3">
            <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-8 col-8 ">
              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 col-6">
                <select
                  class="form-control bg-light "
                  id="sel1"
                  name="sellist1"
                >
                  <option value="">--select--</option>
                  <option value="1">Inbox</option>
                  <option value="2">Send Message</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4">
              <Button
                outline
                theme="success"
                onClick={() => this.handleshowCompose(showCompose)}
              >
                <i class="fas fa-plus" />&nbsp; compose
              </Button>
            </div>
          </div>

          {showCompose && (
            <div style={{ zIndex: 999 }}>
              <div className="">
                <Card className="mt-2 mb-2">
                  <CardBody>
                    <Row className="pb-4">
                      <div className="col-lg-11 col-md-11 col-sm-10 col-10">
                        <h6>
                          <i class="fas fa-arrow-left text-dark "onClick={() => this.handleshowCompose(showCompose)} />&nbsp; &nbsp; New
                          Message
                        </h6>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-2 col-2">
                        <i class="fas fa-check" />
                      </div>
                    </Row>

                    <Form>
                      <FormGroup>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <label htmlFor="#To">To*</label>
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                            <select
                              class="form-control bg-light"
                              id="sel1"
                              name="sellist1"
                            >
                              <option value="">
                                Search by name kpid ,e-email here
                              </option>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                              <option value="4">Option 4</option>
                            </select>
                          </div>
                        </div>
                      </FormGroup>

                      <FormGroup>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4 ">
                            <label htmlFor="Date of Birth">subject:</label>
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                            <FormInput
                              className="bg-light"
                              type="text"
                              id="#subject"
                              placeholder="subject"
                            />
                          </div>
                        </div>
                      </FormGroup>

                      <FormGroup>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <label htmlFor="#message">
                              Message* &nbsp; &nbsp;<i class="far fa-star" />
                            </label>
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                            <textarea
                              class="form-control bg-light"
                              id="Message"
                              rows="3"
                              placeholder="Message"
                            />
                          </div>
                        </div>
                      </FormGroup>
                      <a href="#">
                        <Button className="mr-2" outline theme="success">
                          {" "}
                          &nbsp; Send{" "}
                        </Button>
                      </a>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </div>
          )}

          <div className="text-center">
            <table className="table mt-3 mb-3">
              <tr className="bg-light">
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
          </div>
          <div className="pb-4 pl-4">
            <Button
              outline
              theme="success"
              onClick={() => this.handleShowCreatemessage(showCreatemessage)}
            >
              <i class="fas fa-plus" />&nbsp; &nbsp; Create Message
            </Button>
          </div>
        </Card>
        {showCreatemessage && (
          <div style={{ zIndex: 999 }}>
            <div className="container">
              <Card className=" mb-2">
                <CardBody>
                  <Row className="pb-4">
                    <div className="col-lg-11 col-md-11 col-sm-10 col-10">
                      <h6>
                        <i class="fas fa-arrow-left text-dark " onClick={() => this.handleShowCreatemessage(showCreatemessage)} />&nbsp; &nbsp; New
                        Message
                      </h6>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-2 col-2">
                      <i class="fas fa-check text-dark" />
                    </div>
                  </Row>

                  <Form>
                    <FormGroup>
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <label htmlFor="#To">To*</label>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                          <select
                            class="form-control bg-light"
                            id="sel1"
                            name="sellist1"
                          >
                            <option value="">
                              Search by name kpid ,e-email here
                            </option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            <option value="4">Option 4</option>
                          </select>
                        </div>
                      </div>
                    </FormGroup>

                    <FormGroup>
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4 ">
                          <label htmlFor="Date of Birth">subject:</label>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                          <FormInput
                            className="bg-light"
                            type="text"
                            id="#subject"
                            placeholder="subject"
                          />
                        </div>
                      </div>
                    </FormGroup>

                    <FormGroup>
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                          <label htmlFor="#message">
                            Message* &nbsp; &nbsp;<i class="far fa-star" />
                          </label>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                          <textarea
                            class="form-control bg-light"
                            id="Message"
                            rows="3"
                            placeholder="Message"
                          />
                        </div>
                      </div>
                    </FormGroup>
                    <a href="#">
                      <Button className="mr-2" outline theme="success">
                        {" "}
                        &nbsp; Send{" "}
                      </Button>
                    </a>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Message;
