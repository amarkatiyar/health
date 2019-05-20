import React from "react";
import {

  Card,
  CardHeader,
  CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Button
} from "shards-react";

export default class Today extends React.Component {
    render(){
    return (
    <Card className="mb-5 mt-4 ml-4" style={{height:"700px",width:"900px"}}>
    <table className="table mb-0">
         <tbody>
                <tr>
                  <td>9.00 am</td>
                </tr>
                <tr>
                  <td>9.30 am</td>
                </tr>
                <tr>
                  <td>10.00 am</td>
                </tr>
                <tr>
                  <td>10.30 am</td>
                </tr>
                <tr>
                  <td>11.00 am</td>
                </tr>
                <tr>
                  <td>11.30 am</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr>
                  <td>1.00 pm</td>
                </tr>
                <tr>
                  <td>1.30 pm</td>
                </tr>
                <tr>
                  <td>2.00 pm</td>
                </tr>
                <tr>
                  <td>2.30 pm</td>
                </tr>
                <tr>
                  <td>3.00 pm</td>
                </tr>
                <tr>
                  <td>3.30 pm</td>
                </tr>
                <tr>
                  <td>4.00 pm</td>
                </tr>
              </tbody>
        </table>
        <CardBody>

        </CardBody>
    </Card>
    )
    }
}