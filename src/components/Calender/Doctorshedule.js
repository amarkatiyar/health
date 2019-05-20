import React from "react";
import {
  Row,
  Button,
  Card,
  Form,
  FormGroup,
} from "shards-react";

class Doctorshedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      
        <div  style={{position:" absolute",left:"1px"}}>
          <Card className="mb-2" style={{ width: "410px", height: "470px"}}>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
              <Row className="mt-3">
                <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                  <h6>
                    <i class="fas fa-arrow-left mr-3 text-dark" />
                    Doctorshedule
                  </h6>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                  <i class="far fa-trash-alt text-dark" />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fas fa-check text-dark" />
                </div>
              </Row>
              <Form>
                <FormGroup>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
                    <input
                      type="checkbox"
                      name="vehicle"
                      value="Car"
                      checked="checked"
                    />{" "}
                    Working Day
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
                    <input
                      type="checkbox"
                      name="vehicle"
                      value="Car"
                      checked="checked"
                    />
                    Online Web Appointment
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-8">
                      <div className="d-flex justify-content-around">
                        <div>Time slot</div>
                        <div>
                          <select class="form-control" id="sel1">
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                            <option>30</option>
                            <option>35</option>
                            <option>40</option>
                            <option>45</option>
                            <option>50</option>
                            <option>55</option>
                            <option>60</option>
                          </select>
                        </div>
                        <div>Mins</div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-5">
                      <div>From Time</div>
                      <div className="d-flex justify-content-start">
                        <select class="form-control" id="sel1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>

                        <select class="form-control" id="sel1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>
                        <span className="p-2">AM</span>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div>Thru Time</div>
                      <div className="d-flex justify-content-start">
                        <select class="form-control" id="sel1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>

                        <select class="form-control" id="sel1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>
                        <span className="p-2">AM</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-5">
                      <div className="d-flex justify-content-start">
                        <select class="form-control" id="sel1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>

                        <select class="form-control" id="sel1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>
                        <span className="p-2">PM</span>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="d-flex justify-content-start">
                        <select class="form-control" id="sel1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>

                        <select class="form-control" id="sel1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                        </select>
                        <span className="p-2">PM</span>
                      </div>
                    </div>
                    <div className="col-md-2 ">
                      <i class="far fa-trash-alt" />
                    </div>
                  </div>

                  <Button outline theme="success" style={{height:"25px"}}>
                    <i class="fas fa-plus pb-1" /> Add Time
                  </Button>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
                    <input type="checkbox" name="vehicle1" checked="checked" />{" "}
                    Set this as default schedule for
                  </div>
                  <div className="d-flex justify-content start">
                    <div>
                      <div class="form-check" />
                    </div>
                    &nbsp;
                    <div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            value=""
                          />
                          mon
                        </label>
                      </div>
                    </div>
                    &nbsp;
                    <div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            value=""
                          />
                          Tue
                        </label>
                      </div>
                    </div>
                    &nbsp;
                    <div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            value=""
                          />
                          wed
                        </label>
                      </div>
                    </div>
                    &nbsp;
                    <div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            value=""
                          />
                          Thru
                        </label>
                      </div>
                    </div>
                    &nbsp;
                    <div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            value=""
                          />
                          fri
                        </label>
                      </div>
                    </div>
                    &nbsp;
                    <div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            value=""
                          />
                          sat
                        </label>
                      </div>
                    </div>
                    &nbsp;
                    <div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            value=""
                          />
                          sun
                        </label>
                      </div>
                    </div>
                    &nbsp;
                  </div>
                </FormGroup>
                <Button className="mr-2 mt-2" outline theme="success">
                  {" "}
                  &nbsp; Save{" "}
                </Button>
              </Form>
            </div>
          </Card>
        </div>
    
    );
  }
}

export default Doctorshedule;
