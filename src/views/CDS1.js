import React from "react";
import { Card, CardHeader,CardBody, Modal, Container, InputGroup, InputGroupAddon, InputGroupText,
         Button, Popover } from "shards-react";
import { FormInput } from "shards-react";
import { FormRadio } from "shards-react";

export default class CDS1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          collapse: false,
          open: false,
          selectedAge: null
        };
        this.changeAge = this.changeAge.bind(this);
      };
    
      toggle1 = () => {
        this.setState({
          open: !this.state.open
        });
      }
      changeAge(age) {
        this.setState({
          selectedAge: age
        });
      }
render(){

return(
    <Container fluid className="main-content-container px-4 py-4">
    <Card>
        <CardHeader className="mb-4">
          <div className="row">
            <div className="col-lg-10 text-success" >
              <i className="fa fa-address-card mr-3" style={{ cursor: "pointer" }}></i><a className="text-success">CLINICAL DECISION SUPPORT</a>
            </div>

            <div className="col-lg-2 text-right" >
              <i className="fa fa-print" style={{ cursor: "pointer" }}></i>&nbsp;
              <i className="fas fa-ellipsis-v ml-4" title="Show more options" style={{ cursor: "pointer" }} id="popover-2" onClick={this.toggle1}></i>
            </div>
              <Popover
                placement="bottom"
                open={this.state.open}
                toggle1={this.toggle1}
                target="#popover-2"
                style={{ width: "100px" }}>
                <table className="table table-bordered table-hover mb-0">
                  <tbody>
                  <tr>
                      <td><i className="far fa-star">&nbsp;&nbsp;Print</i></td>
                    </tr>
                    <tr>
                      <td><i className="far fa-star">&nbsp;&nbsp;Tutorial</i></td>
                    </tr>
                    <tr>
                      <td><i className="far fa-question-circle">&nbsp;&nbsp;Help</i></td>
                    </tr>
                  </tbody>
                </table>
              </Popover>
            </div>
        <h6 className="text-success mt-3">Patient Does Have:</h6>
        <div className="ml-2">
            <div className="row">
                <div className="col-4">
                <label>Name</label>
                </div>
                <div className="col-8">
                <FormInput placeholder="Normal input" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <FormRadio
                        inline
                        name="Age1"
                        checked={this.state.selectedAge === "Agerange1"}
                        onChange={() => {
                        this.changeAge("Agerange1");
                        }}>
                        <label> Age Range in Years</label>
                         
                    </FormRadio>
                </div>
                <div className="col-6">
                    <FormRadio
                        inline
                        name="Age2"
                        checked={this.state.selectedAge === "Agerange2"}
                        onChange={() => {
                        this.changeAge("Agerange2");
                        }}>
                        <label>Age Range in Months</label>
                    </FormRadio>
                </div>
            </div>
            <div className="row">
                <div className="col-3"><FormInput placeholder="Enter From Range" /></div>
                <div className="col-3"><FormInput placeholder="Enter Thru Range" /></div>
                <div className="col-3"><FormInput placeholder="Enter From Range" /></div>
                <div className="col-3"><FormInput placeholder="Enter Thru Range" /></div>
            </div>
            
            <div className="row mt-3">
                <div className="col-4"><label>Sex</label></div>
                <div className="col-4"><label>Race</label></div>
                <div className="col-4"><label>Ethnicity</label></div>
            </div>
            <div className="row">
                <div className="col-4">
                    <select id="Gender" className="form-control">
                        <option value="1">select Gender</option>
                        <option value="2">Male</option>
                        <option value="2">Female</option>
                        <option value="2">Others</option>
                    </select>
                </div>
                <div className="col-4">
                    <select id="Gender" className="form-control">
                        <option value="1">select Race</option>
                        <option value="2">Decline to Provide</option>
                        <option value="2">Asian</option>
                        <option value="2">Black of African American</option>
                    </select>
                </div>
                <div className="col-4">
                    <select id="Gender" className="form-control">
                        <option value="1">select Ethnicity</option>
                        <option value="2">Decline to Provide</option>
                        <option value="2">Hispanic or Latino</option>
                        <option value="2">Not Hispanic or Latino</option>
                    </select>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-4"><label>Gender Identity</label></div>
                <div className="col-4"><label>Sexual Orientation</label></div>
                <div className="col-4"><label>Prefered Language</label></div>
            </div>
            <div className="row">
                <div className="col-4">
                    <select id="Gender" className="form-control">
                        <option value="1">select Gender Identity</option>
                        <option value="2">Male</option>
                        <option value="2">Female</option>
                        <option value="2">Female to Male</option>
                        <option value="2">Male to Female</option>
                    </select>
                </div>
                <div className="col-4">
                    <select id="Gender" className="form-control">
                        <option value="1">select Sexual Orientation</option>
                        <option value="2">Lesbian,Gay,Homosexual</option>
                        <option value="2">Straight or hetrosexual</option>
                        <option value="2">Bisexual</option>
                    </select>
                </div>
                <div className="col-4">
                    <select id="Gender" className="form-control">
                        <option value="1">select Language</option>
                        <option value="2">Indian</option>
                        <option value="2">Ammerican</option>
                        <option value="2">Japiniese</option>
                    </select>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                        <label> Temperature</label>
                </div>
                <div className="col-6">
                        <label> Pulse</label>
                </div>
            </div>
            <div className="row">
                <div className="col-2"><FormInput placeholder="Enter From Range" /></div>
                <div className="col-2"><FormInput placeholder="Enter Thru Range" /></div>
                <div className="col-2">
                    <select id="Gender" className="form-control">
                        <option value="1">deg F</option>
                        <option value="2">deg C</option>
                    </select>
                </div>
                <div className="col-2"><FormInput placeholder="Enter From Range" /></div>
                <div className="col-2"><FormInput placeholder="Enter Thru Range" /></div>
                <div className="col-2">
                    <select id="Gender" className="form-control">
                        <option value="1">beats/min</option>
                    </select>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-6">
                        <label> Blood pressure - systolic</label>
                </div>
                <div className="col-6">
                        <label>Blood pressure - diastolic</label>
                </div>
            </div>
            <div className="row">
                <div className="col-2"><FormInput placeholder="Enter From Range" /></div>
                <div className="col-2"><FormInput placeholder="Enter Thru Range" /></div>
                <div className="col-2">
                    <select id="Gender" className="form-control">
                        <option value="1">mm/Hg</option>
                    </select>
                </div>
                <div className="col-2"><FormInput placeholder="Enter From Range" /></div>
                <div className="col-2"><FormInput placeholder="Enter Thru Range" /></div>
                <div className="col-2">
                    <select id="Gender" className="form-control">
                        <option value="1">mm/Hg</option>
                    </select>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                        <label> Oxygen Saturation</label>
                </div>
                <div className="col-6">
                        <label>Height</label>
                </div>
            </div>
            <div className="row">
                <div className="col-2"><FormInput placeholder="Enter From Range" /></div>
                <div className="col-2"><FormInput placeholder="Enter Thru Range" /></div>
                <div className="col-2">
                    <select id="Gender" className="form-control">
                        <option value="1">%</option>
                    </select>
                </div>
                <div className="col-2"><FormInput placeholder="Enter From Range" /></div>
                <div className="col-2"><FormInput placeholder="Enter Thru Range" /></div>
                <div className="col-2">
                    <select id="Gender" className="form-control">
                        <option value="1">cm</option>
                        <option value="1">ft-in</option>
                        <option value="1">inches</option>
                    </select>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                        <label> Weight</label>
                </div>
                <div className="col-6">
                        <label>BMI</label>
                </div>
            </div>
            <div className="row">
                <div className="col-2"><FormInput placeholder="Enter From Range" /></div>
                <div className="col-2"><FormInput placeholder="Enter Thru Range" /></div>
                <div className="col-2">
                    <select id="Gender" className="form-control">
                        <option value="1">Kilograms</option>
                        <option value="1">Paunds</option>
                    </select>
                </div>
                <div className="col-2"><FormInput placeholder="Enter From Range" /></div>
                <div className="col-2"><FormInput placeholder="Enter Thru Range" /></div>
                <div className="col-2">
                    <select id="Gender" className="form-control">
                        <option value="1">Kg/m2</option>
                    </select>
                </div>
            </div>
            <div className="row mt-4">
                    <div className="col-3">
                        <label> Active Problem (ICD-10)</label>
                    </div>
                    <div className="col-6">
                        <FormInput placeholder="Enter ICD Code" />
                    </div>
            </div>
            <div className="row mt-4">
                    <div className="col-3">
                        <label> Active Problem (SNOMED)</label>
                    </div>
                    <div className="col-6">
                        <FormInput placeholder="Enter SNOMED Code" />
                    </div>
            </div>
            <div className="row mt-4">
                    <div className="col-3">
                        <label> Active Medication</label>
                    </div>
                    <div className="col-6">
                        <FormInput placeholder="Enter RXNORM Code" />
                    </div>
            </div>
            <div className="row mt-4">
                    <div className="col-3">
                        <label> Active Allergy</label>
                    </div>
                    <div className="col-6">
                        <FormInput placeholder="Enter RXNORM Code" />
                    </div>
            </div>
            <div className="row mt-4">
                    <div className="col-3">
                        <label> Lab Result</label>
                    </div>
                    <div className="col-3">
                        <FormInput placeholder="Enter Loinc Code" />
                    </div>
                    <div className="col-2">
                        <select id="Gender" className="form-control">
                            <option value="1">Choose not to disclose</option>
                            <option value="1">Normal</option>
                            <option value="1">Abnormal</option>
                        </select>
                    </div>
                    <div className="col-1">
                        <FormInput placeholder="Result" />
                    </div>
            </div>
            <div className="row mt-4">
                    <div className="col-3">
                        <label> Bibliography</label>
                    </div>
                    <div className="col-6">
                        <FormInput placeholder="Enter Bibligraphy" />
                    </div>
            </div>
            <div className="row mt-4">
                    <div className="col-3">
                        <label> Research Funding Source</label>
                    </div>
                    <div className="col-6">
                        <FormInput placeholder="Enter Research Funding Source" />
                    </div>
            </div>
            <div className="row mt-4">
                    <div className="col-3">
                        <label> Release date of Supporting Research</label>
                    </div>
                    <div className="col-3">
                        <FormInput placeholder="YY-MM-DD" />
                    </div>
            </div>
            <div className="row mt-2">
                    <div className="col-3">
                    </div>
                    <div className="col-3">
                    <input type="checkbox" outline size="sm" theme="success"></input>
                    <small><b>Active The CDS Rule</b></small>
                    </div>
            </div>
            <div className="row mt-3">
                    <div className="col-4"></div>
                    <div className="col-1">
                    <Button outline size="md" theme="success">
                        Save
                    </Button>
                    </div>
                    <div className="col-1">
                    <a href="./CDS"><Button outline size="md" theme="success">
                        Cancel
                    </Button></a>
                    </div>
                    <div className="col-6"></div>
            </div>
        </div>
        </CardHeader> 
    </Card>
    </Container>
    )
    }
}