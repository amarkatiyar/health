import React from 'react'
import {
    Row,Button, Card, CardBody,Form,FormGroup,
    FormSelect,FormInput 
    } from 'shards-react'
import { withFormik } from "formik";
import axios from 'axios';


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

 componentDidMount = () => {
  sessionStorage.setItem('firstname', '');     
  sessionStorage.setItem('city' ,'');
  sessionStorage.setItem('Country', '');
  sessionStorage.setItem('S_Province', '');
  sessionStorage.setItem('date', '');
  sessionStorage.setItem('number', '');
  sessionStorage.setItem('number1', '');
  
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
<Form onSubmit={handleSubmit}>
  <Card className="" style={{width:"500px",height:"550px"}}>
    <CardBody>
      <Row className="mt-0">
        <div  onClick ={()=>this.handleShowAdd1()} className="col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="fas fa-arrow-left mr-3"></i></h6></div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-2"><i className=""></i></div>          
      </Row>
        <FormGroup>
            <div className="row mt-1 ">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <label htmlFor="firstname">Address</label>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                <FormInput 
                  type="text" 
                  id="Address1" 
                  placeholder="Address1" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.item}
                  name="Address1"
                 />
                 {errors.Address1 && touched.Address1 && (
                                    <div className="text-danger small text-left" id="feedback">
                                    {errors.Address1}
                                    </div>
                                )}
                  <br></br>
                <FormInput 
                  type="text" 
                  id="Address2" 
                  placeholder="Address2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.item}
                  name="Address2"
                />
                {errors.Address2 && touched.Address2 && (
                                    <div className="text-danger small text-left" id="feedback">
                                    {errors.Address2}
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
                     id="City" 
                     placeholder="City"
                     onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.City}
                      name="City"
                  />
                  {errors.City && touched.City && (
                                    <div className="text-danger small text-left" id="feedback">
                                    {errors.City}
                                    </div>
                                )}
                  </div>
              </div>
            </FormGroup>

        <FormGroup>
          <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <label htmlFor="Country">Country</label>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-8">
              <FormSelect
              type="text"
              placeholder="Selected"
              name="Selected"
              value={values.Selected}
              onChange={handleChange}
              onBlur={handleBlur}
              >
                <option value="">Selected</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="America">America</option>
                <option value="Other"> Other</option>
              </FormSelect>
              {errors.Selected && touched.Selected && (<div className="text-danger small text-left" id="feedback">
                                        {errors.Selected}
                                    </div>)}
            </div>
          </div>
        </FormGroup>

        <FormGroup>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <label htmlFor="S_Province">State/Province</label>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-8">
              <FormSelect
              type="text"
              placeholder="select"
              name="select"
              value={values.selected}
              onChange={handleChange}
              onBlur={handleBlur}
              >
                <option value="select2"></option>
                <option value="select">Select/State Province</option>
              </FormSelect>
              {errors.select && touched.select && (<div className="text-danger small text-left" id="feedback">
                                        {errors.select}
                                    </div>)}
            </div>
          </div>
        </FormGroup>


        <FormGroup>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <label htmlFor="date">Zip/Postal Code</label>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-8">
              <FormInput 
              id="Postalcode" 
              placeholder="Postalcode"
              value={values.Postalcode}
              onChange={handleChange}
              onBlur={handleBlur}
              name="Postalcode"
              />
              {errors.Postalcode && touched.Postalcode && (<div className="text-danger small text-left" id="feedback">
                                        {errors.Postalcode}
                                    </div>)}
            </div>
          </div>
        </FormGroup>

        <FormGroup>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <label htmlFor="number">Phone1</label>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-8">
              <FormInput type="number" id="number" placeholder="+91 8840091275"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Number1}
              name="Number1"
              />
               {errors.Number1 && touched.Number1 && (
                 <div className="text-danger small text-left " id="feedback">
                    {errors.Number1}
                  </div>
            )}
            </div>
          </div>
        </FormGroup>

        <FormGroup>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <label htmlFor="number1">Phone2</label>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-8">
            <FormInput type="number" id="Number2" placeholder="+91 8840091275" 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Number2}
            name="Number2"
            />
            {errors.Number2 && touched.Number2 && (
                 <div className="text-danger small text-left " id="feedback">
                    {errors.Number2}
                  </div>
            )}
          </div>
        </div>
        </FormGroup>

      <Button className="text-center" outline size="md" className="mt-3" theme="success">
              Save
      </Button>
    </CardBody>        
  </Card>
</Form>
)
}
}

const Add1Form = withFormik({
  mapPropsToValues: () => ({ Address1:"",Address2: "",City:"",Selected:"",select:"",Postalcode:"",Number1:"",Number2:"" }),
  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.Address1) {
      errors.Address1 = "Please enter the correct chahracter !";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Address1)) {
    }
   else if (!/^[0-9]+$/.test(values.Address1)) {
            errors.Address1 = "Not valid number !"
    }
    if (!values.Address2) {
      errors.Address2 = "Please enter the correct chahracter !";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Address2)) {
    }
   else if (!/^[0-9]+$/.test(values.Address2)) {
            errors.Address2 = "Not valid number !"
    }

    if (!values.City) {
      errors.City = "Please enter the correct chahracter !";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.City)) {
      errors.City = "Not valid character !"
    }
    if (!values.Selected) {
      errors.Selected = "Please select the option !";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(values.Selected)) {
    }
    else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.subject)) {
      errors.subject = " Please select option !";
    }
    if (!values.select) {
      errors.select = "Please select the option !";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(values.select)) {
    }
    else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.subject)) {
      errors.subject = " Please select option !";
    }

    if (!values.Postalcode) {
      errors.Postalcode = "Please enter the correct code !";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Postalcode)) {
    }
   else if (!/^[0-9]+$/.test(values.Postalcode)) {
            errors.Postalcode = "Not valid number !"
    }
    if (!values.Number1) {
      errors.Number1 = "**enter the phone number ! **";
    } else if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.Number1)
    ) {
      errors.Number1 = "**Not valid number ! **";
    }

    if (!values.Number2) {
      errors.Number2 = "**enter the phone number ! **";
    } else if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.Number2)
    ) {
      errors.Number2 = "**Not valid number ! **";
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
    
    
    
          axios.post(`http://192.168.0.151:5001/Add1`, values)
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
      displayName: "Add1Form"
    })(Add1);
export default Add1Form;  