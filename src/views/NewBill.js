// @ Author Manohar
import React from "react";
import { Container, Card, FormInput, Popover,CardHeader, CardBody, Modal, Collapse, InputGroup, InputGroupText, InputGroupAddon,Button } from "shards-react";

import Item from "./Item";
class NewBill extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);

    this.toggle3 = this.toggle3.bind(this);
    this.state = {
      open: false
    };

    this.state = { 
      collapse: false,
     };
     this.state = { 
      collapse1: false,
     };
     this.state = { 
      collapse2: false,
     };

    this.state={
      showItemModal: false,
    } 
  };
  toggle3() {
    this.setState({
      open: !this.state.open
    });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse ,collapse1:false,collapse2:false});
  }

  toggle1() {
    this.setState({ collapse1: !this.state.collapse1,collapse:false,collapse2:false});
  }
  toggle2() {
    this.setState({ collapse2: !this.state.collapse2,collapse:false,collapse1:false });
  }

  handleShowItem = () => {
    this.setState({ showItemModal: !this.state.showItemModal });
  }
  handleHideItem = () => {
    this.setState({ showItemModal: !this.state.showItemModal });
  }
  render() {
    const { showItemModal } = this.state;
    
    return (
      <Container fluid className="main-content-container px-4 py-4">
        <div className="row">
          <div className="col-8">
            <Card style={{ height: "600px" }}>
              <CardBody>
                <div className="row">
                  <div className="col-8"><h6 className="text-success"> INVOICE #:</h6>
                  </div>
                  <div className="col-lg-1">
                    <span id="save-btn" className="far fa-star ml-3" style={{cursor:"pointer" }} onClick={this.toggle} data-toggle="tooltip" title="Show my favrotie item/Service list for location"></span>
                      <Collapse open={this.state.collapse}></Collapse>
                  </div>
                  <div className="col-lg-1">
                    <span id="save-btn" className="far fa-hospital ml-3" style={{cursor:"pointer" }} onClick={this.toggle1} data-toggle="tooltip" title="Show item/Service list for location"></span>
                      <Collapse open={this.state.collapse1}></Collapse>
                  </div>
                  <div className="col-lg-1">
                    <span id="save-btn" className="fa fa-print ml-3" style={{cursor:"pointer" }} data-toggle="tooltip" title="Print Invoice"></span>
                  </div>
                  <div className="col-lg-1">
         <div className=" ml-3 pr-3"><i class="fas fa-ellipsis-v" title="Show list" style={{cursor:"pointer" }} id="popover-2" onClick={this.toggle3}></i>
          </div>
          <Popover
          placement="bottom"
          open={this.state.open}
          toggle3={this.toggle3}
          target="#popover-2"
          style={{width:"150px"}}>
          <table className="table table-bordered table-hover mb-0">
          <tbody>
    <tr>
      <td><i className="fa fa-trash">&nbsp;&nbsp;&nbsp;&nbsp;Delete</i></td>
    </tr>
    <tr>
      <td><i className="fa fa-print">&nbsp;&nbsp;&nbsp;&nbsp;Print</i></td>
    </tr>
    <tr>
      <td><i className="fa fa-question-circle">&nbsp;&nbsp;&nbsp;&nbsp;Help</i></td>
    </tr>
  </tbody>
         </table>
        </Popover>      
           </div>
                  
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Patient by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message">
                    </FormInput>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="User by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message" />
                  </div>
                </div>
                <h6 className="mt-3"><small>Add item purchased or service received by patient, and end with payment</small></h6>
                <div className="row text-black" style={{ height: "35px", background: "#f0f0f0"}}>
                  <div className="col-4 border"><small><b>Item/Service</b></small></div>
                  <div className="col-3 border text-right"><small><b>Price</b></small></div>
                  <div className="col-2 border text-right"><small><b>Qty</b></small></div>
                  <div className="col-3 border text-right"><small><b>Amount</b></small></div>
                </div>
          
                <div className="col-xs-6 text-right mt-2">
                    <span><a onClick={() => {this.handleShowItem()}}><Button outline theme="success">
      <i class="fas fa-plus"></i> &nbsp;
        Add Item/Service
      </Button></a></span>
                  <Modal size="lg" open={showItemModal} toggle={this.handleShowItem}>
                    <Item handleHideItem={this.handleHideItem} />
                  </Modal>
                </div>
              </CardBody >
            </Card>
          </div>
          <div className="col-4">
            <CardHeader style={{ background: "hsl(0, 50%, 95%)",cursor:"pointer" }} onClick={this.toggle}>
              <a id="assign-icon" class="hover icon-md fas fa-star" > &nbsp;&nbsp; Favorite Item/Service</a>
            </CardHeader>
            <Collapse open={this.state.collapse}>
              <Card className="mt-0" style={{ height: "400px" }}>
                <InputGroup size="md" seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <i class="fas fa-search"></i> 
                </InputGroupText>
                  </InputGroupAddon>
                  <FormInput className="border-3 " placeholder="All" />
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
            

            <CardHeader className="mt-3" style={{ background: "hsl(0, 50%, 95%)",cursor:"pointer" }}>
              <a id="assign-icon" className="hover icon-md fa fa-hospital " onClick={this.toggle1}> &nbsp;&nbsp;Item/Service Code</a>
            </CardHeader>
            <Collapse open={this.state.collapse1}>
              <Card className="mt-0" style={{ height: "400px" }}>
                <InputGroup size="md" seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <i class="fas fa-search"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <FormInput className="border-3 " placeholder="All" />
                  <InputGroupAddon type="append">
                    <InputGroupText>
                      <i class="fa fa-plus"></i> 
                </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                <div class="alert bg-info text-white font-weight-normal mt-3">
		              <small>There are no Item/Service code set, add your Item/Service code here and use them quickly</small>
	              </div>
              </Card>
            </Collapse>

            <CardHeader className="mt-3" style={{ background: "hsl(0, 50%, 95%)",cursor:"pointer" }}>
              <a id="assign-icon" class="hover icon-md fa fa-percent " onClick={this.toggle2}> &nbsp;&nbsp;Service Charges/ Tax</a>
            </CardHeader>
            <Collapse open={this.state.collapse2}>
              <Card className="mt-0" style={{ height: "400px" }}>
                <InputGroup size="md" seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <i class="fas fa-search"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <FormInput className="border-3 " placeholder="All" />
                  <InputGroupAddon type="append">
                    <InputGroupText>
                      <i class="fas fa-plus"></i> 
                </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                <div class="alert bg-info text-white font-weight-normal mt-3">
		             <small>Add your Service Charges/Tax code here and use them quickly</small>
	              </div>
              </Card>
            </Collapse>
            
          </div>
        </div>
      </Container>
    )
  }
}
export default NewBill;