// @ Author Manohar
import React from "react";
import {Card,CardHeader,Modal,Container,Collapse,FormInput,InputGroup,InputGroupAddon,InputGroupText,Button} from "shards-react";
import CreateMessage from "./CreateMessage";


class Message extends React.Component{
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = { 
      collapse: false,
     };
    this.state = {
      showCreateMessageModal: false,
    }
  };
  toggle() {
    this.setState({ collapse: !this.state.collapse});
  }
  handleshowFavorite = (prevState) =>{
    this.setState({showFavorite: !prevState});
    }
    handleshowStar = (prevState) =>{
      this.setState({showStar: !prevState});
      }
  handleShowCreateMessage= () =>{
    this.setState({showCreateMessageModal: !this.state.showCreateMessageModal});
  }
  handleHideCreateMessage = ()=>{
    this.setState({showCreateMessageModal: !this.state.showCreateMessageModal});
  }
  render(){
    const { showCreateMessageModal } = this.state;
    let {showFavorite} = this.state;
    let{showStar}=this.state;
   
    return(
           <Container fluid className="main-content-container px-4 py-4">
            <Card small className="">
            <CardHeader className="mb-4">
            <div className="row">
           <div className="col-lg-10 text-success" >
              <i className="fas fa-envelope mr-3" style={{cursor:"pointer" }}></i><a className="text-success">Message</a>
           </div>
         {/* <div className="col-lg-1">
         <i className="far fa-star mt-2 ml-5" title="Show my favorite message"></i>
         </div> */}
         <div className="col-lg-1" >
         <Card  style={{height:"0px" }} onClick={this.toggle}>
         <div className=" ml-4 pr-3"><i className="far fa-star" title="Show my favorite message" style={{cursor:"pointer" }} ></i>
          </div>
       
           <div className="col-12 d-flex justify-content-center">
            <Collapse open={this.state.collapse} className="mr-5">
            <CardHeader style={{ background: "hsl(0, 50%, 95%)",width:"300px" }}>
            <a id="assign-btn-cancle" className="hover icon-md fa fa-chevron-left" title="cancle" > &nbsp;&nbsp;Favorite Message</a>
            </CardHeader>
              <Card className="mt-0" style={{ height: "350px",width:"300px" }}>
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
		              There are no favorite message set, add your favorite message here
	              </div>
              </Card>
            </Collapse>
           </div>
          
         </Card>
         </div>
        

         <div className="col-lg-1" >
         <Card  style={{height:"0px"}}>
         <div className=" ml-4 pr-3"><i class="fas fa-ellipsis-v" title="Show more options" style={{cursor:"pointer" }} onClick={()=> this.handleshowFavorite(showFavorite)}></i>
          </div>
         { showFavorite &&
            <div style={{"zIndex":999}}>
            <div className="row">
          <table className=" table table-bordered table-hover table-light table-sm ">
          <tbody>
            <tr>
              <td><i className="far fa-star">&nbsp;&nbsp;Favorite</i></td>
            </tr>
            <tr>
            <td><i className="fa fa-question-circle">&nbsp;&nbsp;Help</i></td>
            </tr>
          </tbody>
         </table>
             </div> 
             </div>
           }
         </Card>
         </div>
         
         
         
         
        </div><br></br>
            <div className="row">
            <div className="col-lg-12   d-flex justify-content-between">
            <select id="messageId" className="form-control w-25" name="msgType" onchange="message_list.setType()">
                  <option value="I">INBOX</option>
                  <option value="S">SENT MESSAGE</option>
            </select> 
          <div>
          {/* <a className="btn btn-outline-success" onClick={() => {this.handleShowCreateMessage()}}><span className="fa fa-plus"></span>
                        <span className="text-black">&nbsp;&nbsp;<a title="Compose New Message">Compose</a></span></a>  */}
<span><a onClick={() => {this.handleShowCreateMessage()}}><Button className="pl-4 pr-4" outline theme="success">
      <i class="fas fa-plus"></i> &nbsp;
        Compose
      </Button></a></span>
                        <Modal size="lg" open={showCreateMessageModal} toggle={this.handleShowCreateMessage}>
                           <CreateMessage handleHideCreateMessage={this.handleHideCreateMessage}/>                        
                        </Modal>
          </div>
            </div>
            </div>
            <table className="table mt-2">
            <thead className="thead-light">
            <tr>
                <th scope="col">From</th>
               <th scope="col">Message</th>
               <th scope="col">Date</th>
           </tr>
           </thead>
           </table>
           <card small className="mb-4" >
           <CardHeader className="border-bottom" style={{background:"#f0f0f0"}}><h6>Not Found</h6>
                    <div> 
                        {/* <a className="btn btn-outline-success" onClick={() => {this.handleShowCreateMessage()}}><span className="fa fa-plus"></span>
                        <span className="text-black">&nbsp;&nbsp;<a title="Create New Message">Create Message</a></span></a>  */}
                        <span><a onClick={() => {this.handleShowCreateMessage()}}><Button outline theme="success">
      <i class="fas fa-plus"></i> &nbsp;
        Create Message
      </Button></a></span>
                        <Modal size="lg" open={showCreateMessageModal} toggle={this.handleShowCreateMessage}>
                           <CreateMessage handleHideCreateMessage={this.handleHideCreateMessage} />                        
                        </Modal>
                        </div>
           </CardHeader>
           </card>
          </CardHeader>
        </Card>
        </Container>
    )
    }
}
export default Message;