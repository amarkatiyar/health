
import React from "react";
import {
  Row,
  Button,
  Card,
  CardBody,
  FormInput,
  FormGroup,
} from "shards-react";
import { withFormik } from "formik";

class Compose extends React.Component {
  
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
              <div className="">
                <Card className="mt-2 mb-2">
                  <CardBody>
                    <Row className="pb-4">
                      <div className="col-lg-11 col-md-11 col-sm-10 col-10">
                        <h6>
                          <i class="fas fa-arrow-left text-dark "/>&nbsp; &nbsp; New
                          Message
                        </h6>
                      </div>
                      <div className="col-lg-1 col-md-1 col-sm-2 col-2">
                        <i class="fas fa-check" />
                      </div>
                    </Row>

                    < form onSubmit={handleSubmit}>
                      <FormGroup>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <label htmlFor="#To">To*</label>
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                            <select
                              class="form-control bg-light"
                              id="sel1"
                              name="sellist1"
                            >
                              <option value="">
                                Search by name kpid ,e-email here
                              </option>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                              <option value="4">Option 4</option>
                            </select>
                          </div>
                        </div>
                      </FormGroup>

                      <FormGroup>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4 ">
                            <label htmlFor="Date of Birth">subject:</label>
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                            <FormInput
                              className="bg-light"
                              type="text"
                              placeholder="subject"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.subject}
                               name="subject"
                
                            />
                             {errors.subject && touched.subject && <div className="text-warning " id="feedback">{errors.subject}</div>}

                          </div>
                        </div>
                      </FormGroup>

                      <FormGroup>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <label htmlFor="#message">
                              Message* &nbsp; &nbsp;<i class="far fa-star" />
                            </label>
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                            <textarea
                              class="form-control bg-light"
                              rows="3"
                              placeholder="Message"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                               name="message"
                
                          
                         
                            />
                             {errors.message && touched.message && <div className="text-warning " id="feedback">{errors.message}</div>}

                      
                          </div>
                        </div>
                      </FormGroup>
                      
                        <Button className="mr-2" outline theme="success">
                          {" "}
                          &nbsp; Send{" "}
                        </Button>
                      
                    </form>
                  </CardBody>
                </Card>
              </div>
            </div>
    );
  }
}

const Composeform = withFormik({
    mapPropsToValues: () => ({ subject: '' }),
    mapPropsToValues: () => ({ message: '' }),
    mapPropsToValues: () => ({ email1: '' }),
    mapPropsToValues: () => ({ password: '' }),
    mapPropsToValues: () => ({ Number: '' }),
    // Custom sync validation
    validate: values => {
      const errors = {};
  
      if (!values.subject) {
        errors.subject = '**please enter the subject ! **';
      } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.subject)) {
        errors.subject = ' **please enter the character only ! **';
      }
  
      if (!values.message) {
        errors.message = '**please some text ! **';
      } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.message)) {
        errors.message = ' **please enter the character only ! **';
      }
       return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'Compose',
  })(Compose);



export default Composeform;