import React from "react";
   
       import { Row, Button, Card, CardBody, Form, FormInput, FormGroup,FormSelect } from "shards-react";

class NewhealthRecord extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showAddress: false,
      showPersonal:false,
      showAlternatecontact:false,
       showCreatemember:false,
       showProfile:false,
    }
    
  };

  handleShowAddress = (prevState) =>{
    this.setState({showAddress: !prevState});
  }

    handleshowPersonal = (prevState) =>{
     this.setState({showPersonal: !prevState});
   }

     handleshowAlternatecontact = (prevState) =>{
     this.setState({showAlternatecontact: !prevState});
   }

   handleShowCreatemember = (prevState) =>{
     this.setState({showCreatemember: !prevState});
  }

  handleShowProfile = (prevState) =>{
     this.setState({showProfile: !prevState});
   }

  render(){
    let { showAddress } = this.state;
    let {showAlternatecontact} = this.state;
    let {showPersonal} = this.state;
    let {showCreatemember} = this.state;
    let {showProfile}= this.state; 
    
    return(
      <div className="container">
       <Card className="mt-4  mb-1"style={{height:"200px"}}>
      <CardBody>
        <div className="row">
        <div className="col-lg-3 text-success">
  
         HEALTH RECORD
        </div>
        <div className="col-lg-3">
        <i class="fas fa-print"></i> &nbsp; &nbsp;<i class="fas fa-ellipsis-v"></i>
        </div>
        <div className="col-lg-3"></div>
        <div className="col-lg-3"></div>
       
       
       
       </div>
      
      </CardBody>
      </Card>
     
     <div className="row">
     <div className="col-lg-4 mt-1" >
       <Card style={{height:"120px"}}>
       <div className="row mt-2 ml-2">
       <div className="col-lg-6 ">
       <h6 className="text-success">VITAL</h6>
     <div className="mt-4"><select class="form-control" id="sel1" name="sellist1"style={{height:"33px",width:"130px"}} >
     <option value="">Add</option>
     <option value="1">Option 1</option>
     <option value="2">Option 2</option>
     <option value="3">Option 3</option>
     <option value="4">Option 4</option>
      </select>
      </div>
      
       <div >
         
       </div>
       </div>
       
       <div className="col-lg-6"><i class="fas fa-chart-line ml-5"></i> <i class="fas fa-ellipsis-v ml-5"></i>
              <div className="mt-4">
              <Button outline theme="success" style={{height:"33px",width:"130px"}}>
                <i class="fas fa-plus" /> &nbsp;Add Multiple
              </Button></div></div>
      
       </div>
       
       </Card>
       <Card className="mt-2 mb-2" style={{height:"60px"}}>
          <div className="row mt-2 ml-2 ">
          <div className="col-lg-8"><h6 className="text-success">VISIT REASONS</h6></div> 
          <div className="col-lg-4"><i class="fas fa-plus mr-5"></i>
          <i class="fas fa-ellipsis-v"></i></div>
          </div>
          </Card>

       </div>
       

       <div className="col-lg-4">
       <div className="mt-1">
       <Card style={{height:"60px"}}>
      <div className="row mt-2 ml-2">
      <div className="col-lg-8"><h6 className="text-success">PROBLEMBS</h6></div> 
      <div className="col-lg-4"><i class="fas fa-plus mr-5"></i>
      <i class="fas fa-ellipsis-v"></i></div></div>
       </Card>
       </div>

       <div className="mt-2 mb-2">
       <Card style={{height:"60px"}}>
      <div className="row mt-2 ml-2 ">
      <div className="col-lg-8"><h6 className="text-success">SYMPTOM</h6></div> 
      <div className="col-lg-4"><i class="fas fa-plus mr-5"></i>
      <i class="fas fa-ellipsis-v"></i></div></div>
       </Card>
       </div>
       </div>

       <div className="col-lg-4 ">
          <Card style={{height:"60px"}}>
          <div className="row mt-2 ml-2 ">
          <div className="col-lg-8"><h6 className="text-success">TEST ORDER</h6></div> 
          <div className="col-lg-4"><i class="fas fa-plus mr-5"></i>
          <i class="fas fa-ellipsis-v"></i></div>
          </div>
          </Card>
         
          <Card className="mt-2" style={{height:"60px"}}>
          <div className="row mt-2 ml-2 ">
          <div className="col-lg-8"><h6 className="text-success">MEDICIANS</h6></div> 
          <div className="col-lg-4"><i class="fas fa-plus mr-5"></i>
          <i class="fas fa-ellipsis-v"></i></div>
          </div>
          </Card>

          <Card className="mt-2" style={{height:"60px"}}>
          <div className="row mt-2 ml-2 ">
          <div className="col-lg-8"><h6 className="text-success">NOTE</h6></div> 
          <div className="col-lg-4"><i class="fas fa-plus mr-5"></i>
          <i class="fas fa-ellipsis-v"></i></div>
          </div>
          </Card>

          <Card className="mt-2 mb-2" style={{height:"60px"}}>
          <div className="row mt-2 ml-2 ">
          <div className="col-lg-8"><h6 className="text-success">ATTACH FILE</h6></div> 
          <div className="col-lg-4"><i class="fas fa-plus mr-5"></i>
          <i class="fas fa-ellipsis-v"></i></div>
          </div>
          </Card>


       </div>
       
       
      </div> 


     </div> 
    )
    }
}

export default NewhealthRecord;
