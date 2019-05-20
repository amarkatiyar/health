import React from "react";

// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  Card,
  Button,
  Tooltip,
  CardImg,
  FormInput,
  section,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Collapse
} from "shards-react";
import pic from './pic/hd-contact.jpg';
import { withFormik } from "formik";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false,
      open: false
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
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
      <div>
        <Navbar type="dark" expand="md" style={{ backgroundColor: "darkcyan" }}>
          <div className="container">
            <NavbarBrand href="#">
              <h5 className="text-white font-weight-bold">Health Care</h5>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} />

            <Collapse open={this.state.collapseOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink className="p-2 px-3 " active href="./home">
                    <h6 className="text-white"> Home</h6>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="p-2 px-3 " active href="./Aboutus">
                    <h6 className="text-white">About us</h6>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="p-2 px-3 " active href="./Services">
                    <h6 className="text-white"> Services </h6>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="p-2  px-3 " active href="./Contact">
                    <h6 className="text-white"> Contact </h6>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="p-2 px-3 " active href="./signin">
                    <h6 className="text-white"> Signin</h6>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="p-2  px-3" active href="./signup">
                    <h6 className="text-white"> Signup</h6>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <div className="container">
          <div
            className="mt-5 p-3 text-center"
            style={{ backgroundColor: "darkcyan" }}
          >
            <h3 className="text-white font-weight-bold">CONTACT</h3>
          </div>

          <div className="row mt-5 mb-5">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <Card
                className="pb-3 pt-3 mb-5"
                style={{ backgroundColor: "darkcyan" }}
              >
                <div className="card-body ">
                  <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i class=" text-dark fas fa-user" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        name="username"
                      />
                    </div>
                    {errors.username && touched.username && <div className="text-warning pb-3" id="feedback">{errors.username}</div>}

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i class="fas fa-envelope-open-text text-dark" />
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.emal1}
                        name="email1"
                      />
                    </div>
                    {errors.email1 && touched.email1 && <div className="text-warning pb-3" id="feedback">{errors.email1}</div>}
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i class="fas fa-phone text-dark" />
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="91+ Enter your mobile number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Number}
                        name="Number"
                      />
                    </div>
                    {errors.Number && touched.Number && <div className="text-warning pb-3" id="feedback">{errors.Number}</div>}

                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        rows="3"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        name="message"
                      />
                    </div>
                    {errors.message && touched.message && <div className="text-warning pb-3" id="feedback">{errors.message}</div>}
                    <div className="mt-3 mb-2 text-center ">
                      <Button
                        id="TooltipExample"
                        className="pl-5 pr-5"
                        outline
                        theme="white"
                      >
                        <i class="fas fa-share-square" />&nbsp; Send Message
                      </Button>
                      <Tooltip
                        open={this.state.open}
                        target="#TooltipExample"
                        toggle={this.toggle}
                      >
                        <span className="font-weight-bold text-warning">
                          {" "}
                          Welcome please contact us!
                        </span>
                      </Tooltip>
                    </div>
                  </form>
                </div>
              </Card>
            </div>

            <div className="col-md-8 col-sm-12 col-12 col-lg-8">
            <div className="pic">
          <img src={pic} style={{width:"100%",height:"370px"}} />
          </div>
            
            </div>
          </div>
        </div>

        <div className="container-fluid bg-dark">
          <div className="container ">
            <div className="row pt-4">
              <div className="col-md-3 ">
                <div>
                  <a href="./home">
                    <h6 className="text-white p-0">Home</h6>
                  </a>
                </div>
                <div>
                  {" "}
                  <a href="./Aboutus">
                    <h6 className="text-white p-0">Abount Us</h6>
                  </a>
                </div>
                <div>
                  {" "}
                  <a href="./Services">
                    <h6 className="text-white p-0">Services</h6>
                  </a>
                </div>
                <div>
                  {" "}
                  <a href="./Contact">
                    <h6 className="text-white p-0">Contact Us</h6>
                  </a>
                </div>
                <div>
                  {" "}
                  <a href="./signin">
                    <h6 className="text-white p-0">Signin</h6>
                  </a>
                </div>
                <div>
                  {" "}
                  <a href="./signup">
                    <h6 className="text-white p-0">Signup</h6>
                  </a>
                </div>
              </div>
              <div className="col-md-9 mt-5 text-center">
                <i className="fab fa-facebook px-5 text-white" />
                <i className="fab fa-twitter-square text-white px-5" />
                <i className="fab fa-linkedin text-white px-5" />
                <i className="fab fa-google text-white px-5" />
                <i className="fab fa-youtube text-white px-5" />
                <div className=" pt-5 footer-copyright text-center py-3 text-white">
                  © 2019 Copyright:
                  <a href="http://www.datagrazp.com/"> Datagrazp.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const ContactForm = withFormik({
  mapPropsToValues: () => ({ username: "" }),
  // mapPropsToValues: () => ({ Lastname: '' }),
  mapPropsToValues: () => ({ email1: "" }),
  // mapPropsToValues: () => ({ password: "" }),
  mapPropsToValues: () => ({ Number: "" }),
  
  mapPropsToValues: () => ({ message: "" }),
  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.username) {
      errors.username = "**please enter the name ! **";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.username)) {
      errors.username = " **please enter the character only ! **";
    }
    
    
    if (!values.message) {
      errors.message = "**please some text ! **";
    // } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.username)) {
    //   errors.message = " **please enter the character only ! **";
    }
    // if (!values.Lastname) {
    //   errors.Lastname = "**please enter the lastname ! **";
    // } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Lastname)) {
    //   errors.Lastname = " **please enter the character only ! **";
    // }

    if (!values.email1) {
      errors.email1 = "**please enter the email id ! **";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email1)
    ) {
      errors.email1 = "**Invalid email address**";
    }

    // if (!values.password) {
    //   errors.password = 'please enter the password';
    // } else if (!/^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/i.test(values.email)) {
    //   errors.password = 'Invalid email address';
    // }
    // if (!values.password) {
    //   errors.password = "**Password is required ! **";
    // } else if (values.password.length < 6) {
    //   errors.password = "**Password has to be longer than 6 characters ! **";
    // }
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

  displayName: "Contact"
})(Contact);

export default ContactForm;
