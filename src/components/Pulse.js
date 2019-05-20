// @ Author Manohar
import React from "react";
// import pic from "./pic/m.jpg";
import { Card, CardHeader, Container, CardBody, FormInput } from "shards-react";

class Pulse extends React.Component {
  render() {
    return (
      <Container style={{ fontFamily: " Geneva" }}>
        <Card className="mt-4 mb-4 p-4 ">
          <div className="row">
            <div className="col-lg-9 col-lg">
              <div className="text-success">
                {" "}
                <i class="fas fa-user-plus" /> &nbsp; &nbsp; Pluse & Temperature
              </div>
              <div className="mt-4">
                <select className="form-control w-100">
                  <option value="1">Select Patient name</option>
                  <option value="2">option-1</option>
                  <option value="3">option-3</option>
                  <option value="4">option-4</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3">
              <div class=" table-sm">
                <table class="table table-bordered text-center ">
                  <tr>
                    <th>Patient Name</th>
                    <td>prashant</td>
                  </tr>
                  <tr>
                    <th>Patient Id</th>
                    <td>CSM16008</td>
                  </tr>
                  <tr>
                    <th>Pulse</th>
                    <td>555 77 855</td>
                  </tr>
                  <tr>
                    <th>Temperature</th>
                    <td>32 c</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="row p-4">
            <div className="col-lg-6">
              <div className="text-center text-success ">Pulse</div>
              <div
                className="p-2 mt-2 rounded-sm border "
                style={{ height: "400px" }}
              >
                {/* <img src={pic} style={{ width: "50%", height: "100px" }} /> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center text-success">Temperature</div>
              <div
                className="p-2 mt-2 rounded-sm border"
                style={{ height: "400px" }}
              >
                {/* <img src={pic} style={{ width: "50%", height: "100px" }} /> */}
              </div>
            </div>
          </div>
          {/* <div className="p-3">
            <div className="d-flex justify-content-between">
            
              
                <div className="text-success">
                  {" "}
                  <i class="fas fa-user-plus" /> &nbsp; &nbsp; Pluse &
                  Temperature
                </div>
                <div className="mt-4">
                  <select className="form-control w-100">
                    <option value="1">Select Patient name</option>
                    <option value="2">option-1</option>
                    <option value="3">option-3</option>
                    <option value="4">option-4</option>
                  </select>
                </div>
              
              
                <div className="ml-auto">
                  <div class=" table-sm">
                    <table class="table table-bordered text-center ">
                      <tr>
                        <th>Patient Name</th>
                        <td>prashant</td>
                      </tr>
                      <tr>
                        <th>Patient Id</th>
                        <td>CSM16008</td>
                      </tr>
                      <tr>
                        <th>Pulse</th>
                        <td>555 77 855</td>
                      </tr>
                      <tr>
                        <th>Temperature</th>
                        <td>32 c</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              
            </div> */}

          {/* <CardHeader className="mb-4">
            <div className="row">
              <div className="col-lg-8 text-success">
                <i className="fas fa-user-plus mr-3" style={{ cursor: "pointer" }}></i><a className="text-success">Pulse & Temperature</a>
              </div>
              <div className="col-2">
              </div>
              <div className="col-2">
                <FormInput placeholder="Patient Name" />
              </div>
            </div><br></br>
            <div className="row">
              <div className="col-4 d-flex justify-content-between">
                <select className="form-control w-100">
                  <option value="1">Select Patient name</option>
                  <option value="2">option-1</option>
                  <option value="3">option-3</option>
                  <option value="4">option-4</option>
                </select>
              </div>
              <div className="col-2">
                <FormInput placeholder="Pulse" />
              </div>
              <div className="col-2">
                <FormInput placeholder="Temperature" />
              </div>
              <div className="col-2">
              </div>
              <div className="col-2">
                <FormInput placeholder="Patient Id" />
              </div>
            </div><br></br>
            <div className="row text-success">
              <div className="col-lg-5 text-center">Pulse</div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5 text-center" >Temperature</div>
            </div> */}
          {/* 
            <div className="row ">
              <div className="col-lg-5 border border-dark" style={{ background: "", height: "400px" }}>
                <div className="pic"> */}
          {/* <img src={pic} style={{ width: "50%", height: "100px" }} /> */}
          {/* </div>

              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5 border border-dark" style={{ background: "", height: "400px" }}>
                <div className="pic"> */}
          {/* <img src={pic} style={{ width: "50%", height: "100px" }} /> */}
          {/* </div>
              </div>
            </div>
          </CardHeader> */}
        </Card>
      </Container>
    );
  }
}
export default Pulse;
