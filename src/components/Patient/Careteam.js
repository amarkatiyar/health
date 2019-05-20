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

class Careteam extends React.Component {
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
          <Card className="mb-3">
            <CardBody>
              <Row className="mt-0">
                <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                  <h6>
                    <i class="fas fa-arrow-left text-dark mr-3" />
                    CARE TEAM MEMBER
                  </h6>
                </div>
                <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                  <i class="fas fa-check text-dark" />
                </div>
              </Row>
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <label for="exampleFormControlTextarea1">
                    CARE TEAM MEMBER
                  </label>
                  <textarea
                    class="form-control bg-light"
                    rows="3"
                    placeholder="user by name id emailid"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Caremember}
                    name="Caremember"
                  />
                  {errors.Caremember && touched.Caremember && (
                    <div className="text-warning pb-3" id="feedback">
                      {errors.Caremember}
                    </div>
                  )}
                </FormGroup>

                <Button type="submit" className="mr-2" outline theme="success">
                  &nbsp; Save
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

const Careteamform = withFormik({
  mapPropsToValues: () => ({ Caremember: "" }),

  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.Caremember) {
      errors.Caremember = "**please enter the email id ! **";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Caremember)
    ) {
      errors.Caremember = "**Invalid email address**";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "Careteam"
})(Careteam);

export default Careteamform;
