import React from "react";
import {Card,CardHeader,Modal } from "shards-react";
import CreateMessage from "./CreateMessage";

class Message extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    showCreateMessageModal: false,
    showFavorite:false,
    }
       
  };
  handleshowFavorite = (prevState) =>{
    this.setState({showFavorite: !prevState});
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
   
    return(
      <div className="container mt-4">
            <Card small className="mb-4">
            <CardHeader className="border-bottom">
            <div className="row">
           <div className="col-lg-10 text-success">
              <i className="fas fa-envelope mr-3"></i><a className="text-primary">Message</a>
           </div>
         <div className="col-lg-1">
         <i className="far fa-star mt-2 ml-5" title="Show my favorite message"></i>
         </div>

         <div className="col-lg-1" >
         <Card  style={{height:"0px"}}>
         <div className=" ml-4 pr-3"><i class="fas fa-ellipsis-v" onClick={()=> this.handleshowFavorite(showFavorite)}></i>
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
          <a className="btn btn-outline-success" onClick={() => {this.handleShowCreateMessage()}}><span className="fa fa-plus"></span>
                        <span className="text-black">&nbsp;&nbsp;<a title="Compose New Message">Compose</a></span></a> 
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
                        <a className="btn btn-outline-success" onClick={() => {this.handleShowCreateMessage()}}><span className="fa fa-plus"></span>
                        <span className="text-black">&nbsp;&nbsp;<a title="Create New Message">Create Message</a></span></a> 
                        <Modal size="lg" open={showCreateMessageModal} toggle={this.handleShowCreateMessage}>
                           <CreateMessage handleHideCreateMessage={this.handleHideCreateMessage} />                        
                        </Modal>
                        </div>
           </CardHeader>
           </card>
          </CardHeader>
        </Card>
    </div>
    )
    }
}
export default Message;