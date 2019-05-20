import React from 'react'
import {Row,Button, Card, CardBody,Form, } from 'shards-react'
import { withFormik } from "formik";
import axios from 'axios';

class Add2 extends React.Component{
        constructor(props) {
        super(props);
        this.state = { 
        open: false,
        handleShowAdd2: false
        };
        }
          
         toggle = () => {
        this.setState(prevState => {
        return { open: !prevState.open };
        });
        }

        handleShowAdd2=() => {
            this.props.handleHideAdd2();
        }
        componentDidMount = () => {
          sessionStorage.setItem('firstname', '');     
          sessionStorage.setItem('city' ,'');
          
        }
          
        render(){
            const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit
              } = this.props;
return(
<form onSubmit={handleSubmit}>

    <Card className="" style={{width:"450px",height:"180px"}}>
    <CardBody>
    <Form>
    <Row className="mt-0">
                   <div onClick ={()=>this.handleShowAdd2()} className="col-lg-8 col-md-8 col-sm-8 col-8"><h6><i class="fas fa-arrow-left mr-3"></i>Speciality</h6></div>
                   <div className="col-lg-2 col-md-2 col-sm-2 col-2"><i class=""></i></div>
                   <div onClick ={()=>this.handleShowAdd2()} className="col-lg-2 col-md-2 col-sm-2 col-2"><i class="fas fa-times"></i></div>
                 
    </Row>

    <Row className="mt-2">
                   <div className="col-lg-4 col-md-4 col-sm-4 col-4"><h6>Speciality</h6></div>
                   <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                   <select className="form-control "
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.Number}
                   name="Speciality">
                      <option value="">--Select Speciality--</option>
                      <option value="Allergy">Allergy</option>
                      </select>
                      {errors.Speciality && touched.Speciality && (
                                <div className="text-warning " id="feedback">
                                    {errors.Speciality}
                                </div>
                        )}
                   </div>
                 
    </Row>
        <Button outline size="md" className="mt-3 ml-3" theme="success">
            Save
        </Button>
    </Form>
    </CardBody>        
    </Card>
</form>
)
}
}
    const Add2Form = withFormik({
        mapPropsToValues: () => ({ Speciality: "" }),
        // Custom sync validation
        validate: values => {
          const errors = {};
    
          if (!values.Speciality) {
            errors.Speciality = "Please select the email-id or name !";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(values.Speciality)) {
          }
          else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.subject)) {
            errors.subject = " Please select option !";
          }
          return errors;
    },
        handleSubmit: (values, { setSubmitting }) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 1000);

          console.log("submitting....");
        console.log(values);
    
    
    
          axios.post(`http://192.168.0.151:5001/Add2`, values)
                .then(function(response) {
                  const res = response;
                  console.log(res);
                  // console.log("axios");
                               
                  if (res.status === 200) {
                    // sessionStorage.setItem("", res.data.status);
                    sessionStorage.setItem("success", true);
                  }
                  else{
                    // wrong pws    login fail
                  }
      
                })
                .catch(function() {
                  console.log("Server issue / no data found");
                });

        },
        displayName: "Add2Form"
      })(Add2);
    export default Add2Form;
      