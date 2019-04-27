import React from "react";
import { Container, Card, FormInput, CardHeader, CardBody, Modal, Collapse, InputGroup, InputGroupText, InputGroupAddon } from "shards-react";

import Item from "./Item";
class NewBill extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);

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
                    <span id="save-btn" className="far fa-star ml-3" onClick={this.toggle} data-toggle="tooltip" title="Show my favrotie item/Service list for location"></span>
                      <Collapse open={this.state.collapse}></Collapse>
                  </div>
                  <div className="col-lg-1">
                    <span id="save-btn" className="far fa-hospital ml-3" onClick={this.toggle1} data-toggle="tooltip" title="Show item/Service list for location"></span>
                      <Collapse open={this.state.collapse1}></Collapse>
                  </div>
                  <div className="col-lg-1">
                    <span id="save-btn" className="fa fa-print ml-3" data-toggle="tooltip" title="Print Invoice"></span>
                  </div>
                  <div className="col-lg-1">
                    <span id="save-btn" className="fa fa-ellipsis-v ml-3" data-toggle="tooltip" title="Show List"></span>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="Patient by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message">
                    </FormInput>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <FormInput type="text" id="subject" maxlength="255" className="form-control" placeholder="User by name,K*Id,e-email here" data-toggle="tooltip" title="Enter the subject of the message" />
                  </div>
                </div>
                <h6 className="mt-3">Add item purchased or service received by patient, and end with payment</h6>
                <div className="row text-white" style={{ height: "35px", background: "#b4b4b4" }}>
                  <div className="col-4 border">Item/Service</div>
                  <div className="col-3 border text-right">Price</div>
                  <div className="col-2 border text-right">Qty</div>
                  <div className="col-3 border text-right">Amount</div>
                </div>
          
                <div className="col-xs-6 text-right mt-2">
                  <a className="btn btn-outline-success" onClick={() => {this.handleShowItem()}}><span className="fa fa-plus"></span>
                    <span className="text-black">&nbsp;&nbsp;<a title="Compose New Message">Add Item/Service</a></span></a>
                  <Modal size="lg" open={showItemModal} toggle={this.handleShowItem}>
                    <Item handleHideItem={this.handleHideItem} />
                  </Modal>
                </div>
              </CardBody >
            </Card>
          </div>
          <div className="col-4">
            <CardHeader style={{ background: "aqua" }} onClick={this.toggle}>
              <a id="assign-icon" class="hover icon-md fa fa-percent" > &nbsp;&nbsp; Favorite Item/Service</a>
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
                </InputGroup>
              </Card>
            </Collapse>

            <CardHeader className="mt-3" style={{ background: "aqua" }}>
              <a id="assign-icon" className="hover icon-md fa fa-plus" onClick={this.toggle1}> &nbsp;&nbsp;Item/Service Code</a>
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
                </InputGroup>
              </Card>
            </Collapse>

            <CardHeader className="mt-3" style={{ background: "aqua" }}>
              <a id="assign-icon" class="hover icon-md fa fa-percent" onClick={this.toggle2}> &nbsp;&nbsp;Service Charges/ Tax</a>
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
                </InputGroup>
              </Card>
            </Collapse>
          </div>
        </div>
      </Container>
    )
  }
}
export default NewBill;






















