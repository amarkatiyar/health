import React from 'react'
import {
    Row,Button, Card, CardBody,Form,FormGroup,
    FormSelect,FormInput 
    } from 'shards-react'
import { withFormik } from "formik";

class Add1 extends React.Component{
  constructor(props) {
  super(props);
  this.state = { 
  open: false,
  handleShowAdd1: false,
  };
}
          
          
handleShowAdd1=() => {
   this.props.handleHideAdd1();
 }

render(){
    const { Add1Form } = this.state;
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit
    } = this.props;

return(
  <Card className="" style={{width:"500px",height:"550px"}}>
    <CardBody>
      <Row className="mt-0">
        <div  onClick ={()=>this.handleShowAdd1()} className="col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="fas fa-arrow-left mr-3"></i></h6></div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-2"><i className=""></i></div>          
      </Row>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
            <div className="row mt-1 ">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <label htmlFor="#firstname">Address</label>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                <FormInput 
                  type="text" 
                  id="Address" 
                  placeholder="Address" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                  name="Address"
                 />
                  <br></br>
                <FormInput 
                  type="text" 
                  id="Address" 
                  placeholder="Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                  name="Address"
                />
                {errors.Address && touched.Address && (
                    <div className="text-danger small text-left" id="feedback">
                       {errors.Address}
                    </div>
                  )}
              </div>
            </div>
        </FormGroup>
            <FormGroup>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <label htmlFor="city">City</label>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                  <FormInput
                     type="text" 
                     id="city" 
                     placeholder="City"
                     onChange={handleChange}
                  />
                  </div>
              </div>
            </FormGroup>

        <FormGroup>
          <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <label htmlFor="#Gender">Country</label>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-8">
              <FormSelect>
                <option value="first">India</option>
                <option value="second">Pakistan</option>
                <option value="second">America</option>
                <option value="third"> Other</option>
              </FormSelect>
            </div>
          </div>
        </FormGroup>

        <FormGroup>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <label htmlFor="#S_Province">State/Province</label>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-8">
              <FormSelect>
                <option value="first">Select/State Province</option>
              </FormSelect>
            </div>
          </div>
        </FormGroup>


        <FormGroup>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <label htmlFor="#date">Zip/Postal Code</label>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-8">
              <FormInput id="#date" placeholder="" />
            </div>
          </div>
        </FormGroup>

        <FormGroup>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <label htmlFor="#number">Phone1</label>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-8">
              <FormInput type="number" id="#number" placeholder="+91 8840091275" />
            </div>
          </div>
        </FormGroup>

        <FormGroup>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <label htmlFor="#number">Phone2</label>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-8">
            <FormInput type="number" id="#number" placeholder="+91 8840091275" />
          </div>
        </div>
        </FormGroup>

      <Button className="text-center" outline size="md" className="mt-3" theme="success">
              Save
      </Button>
        </Form>
    </CardBody>        
  </Card>
)
}
}

const Add1Form = withFormik({
  mapPropsToValues: () => ({ Address: "",city: " " }),
  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.Address) {
      errors.Address = "Please enter the correct chahracter !";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Address)) {
}
    else if (!/^[0-9]+$/.test(values.Hname)) {
      errors.Hname = "Not valid number !"
          errors.Address = " Please character only !";
        }
    if (!values.city) {
      errors.city = "Please enter the correct chahracter !";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.city)) {
}
    return errors;
  },
      handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      },
      displayName: "Add1Form"
    })(Add1);
export default Add1Form;  