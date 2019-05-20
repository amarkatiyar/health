import React from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  Tooltip,
  Collapse,
  
} from "shards-react";
import pic from './pic/banner_1-2.jpg';
import { withFormik } from "formik";
import axios from 'axios';

class signin extends React.Component {
  
 
    

  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false,
      top: false,
      bottom: false
    };
  }

  toggle(pos) {
    const newState = {};
    newState[pos] = !this.state[pos];
    this.setState({ ...this.state, ...newState });
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
    sessionStorage.setItem('Username' ,'');
    sessionStorage.setItem('Password', '');
     console.log(sessionStorage.getItem('Username'));
     console.log(sessionStorage.getItem('Password'));
    let Username = sessionStorage.getItem("Username");
    
    
  }

  render() {
    const {
      values,
      touched,
      errors,
      handleChange,
      history,
      handleBlur,
      handleSubmit
    } = this.props;

    if(sessionStorage.getItem("isLoggedIn")){
      history.push({pathname: '/blog-posts'})
    }
    
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
              CREATE&nbsp; YOUR &nbsp;HEALTHCARE&nbsp; ACCOUNT
            </h3>
          </div>

          <div className="row mt-5 mb-5">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <Card
                className="pb-3 pt-3"
                style={{ backgroundColor: "darkcyan" }}
              >
                <div className="card-body ">
                  <form onSubmit={handleSubmit}>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i class=" text-dark fas fa-user" />
                        </span>
                      </div>
                      <input
                        type="Username"
                        className="form-control"
                        placeholder="Doctor/patient Username or id"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Username}
                        name="Username"
                        
                      />
                    </div>
                    {errors.Username && touched.Username && <div className="text-warning pb-3" id="feedback">{errors.Username}</div>}

 

                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i class=" text-dark fas fa-unlock-alt" />
                        </span>
                      </div>
                      <input
                        type="Password"
                        className="form-control"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Password}
                        name="Password"
                      />
                    </div>
                    {errors.Password && touched.Password && <div className="text-warning pb-3" id="feedback">{errors.Password}</div>}

                    <div className="form-check mb-4 ml-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label text-white "
                        for="exampleCheck1"
                      >
                        Remember me
                      </label>
                      <a href="#">
                        <span className="pl-3 text-white">
                          Forgot Password?
                        </span>
                      </a>
                    </div>

                    <div className="mb-4 text-center">
                      
                        {" "}
                        <Button
                          id="TooltipBottom"
                          className="pl-4 pr-4"
                          outline
                          theme="white"
                          type="submit"
                        >
                          <i class="fas fa-sign-in-alt" />&nbsp; Signin
                        </Button>
                    
                      <Tooltip
                        placement="bottom"
                        open={this.state.bottom}
                        target="#TooltipBottom"
                        toggle={() => this.toggle("bottom")}
                      >
                        <span className="font-weight-bold text-warning">
                          Welcome u did not signup please signup 👇
                        </span>
                      </Tooltip>
                    </div>
                  </form>

                  <div className=" text-center ">
                    <a href="signup">
                      <Button
                        id="TooltipTop"
                        className="pl-5 pr-5"
                        outline
                        theme="white"
                      >
                        <i class="fas fa-user-plus" />&nbsp; Signup
                      </Button>
                    </a>
                    <Tooltip
                      open={this.state.top}
                      target="#TooltipTop"
                      toggle={() => this.toggle("top")}
                    >
                      <span className="font-weight-bold text-warning">
                        {" "}
                        Welcome please Signup ☝️
                      </span>
                    </Tooltip>
                  </div>
                </div>
              </Card>
            </div>

            <div className="col-md-8 col-sm-12 col-12 col-lg-8">  
            <div className="pic">
          <img src={pic} style={{width:"100%",height:"340px"}} />
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
                  <a href="/signup">
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

const signinForm = withFormik({
  mapPropsToValues: () => ({ 
    Username: "",
    Password: ""
   }),
  validate: values => {
    const errors = {};

    if (!values.Username) {
      errors.Username = "**please enter the Username id ! **";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Username)
    ) {
      errors.Username = "**Invalid Username address**";
    }

    if (!values.Password) {
      errors.Password = "**Password is required ! **";
    } else if (values.Password.length < 6) {
      errors.Password = "**Password has to be longer than 6 characters ! **";
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
    
    axios.post(`http://172.20.10.2:5001/login`, values)
            .then(function(response) {
              const res = response;
              console.log(res);
              // console.log("axios");
                           
              if (res.status === 200) {
                sessionStorage.setItem("Username", res.data.docID);
                sessionStorage.setItem("isLoggedIn", true);
              }
              else{
                // wrong pws    login fail
              }
  
            })
            .catch(function() {
              console.log("Server issue / no data found");
            });

    
  },

  displayName: "signin"
})(signin);

export default signinForm;
