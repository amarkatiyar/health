import React from 'react'
import {Button, Card,Form,FormInput } from 'shards-react'
import { withFormik } from "formik";

class ChangePassword extends React.Component{
    constructor(props) {
      super(props);
      this.state = { 
        open: false,
    };
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
<form onSubmit={handleSubmit}>
    <div className="container">
    <div>
    <Card className="px-4 ml-3 mt-3 mb-5" style={{width:"680px",height:"350px"}}>
        <h6 className=" ml-2 text-success">CHANGE PASSWORD</h6>
            <p className="ml-2">Enter current password, new password and press Save button</p>

            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <h6><small><b>Current Password *</b></small></h6><br></br>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                  <FormInput
                    type="password" class="form-control"
                    placeholder="Current Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password1}
                    name="password1"
                  />
                  {errors.password1 && touched.password1 &&(
                            <div className="text-danger small text-left" id="feedback">{errors.password1}
                        </div>)}
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <h6><small><b>New Password *</b></small></h6><br></br>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                  <FormInput
                    type="password" class="form-control"
                    placeholder="New Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password2}
                    name="password2"
                  />
                  {errors.password2 && touched.password2 &&(
                        <div className="text-danger small text-left" id="feedback">{errors.password2}
                     </div>)}
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <h6><small><b>Confirm New Password *</b></small></h6><br></br>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                  <FormInput
                    type="password" class="form-control" placeholder="Confirm New Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password3}
                        name="password3"
                  />
                  {errors.password3 && touched.password3 &&(
                            <div className="text-danger small text-left" id="feedback">{errors.password3}
                        </div>)}

                </div>
              </div>
        <div className="mt-4 ml-5">
        <a><Button  className="" outline theme="success"><i class="fas fa-check"></i> &nbsp;Change </Button></a>&nbsp;
        <a href="./user-profile-lite"><Button  className="" outline theme="success"><i class="fas fa-arrow-left"></i> Cancel </Button></a>
        </div>
    </Card>
    </div>
    </div>
    </form>
    )
}
}
const ChangePasswordForm = withFormik({
    mapPropsToValues: () => ({ password1:"",password2:"",password3:"" }),
    validate: values => {
      const errors = {};

      if (!values.password1) {
        errors.password1 = '**Password is required ! **'
      } else if (values.password1.length < 6) {
        errors.password1 = '**Password has to be longer than 6 characters ! **'
      }
      if (!values.password2) {
        errors.password2 = '**Password is required ! **'
      } else if (values.password2.length < 6) {
        errors.password2 = '**Password has to be longer than 6 characters ! **'
      }
      if (!values.password3) {
        errors.password3 = '**Password is required ! **'
      } else if (values.password3.length < 6) {
        errors.password3 = '**Password has to be longer than 6 characters ! **'
      }

      
      return errors;
},
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
    displayName: "ChangePasswordForm"
  })(ChangePassword);
export default ChangePasswordForm;