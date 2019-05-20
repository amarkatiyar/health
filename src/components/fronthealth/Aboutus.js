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
  CardImg ,
  
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

export default class About extends React.Component {
  constructor(props, context) {
    super(props,context);
    this.handleSelect = this.handleSelect.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);



    this.state = {
      dropdownOpen: false,
      collapseOpen: false,
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
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
    const { index, direction } = this.state;
    return (


        
      <div>
        <Navbar type="dark"  expand="md" style={{backgroundColor:"darkcyan"}}>
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
                  <NavLink className="p-2  px-3 " active href="Contact">
                    <h6 className="text-white"> Contact Us </h6>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="p-2 px-3 " active href="Signup">
                    <h6 className="text-white"> Signin</h6>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="p-2  px-3" active href="Signin">
                    <h6 className="text-white"> Signup</h6>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <div className="container">
          <div className="mt-5 p-3 text-center"style={{backgroundColor:"darkcyan"}}>
            <h3 className="text-white font-weight-bold">
              ABOUT&nbsp;US
            </h3>
          </div>
{/* <div className="container-fluid bg-dark">
<div className="container ">
<div className="row pt-4">
<div className="col-md-3 ">
          <div><a href="#" ><h6 className="text-white p-0" >Home</h6></a></div>
         <div> <a href="#" ><h6 className="text-white p-0">Abount Us</h6></a></div>
         <div> <a href="#" ><h6 className="text-white p-0">Services</h6></a></div>
         <div> <a href="#" ><h6 className="text-white p-0">Contact Us</h6></a></div>
         <div> <a href="#" ><h6 className="text-white p-0">Signin</h6></a></div>
         <div> <a href="#" ><h6 className="text-white p-0">Signup</h6></a></div>
</div>
              <div className ="col-md-9 mt-5 text-center">
              <i className="fab fa-facebook px-5 text-white"></i>
              <i className="fab fa-twitter-square text-white px-5"></i>
              <i className="fab fa-linkedin text-white px-5" ></i>
              <i className="fab fa-google text-white px-5"></i>
              <i className="fab fa-youtube text-white px-5"></i>
              <div className=" pt-5 footer-copyright text-center py-3 text-white">© 2019 Copyright:
              <a href="http://www.datagrazp.com/"> Datagrazp.com</a>
              </div>
              </div>
              </div>

</div>

              </div> */}
              </div>
              
            </div>
        
      

  





	
		
	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          




    
    );
  }
}
