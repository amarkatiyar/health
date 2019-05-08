import React from "react";
import { Card, CardHeader, Modal, Container, Collapse, FormInput, InputGroup, InputGroupAddon, InputGroupText, Button, Popover } from "shards-react";

class CDS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      open: false
    };
  };

  toggle1 = () => {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    return (
      <Container fluid className="main-content-container px-4 py-4">
        <Card small className="">
          <CardHeader className="mb-4">
            <div className="row">
              <div className="col-lg-11 text-success" >
                <i className="fa fa-address-card mr-3" style={{ cursor: "pointer" }}></i><a className="text-success">CLINICAL DECISION SUPPORT</a>
              </div>

              <div className="col-lg-1" >
                <i className="fa fa-print mr-2" style={{ cursor: "pointer" }}></i>&nbsp;
                <i className="fas fa-ellipsis-v ml-4" title="Show more options" style={{ cursor: "pointer" }} id="popover-2" onClick={this.toggle1}></i>
              </div>
                <Popover
                  placement="bottom"
                  open={this.state.open}
                  toggle1={this.toggle1}
                  target="#popover-2"
                  style={{ width: "100px" }}>
                  <table className="table table-bordered table-hover mb-0">
                    <tbody>
                    <tr>
                        <td><i className="far fa-star">&nbsp;&nbsp;Print</i></td>
                      </tr>
                      <tr>
                        <td><i className="far fa-star">&nbsp;&nbsp;Tutorial</i></td>
                      </tr>
                      <tr>
                        <td><i className="far fa-question-circle">&nbsp;&nbsp;Help</i></td>
                      </tr>
                    </tbody>
                  </table>
                </Popover>
              </div>
            <br></br>
            <div className="row">
               <div className="col-12 text-right">
                   <a href="#"><Button  className="mr-2 mt-3 mb-3 " outline theme="success"><i className="fa fa-plus"></i> 
                     &nbsp;New Clinical Decisional Support Rule </Button></a>
               </div>   
            </div>
            <table className="table mt-2">
              <thead className="thead-light text-white">
                <tr>
                    <th scope="col border">Provider</th>
                    <th scope="col border">Description</th>
                    <th scope="col border">Bibliography</th>
                    <th scope="col border">Funding</th>
                    <th scope="col border">Release Date</th>
                    <th scope="col border">Status</th>
                </tr>
              </thead>
            </table>
            <card small className="mb-4">
            <CardHeader className="border-bottom" style={{background:"#f0f0f0"}}><h6>Not Found</h6>
            <div>
               <a href="#"><Button  className="mr-2 mt-3 mb-3" outline theme="success"><i className="fa fa-plus"></i> 
               &nbsp;Add CDS Rule </Button></a>             
 					  </div>
            </CardHeader>
            </card>
          </CardHeader>
        </Card>
      </Container>
    )
  }
}
export default CDS;