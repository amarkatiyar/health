import React from "react";
import {
  Button,
  Card,
  CardBody,
  FormInput,
  FormGroup,
  FormSelect
} from "shards-react";
import { withFormik } from "formik";

class Patient extends React.Component {
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
      <div className="container mb-3 mt-3">
        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
          <Card>
            <CardBody>
              <h6 className="ml-4 text-success">CREATE PATIENT ACCOUNT</h6>
              <p className="ml-4">
                <small>
                  Enter new patient's First name, Last name, Gender and press
                  the create Button
                </small>
              </p>

              <form onSubmit={handleSubmit}>
                <div className="container">
                  <FormGroup>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                        <label htmlFor="firstname">Firstname*</label>
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
                        {errors.Firstname && touched.Firstname && (
                          <div className="text-warning " id="feedback">
                            {errors.Firstname}
                          </div>
                        )}
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                        <label htmlFor="lastname">Lastname*</label>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                        <FormInput
                          type="text"
                          placeholder="lastname"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastname}
                          name="lastname"
                        />
                        {errors.lastname && touched.lastname && (
                          <div className="text-warning " id="feedback">
                            {errors.lastname}
                          </div>
                        )}
                      </div>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                        <label htmlFor="#Gender">Gender*</label>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                        <FormSelect>
                          <option value="first">Male</option>
                          <option value="second">Female</option>
                          <option value="third">Other</option>
                        </FormSelect>
                      </div>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                        <label htmlFor="#date">Date of Birth</label>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                        <FormInput id="#date" placeholder="10/07/96" />
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
                          value={values.email1}
                          name="email1"
                        />
                        {errors.email1 && touched.email1 && (
                          <div className="text-warning " id="feedback">
                            {errors.email1}
                          </div>
                        )}
                      </div>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                        <label htmlFor="#number">Mobile</label>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                        <FormInput
                          type="number"
                          placeholder="+91 8840091275"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.Number}
                          name="Number"
                        />
                        {errors.Number && touched.Number && (
                          <div className="text-warning " id="feedback">
                            {errors.Number}
                          </div>
                        )}
                      </div>
                    </div>
                  </FormGroup>

                  <span className="text-center">
                    <Button
                      type="submit"
                      className="font-weight-bold mr-3"
                      style={{ height: "30px", width: "100px" }}
                      outline
                      theme="success"
                    >
                      <i className="fas fa-check" />
                      &nbsp; &nbsp;Create
                    </Button>

                    
                      {/* <Button
                        className="font-weight-bold"
                        style={{ height: "30px", width: "100px" }}
                        outline
                        theme="success"
                      >
                        <i className="fas fa-times" />
                        &nbsp; Cancel
                      </Button>
                   */}
                  </span>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

const Patientform = withFormik({
  mapPropsToValues: () => ({ Firstname: "" }),
  mapPropsToValues: () => ({ lastname: "" }),
  mapPropsToValues: () => ({ email1: "" }),
  mapPropsToValues: () => ({ password: "" }),
  mapPropsToValues: () => ({ Number: "" }),
  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.Firstname) {
      errors.Firstname = "**please enter the firstname ! **";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Firstname)) {
      errors.Firstname = " **please enter the character only ! **";
    }

    if (!values.lastname) {
      errors.lastname = "**please enter the lastname ! **";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.lastname)) {
      errors.lastname = " **please enter the character only ! **";
    }

    if (!values.email1) {
      errors.email1 = "**please enter the email id ! **";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email1)
    ) {
      errors.email1 = "**Invalid email address**";
    }

    if (!values.password) {
      errors.password = "**Password is required ! **";
    } else if (values.password.length < 6) {
      errors.password = "**Password has to be longer than 6 characters ! **";
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
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "Patient"
})(Patient);

export default Patientform;
