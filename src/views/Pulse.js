// // @ Author Manohar
// import React from "react";
// import { Card, CardHeader, Container, FormInput } from "shards-react";

// class Pulse extends React.Component {
//   render() {
//     return (
//       <Container fluid className="main-content-container px-4 py-4">
//         <Card>
//           <CardHeader className="mb-4">
//           <div className="row">
//           <div className="col-6 "  >
//           <FormInput style={{padding:"12px 20px",width:"100%",border:"none",padding:"12px 20px",margin:"8px 0",boxsizing:"border-box", borderBottom: "2px solid light"}} placeholder="Name *"/><br></br>
//           <FormInput style={{padding:"12px 20px",borderBottom: "2px solid red"}} placeholder="Name *"/>
//           <FormInput style={{padding:"12px 20px",borderBottom: "2px solid red"}}  placeholder="Name *"/>    
//           </div>
//           </div>
//           </CardHeader>
//         </Card>
//       </Container>
//     )
//   }
// }
// export default Pulse;













// @ Author Manohar
import React from "react";
import pic from "./pic/m.jpg";
import { Card, CardHeader, Container, FormInput } from "shards-react";

class Pulse extends React.Component {
  render() {
    return (
      <Container fluid className="main-content-container px-4 py-4">
        <Card>
          <CardHeader className="mb-4">
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
            </div>

            <div className="row ">
              <div className="col-lg-5 border border-dark" style={{ background: "", height: "400px" }}>
                <div className="pic">
                  <img src={pic} style={{ width: "50%", height: "100px" }} />
                </div>

              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5 border border-dark" style={{ background: "", height: "400px" }}>
                <div className="pic">
                  <img src={pic} style={{ width: "50%", height: "100px" }} />
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </Container>
    )
  }
}
export default Pulse;