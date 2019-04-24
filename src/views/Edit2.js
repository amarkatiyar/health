import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput,Dropdown,DropdownItem,DropdownToggle,DropdownMenu } from 'shards-react'

// export default  function Edit2(){
export default class Edit2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
        open: false 
        };
        }
          
         toggle = () => {
        this.setState(prevState => {
        return { open: !prevState.open };
        });
        }
          
        render(){
        return(
    // <div className="container mt-3">
    <Card className="" style={{width:"600px",height:"280px"}}>
    <CardBody>

    <Row className="mt-0">
                   <div className="col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="fas fa-arrow-left mr-3"></i></h6></div>
                   <div className="col-lg-2 col-md-2 col-sm-2 col-2"><i class="fas fa-check"></i></div>
                 
                 </Row>

    <form>

        <div class="form-group row mt-3">
                 <label for="Ad_status" className="col-lg-6 col-md-6 col-sm-6 col-6 ">Administrator status*</label>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                    <Dropdown open={this.state.open} toggle={this.toggle} group>
                    <select className="form-control ">
                    <option value="">-Select Gender-</option>
                      <option value="">Male</option>
                      <option value="1">Female</option>
                      <option value="2">Other</option>
                      </select>
                    </Dropdown>
                    </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 ">
            <label for="Education" >Education*</label>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <input type="text" className="form-control"  placeholder="Fname"></input>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 ">
            <label for="l_no">Licence Number*</label>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <input type="text" className="form-control"  placeholder="Fname"></input>
            </div>
        </div>
        <Button outline size="md" className="mt-3" theme="success">
            Save
        </Button>
    </form>
    </CardBody>        
    </Card>
    // </div>
)
}
}