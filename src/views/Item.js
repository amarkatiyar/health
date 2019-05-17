// @ Author Manohar
import React, { Component } from "react";
import { Row, Col, FormInput, CardHeader, Button } from "shards-react";
import { withFormik } from "formik";
import axios from 'axios';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleShowItem: false,
    }
  };
  handleShowItem = () => {
    this.props.handleHideItem();
  }
  componentDidMount = () => {
    sessionStorage.setItem('Item/Service', '');
    sessionStorage.setItem('Price', '');
    sessionStorage.setItem('Quantity', '');
    sessionStorage.setItem('Amount', '');
    console.log(sessionStorage.getItem('FirstName'));
    console.log(sessionStorage.getItem('Price'));
    console.log(sessionStorage.getItem('Quantity'));
    console.log(sessionStorage.getItem('Amount'));
    // let email = sessionStorage.getItem("email");
  }
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
      <Row>
        <Col>
          <CardHeader className="border-bottom" style={{ width: "800px", height: "430px" }}>
            <div className="row mb-3">
              <div className="col-lg-12 text-left">
                <a onClick={() => this.handleShowItem()}><i className="fa fa-arrow-left mt-2 mr-2" style={{ cursor: "pointer" }} title="cancle"></i></a>Item/Service
            </div>

            </div>
            <h6 className="text-left" style={{ height: "35px", background: "#f0f0f0" }}>&nbsp;&nbsp;<small>Search select item/service, enter price and quantity</small></h6>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <h6><small><b>Item/Service *</b></small></h6><br></br>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                  <FormInput
                    className="bg-light"
                    type="text"
                    placeholder="Search or Enter Item/Service"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.item}
                    name="item"
                  />
                  {errors.item && touched.item && (
                    <div className="text-danger small text-left" id="feedback">
                      {errors.item}
                    </div>
                  )}
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <h6><small><b>Price *</b></small></h6><br></br>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                  <FormInput
                    className="bg-light"
                    type="text"
                    placeholder="Price"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                    name="price"
                  />
                  {errors.price && touched.price && (
                    <div className="text-danger small text-left" id="feedback">
                      {errors.price}
                    </div>
                  )}

                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <h6><small><b>Quantity *</b></small></h6><br></br>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                  <FormInput
                    className="bg-light"
                    type="text"
                    placeholder="Quantity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.qyt}
                    name="qyt"
                  />
                  {errors.qyt && touched.qyt && (
                    <div className="text-danger small text-left" id="feedback">
                      {errors.qyt}
                    </div>
                  )}

                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                  <h6><small><b>Amount *</b></small></h6><br></br>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                  <FormInput
                    className="bg-light"
                    type="text"
                    placeholder="NaN"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                    name="price"
                  />
                  {errors.price && touched.price && (
                    <div className="text-danger small text-left" id="feedback">
                      {errors.price}
                    </div>
                  )}
                </div>
              </div>
              <span className="text-muted "><i className="far fa-star mr-3 "></i><small><b>Add as favorite</b></small></span>
              <div class="col-xs-6 mt-3 mb-5 ">
                <span><Button outline theme="success">Save</Button></span>
              </div>
            </form>
          </CardHeader>
        </Col>
      </Row>
    )
  }
}
const ItemForm = withFormik({
  mapPropsToValues: () => ({ item: "", price: "", qyt: "", nan: "" }),
  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.item) {
      errors.item = "Please enter the item/service !";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.item)) {
      errors.item = " Please character only !";
    }

    if (!values.price) {
      errors.price = "Please enter the price !"
    } else if (!/^[-+]?[0-9]+\.[0-9]+$/.test(values.price)) {
      errors.price = "Not valid number !"
    }

    if (!values.qyt) {
      errors.qyt = "Please enter the quantity !";
    } else if (!/^[0-9]+$/.test(values.qyt)) {
      errors.qyt = " Not valid number !";
    }

    if (!values.price) {
      errors.price = "Please enter the amount !"
    } else if (!/^[-+]?[0-9]+\.[0-9]+$/.test(values.price)) {
      errors.price = "Not valid number !"
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

    axios.post(`http://192.168.0.115:5001/signup`, values)
      .then(function (response) {
        const res = response;
        console.log(res);
        // console.log("axios");

        if (res.status === 200) {
          // sessionStorage.setItem("", res.data.status);
          sessionStorage.setItem("success", true);
        }
        else {
          // wrong pws    login fail
        }
      })
      .catch(function () {
        console.log("Server issue / no data found");
      });
  },
  displayName: "ItemForm"
})(Item);
export default ItemForm;
