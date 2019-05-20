import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput,Dropdown,DropdownItem,DropdownToggle,DropdownMenu } from 'shards-react'

import { withFormik } from "formik";

// export default  function Edit2(){
class Edit2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
        open: false,
        handleShowEdit2: false,
        };
        }

        handleShowEdit2=() => {
            this.props.handleHideEdit2();
        }
          
          
        render(){
            // console.log(this.props)
            const{ShowEdit2}=this.state;
            const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit
              } = this.props;

return(
    <Card className="" style={{width:"600px",height:"280px"}}>
    <CardBody>

    <Row className="mt-0">
                   <div onClick ={()=>this.handleShowEdit2()} className="col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="fas fa-arrow-left mr-3"></i></h6></div>
                   <div className="col-lg-2 col-md-2 col-sm-2 col-2"><i class=""></i></div>
                 
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
                <input type="text" 
                className="form-control"  
                placeholder="Education"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Education}
                name="Education"
                ></input>
                {errors.Education && touched.Education && (
                                 <div className="text-warning " id="feedback">
                                    {errors.Education}
                                 </div>
                )}
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 ">
            <label for="l_no">LicenceNumber*</label>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <input type="text" 
            className="form-control" 
            placeholder="Lno"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.LicenceNumber}
            name="LicenceNumber"
            ></input>
             {errors.LicenceNumber && touched.LicenceNumber && (
                                 <div className="text-warning " id="feedback">
                                    {errors.LicenceNumber}
                                 </div>
            )}
            </div>
        </div>
        <div>
        <Button className="mr-2 " outline theme="success">
        {" "} 
        &nbsp; save {" "}
               </Button>
        {/* <Button outline size="md" className="mt-3" theme="success" style={{position:"fixed"}}>
           {" "}  &nbsp; Save  {" "}
        </Button> */}
        </div>
    </form>
    </CardBody>        
    </Card>
)
}
}

const Edit2Form = withFormik({
    mapPropsToValues: () => ({ Education: "" }),
  
    // Custom sync validation
    validate: values => {
      const errors = {};
  
      if (!values.Education) {
        errors.Education = "please enter the Education ! **";
      }else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.Education)) {
        errors.Education = " **please enter the character only ! **";
      }
      if (!values.LicenceNumber) {
        errors.LicenceNumber = "please enter the LicenceNumber ! **";
      }else if (!/^[0-9a-zA-Z]+$/.test(values.LicenceNumber)) {
        errors.LicenceNumber = " **please enter the character only ! **";
      }
      return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: "Edit2Form"
  })(Edit2);

  export default Edit2Form;