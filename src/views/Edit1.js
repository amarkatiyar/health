import React from 'react'
import {render} from 'react-dom';
import { withFormik } from "formik";

import {
    Row, Button, Card, CardBody, Col, Form, FormGroup, FormCheckbox,
    FormSelect, FormInput,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'shards-react'

class Edit1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handleShowEdit1: false,
        }
    };

    handleShowEdit1 = () => {
        this.props.handleHideEdit1();
    }

    render() {
        console.log(this.props)

        const { ShowEdit1 } = this.state;
        const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit
          } = this.props;
        
        

        return (
            
            <Card className="" style={{ width: "600px", height: "400px" }}>
                <CardBody>
                    <Row className="mt-0">
                        <div onClick={() => this.handleShowEdit1()} className="col-lg-10 col-md-10 col-sm-10 col-10"><h6><i class="fas fa-arrow-left mr-3" ></i></h6></div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-2"><i class=""></i></div>

                    </Row>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-6 ">
                                <label for="Hname" >Hospitalname*</label>
                            </div>
                            <div className="col-6">
                                <input
                                 type="text" 
                                 className="form-control" 
                                 placeholder="Hname"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.Hospitalname}
                                 name="Hospitalname"
                                 />
                                 {errors.Hospitalname && touched.Hospitalname && (
                                 <div className="text-warning " id="feedback">
                                    {errors.Hospitalname}
                                 </div>
                                 )}
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6 ">
                                <label for="F_name" >FirstName*</label>
                            </div>
                            <div className="col-6">
                                <input type="text"
                                 className="form-control" 
                                 placeholder="Fname"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.FirstName}
                                 name="FirstName"
                                 >
                                 </input>
                                 {errors.FirstName && touched.FirstName && (
                                 <div className="text-warning " id="feedback">
                                    {errors.FirstName}
                                 </div>
                                 )}
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6 ">
                                <label for="L_name" >LastName*</label>
                            </div>
                            <div className="col-6">
                                <input type="text" 
                                className="form-control" 
                                placeholder="Lname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.LastName}
                                name="LastName"
                                ></input>
                                {errors.LastName && touched.LastName && (
                                 <div className="text-warning " id="feedback">
                                    {errors.LastName}
                                 </div>
                                 )}
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div className="col-6 ">
                                <label for="Ad_status">Administrator status*</label>
                            </div>
                            <div className="col-6 ">
                                <Dropdown open={this.state.open} toggle={this.toggle} group>
                                    <select className="form-control">
                                        <option value="1">ACTIVE</option>
                                        <option value="2">DEACTIVE</option>
                                    </select>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6 ">
                                <label for="Mo_number" >Mobile Number*</label>
                            </div>
                            <div className="col-6">
                                <input type="number" className="form-control" id="#number" placeholder="+91 8840091275"></input>
                            </div>
                        </div>
                        <Button outline size="md" className="mt-3 ml-5" theme="success">
                            Save
                         </Button>
                    </form>
                </CardBody>
            </Card>
        )
    }
}


const Edit1Form = withFormik({
    mapPropsToValues: () => ({ FirstName: "" }),
  
    // Custom sync validation
    validate: values => {
      const errors = {};
  
      if (!values.userName) {
        errors.FirstName = "please enter the firstname ! **";
      }else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.FirstName)) {
        errors.FirstName = " **please enter the character only ! **";
      }
      if (!values.userName) {
        errors.LastName = "please enter the LastName ! **";
      }else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.LastName)) {
        errors.LastName = " **please enter the character only ! **";
      }

      console.log(errors);
      return errors;
    },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: "Edit1Form"
  })(Edit1);
  
  export default Edit1Form;
  