// import React from "react";
// import { CardBody,Card, Form, FormInput, FormGroup, FormSelect,Button} from "shards-react";


// export default function FormExample() {
//   return (
//     <div className="container">
//     <CardBody >
//       <Card style={{height: "600px", width:"450px"}}>
//       <h6 className="ml-4 mt-3 text-success">CREATE PATIENT ACCOUNT</h6>
//       <p className="ml-4"><small>Enter new patient's First name, Last name, Gender and press the create Button</small></p>
   
//     <Form>
//       <div className="container">
//       <div className="row">
//       <div className="col lg-6 ">
//       <FormGroup>
//         <label htmlFor="#firstname">Firstname</label>
//         <FormInput type="text" id="#firstname" placeholder="firstname" />
//       </FormGroup></div>
//     <div className="col lg-6">
//       <FormGroup>
//         <label htmlFor="#lastname">lastname</label>
//         <FormInput type="text" id="#number" placeholder="lastname" />
//       </FormGroup>
//       </div>
//       </div>

//       <FormGroup>
//       <label htmlFor="#Gender">Gender</label>
//       <FormSelect>
//       <option value="first">Male</option>
//       <option value="second">Female</option>
//       <option value="third">
//         Other
//       </option>
//     </FormSelect>
//     </FormGroup>
//     <FormGroup>
//       <label htmlFor="#date">Date of Birth</label>
//       <FormInput id="#date" placeholder="10/07/96" />
    
//     </FormGroup>

//     <FormGroup>
//       <label htmlFor="#email">Email id</label>
//       <FormInput type="email" id="#email" placeholder="Patient email id" />
    
//     </FormGroup>
//     <FormGroup>
//       <label htmlFor="#number">Number</label>
//       <FormInput type="number" id="#number" placeholder="+91 8840091275" />
    
//     </FormGroup>
//     <span className="text-center"><a href="#"><Button className="font-weight-bold mr-3" style={{height: "40px", width:"150px",}} outline theme="success">
//     <i class="fas fa-check"></i>&nbsp; &nbsp;Create
//       </Button></a>
//       <a href="#"><Button className="font-weight-bold" style={{height: "40px", width:"150px"}}outline theme="success">
//       <i class="fas fa-times"></i>&nbsp; Cancel
//       </Button></a></span>
      


      

//     </div>
//     </Form>
//     </Card>
//     </CardBody>
//     </div>
//   );
// // }




// ************************this is contact form ***********************************************************

// import React from 'react'
// import {Row, Card, CardBody,Form, FormInput, FormGroup,FormSelect,Button } from 'shards-react'

// export default function contactExample() {
//   return (
//     <div className="container">
//     <Card className="mt-2 ml-3" style={{height: "720px",width:"500px"}}>
//      <CardBody>
//        <Row className="mt-0">
//          <div className="col-lg-10"><h6><i class="fas fa-arrow-left mr-3"></i>Contact</h6></div>
//          <div className="col-lg-2"><i class="fas fa-check"></i></div>
       
//        </Row>
//        <Form>
//       <FormGroup>
//         <label htmlFor="#Address">Address</label>
//         <FormInput id="#address" placeholder="enter the address"/>
//       </FormGroup>
//       <FormGroup>
//         <label htmlFor="#City">City</label>
//         <FormInput type="text" id="#city" placeholder="enter the city" />
//       </FormGroup>  
//       <FormGroup>
//       <label htmlFor="#Country">Country</label> 
//        <FormSelect>
//       <option value="first">India</option>
//       <option value="second">Pakistan</option>
//       <option value="third">
//         engaland
//       </option>
//       </FormSelect>
//       </FormGroup>

//       <FormGroup>
//       <label htmlFor="#state/province">State/Province</label> 
//        <FormSelect>
//       <option value="first">uttar pradesh</option>
//       <option value="second">bihar</option>
//       <option value="third">
//         Assam
//       </option>
//       </FormSelect>
//       </FormGroup>

//       <FormGroup>
//         <label htmlFor="ZIP/Postal Code">ZIP/Postal Code</label>
//         <FormInput type="text" id="#ZIP/Postal Code" placeholder="ZIP/Postal Code" />
//       </FormGroup>

//       <FormGroup>
//         <label htmlFor="#Number"> phone Number</label>
//         <FormInput type="number" id="#number" placeholder="number" />
//       </FormGroup>

//       <FormGroup>
//       <label for="exampleFormControlTextarea1">Notes</label>
//       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="notes"></textarea>
//         </FormGroup>
//         <a href="#"><Button  className="mr-2" outline theme="success"> &nbsp; Save </Button></a>
    
    

//     </Form>
//      </CardBody>
//    </Card>
//    </div>

//   );
// }  







// **************alter native contact************##*******************************************
// import React from 'react'
// import {Row, Card, CardBody,Form, FormInput, FormGroup,FormSelect,Button } from 'shards-react'

// export default function alternatecontact() {
//   return (
//     <div className="container">
//     <Card className="mt-2  mb-3 ml-3" style={{height: "400px",width:"500px"}}>
//      <CardBody>
//        <Row className="mt-0">
//          <div className="col-lg-10"><h6><i class="fas fa-arrow-left mr-3"></i>Alternate Contact
// </h6></div>
//          <div className="col-lg-2"><i class="fas fa-check"></i></div>
       
//        </Row>
//        <Form>
//       <FormGroup>
//         <label htmlFor="#Fullname">Fullname</label>
//         <FormInput id="#fullname" placeholder="enter the name"/>
//       </FormGroup>

//       <FormGroup>
//         <label htmlFor="#Number">Contact number</label>
//         <FormInput type="number" id="#number" placeholder=" enter the number" />
//       </FormGroup>

//       <FormGroup>
//       <label htmlFor="#Relationship">Relationship</label> 
//        <FormSelect>
//       <option value="first">mother</option>
//       <option value="second">father</option>
//       <option value="second">sister</option>
//       <option value="second">brother</option>
    
//       </FormSelect>
//       </FormGroup>
//       <a href="#"><Button  className="mr-2" outline theme="success"> &nbsp; Save </Button></a>


//     </Form>
//      </CardBody>
//    </Card>
//    </div>

//   );
// } 




// ******************care team member************************
// import React from 'react'
// import {Row, Card, CardBody,Form, FormInput, FormGroup,FormSelect,Button } from 'shards-react'

// export default function careteam() {
//   return (
//     <div className="container">
//     <Card className="mt-2  mb-3 ml-3" style={{height: "250px",width:"450px"}}>
//      <CardBody>
//        <Row className="mt-0">
//          <div className="col-lg-10"><h6><i class="fas fa-arrow-left mr-3"></i>CARE TEAM MEMBER
// </h6></div>
//          <div className="col-lg-2"><i class="fas fa-check"></i></div>
       
//        </Row>
//        <Form>
//        <FormGroup>
//       <label for="exampleFormControlTextarea1">CARE TEAM MEMBER</label>
//        <textarea class="form-control bg-light" id="exampleFormControlTextarea1" rows="3" placeholder="user by name id emailid"></textarea>        </FormGroup>
     
//       <a href="#"><Button  className="mr-2" outline theme="success"> &nbsp; Save </Button></a>


//     </Form>
//      </CardBody>
//    </Card>
//    </div>

//   );
// }  


// ***************personal*******************

// import React from 'react'
// import {Row, Card, CardBody,Form, FormInput, FormGroup,FormSelect,Button } from 'shards-react'

// export default function personal() {
//   return (
//     <div className="container">
//     <Card className="mt-2 ml-3 mb-2" style={{height: "450px",width:"480px"}}>
//      <CardBody>
//        <Row className="mt-0">
//          <div className="col-lg-10"><h6><i class="fas fa-arrow-left mr-3"></i>Personal</h6></div>
//          <div className="col-lg-2"><i class="fas fa-check"></i></div>
       
//        </Row>
//        <Form>
     
//       <FormGroup>
//       <label htmlFor="#Country">Gender</label> 
//        <FormSelect>
//       <option value="first">Male</option>
//       <option value="second">Female</option>
//       <option value="third">
//         Other
//       </option>
//       </FormSelect>
//       </FormGroup>
//       <FormGroup>
//         <label htmlFor="Date of Birth">Date of Birth</label>
//         <FormInput type="text" id="#date of birth" placeholder="10/07/96" />
//       </FormGroup>


//       <FormGroup>
//       <label htmlFor="#state/province">Blood Group</label> 
//        <FormSelect>
//        <option value="first">--select Blood Group--</option>
//       <option value="first">O postive</option>
//       <option value="second">O neagtive</option>
//       <option value="first">A postive</option>
//       <option value="second">A neagtive</option>
//       <option value="first">B postive</option>
//       <option value="second">B neagtive</option>
//       </FormSelect>
//       </FormGroup>
//       <FormGroup>
//       <label htmlFor="#state/province">Marital Status</label> 
//        <FormSelect>
//        <option value="first">--select Marital Status--</option>
//       <option value="first">Single</option>
//       <option value="second">married</option>
//       <option value="first">Divorce</option>
//       <option value="second">Widowed</option>
      
//       </FormSelect>
//       </FormGroup>

     
//         <a href="#"><Button  className="mr-2" outline theme="success"> &nbsp; Save </Button></a>
    
    

//     </Form>
//      </CardBody>
//    </Card>
//    </div>

//   );
// }  



// *********************name********************###################**********************


import React from 'react'
import {Row, Card, CardBody,Form, FormInput, FormGroup,FormSelect,Button } from 'shards-react'

export default function name() {
  return (
    <div className="container">
    <Card className="mt-2 ml-3 mb-2" style={{height: "570px",width:"480px"}}>
     <CardBody>
       <Row className="mt-0">
         <div className="col-lg-10"><h6><i class="fas fa-arrow-left mr-3"></i>Name</h6></div>
         <div className="col-lg-2"><i class="fas fa-check"></i></div>
       
       </Row>
       <Form>
     
      <FormGroup>
        <div className="row">
      <div className="col-lg-6">     
       <FormGroup>
        <label htmlFor="#firstname">Firstname</label>
        <FormInput type="text" id="#firstname" placeholder="first name" />
      </FormGroup></div>

      <div className="col-lg-6">    
        <FormGroup>
        <label htmlFor="#lastname">Lastname</label>
        <FormInput type="text" id="#lastname" placeholder="lastname" />
      </FormGroup></div>
      </div>
      </FormGroup>
      <FormGroup>
        <label htmlFor="#emailid">Email id</label>
        <FormInput type="email" id="#Email" placeholder="email id" />
      </FormGroup>

      <FormGroup>
        <label htmlFor="#number">Mobile Number</label>
        <FormInput type="number" id="#number" placeholder="mobile number" />
      </FormGroup>

      <FormGroup>
        <label htmlFor="#id"> id</label>
        <FormInput type="text" id="#ids" placeholder=" National,License or Passport" />
      </FormGroup>
 
      <FormGroup>
        <label for="exampleFormControlTextarea1">CARE TEAM MEMBER</label>
        <textarea class="form-control bg-light" id="exampleFormControlTextarea1" rows="3" placeholder="user by name id emailid"></textarea> 
      </FormGroup>


     
        <a href="#"><Button  className="mr-2 text-weight-bold" outline theme="success"> &nbsp; Save </Button></a>
  
    

    </Form>
     </CardBody>
   </Card>
   </div>

  );
}  