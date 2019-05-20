// @ Author Manohar
import React, { Component } from 'react';
import {Row, Col, CardHeader,FormInput,Button } from "shards-react";
import { withFormik } from "formik";

class CreateMessage extends Component{
  constructor(props){
    super(props);
    this.state = {
      handleShowCreateMessage: false,
    }
  };
  handleShowCreateMessage = () =>{
    this.props.handleHideCreateMessage();
  }
  render(){
      const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
      } = this.props;
    return(
      <Row>
      <Col >
        <CardHeader className="border-bottom" style={{width:"1000px",height:"450px"}}>
        <div className="row">
        <div className="col-lg-12">       
        <a onClick={()=> this.handleShowCreateMessage()}><i className="hover icon-md fa fa-chevron-left mt-2 mr-2" style={{cursor:"pointer" }}></i></a>
        New Message
       </div>
      </div>
      <br></br>
      
      <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="col-lg-3">
       <h6><small>To :*</small></h6><br></br><br></br>
       </div>
       <div className="col-lg-9">
          <FormInput
                      className="bg-light"
                      type="text"
                      placeholder="Search by name,K*Id,e-email here"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.to}
                      name="to"
                    />
                     {errors.to && touched.to && (
                        <div className="text-warning" id="feedback">
                          {errors.to}
                        </div>
                      )} 
                </div> 
                <div className="col-lg-3">
       <h6><small>Subject :*</small></h6>
       </div>
       <div className="col-lg-9">     
          <FormInput
                      className="bg-light"
                      type="text"
                      placeholder="subject"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.subject}
                      name="subject"
                    />
                     {errors.subject && touched.subject && (
                        <div className="text-warning " id="feedback">
                          {errors.subject}
                        </div>
                      )}         
      </div>
      </div>
  
        <div>
          <br></br>
          <h6><small>Message :*<i className="far fa-star ml-3" style={{cursor:"pointer" }}></i></small></h6>
          <div className="col-xs-12">
            <textarea
                      class="form-control bg-light"
                      rows="5"
                      placeholder="Message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      name="message"
                    />
                   {errors.message && touched.message && (
                        <div className="text-warning " id="feedback">
                          {errors.message}
                        </div>
                      )}
        </div>
        </div>
        <div className="col-xs-6 mt-3">
                <Button className="mr-2" outline theme="success">
                  {" "}
                  &nbsp; Send{" "}
                </Button>
        </div>
        </form>
        </CardHeader>
    </Col>
  </Row>
    )
  }
}
const CreateMessageForm = withFormik({
  mapPropsToValues: () => ({ to:"",subject: "",message:"" }),
  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.to) {
      errors.to = "Please Required Email-Id !";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.to)) {
      errors.to = "Invalid email address";
    }
    // else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.subject)) {
    //   errors.subject = " Please select option !";
    // }

    if (!values.subject) {
      errors.subject = "Please enter the subject !";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.subject)) {
      errors.subject = " Please enter the character only !";
    }

    if (!values.message) {
      errors.message = "Please some text !";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.message)) {
      errors.message = " Please enter the character only !";
    }
     return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
displayName: "CreateMessageForm"
})(CreateMessage);
export default CreateMessageForm;