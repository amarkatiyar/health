import React from 'react'
import {
    Row, Button, Card, CardBody, Col, Form, FormGroup, FormCheckbox,
    FormSelect, FormInput, CardHeader
} from 'shards-react'

export default class Procedure1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          open: false,
          handleShowDrugCodeForm :false
      };
  }
  handleShowDrugCodeForm=(showForm3) => {
    this.props.handleHideDrugCodeForm(showForm3);
}
render(){
    const { showForm3 } = this.state;


return (
<Card style={{ height: "500px",width:"600px" }}>
<Form>
    <CardHeader className="p-3 " style={{ background: "#A9A9A9" }}>
        <div className="row" >
            <div onClick ={()=>this.handleShowDrugCodeForm(showForm3)} className="col-sm-1"> <i className="fas fa-arrow-left"></i></div>
            <div className="col-sm-11"> Procedure Code</div>
        </div>
    </CardHeader>
                    <div className=" p-3" style={{ background: "hsl(0, 0%, 94%)" }}>
                        <div className="row">
                            <div className="col-sm-9">hdfdfh</div>
                            <div className="col-sm-1"><span className=" hover icon-md fas fa-paperclip"></span></div>
                            <div className="col-sm-1"><span className=" hover icon-md fas fa-plus"></span></div>
                            <div className="col-sm-1"><span className=" hover icon-md fas fa-ellipsis-v"></span></div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 bg-success text-left" style={{ height: "40px" }}>
                            <p>There are no Procedure Code code here and use them quickly</p>
                        </div>
                    </div>
</Form>
</Card>
    )
}
}