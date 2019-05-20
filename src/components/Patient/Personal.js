
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

class Personal extends React.Component {
  
    render() {
    return (
        <div style={{ zIndex: 999 }}>
        <div className="container">
          <Card className="mb-2">
            <CardBody>
              <Row className="mt-0">
                <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                  <h6>
                    <i
                      class="fas fa-arrow-left mr-3 text-dark"
                     
                    />
                    Personal
                  </h6>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                  <i class="fas fa-check text-dark" />
                </div>
              </Row>
              <Form>
                <FormGroup>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#Country">Gender</label>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <FormSelect>
                        <option value="first">Male</option>
                        <option value="second">Female</option>
                        <option value="third">Other</option>
                      </FormSelect>
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 ">
                      <label htmlFor="Date of Birth">
                        Date of Birth
                      </label>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <FormInput
                        type="text"
                        id="#date of birth"
                        placeholder="10/07/96"
                      />
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#state/province">
                        Blood Group
                      </label>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                      <FormSelect>
                        <option value="first">
                          --select Blood Group--
                        </option>
                        <option value="first">O postive</option>
                        <option value="second">O neagtive</option>
                        <option value="first">A postive</option>
                        <option value="second">A neagtive</option>
                        <option value="first">B postive</option>
                        <option value="second">B neagtive</option>
                      </FormSelect>
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#state/province">
                        Marital Status
                      </label>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                      <FormSelect>
                        <option value="first">
                          --select Marital Status--
                        </option>
                        <option value="first">Single</option>
                        <option value="second">married</option>
                        <option value="first">Divorce</option>
                        <option value="second">Widowed</option>
                      </FormSelect>
                    </div>
                  </div>
                </FormGroup>

              
                  <Button className="mr-2" outline theme="success">
                    {" "}
                    &nbsp; Save{" "}
                  </Button>
      
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Personal;