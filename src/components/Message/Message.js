// @Author Prashant

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
import CreateMessage from "./CreateMessage";
import Compose from "./Compose";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreatemessage: false,
      showCompose: false
    };
  }

  handleShowCreatemessage = prevState => {
    console.log(prevState);

    this.setState({ showCreatemessage: !prevState });
  };

  handleshowCompose = prevState => {
    this.setState({ showCompose: !prevState });
  };

  render() {
    let { showCreatemessage } = this.state;
    let { showCompose } = this.state;

    return (
      <div className="container"style={{fontFamily:" Times"}}>
        <Card className="mt-4 mb-3">
          <div className="row mt-3">
            <div className=" col-xl-10 col-lg-10 col-md-9 col-sm-8 col-8">
              <h6 className="ml-4  text-success">
                <i class="far fa-envelope"style={{fontSize:"20px"}} /> &nbsp; &nbsp; &nbsp;Message
              </h6>
            </div>
            <div className=" col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 ">
              <i class=" text-dark far fa-star" />
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
              <i class=" text-dark fas fa-ellipsis-v" />
            </div>
          </div>

          <div className="row pt-3">
            <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-8 col-8 ">
              <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-6">
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
            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
              <Button
                outline
                theme="success"
                onClick={() => this.handleshowCompose(showCompose)}
              >
                <i class="fas fa-plus" />
                &nbsp; compose
              </Button>
            </div>
          </div>

          {showCompose && <Compose />}
          <div className="text-center">
            <table className="table mt-3 mb-3">
              <tr className="bg-light"style={{fontFamily:" Geneva",fontSize:"12px"}}>
                <th>
                
                    From
                
                </th>
                <th>
                  
                    Message
                  
                </th>
                <th>
                
                    Date
              
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
              <i class="fas fa-plus" />
              &nbsp; &nbsp; Create Message
            </Button>
          </div>
        </Card>
        {showCreatemessage && (
          <CreateMessage
            handleShowCreatemessage={this.handleShowCreatemessage}
            showCreatemessage={this.state.showCreatemessage}
          />
        )}
      </div>
    );
  }
}

export default Message;
