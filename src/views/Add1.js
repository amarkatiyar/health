import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput,Dropdown,DropdownItem,DropdownToggle,DropdownMenu } from 'shards-react'

    export default class Add1 extends React.Component{
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

//  <div className="container mt-3 ">
    <Card className="" style={{width:"500px",height:"550px"}}>
    <CardBody>
    <Row className="mt-0">
                   <div className="col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="fas fa-arrow-left mr-3"></i></h6></div>
                   <div className="col-lg-2 col-md-2 col-sm-2 col-2"><i class="fas fa-check"></i></div>
                 
                 </Row>
        
    <FormGroup>
        <div className="row mt-1 ">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
        <label htmlFor="#firstname">Address</label>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-8">
        <FormInput type="text" id="#firstname" placeholder="Address1" />
        <FormInput type="text" id="#firstname" placeholder="Address2" />
        </div>
        
        </div>
      </FormGroup>
      <FormGroup>
      <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
        <label htmlFor="#lastname">City</label>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-8 col-8">
        <FormInput type="text" id="#number" placeholder="City" />
        </div>
        </div>
      </FormGroup>


      <FormGroup>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
      <label htmlFor="#Gender">Country</label>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-8 col-8">
      <FormSelect>
      <option value="first">India</option>
      <option value="second">Pakistan</option>
      <option value="second">America</option>
      <option value="third"> Other</option>
    </FormSelect>
    </div>
    </div>
    </FormGroup>

    <FormGroup>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-4">
      <label htmlFor="#S_Province">State/Province</label>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-8 col-8">
      <FormSelect>
      <option value="first">Select/State Province</option>
    </FormSelect>
    </div>
    </div>
    </FormGroup>


    <FormGroup>
      <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
      <label htmlFor="#date">Zip/Postal Code</label>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-8 col-8">
      <FormInput id="#date" placeholder="" />
     </div>
     </div>
    </FormGroup>

    <FormGroup>
    <div className="row">
    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
      <label htmlFor="#number">Phone1</label>
    </div>
    <div className="col-lg-8 col-md-8 col-sm-8 col-8">
      <FormInput type="number" id="#number" placeholder="+91 8840091275" />
    </div>
    </div>

    </FormGroup>
    <FormGroup>
    <div className="row">
    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
      <label htmlFor="#number">Phone2</label>
    </div>
    <div className="col-lg-8 col-md-8 col-sm-8 col-8">
      <FormInput type="number" id="#number" placeholder="+91 8840091275" />
    </div>
    </div>
    </FormGroup>

    <span className="text-center"><a href="#"><Button outline size="md" className="mt-3 ml-5" theme="success">
            Save
        </Button></a></span>
    </CardBody>        
    </Card>
//  </div>
)
}
}

  