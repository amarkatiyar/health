import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput,Dropdown,DropdownItem,DropdownToggle,DropdownMenu } from 'shards-react'

    export default class Add2 extends React.Component{
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
    <Card className="" style={{width:"400px",height:"200px"}}>
    <CardBody>
    <form>
        <div className="row">
        <p>Speciality</p>
        </div>
        <div className="form-group row mt-3">
                 <label for="Ad_status" class="col-sm-6 text-primary">Administrator status*</label>
                    <div class="col-sm-6">
                    <Dropdown open={this.state.open} toggle={this.toggle} group>
                            <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" >
                                Gender
                            </button>
                            <DropdownToggle split />
                                <DropdownMenu>
                                <a class="dropdown-item" >Male</a>
                                <a class="dropdown-item" >Female</a>
                                <a class="dropdown-item" >Other</a>
                            </DropdownMenu>
                        </Dropdown>
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