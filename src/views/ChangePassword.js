import React from 'react'
import {Row,Button, Card, CardBody, Modal, ModalBody, ModalHeader,Col,Form } from 'shards-react'
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
<Form>
    <div className="container">
    <div>
    <Card className="px-4 ml-3 mt-3 mb-5" style={{width:"680px",height:"300px"}}>
        <h6 className=" ml-2 text-success">CHANGE PASSWORD</h6>
                 <p className="ml-2">Enter current password, new password and press Save button</p>
                 <div class="row ml-5">
                     <div classname="col-4 ml-5">
                        <h6 class="mt-2">Current Password*</h6>
                        <h6 class="mt-3">New Password*</h6>
                        <h6 class="mt-3">Confirm New Password*</h6>
                     </div>
                     <div className="col-8">
                     <input  type="password" class="form-control" id="password"
                     placeholder="Password"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password}
                     name="password"
                     >
                     {errors.password && touched.password && 
                        <div className="text-warning pb-3" id="feedback">{errors.password}
                        </div>}
                     </input>
                     <input  type="password1" class="form-control mt-2" id="" placeholder="Password1"></input>
                     <input  type="password2" class="form-control mt-2" id="" placeholder="Password2"></input>
                     </div>
                 </div>
        <div className="mt-4 ml-5">
        <a><Button  className="" outline theme="success"><i class="fas fa-check"></i> &nbsp;Change </Button></a>&nbsp;
        <a href="./user-profile-lite"><Button  className="" outline theme="success"><i class="fas fa-arrow-left"></i> Cancel </Button></a>
        </div>
    </Card>
    </div>
    </div>
    </Form>
    )
}
}
const ChangePasswordForm = withFormik({
    mapPropsToValues: () => ({ password:"" }),
    // Custom sync validation
    validate: values => {
      const errors = {};

      if (!values.password) {
        errors.password = '**Password is required ! **'
      } else if (values.password.length < 6) {
        errors.password = '**Password has to be longer than 6 characters ! **'
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