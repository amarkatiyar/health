import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Button,
  Collapse,
  Form,
  FormGroup
} from "shards-react";
import axios from "axios";

class BasicCardExample extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false,
      patientList: [],
      success: false,
    
    };
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
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
    let patientListItems = patientList.map((item) => {
      return(
        <div className="">
        <table className="table mb-0 p-0 ">
        <tbody style={{fontSize:"12px"}}>
        <tr><a href="patientAcc" >
                   <td onClick={(e)=>{this.yourfunction(e,)}}>{item.name}</td>
                   <td onClick={(e)=>{this.yourfunction(e,)}}>{item.gen}</td>
                   <td onClick={(e)=>{this.yourfunction(e,)}}>{item.DOB}</td>
                   <td onClick={(e)=>{this.yourfunction(e,)}}>{item.mobile}</td>
                   <td onClick={(e)=>{this.yourfunction(e,)}}>{item.email}</td>
                  
            </a></tr>      
                   
                 
        
        </tbody>
        </table>
        {/* <div className="d-flex justify-content-around">
        <div onClick={(e)=>{this.yourfunction(e,)}}>{item.name}</div><hr/>
        <div onClick={(e)=>{this.yourfunction(e,)}}>{item.gen}</div><hr/>
        <div onClick={(e)=>{this.yourfunction(e,)}}>{item.DOB}</div><hr/>
        <div onClick={(e)=>{this.yourfunction(e,)}}>{item.mobile}</div><hr/>
        <div onClick={(e)=>{this.yourfunction(e,)}}>{item.email}</div><hr/>

        </div> */}
      
        </div>
        
      )
    })
    
    return (
      <div className="container " style={{ fontFamily: " Times" }}>
        <div className="row mt-4 mb-4">
          <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <Card style={{ height: "600px" }}>
              <CardHeader className="bg-light">
                <InputGroup size="md" seamless>
                  <InputGroupAddon type="prepend">
                    <InputGroupText>
                      <i class=" text-primary fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <FormInput
                    className="border-3 "
                    placeholder="Search patient by name.."
                  />
                  <span className="ml-2 mr-2">
                    {" "}
                    <Button onClick={this.toggle} outline theme="success">
                      <i class="fas fa-bars" /> &nbsp; Report
                    </Button>
                  </span>

                  <span>
                    <a href="./patient">
                      <Button outline theme="success">
                        <i class="fas fa-user-plus" /> &nbsp; New patient
                      </Button>
                    </a>
                  </span>
                </InputGroup>
              </CardHeader>
              <Collapse open={this.state.collapse}>
                <Card className="pt-2 pb-5">
                  <Form>
                    <h6 className="pl-3 text-dark pt-2">
                      <i class="fas fa-arrow-left text-dark" /> &nbsp;Search
                      Patient
                    </h6>
                    <div className="d-flex justify-content-around">
                      <div>
                        <FormGroup>
                          <FormInput id="name" placeholder="Name" />
                        </FormGroup>
                        <Button outline theme="success">
                          Search more by
                        </Button>
                      </div>

                      <div>
                        {" "}
                        <FormGroup>
                          <FormInput id="Number" placeholder="Mobile" />
                        </FormGroup>
                      </div>
                      <div>
                        {" "}
                        <FormGroup>
                          <FormInput id="#Address" placeholder="Address" />
                        </FormGroup>
                      </div>
                      <div>
                        {" "}
                        <FormGroup>
                          <FormInput id="#Birthdate" placeholder="Birthdate" />
                        </FormGroup>
                      </div>
                      <div>
                        {" "}
                        <FormGroup>
                          <FormInput id="#KPID" placeholder="KPID" />
                        </FormGroup>
                      </div>
                      <div>
                        {" "}
                        <FormGroup>
                          <FormInput id="email" placeholder="Email" />
                        </FormGroup>
                        <Button outline theme="success">
                          <i class="fas fa-print" />
                          &nbsp; print
                        </Button>
                        &nbsp;
                        <Button outline theme="success">
                          <i class="fas fa-file-excel" />
                          &nbsp;export
                        </Button>
                      </div>
                    </div>
                  </Form>
                </Card>
              </Collapse>

              <CardBody className="p-0 pb-3">
                { <small>
                  <a href="./patientacc">
                    <table className="table mb-0">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col " className="border-0">
                            Patient Name/KPiD
                          </th>
                          <th scope="col" className="border-0">
                            Phone/Email
                          </th>
                          <th scope="col" className="border-0">
                            Address
                          </th>
                          <th scope="col" className="border-0">
                            Birth Date
                          </th>
                        </tr>
                        
                      </thead>
                     
                      
                     
                    </table>
                  </a>
                </small> }
             <div>   {patientListItems}</div>
              </CardBody>
              
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default BasicCardExample;
