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

class Alternatecontact extends React.Component {
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
          <Card>
            <CardBody>
              <Row className="mt-0">
                <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                  <h6>
                    <i class="fas fa-arrow-left text-dark mr-3" />
                    Alternatecontact
                  </h6>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                  <i class="fas fa-check text-dark" />
                </div>
              </Row>
              {/* *****************************************************************##### */}
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#Full Name">Full Name</label>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                      <FormInput
                        placeholder="enter the full name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Fullname}
                        name="Fullname"
                      />
                      {errors.Fullname && touched.Fullname && (
                        <div className="text-warning pb-3" id="feedback">
                          {errors.Fullname}
                        </div>
                      )}
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="row">
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#contactnumber">Contact Number</label>
                    </div>
                    <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                      <FormInput
                        type="number"
                        placeholder="enter the number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.contactnumber}
                        name="contactnumber"
                      />
                      {errors.contactnumber && touched.contactnumber && (
                        <div className="text-warning pb-3" id="feedback">
                          {errors.contactnumber}
                        </div>
                      )}
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="row">
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#Country">Country</label>
                    </div>

                    <div className=" col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                      <FormSelect>
                        <option value="first">India</option>
                        <option value="second">Pakistan</option>
                        <option value="third">England</option>
                      </FormSelect>
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

const Alternatecontactform = withFormik({
  mapPropsToValues: () => ({ Fullname: "" }),
  mapPropsToValues: () => ({ contactnumber: "" }),

  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.Fullname) {
      errors.Fullname = "**please enter the fullname ! **";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Fullname)) {
      errors.Fullname = " **please enter the character only ! **";
    }

    if (!values.contactnumber) {
      errors.contactnumber = "**enter the phone number ! **";
    } else if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(
        values.contactnumber
      )
    ) {
      errors.contactnumber = "**Not valid number ! **";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "Alternatecontact"
})(Alternatecontact);

export default Alternatecontactform;
