
import React from "react";
   
       import {  Button, Card,FormInput,Form, CardBody,FormGroup } from "shards-react";

class NewhealthRecord extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showVital: false,
      showVisitReasons:false,
      showProblems:false,
      showSymptom:false,
      showTestorder:false,
      showMedication:false,
      showNote:false,
      showAttachfile:false,
    }
    
  };

  handleShowVital = (prevState) =>{
    this.setState({showVital: !prevState});
  }

    handleShowProblems = (prevState) =>{
      this.setState({showProblems: !prevState});
    }

     handleshowVisitReasons = (prevState) =>{
    this.setState({showVisitReasons: !prevState});
    }

   handleShowSymptom = (prevState) =>{
     this.setState({showSymptom: !prevState});
  }

   handleShowTestorder = (prevState) =>{
      this.setState({showTestorder: !prevState});
    }
    handleShowMedician = (prevState) =>{
      this.setState({showMedication: !prevState});
    }
    handleShowNote = (prevState) =>{
      this.setState({showNote: !prevState});
    }
    handleShowAttachfile = (prevState) =>{
      this.setState({showAttachfile: !prevState});
    }


  render(){
    let { showVital } = this.state;
    let {showProblems} = this.state;
    let {showVisitReasons} = this.state;
    let {showSymptom} = this.state;
    let {showTestorder}= this.state; 
    let {showMedication}= this.state; 
    let {showNote}= this.state; 
    let {showAttachfile}= this.state; 
    

    
    return(
      <div className="container"style={{fontFamily:" Geneva"}}>
       <Card className=" mt-3 p-4" style={{height:"150px"}}>
          <div className="d-flex justify-content-between">
         <div ><span className="text-success pr-5"> &nbsp; HEALTH RECORD</span> <i class=" text-dark fas fa-print pl-5"></i> &nbsp; &nbsp;<i class=" text-dark fas fa-ellipsis-v pl-3"></i></div>
         <div >91+8840091275 &nbsp; prashantkatiyar10796@gmail.com</div>
         <div className=" pr-5">EHT#:<br></br>Date:22/04/2019<br></br>update:
          </div>
         </div>
        
         </Card>
     
     <div className="row mt-2">
     <div className="col-lg-4 " >
     {/* ************************************************  VITAL CARD  ***********************************************  */}
     <Card className="pt-2 mb-2 "style={{height:"100px"}}>
          <div className="d-flex  ">
  
         <div className=""><h6 className="text-success pl-3">VITAL</h6>
          </div>

         <div className=" ml-auto">
         <i class=" text-dark fas fa-chart-line pl-5"></i>
          <i class=" text-dark fas fa-ellipsis-v pl-5 pr-3 "></i><div className="mt-4"> <Button className="p-1" outline theme="success" onClick={()=> this.handleShowVital(showVital)} >
                <i class=" fas fa-plus"  /> &nbsp;Add Multiple
              </Button>
          </div></div>
         </div>
         {/*  on click @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
         { showVital &&
              <div style={{"zIndex":999}}>
             <Card className="mb-3">
                 <CardBody>
                   
                   <div className="d-flex">
                   <div>
                  <i className="fas fa-arrow-left mr-3 text-dark "onClick={()=> this.handleShowVital(showVital)}></i>Vitals
                  </div>
                 <div className="ml-auto"> <i className="fas fa-check text-dark "></i>
                 </div>
                 </div>
                 <Form>
                   <div className="row pt-4">
                   <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <FormGroup>
                        <label for="Weight">Weight</label>
                        <FormInput type="text" id="#Weight" placeholder="Weight" />
                     </FormGroup>
                     </div>

                     <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                     <label for="Weight">kilogram/pounds</label>
                     <select className="form-control " id="sel1" name="sellist1">
                      <option value="">kilogram</option>
                      <option value="1">pounds</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                      <option value="4">Option 4</option>
                      </select>
         
                     </div>
                    </div>

                    <div className="row">
                   <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <FormGroup>
                        <label for="Height">Height</label>
                        <FormInput type="text" id="#Height" placeholder="Height" />
                     </FormGroup>
                     </div>

                     <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                     <label for="cm">cm/fit-in/inches</label>
                     <select className="form-control " id="sel2" name="sellist2">
                      <option value="">cm</option>
                      <option value="1">fit-in</option>
                      <option value="2">inches</option>
                      <option value="3">Option 3</option>
                      <option value="4">Option 4</option>
                      </select>
         
                     </div>
                    </div>

                    <div className="row">
                   <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <FormGroup>
                        <label for="systolic">systolic BP(120-90 mm Hg)</label>
                        <FormInput type="text" id="#systolic" placeholder="systolic BP" />
                     </FormGroup>
                     </div>

                     <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                     <FormGroup>
                        <label for="Diastolic BP">Diastolic BP(80-60 mm Hg)</label>
                        <FormInput type="text" id="#Diastolic" placeholder="Diastolic BP" />
                     </FormGroup>
                     
                     </div>
                    </div>


                    <div className="row">
                   <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <FormGroup>
                        <label for="Temperature">Temperature</label>
                        <FormInput type="text" id="#Temperature" placeholder="Temperature" />
                     </FormGroup>
                     </div>

                     <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                     <label for="degree">Degree</label>
                     <select className="form-control " id="sel3" name="sellist3">
                      <option value="">Deg f</option>
                      <option value="1">deg c</option>
                      <option value="2">inches</option>
                      <option value="3">Option 3</option>
                      <option value="4">Option 4</option>
                      </select>
         
                     </div>
                    </div>

                    <div className="row">
                   <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <FormGroup>
                        <label for="Heartrate/pluse">Heartrate/pluse</label>
                        <FormInput type="text" id="#Heartrate/pluse" placeholder="Heartrate/pluse" />
                     </FormGroup>
                     </div>

                     <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                     <label for="cm">beats/min</label>
                     <select className="form-control " id="sel3" name="sellist3">
                      <option value="">beats/min</option>
                      <option value="1">deg c</option>
                      <option value="2">inches</option>
                      <option value="3">Option 3</option>
                      <option value="4">Option 4</option>
                      </select>
         
                     </div>
                    </div>



                        <a href="#"><Button  className="mr-2" outline theme="success"> &nbsp; Save </Button></a>

            
                </Form>

                  
                   
                   </CardBody>
                 </Card>
             </div>
            }

         </Card>
        {/* ##################################################### VITAL CLOSE ################################################ */}

     {/* ***************************************************** VISIT REASONS   ********************************************  */}

       <Card className="pt-2 mb-2" style={{height:"50px"}}>
          <div className="d-flex  ">
         <div className=" pl-3"><h6 className="text-success"> REASONS</h6></div>
         <div className=" ml-auto pr-3"><i class=" text-dark fas fa-plus pr-5"  onClick={()=> this.handleshowVisitReasons(showVisitReasons)}></i>
          <i className=" text-dark fas fa-ellipsis-v"></i></div>
         </div>
         { showVisitReasons &&
              <div style={{"zIndex":999}}>
              {/* <div className="container"> */}
               <Card >
                 <CardBody>
                   
                   <div className="d-flex">
                   <div>
                  <i className="fas fa-arrow-left mr-3 text-dark "onClick={()=> this.handleshowVisitReasons(showVisitReasons)}></i>Reasons
                  </div>
                 <div className="ml-auto"> <i className=" text-dark fas fa-check"></i>
                 </div>
                 </div>
                 <Form className="mt-2">
                 <FormGroup>
                        
                        <textarea class="form-control bg-light" id="Reasons" rows="3" placeholder="enter patient visit reasons here "></textarea>      
                </FormGroup>
     
                        <a href="#"><Button  className="mr-2" outline theme="success"> &nbsp; Save </Button></a>

                </Form>

                  
                   
                   </CardBody>
                 </Card>
             </div>
            //  </div>
            }
         </Card>

       </div>
       
          {/* ******************************************************** PROBLEMS ********************************************* */}
       <div className="col-lg-4">
      
       <Card className="pt-2 mb-2" style={{height:"50px"}}>
          <div className="d-flex  ">
         <div className=" pl-3"><h6 className="text-success">PROBLEMS</h6></div>
         <div className=" ml-auto pr-3"><i class=" text-dark fas fa-plus pr-5" onClick={()=> this.handleShowProblems(showProblems)}></i>
          <i className=" text-dark fas fa-ellipsis-v "></i></div>
         </div>
         { showProblems &&
              <div style={{"zIndex":999}}>
              {/* <div className="container"> */}
               <Card >
                 <CardBody>
                   
                   <div className="d-flex">
                   <div>
                  <i className="fas fa-arrow-left text-dark mr-3"onClick={()=> this.handleShowProblems(showProblems)}></i>PROBLEMS
                  </div>
                 <div className="ml-auto"> <i className="fas fa-check text-dark"></i>
                 </div>
                 </div>
                 <Form className="mt-2">
                 <FormGroup>
                        <label for="ICD-10/SNOMED CODE/DESCRIPTION">ICD-10/SNOMED CODE/DESCRIPTION</label>
                        <textarea class="form-control bg-light" id="ICD-10/SNOMED CODE/DESCRIPTION" rows="3" placeholder="search and select ICD-10/SNOMED CODE/DESCRIPTION "></textarea>      
                </FormGroup>
     
                        <a href="#"><Button  className="mr-2" outline theme="success"> &nbsp; Save </Button></a>

                </Form>

                  
                   
                   </CardBody>
                 </Card>
             </div>
            //  </div>
            }
        
         </Card>
       
      {/* **************************************************** SYMPTOM *************************************************************** */}
       
       <Card className="pt-2 mb-2" style={{height:"50px"}}>
          <div className="d-flex  ">
         <div className=" pl-3"><h6 className="text-success">SYMPTOM</h6></div>
         <div className=" ml-auto pr-3"><i class=" text-dark fas fa-plus pr-5" onClick={()=> this.handleShowSymptom(showSymptom)}></i>
          <i className=" text-dark fas fa-ellipsis-v"></i></div>
         </div>
         { showSymptom &&
              <div style={{"zIndex":999}}>
              {/* <div className="container"> */}
               <Card className="mb-3">
                 <CardBody>
                   
                   <div className="d-flex">
                   <div>
                  <i className=" text-dark fas fa-arrow-left mr-3"onClick={()=> this.handleShowSymptom(showSymptom)}></i>SYMPTOM
                  </div>
                 <div className="ml-auto"> <i className=" text-dark fas fa-check"></i>
                 </div>
                 </div>
                 <Form className="mt-2">
                 <FormGroup>
                        <label for="ICD-10-CM">ICD-10-CMR R</label>
                        <textarea class="form-control bg-light" id="ICD-10-CM" rows="2" placeholder="search and select ICD-10 CM "></textarea>      
                </FormGroup>
                <FormGroup>
                        <label for="Symptom">SYMPTOM</label>
                        <textarea class="form-control bg-light" id="symptom" rows="2" placeholder="Enter symptom decription here "></textarea>      
                </FormGroup>

                <FormGroup>
                        <label for="formdate">Form DATE</label>
                        <FormInput type="text" id="#formdate" placeholder="10/07/1996" />
                </FormGroup>
     
                        <a href="#"><Button  className="mr-2" outline theme="success"> &nbsp; Save </Button></a>

                </Form>

                  
                   
                   </CardBody>
                 </Card>
             </div>
            //  </div>
            }
        
         </Card>
    </div>

       {/* ******************************************* TEST ORDER ********************************************************** */}
       <div className="col-lg-4 ">
       <Card className="pt-2 mb-2" style={{height:"50px"}}>
          <div className="d-flex  ">
         <div className=" pl-3"><h6 className="text-success">TEST ORDER</h6></div>
         <div className=" ml-auto pr-3"><i class=" text-dark fas fa-plus pr-5"   onClick={()=> this.handleShowTestorder(showTestorder)}></i>
          <i className=" text-dark fas fa-ellipsis-v"></i></div>
         </div>
         { showTestorder &&
              <div style={{"zIndex":999}}>
              {/* <div className="container"> */}
               <Card >
                 <CardBody>
                   
                   <div className="d-flex">
                   <div>
                  <i className=" text-dark fas fa-arrow-left mr-3" onClick={()=> this.handleShowTestorder(showTestorder)}></i>Test Order
                  </div>
                 <div className="ml-auto"> <i className=" text-dark fas fa-check"></i>
                 </div>
                 </div>
                 <Form className="mt-2">
                 <FormGroup>
                        <label for="LOINC/TEST CODE/DESCRIPTION">LOINC/TEST CODE/DESCRIPTION*</label>
                        <textarea class="form-control bg-light" id="LOINC/TEST CODE/DESCRIPTION" rows="2" placeholder="search and select code by entering few chars of decription for the test "></textarea>      
                </FormGroup>
               
                    <a href="#"><Button  className="mr-2" outline theme="success"> &nbsp; Save </Button></a>

                </Form>

                  
                   
                   </CardBody>
                 </Card>
             </div>
            //  </div>
            }
        
         </Card>
         

         {/* ******************************************* MEDICIANS ************************************************************ */}
          <Card className="pt-2 mb-2" style={{height:"50px"}}>
          <div className="d-flex  ">
         <div className=" pl-3"><h6 className="text-success">MEDICATION</h6></div>
         <div className=" ml-auto pr-3"><i class=" text-dark fas fa-plus pr-5" onClick={()=> this.handleShowMedician(showMedication)}></i>
          <i className=" text-dark fas fa-ellipsis-v"></i></div>
         </div>

         { showMedication &&
              <div style={{"zIndex":999}}>
               <Card >
                 <CardBody>
                   
                   <div className="d-flex">
                   <div>
                  <i className=" text-dark fas fa-arrow-left mr-3"onClick={()=> this.handleShowMedician(showMedication)}></i>MEDICATION
                  </div>
                 <div className="ml-auto"> <i className=" text-dark fas fa-check"></i>
                 </div>
                 </div>
                 <Form className="mt-2">

                 <FormGroup>
                        <label for="medician">Medication</label>
                        <FormInput type="text" id="medication" placeholder="search and select medication entering few char" />     
                </FormGroup>
                <div className="row">
                <div className="col-lg-6">
                 <FormGroup>
                        <label for="strength">Strength</label>
                        <FormInput type="text" id="strength" placeholder="Medication strength" />     
                </FormGroup></div>
                
                <div className="col-lg-6">
                <FormGroup>
                        <label for="Quality">Quality</label>
                        <FormInput type="text" id="Quality" placeholder="Despence Quality" />     
                </FormGroup>
                
                </div>
                </div>
                 <FormGroup>
                        <label for="Direction for use sig code">Direction for use sig code</label>
                        <textarea class="form-control bg-light" id="Direction for use sig code" rows="2" placeholder="enter direction sig code here"></textarea>      
                </FormGroup>
               
                    <a href="#"><Button  className="mr-2" outline theme="success"> &nbsp; Save </Button></a>

                </Form>

                  
                   
                   </CardBody>
                 </Card>
             </div>
          
            }
        
        
         </Card>
{/*          
         *********************************************** NOTE ******************************************************************* */}
          <Card className="pt-2 mb-2" style={{height:"50px"}}>
          <div className="d-flex  ">
         <div className=" pl-3"><h6 className="text-success">NOTE</h6></div>
         <div className=" ml-auto pr-3"><i class=" text-dark fas fa-plus pr-5"onClick={()=> this.handleShowNote(showNote)}></i>
          <i className=" text-dark fas fa-ellipsis-v"></i></div>
         </div>

         { showNote &&
              <div style={{"zIndex":999}}>
               <Card >
                 <CardBody>
                   
                   <div className="d-flex">
                   <div>
                  <i className=" text-dark fas fa-arrow-left mr-3"onClick={()=> this.handleShowNote(showNote)}></i>NOTE
                  </div>
                 <div className="ml-auto"> <i className=" text-dark fas fa-check"></i>
                 </div>
                 </div>
                 <Form className="mt-2">

                
                 <FormGroup>
                  
                        <textarea class="form-control bg-light" id="note" rows="2" placeholder="enter Notes or visit summary"></textarea>      
                </FormGroup>
               
                    <a href="#"><Button  className="mr-2" outline theme="success"> &nbsp; Save </Button></a>

                </Form>

                  
                   
                   </CardBody>
                 </Card>
             </div>
          
            }
        
        
         </Card>

         {/* *********************************************** ATTACH FILE ************************************************** */}

         <Card className="pt-2 mb-2" style={{height:"50px"}}>
          <div className="d-flex  ">
         <div className=" pl-3"><h6 className="text-success">ATTACH FILE</h6></div>
         <div className=" ml-auto pr-3"><i class=" text-dark fas fa-plus pr-5" onClick={()=> this.handleShowAttachfile(showAttachfile)}></i>
          <i className=" text-dark fas fa-ellipsis-v"></i></div>
         </div>

         { showAttachfile &&
              <div style={{"zIndex":999}}>
               <Card className="mb-5">
                 <CardBody>
                   
                   <div className="d-flex">
                   <div>
                  <i className=" text-dark fas fa-arrow-left mr-3" onClick={()=> this.handleShowAttachfile(showAttachfile)}></i>Attach File
                  </div>
                 <div className="ml-auto"> <i className=" text-dark fas fa-check"></i>
                 </div>
                 </div>
                 <Form className="mt-2">

                    <select className="form-control " id="sel4" name="sellist4">
                      <option value="">-select attachment type-</option>
                      <option value="1">x-ary</option>
                      <option value="2">scan</option>
                      <option value="3">Blood Report</option>
                      <option value="4">other</option>
                      </select>
                  
                  <FormGroup className="mt-4">
                  <textarea class="form-control bg-light" id="note" rows="2" placeholder="enter Notes or visit summary"></textarea>      
                </FormGroup>
               
                    <a href="#"><Button  className="mr-2" outline theme="success"> <i class="fas fa-paperclip"></i>&nbsp; upload </Button></a>
                    <a href="#"><Button  className="mr-2" outline theme="success"> <i class="fas fa-camera"></i>&nbsp; Capcture Image </Button></a>

                </Form>

                  
                   
                   </CardBody>
                 </Card>
             </div>
          
            }
        
        
         </Card>
       </div> 



       
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 pt-5 pb-5" >
        <Button outline theme="success"><i class="fas fa-check-circle"></i>&nbsp;Complete</Button>&nbsp;
      <Button outline theme="success"> <i class="far fa-trash-alt"></i> &nbsp; delete </Button>&nbsp;
      <Button outline theme="success"><i class="fas fa-print"></i>&nbsp;print</Button>&nbsp;
     <span><a href="/components-overview"> <Button outline theme="success"><i class="fas fa-arrow-left"></i> &nbsp;Back</Button>&nbsp;</a></span>


        
        
        </div>
       
       
      </div> 
      


     </div> 
    )
    }
}

export default NewhealthRecord;
