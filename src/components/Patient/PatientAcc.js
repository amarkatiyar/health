import React from "react";
import { Row, Button, Card, CardBody, Form, FormInput, FormGroup,FormSelect } from "shards-react";

class PatientAcc extends React.Component{

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
      <Row className="mt-4">
        {/* ************this first column******** */}
        <div className="col-lg-10 col-md-10 col-sm-10 col-9">
          <p>Patient Account</p>
          <div className="mb-4">
            {" "}
            <a href="#">
              <Button className="mr-2" outline theme="success">
              <i class="fas fa-list-ul"></i> &nbsp; Health Record
              </Button>
            </a>
            <a href="#">
              <Button outline theme="success">
                <i class="fas fa-plus" /> &nbsp; New Health Record
              </Button>
            </a>
          </div>
        </div>
        {/* ***********************second column************* */}
        <div className="col-lg-2  col-md-2 col-sm-2 col-3"><a href="#"><i class="fas fa-print"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#"><i class="fas fa-ellipsis-v"></i></a></div>
      </Row>

      <div className="row">
        <div className="col-lg-6">
          <Card className="mb-3" style={{ height: "240px" }}>
            <CardBody>
              profile photo
            </CardBody>
          </Card>

          <Card className="mb-3" style={{ height: "240px" }}>
            <CardBody>
              <h6 className="text-success">
                Personal &nbsp;{" "}
                
                  <i class="far fa-edit" onClick={()=> this.handleshowPersonal(showPersonal)}  />
    
              </h6>
            </CardBody>
            { showPersonal &&
              <div style={{"zIndex":999}}>
               <div className="container">
    <Card className="mb-2">
     <CardBody>
       <Row className="mt-0">
         <div className="col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="fas fa-arrow-left mr-3 text-dark"onClick={()=> this.handleshowPersonal(showPersonal)}></i>Personal</h6></div>
         <div className="col-lg-2 col-md-2 col-sm-2 col-2"><i class="fas fa-check text-dark"></i></div>
       
       </Row>
       <Form>
     
      <FormGroup>
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
      <label htmlFor="#Country">Gender</label> 
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
       <FormSelect>
      <option value="first">Male</option>
      <option value="second">Female</option>
      <option value="third">
        Other
      </option>
      </FormSelect>
      </div>
      </div>
      </FormGroup>

      <FormGroup>
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4 ">
        <label htmlFor="Date of Birth">Date of Birth</label>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
        <FormInput type="text" id="#date of birth" placeholder="10/07/96" />
        </div>
        </div>
      </FormGroup>


      <FormGroup>
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
      <label htmlFor="#state/province">Blood Group</label> 
      </div>
      <div className="col-lg-8 col-md-8 col-sm-8 col-8">
       <FormSelect>
       <option value="first">--select Blood Group--</option>
      <option value="first">O postive</option>
      <option value="second">O neagtive</option>
      <option value="first">A postive</option>
      <option value="second">A neagtive</option>
      <option value="first">B postive</option>
      <option value="second">B neagtive</option>
      </FormSelect>
      </div>
      </div>
      </FormGroup>
    
      <FormGroup>
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
      <label htmlFor="#state/province">Marital Status</label>
      </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
       <FormSelect>
       <option value="first">--select Marital Status--</option>
      <option value="first">Single</option>
      <option value="second">married</option>
      <option value="first">Divorce</option>
      <option value="second">Widowed</option>
      
      </FormSelect>
      </div>
      </div>
      </FormGroup>

     
        <a href="#"><Button  className="mr-2" outline theme="success"> &nbsp; Save </Button></a>
    
    

    </Form>
     </CardBody>
   </Card>
   </div>
             </div>
            }
            
          </Card>

          <Card className="mb-3" style={{ height: "240px" }}>
            <CardBody>
              <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                  {" "}
                  <h6 className="text-success">ALTERNATE CONTACT</h6>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
          
                    <i class="fas fa-plus"onClick={()=> this.handleshowAlternatecontact(showAlternatecontact)} />
        
                </div>
              </div>
            </CardBody>
            { showAlternatecontact &&
              <div style={{"zIndex":999}}>
              <div className="container">
              <Card>
               <CardBody>
                 <Row className="mt-0">
                   <div className="col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="fas fa-arrow-left text-dark mr-3"onClick={()=> this.handleshowAlternatecontact(showAlternatecontact)}></i>Alternatecontact</h6></div>
                   <div className="col-lg-2 col-md-2 col-sm-2 col-2"><i class="fas fa-check text-dark"></i></div>
                 
                 </Row>
                 <Form>
                <FormGroup>
                  <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <label htmlFor="#Full Name">Full Name</label>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                  <FormInput id="#fullname" placeholder="enter the full name"/>
                  </div>
                  </div>
                </FormGroup>

                <FormGroup>
                <div className="row">
                <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                  <label htmlFor="#contactnumber">Contact Number</label>
                </div>
                <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                  <FormInput type="number" id="#contactnumber" placeholder="enter the number" />
                </div>
                </div>
                </FormGroup> 

                <FormGroup>
                <div className="row">
                <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                <label htmlFor="#Country">Country</label> 
                </div>

                <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                 <FormSelect>
                
                <option value="first">India</option>
                <option value="second">Pakistan</option>
                <option value="third">England</option>
              
    
                </FormSelect>
                </div>
                </div>
                </FormGroup>
          
                
                  <a href="#"><Button  className="mr-2" outline theme="success"> &nbsp; Save </Button></a>
              
              
          
              </Form>
               </CardBody>
             </Card>
             </div>
             </div>
            }
          </Card>

          <Card className="mb-3" style={{ height: "240px" }}>
            <CardBody>
              <h6 className="text-success">UPCOMING APPOINTMENTS</h6>
            </CardBody>
          </Card>
          
        </div>
{/* *******************************************this edit profile************************************** */}
        <div className="col-lg-6">
          <Card className="mb-3" style={{ height: "240px" }}>
            <CardBody>
              
<div className="text-success"><i class="far fa-edit" onClick={()=> this.handleShowProfile(showProfile)}/> profile</div>
            
            </CardBody>
            { showProfile &&
              <div style={{"zIndex":999}}>
                  <div className="container">
    <Card className="mb-2">
     <CardBody>
       <Row className="mt-0">
         <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="fas fa-arrow-left text-dark mr-3"onClick={()=> this.handleShowProfile(showProfile)}></i>Name</h6></div>
         <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"><i class="fas fa-check text-dark"></i></div>
       
       </Row>
       <Form>

      <FormGroup>
        <div className="row">
        <div className=" col-xl-4 col-lg-4  col-md-4 col-sm-4 col-4">
        <label htmlFor="#emailid">Email id</label>
        </div>
        <div className=" col-xl-8 col-lg-8  col-md-8 col-sm-8 col-8">
        <FormInput type="email" id="#Email" placeholder="email id" />
       </div>
       </div>
      </FormGroup>

      <FormGroup>
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
        <label htmlFor="#Firstname">Firstname</label>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
        <FormInput type="text" id="#Firstname" placeholder="firstname" />
         </div>
         </div>
      </FormGroup>

      <FormGroup>
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
        <label htmlFor="#Lastname">Lastname</label>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
        <FormInput type="text" id="#Lastname" placeholder="Lastname" />
         </div>
         </div>
      </FormGroup>

      <FormGroup>
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
        <label htmlFor="#number">Mobile Number</label>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
        <FormInput type="number" id="#number" placeholder="mobile number" />
        </div>
        </div>
       </FormGroup>

      <FormGroup>
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
        <label htmlFor="#id"> id</label>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
        <FormInput type="text" id="#ids" placeholder=" National,License or Passport" />
        </div>
        </div>
      </FormGroup>
 
      <FormGroup>
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
        <label for="exampleFormControlTextarea1">CARE TEAM MEMBER</label>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
        <textarea class="form-control bg-light" id="exampleFormControlTextarea1" rows="3" placeholder="user by name id emailid"></textarea> 
        </div>
        </div>
      </FormGroup>


     
        <a href="#"><Button  className="mr-2 text-weight-bold" outline theme="success"> &nbsp; Save </Button></a>
  
    

    </Form>
     </CardBody>
   </Card>
   </div>

             </div>
            }
          </Card>

          <Card className="mb-3" style={{ height: "240px" }}>
            <CardBody>
              <h6 className="text-success">CONTACT</h6>
          
                <Button size="sm" className="mr-2 p-1" outline theme="success"
                onClick={()=> this.handleShowAddress(showAddress)}
                >
                  <i class="fas fa-plus" /> &nbsp; Add
                </Button>
        
            </CardBody>
            { showAddress &&
              <div style={{"zIndex":999}}>
              <div className="container">
              <Card>
               <CardBody>
                 <Row className="mt-0">
                   <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="fas fa-arrow-left text-dark mr-3"onClick={()=> this.handleShowAddress(showAddress)}></i>Contact</h6></div>
                   <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"><i class=" fas fa-check text-dark"></i></div>
                 
                 </Row>
                 <Form>
                <FormGroup>
                  <div className="row">
                  <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                  <label htmlFor="#Address">Address</label>
                  </div>
                  <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                  <FormInput id="#address" placeholder="enter the address"/>
                  </div>
                  </div>
                </FormGroup>

                <FormGroup>
                <div className="row">
                <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                  <label htmlFor="#City">City</label>
                  </div>
                  <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                  <FormInput type="text" id="#city" placeholder="enter the city" />
                 </div>
                 </div>
                </FormGroup> 

                <FormGroup>
              <div className="row">
                <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                <label htmlFor="#Country">Country</label>
                </div> 
                <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                 <FormSelect>
                <option value="first">India</option>
                <option value="second">Pakistan</option>
                <option value="third">England</option>
                </FormSelect>
                </div>
              </div>
                </FormGroup>
                
          
                <FormGroup>
                <div className="row">
                <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                <label htmlFor="#state/province">State/Province</label> 
                </div>
                <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                 <FormSelect>
                <option value="first">uttar pradesh</option>
                <option value="second">bihar</option>
                <option value="third">Assam</option>
                </FormSelect>
                </div>
                </div>
                </FormGroup>
          
                <FormGroup>
                <div className="row">
                <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                  <label htmlFor="ZIP/Postal Code">ZIP/Postal Code</label>
                </div>
                <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                  <FormInput type="text" id="#ZIP/Postal Code" placeholder="ZIP/Postal Code" />
                  </div>
                  </div>
                </FormGroup>
          
                <FormGroup>
                <div className="row">
                <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                  <label htmlFor="#Number"> phone Number</label>
                </div>
                <div className=" col-xl-8 col-lg-8  col-md-8 col-sm-8 col-8">
                  <FormInput type="number" id="#number" placeholder="number" />
                </div>
                </div>
                </FormGroup>
          
                <FormGroup>
                <div className="row">
                <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                <label for="exampleFormControlTextarea1">Notes</label>
                </div>
                <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="notes"></textarea>
                 </div>
                 </div>
                  </FormGroup>
                  <a href="#"><Button  className="mr-2" outline theme="success"> &nbsp; Save </Button></a>
              
              
          
              </Form>
               </CardBody>
             </Card>
             </div>
             </div>
            }
            

            
          </Card>

          <Card className="mb-3" style={{ height: "240px" }}>
            <CardBody>
              <div className="row">
                <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                  {" "}
                  <h6 className="text-success">CARE TEAM MEMBER</h6>
                </div>
                <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  
                    <i class="fas fa-plus" onClick={()=> this.handleShowCreatemember(showCreatemember)} />
                
                </div>
              </div>
            </CardBody>
            { showCreatemember &&
              <div style={{"zIndex":999}}>
              <div className="container">
               <Card className="mb-3">
                 <CardBody>
                   <Row className="mt-0">
                     <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="fas fa-arrow-left text-dark mr-3"onClick={()=> this.handleShowCreatemember(showCreatemember)} ></i>CARE TEAM MEMBER
                      </h6></div>
                      <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"><i class="fas fa-check text-dark"onClick={()=> this.handleShowCreatemember(showCreatemember)} ></i></div>
       
                   </Row>
                   <Form>
                    <FormGroup>
                        <label for="exampleFormControlTextarea1">CARE TEAM MEMBER</label>
                        <textarea class="form-control bg-light" id="exampleFormControlTextarea1" rows="3" placeholder="user by name id emailid"></textarea>        </FormGroup>
     
                        <a href="#"><Button  className="mr-2" outline theme="success"> &nbsp; Save </Button></a>


                    </Form>
                   </CardBody>
                 </Card>
             </div>
             </div>
            }
          </Card>
        </div>
        <div className="mb-2 ml-3">
            <a href="#">
              <Button className="mr-2" outline theme="success">
                <i class="fas fa-print" /> &nbsp;Print Id Card{" "}
              </Button>
            </a>
            <a href="#">
              <Button className="mr-2" outline theme="success">
                <i class="far fa-trash-alt" /> &nbsp;Delete{" "}
              </Button>
            </a>
            <a href="#">
              <Button className="mr-2" outline theme="success">
                <i class="fas fa-arrow-left" /> &nbsp; Back{" "}
              </Button>
            </a>
          </div>
      </div>
    </div>
    )
    }
}

export default PatientAcc;
