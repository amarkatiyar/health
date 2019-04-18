import React from "react";
import { Container, Row, Col, Card, FormInput, Button,CardHeader, CardBody } from "shards-react";


import PageTitle from "../components/common/PageTitle";

const CDS = () => (
  <Container fluid className="main-content-container px-4 py-4">
            <Card small className="mb-4">
          <CardHeader className="border-bottom">
        <div className="row">
          <div className="col-lg-11">
          <h6 className="text-primary">CLINICAL DECISION SUPPORT</h6>
         </div>

         <div className="col-lg-1">
         <span id="save-btn" class="hover icon-md fa fa-ellipsis-v mt-2" data-toggle="tooltip" title="Send Message"></span>
         </div>
        </div><br></br>

            <div className="row">
            <div class="row col-8"></div>
            <div class="row col-4">
            <div className="icon-color btn btn-outline-primary ml-5 " data-toggle="tooltip" title="CDS">
						<span className="fa fa-plus"></span>
                        {/* <span>&nbsp;&nbsp;Compose</span> */}
                        <span><a href="./CDS"> &nbsp;
                        New Clinical Decisional Support Rule
                        </a></span>
			</div> </div>           
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
           <div class="icon-color btn btn-outline-primary" data-toggle="tooltip" title="Add CDS Rule">
						<span class="fa fa-plus"></span>
                        <span><a href="./CDS"> &nbsp;
                        Add CDS Rule
                        </a></span>
                        
					</div>
           </CardHeader>
           </card>
          </CardHeader>
        </Card>
  </Container>
);
export default CDS;