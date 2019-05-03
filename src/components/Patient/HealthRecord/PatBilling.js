import React from "react";
import { Container,Card, FormInput, CardHeader } from "shards-react";


export default class PatBilling extends React.Component{
    render(){
        return(
    <Container fluid className="main-content-container px-4 py-4">
    <Card small className="mb-4">
    <CardHeader className="border-bottom">
   <div className="row">
   <div className="col-lg-10">
   <span id="save-btn" className="text-primary fa fa-credit-card mr-2" data-toggle="tooltip" title=""></span>
      <a className="text-success">BILLING</a>
   </div>
   <div className="col-lg-1">
   <span id="save-btn" className="fa fa-print ml-5" data-toggle="tooltip" title="print"></span>
   </div>
   <div className="col-lg-1">
   <span id="save-btn" className="fa fa-ellipsis-v ml-3" data-toggle="tooltip" title="Show more options"></span>
   </div>
   </div>


  <div className="row mt-3" style={{height: "35px",background:"#F2F2F2"}}>
 <div className="col-3 border-white">Date</div>
 <div className="col-5 border">Particulare</div>
 <div className="col-2 border text-right">Amount</div>
 <div className="col-2 border text-right">Paid</div>
  </div>
  
  <div className="row mt-1">
 <div className="col-3 ">Total<br></br><i>0.00</i></div>
 <div className="col-5 "><a className="text-success">Paid</a><br></br><i>0.00</i></div>
 <div className="col-2 ">Unpaid<br></br><i>0.00</i></div>
 <div className="col-2 text-right"><a className="text-primary">Overpaid</a><br></br><i>0.00</i></div>
  </div>

  <card small>
  <CardHeader className="border-bottom mt-4 mb-5" style={{background:"#FCF8E3"}}><h6>Not Found</h6>
           
           </CardHeader>
           </card>
    </CardHeader>
    </Card>
    </Container>
);
}
}