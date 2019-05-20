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
import pic from './pic/white-background.jpg';
import { withFormik } from 'formik';
import axios from 'axios';

class signup extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      collapseOpen: false,
      open: false,
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


  componentDidMount = () => {
    sessionStorage.setItem('email' ,'');
    sessionStorage.setItem('password', '');
     console.log(sessionStorage.getItem('email'));
     console.log(sessionStorage.getItem('password'));
    let email = sessionStorage.getItem("email");
    
    
  }
  render() {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
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
                    <h6 className="text-white"> Contact Us </h6>
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
            <h3 className="text-white font-weight-bold">
              CREATE&nbsp; YOUR&nbsp; HEALTHCARE &nbsp;ACCOUNT
            </h3>
          </div>

          <div className="row mt-5 mb-5">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <Card
                className="pb-2 pt-2"
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
                        placeholder="First Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Firstname}
                        name="Firstname"
                      />
                      
                    </div>
                    {errors.Firstname && touched.Firstname && <div className="text-warning pb-3" id="feedback">{errors.Firstname}</div>}

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i class=" text-dark fas fa-user" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Lastname}
                        name="Lastname"
                      />
                    </div>
                    {errors.Lastname && touched.Lastname && <div className="text-warning pb-3" id="feedback">{errors.Lastname}</div>}

                    <div className="input-group mb-3 ">
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
                        value={values.email}
                        name="email"
                      />
                    </div>
                    {errors.email && touched.email && <div className="text-warning pb-3" id="feedback">{errors.email}</div>}

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i class=" text-dark fas fa-unlock-alt" />
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                         name="password"
                      />
                    </div>
                    {errors.password && touched.password && <div className="text-warning pb-3" id="feedback">{errors.password}</div>}

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

                    <div className="form-check mt-3 ml-2">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        class="form-check-label text-white "
                        for="exampleCheck1"
                      >
                        I agree to the Datagrazp.com
                      </label>
                      <a href="#">
                        <span className="pl-3 text-white">
                          Terms and Conditions
                        </span>
                      </a>
                    </div>

                    <div className="mt-3 mb-2 text-center ">
                      <Button type="submit"  id="TooltipExample"className="pl-5 pr-5" outline theme="white">
                        <i class="fas fa-user-plus" />&nbsp; &nbsp; Signup
                      </Button>
                      <Tooltip
                        open={this.state.open}
                        target="#TooltipExample"
                        toggle={this.toggle}
                      >
                        <span className="font-weight-bold text-warning">please signup !</span>
                      </Tooltip>
                    </div>
                  </form>
                </div>
              </Card>
            </div>

            <div className="col-md-8">
            <div className="pic">
          <img src={pic} style={{width:"100%",height:"430px"}} />
          </div>
            
            </div>
          </div>
        </div>

        <div className="container-fluid bg-dark">
          <div className="container ">
            <div className="row pt-4">
              <div className="col-md-3 ">
                <div>
                  <a href="home">
                    <h6 className="text-white p-0">Home</h6>
                  </a>
                </div>
                <div>
                  {" "}
                  <a href="Aboutus">
                    <h6 className="text-white p-0">Abount Us</h6>
                  </a>
                </div>
                <div>
                  {" "}
                  <a href="Services">
                    <h6 className="text-white p-0">Services</h6>
                  </a>
                </div>
                <div>
                  {" "}
                  <a href="Contact">
                    <h6 className="text-white p-0">Contact Us</h6>
                  </a>
                </div>
                <div>
                  {" "}
                  <a href="signin">
                    <h6 className="text-white p-0">Signin</h6>
                  </a>
                </div>
                <div>
                  {" "}
                  <a href="signup">
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

const SignupForm = withFormik({
  mapPropsToValues: () => ({ Firstname: '' }),
  mapPropsToValues: () => ({ Lastname: '' }),
  mapPropsToValues: () => ({ email: '' }),
  mapPropsToValues: () => ({ password: '' }),
  mapPropsToValues: () => ({ Number: '' }),
  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.Firstname) {
      errors.Firstname = '**please enter the firstname ! **';
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Firstname)) {
      errors.Firstname = ' **please enter the character only ! **';
    }

    if (!values.Lastname) {
      errors.Lastname = '**please enter the lastname ! **';
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Lastname)) {
      errors.Lastname = ' **please enter the character only ! **';
    }

    if (!values.email) {
      errors.email = '**please enter the email id ! **';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = '**Invalid email address**';
    }
   
    // if (!values.password) {
    //   errors.password = 'please enter the password';
    // } else if (!/^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/i.test(values.email)) {
    //   errors.password = 'Invalid email address';
    // }
    if (!values.password) {
      errors.password = '**Password is required ! **'
    } else if (values.password.length < 6) {
      errors.password = '**Password has to be longer than 6 characters ! **'
    }
    if (!values.Number) {
      errors.Number = '**enter the phone number ! **'
     }else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.Number)) {
      errors.Number = '**Not valid number ! **'
     }
  






     return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    // setTimeout(() => {
    //    alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 1000);

    axios.post(`http://172.20.10.2:5001/signup`, values)
            .then(function(response) {
              const res = response;
              console.log(res);
              // console.log("axios");
                           
              // if (res.status === 200) {
              //   sessionStorage.setItem("Username", res.data.docID);
              //   sessionStorage.setItem("isLoggedIn", true);
              // }
              // else{
                // wrong pws    login fail
              // }
  
            })
            .catch(function() {
              console.log("Server issue / no data found");
            });
  },

  displayName: 'SignUp',
})(signup);

export default SignupForm;