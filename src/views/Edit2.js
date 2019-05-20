import React from 'react'
import {Row,Button, Card, CardBody,FormInput } from 'shards-react'

import { withFormik } from "formik";
import axios from 'axios';

class Edit2 extends React.Component{
constructor(props) {
    super(props);
    this.state = { 
    open: false,
    handleShowEdit2: false,
    };
  }
        handleShowEdit2=() => {
            this.props.handleHideEdit2();
        }
          
        componentDidMount = () => {
          sessionStorage.setItem('Ad_status', '');     
          sessionStorage.setItem('Education' ,'');
          sessionStorage.setItem('lice_no', '');
          
        }
          
        render(){
            const{ShowEdit2}=this.state;
            const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit
              } = this.props;

return(
<Card className="" style={{width:"600px",height:"280px"}}>
  <CardBody>
    <Row className="mt-0">
      <div onClick ={()=>this.handleShowEdit2()} className="col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="fas fa-arrow-left mr-3"></i></h6></div>
      <div className="col-lg-2 col-md-2 col-sm-2 col-2"><i class=""></i></div>
    </Row>

    <form onSubmit={handleSubmit}>
        <div class="form-group row mt-3">
          <label for="Ad_status" 
            className="col-lg-6 col-md-6 col-sm-6 col-6 ">Administrator status*
          </label>
            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
              <select className="form-control "
              type="text"
              placeholder="Gender"
              name="Gender"
              value={values.Gender}
              onChange={handleChange}
              onBlur={handleBlur}>
                <option value="">-Select Gender-</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
              </select>
              {errors.Gender && touched.Gender && (<div className="text-danger small" id="feedback">
                                        {errors.Gender}
                                    </div>)}
            </div>
          </div>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 ">
              <label for="Education" >Education*</label>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <FormInput 
                  type="text" 
                  className="form-control"  
                  placeholder="Education"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Education}
                  name="Education"
                />
                {errors.Education && touched.Education && (
                  <div className="text-danger small text-left" id="feedback">
                    {errors.Education}
                 </div>
                )}
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 ">
            <label for="lice_no">LicenceNumber*</label>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              <FormInput type="text" 
                className="form-control" 
                placeholder="Lno"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.LicenceNumber}
                name="LicenceNumber"
              />
              {errors.LicenceNumber && touched.LicenceNumber && (
                  <div className="text-danger small text-left " id="feedback">
                    {errors.LicenceNumber}
                  </div>
              )}
            </div>
        </div>
        <div>
          <Button className="mr-2 " size="md" outline theme="success">save
          </Button>
        </div>
    </form>
  </CardBody>        
</Card>
)
}
}

const Edit2Form = withFormik({
    mapPropsToValues: () => ({ Gender:"",Education: "",LicenceNumber: "" }),
  
    // Custom sync validation
    validate: values => {
      const errors = {};
  
      if (!values.Education) {
        errors.Education = "please enter the Education ! **";
      }else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Education)) {
        errors.Education = " **please enter the character only ! **";
      }
      if (!values.LicenceNumber) {
        errors.LicenceNumber = "please enter the LicenceNumber ! **";
      }else if (!/^[0-9a-zA-Z]+$/.test(values.LicenceNumber)) {
        errors.LicenceNumber = " **please enter the character only ! **";
      }
      if (!values.Gender) {
        errors.Gender = "Please select the Gender !";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(values.Gender)) {
      }
      else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.subject)) {
        errors.subject = " Please select option !";
      }
      return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      // setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      //   setSubmitting(false);
      // }, 1000);


      console.log("submitting....");
      console.log(values);
  
  
  
        axios.post(`http://192.168.0.151:5001/Edit2`, values)
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
  
    displayName: "Edit2Form"
  })(Edit2);

  export default Edit2Form;