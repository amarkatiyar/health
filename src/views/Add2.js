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

    // <div className="container mt-3 ">
    <Card className="" style={{width:"450px",height:"180px"}}>
    <CardBody>
    <Row className="mt-0">
                   <div className="col-lg-8 col-md-8 col-sm-8 col-8"><h6><i class="fas fa-arrow-left mr-3"></i>Speciality</h6></div>
                   <div className="col-lg-2 col-md-2 col-sm-2 col-2"><i class="fas fa-check"></i></div>
                   <div className="col-lg-2 col-md-2 col-sm-2 col-2"><i class="fas fa-times"></i></div>
                 
    </Row>

    <Row className="mt-2">
                   <div className="col-lg-4 col-md-4 col-sm-4 col-4"><h6>Speciality</h6></div>
                   <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                   <select className="form-control ">
                      <option value="">--Select Speciality--</option>
                      <option value="1">Allergy</option>
                      </select>
                   </div>
                 
    </Row>
        <Button outline size="md" className="mt-3 ml-3" theme="success">
            Save
        </Button>

    </CardBody>        
    </Card>
    // </div>
)
}
}