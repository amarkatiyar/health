
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
import { withFormik } from "formik";

class Profile extends React.Component {
  
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
      <div style={{ zIndex: 999 }}>
              <div className="container">
                    <Card className="mb-2">
                      <CardBody>
                        <Row className="mt-0">
                          <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                            <h6>
                              <i
                                class="fas fa-arrow-left text-dark mr-3"
                               
                              />
                              Name
                            </h6>
                          </div>
                          <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                            <i class="fas fa-check text-dark" />
                          </div>
                        </Row>
                        <form onSubmit={handleSubmit}>
                          <FormGroup>
                            <div className="row">
                              <div className=" col-xl-4 col-lg-4  col-md-4 col-sm-4 col-4">
                                <label htmlFor="#emailid">Email id</label>
                              </div>
                              <div className=" col-xl-8 col-lg-8  col-md-8 col-sm-8 col-8">
                                <FormInput
                                  type="email"
                                  
                                  placeholder="email id"
                                 onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                name="email"
                                />
                                {errors.email && touched.email && <div className="text-warning pb-3" id="feedback">{errors.email}</div>}

                              </div>

                            </div>
                          </FormGroup>

                          <FormGroup>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <label htmlFor="#Firstname">Firstname</label>
                              </div>
                              <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                                <FormInput
                                  type="text"
                                  
                                  placeholder="firstname"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.Firstname}
                                  name="Firstname"
                                />
                                 {errors.Firstname && touched.Firstname && <div className="text-warning pb-3" id="feedback">{errors.Firstname}</div>}
                              </div>
                            </div>
                          </FormGroup>

                          <FormGroup>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <label htmlFor="#Lastname">Lastname</label>
                              </div>
                              <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                                <FormInput
                                  type="text"
                          
                                  placeholder="Lastname"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.Lastname}
                                  name="Lastname"
                                />
                                 {errors.Lastname && touched.Lastname && <div className="text-warning pb-3" id="feedback">{errors.Lastname}</div>}
                              </div>
                            </div>
                          </FormGroup>

                          <FormGroup>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <label htmlFor="#number">Mobile Number</label>
                              </div>
                              <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                                <FormInput
                                  type="number"
                                  
                                  placeholder="mobile number"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.Number}
                                  name="Number"
                                />
                                {errors.Number && touched.Number && <div className="text-warning pb-3" id="feedback">{errors.Number}</div>}
                              </div>
                            </div>
                          </FormGroup>

                          <FormGroup>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <label htmlFor="#id"> id</label>
                              </div>
                              <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                                <FormInput
                                  type="text"
                                  
                                  placeholder=" National,License or Passport"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.id}
                                  name="id"
                                />
                                {errors.id && touched.id && <div className="text-warning pb-3" id="feedback">{errors.id}</div>}

                              </div>
                            </div>
                          </FormGroup>

                          <FormGroup>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <label for="exampleFormControlTextarea1">
                                  CARE TEAM MEMBER
                                </label>
                              </div>
                              <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                                <textarea
                                  class="form-control bg-light"
                                  
                                  rows="3"
                                  placeholder="user by name id emailid"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.care}
                                  name="care"
                                />
                                {errors.care && touched.care && <div className="text-warning pb-3" id="feedback">{errors.care}</div>}


                              </div>
                            </div>
                          </FormGroup>

                    
                            <Button type="submit"
                              className="mr-2 text-weight-bold"
                              outline
                              theme="success"
                            >
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

const Profileform = withFormik({
  mapPropsToValues: () => ({ Firstname: "" }),
  mapPropsToValues: () => ({ Lastname: "" }),
  mapPropsToValues: () => ({ email: "" }),
  mapPropsToValues: () => ({ id: "" }),
  mapPropsToValues: () => ({ Number: "" }),
  mapPropsToValues: () => ({ care: "" }),
    // Custom sync validation
    validate: values => {
      const errors = {};
  
     
    if (!values.Firstname) {
      errors.Firstname = "**please enter the firstname ! **";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Firstname)) {
      errors.Firstname = " **please enter the character only ! **";
    }

    if (!values.Lastname) {
      errors.Lastname = "**please enter the lastname ! **";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Lastname)) {
      errors.Lastname = " **please enter the character only ! **";
    }

    if (!values.email) {
      errors.email = "**please enter the email id ! **";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "**Invalid email address**";
    }

    if (!values.id) {
      errors.id = "** Id is required ! **";
    } else if (values.id.length < 5) {
      errors.password = "**ID has to be longer than 5 characters ! **";
    }
    if (!values.Number) {
      errors.Number = "**enter the phone number ! **";
    } else if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.Number)
    ) {
      errors.Number = "**Not valid number ! **";
    }
     
    if (!values.care) {
      errors.care = "**please some text ! **";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.care)) {
      errors.care = " **please enter the character only ! **";
    }

    return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'Profile',
  })(Profile);



export default Profileform;