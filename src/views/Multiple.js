import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput } from 'shards-react'

export default  function Multiple(){
return(

    <div className="container mt-3">
    <Card className="" style={{width:"500px",height:"400px"}}>
            <row>
            <div className="p-3 bg-primary text-white">Favourite Symptom</div>
            </row>
            <table>
                <td>
                    <span class="hover icon-md fa fa-search text-success text-left" title="search"></span>
                </td>
                <FormInput className="bg-default" id="search-string" maxlength="form-control" placeholder="all"></FormInput>
                <td>
                    <span class="hover icon-md fa fa-plus text-success text-right" title="search"></span>
                </td>
                <td>
                    <span class="hover icon-md fa fa-search text-success text-right" title="search"></span>
                </td>
            </table>
    </Card>
    </div>
    )
}