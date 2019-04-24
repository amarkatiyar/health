import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, } from 'shards-react'

export default class Form1 extends React.Component{
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
     <Card className="ml-3 mt-3" style={{width:"600px",height:"400px"}}>
     <CardBody>
     <Row className="mt-0" style={{background:"#f0f0f0",height:"60px"}}>
                   <div className="col-lg-11 col-md-11 col-sm-11 col-11"><h6><i className="fas fa-arrow-left mt-3"> Form</i></h6></div>
                   <div className="col-lg-1 col-md-1 col-sm-1 col-1 mb-5"><i className="fas fa-plus mt-3"></i></div>
                
    </Row>  
    <h6 className="mt-3" style={{background:"#f0f0f0", height:"40px"}}><a className="ml-2">There are no form</a></h6>    
     </CardBody>        
     </Card>

        )
    }
  }

