// @ Author Manohar
import React,{Component} from "react";
import {Row, Col,FormInput, CardHeader,Button } from "shards-react";
import { withFormik } from "formik";

    class Item extends Component{
      constructor(props){
        super(props);
        this.state = {
          handleShowItem: false,
        }
      };
      handleShowItem = () =>{
        this.props.handleHideItem();
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
    return (
       <Row>
       <Col>
       <CardHeader className="border-bottom" style={{width:"800px",height:"430px"}}>
<div className="row mb-3">
<div className="col-lg-11 text-left">
<a onClick={()=> this.handleShowItem()}><i className="hover icon-md fa fa-arrow-left mt-2 mr-2" style={{cursor:"pointer" }} title="cancle"></i></a>Item/Service
</div>
<div className="col-lg-1">
<span id="save-btn" className="fa fa-ellipsis-v ml-3" data-toggle="tooltip" title="Save"></span>
</div>
</div>
<h6 className="text-left" style={{height: "35px",background:"#f0f0f0"}}>&nbsp;&nbsp;<small>Search select item/service, enter price and quantity</small></h6>
<form onSubmit={handleSubmit}>
<div className="row">
<div className="col-lg-4 col-md-4 col-sm-4 col-4">
<h6><small><b>Item/Service *</b></small></h6><br></br>
</div>
<div className="col-lg-8 col-md-8 col-sm-8 col-8">
 <FormInput
                      className="bg-light"
                      type="text"
                      placeholder="Search or Enter Item/Service"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.item}
                      name="item"
                    />
                     {errors.item && touched.item && (
                        <div className="text-warning" id="feedback">
                          {errors.item}
                        </div>
                      )} 
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
<h6><small><b>Price *</b></small></h6><br></br>
</div>
<div className="col-lg-8 col-md-8 col-sm-8 col-8">
<FormInput
                      className="bg-light"
                      type="text"
                      placeholder="Price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      name="price"
                    />
                     {errors.price && touched.price && (
                        <div className="text-warning" id="feedback">
                          {errors.price}
                        </div>
                      )} 
                    
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
<h6><small><b>Quantity *</b></small></h6><br></br>
</div>
<div className="col-lg-8 col-md-8 col-sm-8 col-8">
<FormInput
                      className="bg-light"
                      type="text"
                      placeholder="Quantity"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.qyt}
                      name="qyt"
                    />
                     {errors.qyt && touched.qyt && (
                        <div className="text-warning" id="feedback">
                          {errors.qyt}
                        </div>
                      )} 
                      
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 col-4">
<h6><small><b>Amount</b></small></h6><br></br>
</div>
<div className="col-lg-8 col-md-8 col-sm-8 col-8">
<FormInput
                      className="bg-light"
                      type="text"
                      placeholder="NaN"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nan}
                      name="nan"
                    />
                     {errors.nan && touched.nan && (
                        <div className="text-warning" id="feedback">
                          {errors.nan}
                        </div>
                      )} 
                      
      </div>
</div>
<span className="text-muted "><i className="far fa-star mr-3 "></i><small><b>Add as favorite</b></small></span>
<div class="col-xs-6 mt-3 mb-5 ">
        <span><Button outline theme="success">Save</Button></span>
 </div>
 </form>
</CardHeader>
       </Col>
     </Row>
)
}
}
const ItemForm = withFormik({
  mapPropsToValues: () => ({ item:"",price: "",qyt:"",nan:"" }),
  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.item) {
      errors.item = "Please Enter the Item/Service !";
    } else if (!/^[a-zA-Z_]+( [a-zA-Z_]+)*$/.test(values.item)) {
      errors.item = " Please Character Only !";
    }

    if (!values.price) {
      errors.price = "Enter the Price !"
     }else if (!/^[-+]?[0-9]+\.[0-9]+$/.test(values.price)) {
      errors.price = "Not Valid Number !"
     }

     if (!values.qyt) {
      errors.qyt = "Please Enter the Item/Service !";
    } else if (!/^[0-9]+$/.test(values.qyt)) {
      errors.qyt = " Not Valid Number !";
    }

     if (!values.nan) {
      errors.nan = "Enter the Number !"
     }else if (!/^[-+]?[0-9]+\.[0-9]+$/.test(values.nan)) {
      errors.nan = "Not Valid Number !"
     }
  
     return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
displayName: "ItemForm"
})(Item);
export default ItemForm;
