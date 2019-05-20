import React from "react";
import 
{
  FormGroup,
  Form,
  Row,
  CardBody,
  Card,
  Button,    
  CardHeader,
  FormInput,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
} from "shards-react";
class Fav extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
          showFavorite: false,
         
        };
      }
    
      handleshowFavorite = prevState => {
        this.setState({ showFavorite: !prevState });
      };
      
    

    render(){
      let { showFavorite } = this.state;

        return(

        
            <div style={{position:"absolute",left:"350px", top:"30px"}}>
             <Card className="mt-2 mb-5" style={{height:"230px",width:"350px"}}>
            
             <CardHeader className="bg-light text-success mb-1"><i class="fas fa-chevron-left"></i>&nbsp; &nbsp; &nbsp; Favorite Message</CardHeader>
              
             <div className="d-flex content-justify-arround mb-5">
               <div> <InputGroup size="md" seamless>
              <InputGroupAddon type="prepend">
                <InputGroupText>
                       <i class=" text-dark fas fa-search"></i>&nbsp;&nbsp;&nbsp;
          
                </InputGroupText>
              </InputGroupAddon>
              <FormInput  className="border-0 " placeholder="All" style={{width:"250px"}}/>
              </InputGroup>
              </div>

                <div className="ml-auto ">
                 <i
                    class=" text-dark fas fa-plus mr-3 " onClick={() => this.handleshowFavorite(showFavorite)}
                  
                  />
                  </div>
                  </div>
                  {showFavorite && (
                <div style={{ zIndex: 999 ,position:"absolute",left:"0px",width:"100%" ,top:"0px"}}>
                  <div className="container">
                    <Card className="mb-2">
                      <CardBody>
                        <Row className="mt-0">
                          <div className=" col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
                            <h6><i class="fas fa-chevron-left"
                                onClick={() =>
                                  this.handleshowFavorite(showFavorite)
                                }
                              />&nbsp; &nbsp;
                               Favorite Message
                            </h6>
                          </div>
                          <div className=" col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                            <i class=" text-dark fas fa-check" />
                          </div>
                        </Row>
                        <Form>
                          <FormGroup>
                            <div className="row">
                              <div className=" col-xl-12 col-lg-12  col-md-12 col-sm-12 col-12">
                          
                              <div class="form-group">
                              <textarea placeholder="enter the Message here" class="form-control" rows="3" id="comment"></textarea>
                              </div>
                              </div>
                            </div>
                          </FormGroup>

                         
                          <div className="float-right">
                            {" "}
                            <a href="#">
                              <Button
                                className="mr-2 text-weight-bold"
                                outline
                                theme="success"
                              >
                                {" "}
                                &nbsp; Save{" "}
                              </Button>
                            </a>
                          </div>
                        </Form>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              )}
  
             </Card>
             
            
             </div>

        );
    }
}
export default Fav;

