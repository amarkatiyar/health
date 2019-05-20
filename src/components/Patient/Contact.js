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

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddress: false
    };
  }

  handleShowAddress = (e, showAddress) => {
    this.props.handleShowAddress(showAddress);
  };

  render() {
    let { showAddress } = this.state;
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
                <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                  <h6>
                    <i
                      class="fas fa-arrow-left text-dark mr-3"
                      onClick={e => this.handleShowAddress(e, !showAddress)}
                    />
                    Contact
                  </h6>
                </div>
                <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  <i class=" fas fa-check text-dark" />
                </div>
              </Row>
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <div className="row">
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#Address1">Address</label>
                    </div>
                    <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                      <FormInput
                        type="text"
                        placeholder="enter the address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Address}
                        name="Address"
                      />
                      {errors.Address && touched.Address && (
                        <div className="text-warning pb-3" id="feedback">
                          {errors.Address}
                        </div>
                      )}
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="row">
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#City">City</label>
                    </div>
                    <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                      <FormInput
                        type="text"
                        placeholder="enter the city"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city}
                        name="city"
                      />
                      {errors.city && touched.city && (
                        <div className="text-warning pb-3" id="feedback">
                          {errors.city}
                        </div>
                      )}
                    </div>
                  </div>
                </FormGroup>

                <div class="form-group">
                  <div className="row">
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#Country">Country</label>
                    </div>
                    <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                      <FormSelect
                        name="Country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Country}
                        name="Country"
                      >
                       <option value="first">
                          --select Country--
                        </option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="England">England</option>
                      </FormSelect>

                      {errors.Country && touched.Country && (
                        <div className="input-feedback">{errors.Country}</div>
                      )}
                    </div>
                  </div>
                </div>





                <FormGroup>
                  <div className="row">
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#state/province">State/Province</label>
                    </div>
                    <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                      <FormSelect  name="state"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.state}
                        >
                      <option value="first">
                          --select state--
                        </option>
                        <option value="uttar pradesh">uttar pradesh</option>
                        <option value="bihar">bihar</option>
                        <option value="Asaam">Assam</option>
                      </FormSelect>
                      {errors.state && touched.state && (
                        <div className="input-feedback text-warning">{errors.state}</div>
                      )}
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="row">
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="ZIP/Postal Code">ZIP/Postal Code</label>
                    </div>
                    <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                      <FormInput
                        type="number"
                        placeholder="ZIP/Postal Code"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.zipcode}
                        name="zipcode"
                      />
                      {errors.zipcode && touched.zipcode && (
                        <div className="text-warning pb-3" id="feedback">
                          {errors.zipcode}
                        </div>
                      )}
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="row">
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#Number"> phone Number</label>
                    </div>
                    <div className=" col-xl-8 col-lg-8  col-md-8 col-sm-8 col-8">
                      <FormInput
                        type="number"
                        placeholder="number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneno}
                        name="phoneno"
                      />
                      {errors.phoneno && touched.phoneno && (
                        <div className="text-warning pb-3" id="feedback">
                          {errors.phoneno}
                        </div>
                      )}
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="row">
                    <div className=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                      <label for="exampleFormControlTextarea1">Notes</label>
                    </div>
                    <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                      <textarea
                        class="form-control"
                        rows="3"
                        placeholder="notes"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.note}
                        name="note"
                      />
                      {errors.note && touched.note && (
                        <div className="text-warning pb-3" id="feedback">
                          {errors.note}
                        </div>
                      )}
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

const Contactform = withFormik({
  mapPropsToValues: () => ({ Address: "" }),
  mapPropsToValues: () => ({ city: "" }),
  mapPropsToValues: () => ({ zipcode: "" }),
  mapPropsToValues: () => ({ Country: "" }),
  mapPropsToValues: () => ({ state: "" }),
  mapPropsToValues: () => ({ phoneno: "" }),
  mapPropsToValues: () => ({ note: "" }),
  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.Address) {
      errors.Address = "**please enter the Address ! **";
    }
    
    if (!values.city) {
      errors.city = "**please enter the city ! **";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.city)) {
      errors.city = " **please enter the character only ! **";
    }

    if (!values.zipcode) {
      errors.zipcode = "**enter the zipcode ! **";
    }

    if (!values.state) {
      errors.state = "**please select state ! **";
    }

    if (!values.Country) {
      errors.Country = "**please select Country ! **";
    }
    // if (!values.Country) {
    //   errors.Country = "**please chose city! **";
    // }

    if (!values.phoneno) {
      errors.phoneno = "**enter the phone number! **";
    } else if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(
        values.phoneno
      )
    ) {
      errors.phoneno = "**Not valid number ! **";
    }

    if (!values.note) {
      errors.note = "**please enter the note ! **";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.note)) {
      errors.note = " **please enter the character only ! **";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "Contact"
})(Contact);

export default Contactform;
