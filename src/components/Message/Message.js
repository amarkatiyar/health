// @Author Prashant

import React from "react";
import {
  Button,
  Card,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "shards-react";
import CreateMessage from "./CreateMessage";
import Compose from "./Compose";
import Fav from "./Fav";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      showCreatemessage: false,
      showCompose: false,
      showfav: false,
      open: false
    };
  }
  toggle() {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  }

  handleshowCreatemessage = prevState => {
    this.setState({ showCreatemessage: !prevState });
  };

  // handleHideCreatemessage = prevState => {
  //   this.setState({ showCreatemessage: !prevState });
  // };

  handleshowCompose = prevState => {
    this.setState({ showCompose: !prevState });
  };

  handleshowFav = prevState => {
    this.setState({ showFav: !prevState });
  };

  render() {
    let { showCreatemessage } = this.state;
    let { showCompose } = this.state;
    let { showFav } = this.state;

    return (
      <div className="container" style={{ fontFamily: " Times" }}>
        <Card className="mt-4 mb-4">
          <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="d-flex content-justify-arround pl-3  pt-4 pb-2 ">
              <div>
                <h6 className=" text-success">
                  <i class="far fa-envelope" style={{ fontSize: "20px" }} />
                  &nbsp;&nbsp;&nbsp;&nbsp;Message
                </h6>
              </div>
              <div className="ml-auto">
                <Dropdown
                  open={this.state.open}
                  toggle={this.toggle}
                  className="d-table"
                >
                  {" "}
                  <i
                    class=" text-dark far fa-star"
                    onClick={() => this.handleshowFav(showFav)}
                  />
                  <DropdownToggle className="bg-white border-0">
                    <i
                      class=" text-dark fas fa-ellipsis-v"
                      style={{ fontSize: "15px" }}
                    />{" "}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      {" "}
                      <i class="far fa-star" /> &nbsp; Favorite
                    </DropdownItem>
                    <DropdownItem>
                      <i class="fas fa-question" /> &nbsp; &nbsp;Help
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              {showFav && <Fav />}
            </div>
          </div>
          <div className="col-md-12">
            <div className="d-flex content-justify-arround">
              <div>
                <select
                  class="form-control  "
                  id="sel1"
                  name="sellist1"
                  style={{ width: "250px" }}
                >
                  <option value="">--select--</option>
                  <option value="1">Inbox</option>
                  <option value="2">Send Message</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
              </div>

              <div className="ml-auto">
                {" "}
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
          </div>

          {showCompose && (
          <Compose
          handleshowCompose={this.handleshowCompose}
          showCompose={this.state.showCompose}
         />
        
           ) }

          <div className="text-center">
            <table className="table mt-4 mb-3">
              <tr
                className="bg-light"
                style={{ fontFamily: " Geneva", fontSize: "13px" }}
              >
                <th>From</th>
                <th>Message</th>
                <th>Date</th>
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
              onClick={() => this.handleshowCreatemessage(showCreatemessage)}
            >
              <i class="fas fa-plus" />
              &nbsp; &nbsp; Create Message
            </Button>
          </div>
        </Card>
        {showCreatemessage && (
          <CreateMessage
            handleshowCreatemessage={this.handleshowCreatemessage}
             showCreatemessage={this.state.showCreatemessage}
           />
     ) }
      </div>
    );
  }
}

export default Message;
