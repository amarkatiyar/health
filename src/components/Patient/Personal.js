
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

class Personal extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
       
      showPersonal: false
     };
  }
  
  handleshowPersonal = (e, showPersonal) => {
     this.props.   handleshowPersonal(showPersonal);
    };
  
    render() {
      let {showPersonal } = this.state;
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
                <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                  <h6>
                    <i
                      class="fas fa-arrow-left mr-3 text-dark"
                      onClick={(e) => this.  handleshowPersonal(e, !showPersonal)}
                     
                    />
                    Personal
                  </h6>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                  <i class="fas fa-check text-dark" />
                </div>
              </Row>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#Country">Gender</label>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <FormSelect  name="Gender"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Gender}>
                         <option value="first">
                          --select Gender--
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </FormSelect>
                      {errors.Gender && touched.Gender && (
                        <div className="input-feedback text-warning">{errors.Gender}</div>
                      )}
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 ">
                      <label htmlFor="Date of Birth">
                        Date of Birth
                      </label>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <FormInput
                       name="date"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.date}
                        type="text"
                        placeholder="10/07/96"
                      />
                       {errors.date && touched.date && (
                        <div className="input-feedback text-warning">{errors.date}</div>
                      )}
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#state/province">
                        Blood Group
                      </label>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                      <FormSelect  name="Blood"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.Blood}>
                        <option value="first">
                          --select Blood Group--
                        </option>
                        <option value="O postive">O postive</option>
                        <option value="O neagtive">O neagtive</option>
                        <option value="A postive">A postive</option>
                        <option value="A neagtive">A neagtive</option>
                        <option value="B postive">B postive</option>
                        <option value="B neagtive">B neagtive</option>
                      </FormSelect>
                      {errors.Blood && touched.Blood && (
                        <div className="input-feedback text-warning">{errors.Blood}</div>
                      )}
                    </div>
                  </div>
                </FormGroup>

                <FormGroup>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <label htmlFor="#state/province">
                        Marital Status
                      </label>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                      <FormSelect
                       name="status"
                       onChange={handleChange}
                       onBlur={handleBlur}
                       value={values.status}>
                        <option value="first">
                          --select Marital Status--
                        </option>
                        <option value="Single">Single</option>
                        <option value="married">married</option>
                        <option value="Divorce">Divorce</option>
                        <option value="Widowed">Widowed</option>
                      </FormSelect>
                      {errors.status && touched.status && (
                        <div className="input-feedback text-warning">{errors.status}</div>
                      )}
                    </div>
                  </div>
                </FormGroup>

              
                  <Button className="mr-2" outline theme="success">
                    {" "}
                    &nbsp; Save{" "}
                  </Button>
      
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

const Personalform = withFormik({
  mapPropsToValues: () => ({ Gender: "" }),
  mapPropsToValues: () => ({ date: "" }),
  mapPropsToValues: () => ({ Blood: "" }),
  mapPropsToValues: () => ({ status: "" }),
  // mapPropsToValues: () => ({ state: "" }),
  // mapPropsToValues: () => ({ phoneno: "" }),
  // mapPropsToValues: () => ({ note: "" }),
  // // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.Gender) {
      errors.Gender = "**please select the Gender ! **";
    }
    if (!values.date) {
      errors.date = "**please enter the date ! **";
    }
    if (!values.Blood) {
      errors.Blood = "**please select the Blood Group ! **";
    }
    if (!values.status) {
      errors.status = "**please select the Matrial status **";
    }
    
    // if (!values.city) {
    //   errors.city = "**please enter the city ! **";
    // } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.city)) {
    //   errors.city = " **please enter the character only ! **";
    // }

    // if (!values.zipcode) {
    //   errors.zipcode = "**enter the zipcode ! **";
    // }

    // if (!values.state) {
    //   errors.state = "**please select state ! **";
    // }

    // if (!values.Country) {
    //   errors.Country = "**please select Country ! **";
    // }
    // if (!values.Country) {
    //   errors.Country = "**please chose city! **";
    // }

    // if (!values.phoneno) {
    //   errors.phoneno = "**enter the phone number! **";
    // } else if (
    //   !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(
    //     values.phoneno
    //   )
    // ) {
    //   errors.phoneno = "**Not valid number ! **";
    // }

    // if (!values.note) {
    //   errors.note = "**please enter the note ! **";
    // } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.note)) {
    //   errors.note = " **please enter the character only ! **";
    // }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "Personal"
})(Personal);

export default Personalform;