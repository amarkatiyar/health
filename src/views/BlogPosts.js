import React from "react";
import {
  Card,
  CardHeader,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "shards-react";

import axios from "axios";



class home extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      open: false,
      patientList: [],
      success: false,
    };
  }

  toggle() {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  }
  yourfunction = (e, id) => {
    console.log(e)
    console.log(id)
  }
  componentDidMount = () => {
    

    let payload = {
      doc_ID: sessionStorage.getItem("DocId")
    };

    console.log(payload);
    // GLOBAL_API
    axios.post(`http://192.168.0.151:5001/patientList`, payload)
      .then(res => {
        console.log(res)
        if(res.status === 200){
          this.setState({
            patientList: res.data,
            success: true
          });
        }
      })
      .catch(function() {
        console.log("Server issue / no data found");
      });
  };


  render() {
  
    const { patientList } = this.state;
    let patientListItems = patientList.map((item, id) => {
      return(
        <div className="">
        <table className="table mb-0 pr-0 ">
        <tbody style={{fontSize:"12px"}}>
        <tr ><a href="patientAcc" >
                   <td onClick={(e)=>{this.yourfunction(e,id)}}>{item.name}</td>
                   <td onClick={(e)=>{this.yourfunction(e,)}}>{item.gen}</td>
                   <td onClick={(e)=>{this.yourfunction(e,)}}>{item.DOB}</td>
                   <td onClick={(e)=>{this.yourfunction(e,)}}>{item.mobile}</td>
                   <td onClick={(e)=>{this.yourfunction(e,)}}>{item.email}</td>
                  
            </a></tr>      
                   
                 
        
        </tbody>
        </table>
        
        
        </div>
      )
    })

    return (
      <div className="container" style={{ fontFamily: "Times" }}>
        <div className="row mt-4 mb-4">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
            <Card className="mb-2 " style={{ height: "700px" }}>
              <CardHeader className="bg-light">
                <InputGroup size="md" seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <i className=" text-primary fas fa-search" />&nbsp;
                    </InputGroupText>
                  </InputGroupAddon>
                  <FormInput
                    className="border-3 "
                    placeholder="Search patient by name.."
                  />
                  <span className="pl-2">
                    {" "}
                    <a href="./patient">
                      <Button outline theme="success">
                        <i className="fas fa-user-plus" /> &nbsp; New patient
                      </Button>
                    </a>
                  </span>
                </InputGroup>
              </CardHeader>

         
            {patientListItems}
      


              

              
            </Card>
          </div>

          {/* **************************this is second card************ */}

          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div style={{ fontFamily: " Times" }}>
              <Card className="mb-5" style={{ height: "700px" }}>
                <div className="d-flex justify-content-around ml-4 mt-3 mr-4">
                  <div className="">
                    <a href="#">
                      {" "}
                      <i
                        className="text-warning far fa-calendar-alt pr-2"
                        style={{ fontSize: "20px" }}
                      />
                      &nbsp;&nbsp;
                      <span className=" text-success">CALENDER</span>
                    </a>
                  </div>
                  <div className="ml-auto">
                    <Dropdown open={this.state.open} toggle={this.toggle}>
                      <a href="#">
                        <i className=" text-dark fas fa-print " />
                      </a>{" "}
                      &nbsp; &nbsp;
                      <DropdownToggle className="bg-white border-0 ">
                        <i
                          className=" text-dark fas fa-ellipsis-v"
                          style={{ fontSize: "15px" }}
                        />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          {" "}
                          <i className="fas fa-print" />&nbsp;&nbsp;print
                        </DropdownItem>
                        <DropdownItem>
                          {" "}
                          <i className="fab fa-youtube" />&nbsp;&nbsp;Tutorial
                          video
                        </DropdownItem>
                        <DropdownItem>
                          <i className="fas fa-question" />&nbsp;&nbsp;Help
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
                <div className="row pl-3 pt-3 pr-3">
                  <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                    <select className="form-control " id="sel1" name="sellist1">
                      <option value="">
                        Search Doctor/user by name,mobile,Kpid or e:email
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                      <option value="4">Option 4</option>
                    </select>
                  </div>
                  <div className="col-lg-2" />
                  <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                    <div className="">
                      <Button outline theme="success">
                        <i className="fas fa-chevron-left" />
                      </Button>
                      &nbsp;
                      <Button outline theme="success">
                        Today
                      </Button>
                      &nbsp;
                      <Button outline theme="success">
                        3 Days
                      </Button>
                      &nbsp;
                      <Button outline theme="success">
                        Week
                      </Button>
                      &nbsp;
                      <Button outline theme="success">
                        Month
                      </Button>
                      &nbsp;
                      <Button outline theme="success">
                        <i className="fas fa-chevron-right" />
                      </Button>
                    </div>
                  </div>
                </div>

                <table className="table table-bordered mt-3 ">
                  <tr
                    className="text-success bg-light text-center"
                    style={{ fontSize: "12px" }}
                  >
                    <td>
                      2019-05-06 Mon &nbsp;&nbsp;
                      <i className="fas fa-edit  text-dark" />
                    </td>
                    <td>
                      2019-05-06 Tue &nbsp;&nbsp;
                      <i className="fas fa-edit  text-dark" />
                    </td>
                    <td>
                      2019-05-06 Wed &nbsp;&nbsp;
                      <i className="fas fa-edit  text-dark" />
                    </td>
                  </tr>

                  <tbody style={{ fontSize: "11px" }}>
                    <tr>
                      <td>9:30 am</td>
                      <td>9:30 am</td>
                      <td>9:30 am</td>
                    </tr>
                    <tr>
                      <td>10:00 am</td>
                      <td>10:00 am</td>
                      <td>10:00 am</td>
                    </tr>
                    <tr>
                      <td>10:30 am</td>
                      <td>10:30 am</td>
                      <td>10:30 am</td>
                    </tr>
                    <tr>
                      <td>11:00 am</td>
                      <td>11:00 am</td>
                      <td>11:00 am</td>
                    </tr>
                    <tr>
                      <td>11:30 am</td>
                      <td>11:30 am</td>
                      <td>11:30 am</td>
                    </tr>
                    <tr>
                      <td>12:00 am</td>
                      <td>12:00 am</td>
                      <td>12:00 am</td>
                    </tr>
                    <tr>
                      <td>12:30 am</td>
                      <td>12:30 am</td>
                      <td>12:30 am</td>
                    </tr>
                    <tr>
                      <td>1:00 am</td>
                      <td>1:00 am</td>
                      <td>1:00 am</td>
                    </tr>
                    <tr>
                      <td>1:30 am</td>
                      <td>1:30 am</td>
                      <td>1:30 am</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default home;
