import React from 'react'
import {Card,CardHeader 
        } from 'shards-react'

export default class Symtom extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          open: false,
          handleShowSymtomCodeForm :false
      };
  }
  handleShowSymtomCodeForm=() => {
    this.props.handleHideSymtomCodeForm();
}
render(){
    const { showSymtom } = this.state;

return(  
<Card style={{height:"500px",width:"600px"}}>
    <CardHeader className="p-3 " style={{background:"#A9A9A9"}}>
        <div className="row" >
             <div  onClick ={()=>this.handleShowSymtomCodeForm()}> 
                <i className="fas fa-arrow-left ml-1"style={{cursor:"pointer"}}></i>&nbsp; Favourite Symptom
             </div>
        </div>
    </CardHeader>
    <div className=" p-3" style={{background:"hsl(0, 0%, 94%)"}}>
        <div className="row">
            <div className="col-sm-10"><i class="fas fa-search"style={{cursor:"pointer"}}></i></div>
            <div className="col-sm-1"><span className=" hover icon-md fas fa-plus"style={{cursor:"pointer"}}></span></div>
            <div className="col-sm-1"><span className=" hover icon-md fas fa-ellipsis-v"style={{cursor:"pointer"}}></span></div>
        </div>
    </div>
        <div className="row mt-4">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 bg-success text-left"style={{height:"40px"}}>
                <small><b>There are no favorite symptom set, add your favorite symptom here and use them quickly in EHR</b></small>
            </div>
        </div>
</Card>
)
}
}