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
    <div className="container mt-3">
    <Card className="" style={{width:"600px",height:"280px"}}>
    <CardBody>
    <form>

        <div class="form-group row mt-3">
                 <label for="Ad_status" class="col-sm-6 text-primary">Administrator status*</label>
                    <div class="col-sm-6">
                    <Dropdown open={this.state.open} toggle={this.toggle} group>
                            <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" >
                                Gender
                            </button>
                            <DropdownToggle split />
                                <DropdownMenu>
                                <a><DropdownItem>Male</DropdownItem></a>
                                <DropdownItem>Female</DropdownItem>
                                <DropdownItem>Other</DropdownItem>
                                </DropdownMenu>
                    </Dropdown>
                    </div>
        </div>
        <div className="row">
            <div className="col-6 ">
            <label for="Education" className="text-primary">Education*</label>
            </div>
            <div className="col-6">
            <input type="text" className="form-control"  placeholder="Fname"></input>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-6 ">
            <label for="l_no" className="text-primary">Licence Number*</label>
            </div>
            <div className="col-6">
            <input type="text" className="form-control"  placeholder="Fname"></input>
            </div>
        </div>
        <Button outline size="md" className="mt-3 ml-5" theme="primary">
            Save
        </Button>
    </form>
    </CardBody>        
    </Card>
    </div>
)
}
}