import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput,Dropdown,DropdownItem,DropdownToggle,DropdownMenu } from 'shards-react'

    export default class Add1 extends React.Component{
        constructor(props) {
        super(props);
        this.state = { 
        open: false,
        handleShowAdd1: false,
        };
        }
          
          
        handleShowAdd1=() => {
          this.props.handleHideAdd1();
      }

        render(){
          const { Add1Form } = this.state;
return(
    <Card className="" style={{width:"500px",height:"550px"}}>
    <CardBody>
    
    <Row className="mt-0">
                   <div  onClick ={()=>this.handleShowAdd1()} className="col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="fas fa-arrow-left mr-3"></i></h6></div>
                   <div className="col-lg-2 col-md-2 col-sm-2 col-2"><i class=""></i></div>
                 
                 </Row>
    <Form>
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

    <Button className="text-center" outline size="md" className="mt-3" theme="success">
            Save
    </Button>
      </Form>
    </CardBody>        
    </Card>
)
}
}

  