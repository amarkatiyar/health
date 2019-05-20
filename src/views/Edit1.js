import React from 'react'
import {
    Row, Button, Card, CardBody,FormInput
} from 'shards-react'

import { withFormik } from "formik";
import axios from 'axios';

class Edit1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        handleShowEdit1: false,
        }
    };

    handleShowEdit1 = () => {
        this.props.handleHideEdit1();
    }

    componentDidMount = () => {
        sessionStorage.setItem('Hname', '');     
        sessionStorage.setItem('Fname' ,'');
        sessionStorage.setItem('Lname', '');
        sessionStorage.setItem('Ad_status', '');    
        sessionStorage.setItem('Mo_number', '');    
        
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
        <Card className="" style={{ width: "600px", height: "430px" }}>
            <CardBody>
                <Row className="mt-0">
                    <div onClick={() => this.handleShowEdit1()} className="col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="fas fa-arrow-left mr-3" ></i></h6></div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2"><i class=""></i></div>
                </Row>
                <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6 ">
                                <label for="Hname" >Hospitalname*</label>
                            </div>
                            <div className="col-6">
                                <FormInput
                                 type="text" 
                                 className="form-control" 
                                 placeholder="Hname"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.item}
                                 name="Hname"
                                 />
                                 {errors.Hname && touched.Hname && (
                                    <div className="text-danger small text-left" id="feedback">
                                    {errors.Hname}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6 ">
                                <label for="Fname" >FirstName*</label>
                            </div>
                            <div className="col-6">
                                <FormInput type="text"
                                 className="form-control" 
                                 placeholder="Fname"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.item}
                                 name="Fname"
                                 />
                                 {errors.Fname && touched.Fname && (
                                    <div className="text-danger small text-left" id="feedback">
                                    {errors.Fname}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6 ">
                                <label for="Lname" >LastName*</label>
                            </div>
                            <div className="col-6">
                                <FormInput type="text" 
                                className="form-control" 
                                placeholder="Lname"
                                onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.item}
                                 name="Lname"
                                />
                                {errors.Lname && touched.Lname && (
                                    <div className="text-danger small text-left" id="feedback">
                                    {errors.Lname}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div className="col-6 ">
                                <label for="Ad_status">Administrator status*</label>
                            </div>
                            <div className="col-6 ">
                                    <select className="form-control "
                                     type="text"
                                     placeholder="Administrator"
                                     name="Administrator"
                                     value={values.Administrator}
                                     onChange={handleChange}
                                     onBlur={handleBlur}>
                                    >
                                        <option value=""></option>
                                        <option value="ACTIVE">ACTIVE</option>
                                        <option value="DEACTIVE">DEACTIVE</option>
                                    </select>
                                    {errors.Administrator && touched.Administrator && (<div className="text-danger small" id="feedback">
                                        {errors.Administrator}
                                    </div>)}
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6 ">
                                <label for="Mo_number" >Mobile Number*</label>
                            </div>
                            <div className="col-6">
                                <FormInput type="number" className="form-control" id="#number" placeholder="+91 8840091275"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Number}
                                name="Number"></FormInput>
                                {errors.Number && touched.Number && (
                                <div className="text-warning " id="feedback">
                                    {errors.Number}
                                </div>
                        )}
                            </div>
                        </div>
                        <Button outline size="md" className="mt-3 ml-5" theme="success">
                            Save
                         </Button>
                    </form>
                </CardBody>
            </Card>
    )
    }
}
const Edit1Form = withFormik({
    mapPropsToValues: () => ({ Hname: "",Fname: "",Lname: "",Administrator: "",Number: "" }),
    // Custom sync validation
    validate: values => {
      const errors = {};
  
      if (!values.Hname) {
        errors.Hname = "Please enter the correct chahracter !";
      } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Hname)) {
      }
     else if (!/^[0-9]+$/.test(values.Hname)) {
              errors.Hname = "Not valid number !"
      }

      if (!values.Fname) {
        errors.Fname = "Please enter the correct chahracter !";
      } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Fname)) {
        errors.Fname = " Please character only !";
      } 
      if (!values.Lname) {
        errors.Lname = "Please enter the correct chahracter !";
      } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Lname)) {
        errors.Lname = " Please character only !";
      }
      if (!values.Administrator) {
        errors.Administrator = "Please select the email-id or name !";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(values.Administrator)) {
      }
      else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.subject)) {
        errors.subject = " Please select option !";
      }
      if (!values.Number) {
        errors.Number = "**enter the phone number ! **";
      } else if (
        !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.Number)
      ) {
        errors.Number = "**Not valid number ! **";
      }
      return errors;
},
    handleSubmit: (values, { setSubmitting }) => {
    //   setTimeout(() => {
    //     alert(JSON.stringify(values, null, 2));
    //     setSubmitting(false);
    //   }, 1000);

    console.log("submitting....");
    console.log(values);



      axios.post(`http://192.168.0.151:5001/Edit1`, values)
            .then(function(response) {
              const res = response;
              console.log(res);
              // console.log("axios");
                           
              if (res.status === 200) {
                // sessionStorage.setItem("", res.data.status);
                sessionStorage.setItem("success", true);
              }
              else{
                // wrong pws    login fail
              }
  
            })
            .catch(function() {
              console.log("Server issue / no data found");
            });


    },
    displayName: "Edit1Form"
  })(Edit1);
export default Edit1Form;
  