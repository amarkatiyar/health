



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
import axios from 'axios';
import { withFormik } from "formik";


class Patient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    
    // let payload = {
    //   "doc_ID": sessionStorage.getItem("DocId")
    // }
    // console.log(payload);
   
    
    // sessionStorage.setItem('FirstName' ,'');
    // sessionStorage.setItem('LastName', '');
    // sessionStorage.setItem('Gender', '');
    // sessionStorage.setItem('Birthdate', '');
    // sessionStorage.setItem('email', '');
    // sessionStorage.setItem('phoneno', '');

    //  sessionStorage.setItem("DocId" ,Payload);
  
    //  console.log(sessionStorage.getItem('FirstName'));
    //  console.log(sessionStorage.getItem('LastName'));
    //  console.log(sessionStorage.getItem('Gender'));
    //  console.log(sessionStorage.getItem('email'));
    //  console.log(sessionStorage.getItem('phoneno'));
     
    // let payload = {
    //   "doc_ID": sessionStorage.getItem("DocId")
    // }
    // console.log(payload);
    // let Username = sessionStorage.getItem("Username");
    
    
  }

  

  render() {
    
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit
    } = this.props;
    return (
      
        <div className="container" style={{ fontFamily: " Geneva" }}>
        <div className="col-lg-6 col-md-6 col-xl-6 col-sm-12 col-12 mt-4 mb-4">
          <Card>
            <CardBody className="">
              <Row >
                <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                  <h6 className="text-success">
                   
                    CREATE PATIENT ACCOUNT
                  </h6>
                </div>
                <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <i class="fas fa-question-circle"></i>
                </div>
              </Row>
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <div className="row pt-4">
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#FirstNAme">FirstName</label>
                    </div>
                    <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                      <FormInput
                        type="text"
                        placeholder="enter the FirstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.FirstName}
                        name="FirstName"
                      />
                      {errors.FirstName && touched.FirstName && (
                        <div className="text-warning pb-3" id="feedback">
                          {errors.FirstName}
                        </div>
                      )}
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="row">
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#LastName">LastName</label>
                    </div>
                    <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                      <FormInput
                        type="text"
                        placeholder="enter the LastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.LastName}
                        name="LastName"
                      />
                      {errors.LastName && touched.LastName && (
                        <div className="text-warning pb-3" id="feedback">
                          {errors.LastName}
                        </div>
                      )}
                    </div>
                  </div>
                </FormGroup>

                <div class="form-group">
                  <div className="row">
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#Gender">Gender</label>
                    </div>
                    <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                      <FormSelect
                        name="Gender"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Gender}
                        
                      >
                         <option value="first">
                          --select Gender--
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </FormSelect>

                      {errors.Gender && touched.Gender && (
                        <div className="input-feedback pb-3 text-warning">{errors.Gender}</div>
                      )}
                    </div>
                  </div>
                </div>

                <FormGroup>
                  <div className="row">
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#LastName">Birth Date</label>
                    </div>
                    <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                      <FormInput
                        type="text"
                        placeholder="enter the Birthdate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Birthdate}
                        name="Birthdate"
                      />
                      {errors.Birthdate && touched.Birthdate && (
                        <div className="text-warning pb-3" id="feedback">
                          {errors.Birthdate}
                        </div>
                      )}
                    </div>
                  </div>
                </FormGroup>


                <FormGroup>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                        <label htmlFor="#email">Email id</label>
                      </div>
                       <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                       <FormInput
                          type="email"
                           placeholder="Patient email id"
                           onChange={handleChange}
                           onBlur={handleBlur}
                          value={values.email}
                           name="email"
                         />
                         {errors.email && touched.email && (
                           <div className="text-warning " id="feedback">
                             {errors.email}
                           </div>
                         )}
                       </div>
                     </div>
               </FormGroup>
                

               
                <FormGroup>
                  <div className="row">
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#Number"> phone Number</label>
                    </div>
                    <div className=" col-xl-8 col-lg-8  col-md-8 col-sm-8 col-8">
                      <FormInput
                        type="number"
                        placeholder="number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneno}
                        name="phoneno"
                      />
                      {errors.phoneno && touched.phoneno && (
                        <div className="text-warning pb-3" id="feedback">
                          {errors.phoneno}
                        </div>
                      )}
                    </div>
                  </div>
                </FormGroup>



                <Button type="submit" className="mr-2" outline theme="success">
                  {" "}
                  &nbsp; Save{" "}
                </Button>
              </form>
            </CardBody>
          </Card>
          </div>
        </div>
    
    );
  }
}

const Patientform = withFormik({
  mapPropsToValues: () => ({ FirstName: "" }),
  mapPropsToValues: () => ({ LastName: "" }),
  mapPropsToValues: () => ({ Gender: "" }),
  mapPropsToValues: () => ({ Birthdate: "" }),
  mapPropsToValues: () => ({ email: "" }),
  mapPropsToValues: () => ({ phoneno: "" }),
  
  // Custom sync validation
  validate: values => {
    const errors = {};
    
    if (!values.Gender) {
      errors.Gender = "**please select the Gender! **";
    }

    if (!values.FirstName) {
      errors.FirstName = "**please enter the FirstName! **";
    }
    if (!values.LastName) {
      errors.LastName = "**please enter the Lastname ! **";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.LastName)) {
      errors.LastName = " **please enter the last name ! **";
    }
    if (!values.Birthdate) {
      errors.Birthdate = "**please enter the Birthdate! **";
    }


    if (!values.email) {
             errors.email = "**please enter the email id ! **";
           } else if (
             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
           ) {
             errors.email = "**Invalid email address**";
        }

        
    if (!values.phoneno) {
      errors.phoneno = "**enter the phone number! **";
    } else if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(
        values.phoneno
      )
    ) {
      errors.phoneno = "**Not valid number ! **";
    }

    

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    values.doc_ID = sessionStorage.getItem("DocId");
    
    console.log(values);
    
    
    
    // axios.post(`http://192.168.0.151:5001/New_Patient`,values )
    //         .then(function(response) {
    //           const res = response;
    //           console.log(res);
    //           console.log("axios");
              
    //           if (res.status === 200) {
    //             // sessionStorage.setItem("DocId", res.data.DocId);
    //             sessionStorage.setItem("isLoggedIn", true);
    //             // props.history.push('/blog-posts')
    //           }
  
    //         })
    //         .catch(function() {
    //           console.log("Server issue / no data found");
    //         });

    axios.post(`http://192.168.0.151:5001/New_Patient`, values)
    .then(function(response) {
      const res = response;
      console.log(res);
      // console.log("axios");
                   
      if (res.status === 200) {
        // sessionStorage.setItem("DocId", res.data.DocId);
        sessionStorage.setItem("success", true);
         props.history.push('/blog-posts')
      }
      // else{
      //   alert('wrong input')
        
      // }

    })
    .catch(function() {
      console.log("Server issue / no data found");
    });
    
  },

  


  displayName: "Patient"
})(Patient);

export default Patientform;
