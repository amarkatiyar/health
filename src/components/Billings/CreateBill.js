import React from "react";
import { Row, Button, Card, CardBody, Form, FormInput, FormGroup,FormSelect } from "shards-react";

class CreateBill extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showItem: false,
      showFavorite:false,
      showItemcode:false,
      showcharge:false,
     
    }
    
  };

  handleshowItem = (prevState) =>{
    this.setState({showItem: !prevState});

  }

  handleshowFavorite= (prevState) =>{
    this.setState({showFavorite: !prevState});
    
  }
  
  handleshowItemcode= (prevState) =>{
    this.setState({showItemcode: !prevState});
    
  }

  handleshowcharge= (prevState) =>{
    this.setState({showcharge: !prevState});
    
  }


   

  render(){
    let { showItem} = this.state;
    let { showFavorite} = this.state;
    let { showItemcode} = this.state;
    let { showcharge} = this.state;

   
    return(
      <div className="container-fluid">
      <div className="row mt-3 mb-5">
      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 pb-3">
      <Card>
          <CardBody>
          <div className="d-flex">
           <div className="text-success">INVOICE</div>
           <div className="ml-auto">
           <div><a href="#"> <i class=" text-dark far fa-star"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#"><i class=" text-dark fas fa-print"></i></a>&nbsp;&nbsp;&nbsp;&nbsp; <a href="#"><i class="text-dark fas fa-ellipsis-v"></i></a></div>
           </div>
          </div>
          
          <div className="row pt-4 mb-2">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-md-12 pb-2"><select className="form-control bg-light" id="sel2" name="sellist2">
                <option value="">Search patient by name,email or kpid here</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                </select></div>
          <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"><select className="form-control bg-light" id="sel2" name="sellist2">
                <option value="">Search provider by name,email or kpid here</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                </select></div>
          </div>
         <small> <p>Add item purchased or service received by patient, and end with payment</p></small>
        
      <div className="text-center">
       <table className="table">
       
         <tr className="bg-light">
        
           <th ><small> <b>Item/Service</b></small></th>
           <th ><small><b>Price</b></small></th>
           <th ><small><b>Qty</b></small></th>
           <th ><small><b>Amount</b></small></th> 
           
        </tr>
         <tr>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           </tr>
        
       </table>
       </div>
       
       <Button  outline theme="success"onClick={()=> this.handleshowItem(showItem)}>
        <i className=" fas fa-plus mr-2 "></i> &nbsp; 
        Add Item/Service
      </Button>
    

          </CardBody>

          { showItem &&
              <div style={{"zIndex":999}}>
                  <div className="container">
    <Card className="ml-3 mb-2">
     <CardBody>
       <Row className="mt-0">
         <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class=" text-dark fas fa-arrow-left mr-3"></i>Item/service</h6></div>
         <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"><i class=" text-dark fas fa-check"></i></div>
       
       </Row>
       <Form>

      <FormGroup>
        <div className="row text-center">
        <div className=" col-xl-4 col-lg-4  col-md-4 col-sm-4 col-4">
        <label htmlFor="#Search">Item/Service</label>
        </div>
        <div className=" col-xl-8 col-lg-8  col-md-8 col-sm-8 col-8">
        <FormInput type="text" id="#Search" placeholder="Search or Enter the Item Service" />
       </div>
       </div>
      </FormGroup>

      <FormGroup>
        <div className="row text-center">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
        <label htmlFor="#Price">Price*</label>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
        <FormInput type="text" id="#Price" placeholder="Price" />
         </div>
         </div>
      </FormGroup>

      <FormGroup>
        <div className="row text-center">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
        <label htmlFor="#Quaninty">Quaninty</label>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
        <FormInput type="text" id="#Quaninty" placeholder="Quaninty" />
         </div>
         </div>
      </FormGroup>

      <FormGroup>
        <div className="row text-center">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
        <label htmlFor="#Amount">Amount</label>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
        <FormInput type="text" id="#Amount" placeholder="NAN" />
        </div>
        </div>
       </FormGroup>
       <div className="float-right"> <a href="#"><Button  className="mr-2 text-weight-bold" outline theme="success"> &nbsp; Save </Button></a></div>
    </Form>
     </CardBody>
   </Card>
   </div>

             </div>
            }
      </Card>
      </div>




      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
      <Card className="pt-2 pb-2 mb-2">
          <CardBody className="bg-light">
          <div className="d-flex">
          <i class=" text-dark far fa-star"></i>&nbsp; &nbsp; Favorite Item/Service
          <div className="ml-auto"><i class=" text-dark fas fa-plus"onClick={()=> this.handleshowFavorite(showFavorite)}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class=" text-dark fas fa-ellipsis-v"></i></div>
          </div>
              
          </CardBody>
          { showFavorite &&
              <div style={{"zIndex":999}}>
                  <div className="container">
    <Card className="ml-3 mb-2">
     <CardBody>
       <Row className="mt-0">
         <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class=" text-dark fas fa-arrow-left mr-3"></i>Item/service</h6></div>
         <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"><i class=" text-dark fas fa-check"></i></div>
       
       </Row>
       <Form>

      <FormGroup>
        <div className="row">
        <div className=" col-xl-12 col-lg-12  col-md-12 col-sm-12 col-12">
        <label htmlFor="#Item">Item/Service</label>
        <FormInput type="text" id="#Item" placeholder="Enter item services description" />
       </div>
       </div>
      </FormGroup>

      <FormGroup>
        <div className="row text-center">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
        <label htmlFor="#Price">Price*</label>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
        <FormInput type="text" id="#Price" placeholder="Price" />
         </div>
         </div>
      </FormGroup>
       <div className="float-right"> <a href="#"><Button  className="mr-2 text-weight-bold" outline theme="success"> &nbsp; Save </Button></a></div>
    </Form>
     </CardBody>
   </Card>
   </div>

             </div>
            }
      </Card>




      <Card className="pt-2 pb-2 mb-2">
          <CardBody className="bg-light">
          <div className="d-flex">
          <span className=" fa fa-hospital "></span>&nbsp; &nbsp;Item/Service Code
          <div className="ml-auto"><i class=" text-dark fas fa-plus "onClick={()=> this.handleshowItemcode(showItemcode)}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class=" text-dark fas fa-ellipsis-v"></i></div>
           </div>   
          </CardBody>
          { showItemcode &&
              <div style={{"zIndex":999}}>
                  <div className="container">
    <Card className="ml-3 mb-2">
     <CardBody>
       <Row className="mt-0">
         <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class=" text-dark fas fa-arrow-left mr-3"></i>Item/Service Code</h6></div>
         <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"><i class=" text-dark fas fa-check"></i></div>
       
       </Row>
       <Form>

      <FormGroup>
        <div className="row">
        <div className=" col-xl-12 col-lg-12  col-md-12 col-sm-12 col-12">
        <label htmlFor="#Itemcode">Item/Service Code *</label>
        <FormInput type="text" id="#Itemcode" placeholder="Item/Service Code" />
       </div>
       </div>
      </FormGroup>
      <FormGroup>
        <div className="row">
        <div className=" col-xl-12 col-lg-12  col-md-12 col-sm-12 col-12">
        <label htmlFor="#Itemname">Item/Service Name/Description *</label>
        <FormInput type="text" id="#Itemname" placeholder="Item/Service Name/Description" />
       </div>
       </div>
      </FormGroup>

      <FormGroup>
        <div className="row text-center">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
        <label htmlFor="#Price">Price</label>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
        <FormInput type="text" id="#Price" placeholder="Price" />
         </div>
         </div>
      </FormGroup>
       <div className="float-right"> <a href="#"><Button  className="mr-2 text-weight-bold" outline theme="success"> &nbsp; Save </Button></a></div>
    </Form>
     </CardBody>
   </Card>
   </div>

             </div>
            }

      </Card>

      <Card className=" pt-2 pb-2 mb-2">
          <CardBody className="bg-light">
          <div className="d-flex">
          <span className=" text-dark fa fa-percent" ></span>&nbsp; &nbsp; Service Charges/ Tax
          <div className="ml-auto"><i class="text-dark fas fa-plus"onClick={()=> this.handleshowcharge(showcharge)}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="text-dark fas fa-ellipsis-v"></i></div>  
          </div>
          </CardBody>

          { showcharge &&
              <div style={{"zIndex":999}}>
                  <div className="container">
    <Card className="ml-3 mb-2">
     <CardBody>
       <Row className="mt-0">
         <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="text-dark fas fa-arrow-left mr-3"></i>Service Charges/Tax</h6></div>
         <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"><i class="text-dark fas fa-check"></i></div>
       
       </Row>
       <Form>

      <FormGroup>
        <div className="row">
        <div className=" col-xl-12 col-lg-12  col-md-12 col-sm-12 col-12">
        <label htmlFor="#service">Service Charges/ Tax</label>
        <FormInput type="text" id="#service" placeholder="service charges/Tax" />
       </div>
       </div>
      </FormGroup>
      <FormGroup>
        <div className="row">
        <div className=" col-xl-12 col-lg-12  col-md-12 col-sm-12 col-12">
        <label htmlFor="#Percentage">Percentage %</label>
        <FormInput type="text" id="#percentage" placeholder="percentage" />
       </div>
       </div>
      </FormGroup>

       <div className="float-right"> <a href="#"><Button  className="mr-2 text-weight-bold" outline theme="success"> &nbsp; Save </Button></a></div>
    </Form>
     </CardBody>
   </Card>
   </div>

             </div>
            }



      </Card>
      </div>
      
      </div>
    
    </div>
      
     
      
    
    )
    }
}

export default CreateBill;