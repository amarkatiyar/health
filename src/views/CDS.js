import React from "react";
import { Container, Row, Col, Card, FormInput, Button,CardHeader, CardBody } from "shards-react";


import PageTitle from "../components/common/PageTitle";

const CDS = () => (
  <Container fluid className="main-content-container px-4 py-4">
            <Card small className="mb-4">
          <CardHeader>
        <div className="row">
          <div className="col-lg-11">
          <h6 className="text-success"><i class="fa fa-address-card"></i> &nbsp; CLINICAL DECISION SUPPORT</h6>
         </div>

         <div className="col-lg-1">
         <span id="save-btn" class="hover icon-md fa fa-ellipsis-v mt-2" data-toggle="tooltip" title="Send Message"></span>
         </div>
        </div><br></br>

          <div className="row ">
              <div className="col-12 text-right">
                  <a href="#"><Button  className="mr-2 mt-3 mb-3 " outline theme="success"><i className="fa fa-plus"></i> 
                    &nbsp;New Clinical Decisional Support Rule </Button></a>
              </div>   
          </div>
            <table className="table mt-2">
            <thead className="thead-light">
            <tr>
                <th scope="col">Provider</th>
               <th scope="col">Description</th>
               <th scope="col">Bibliography</th>
               <th scope="col">Funding</th>
               <th scope="col">Release Date</th>
               <th scope="col">Status</th>
           </tr>
           </thead>
           </table>
           <card small className="mb-4">
           <CardHeader className="border-bottom" style={{background:"#f0f0f0"}}><h6>Not Found</h6>
           <div>
              <a href="#"><Button  className="mr-2 mt-3 mb-3" outline theme="success"><i className="fa fa-plus"></i> 
              &nbsp;Add CDS Rule </Button></a>
                        
					</div>
           </CardHeader>
           </card>
          </CardHeader>
        </Card>
  </Container>
);
export default CDS;