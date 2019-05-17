import React from 'react'
import {Row,Button, Card, CardBody,Col,Form,FormGroup, FormCheckbox,
    FormSelect,FormInput } from 'shards-react'

export default  function NotForm(){
return( 
      <Form>
        <div className="ml-3 mt-2 mb-2" style={{width:"450px"}}>
                <select type="text" id="subject" maxlength="255" className="form-control" placeholder="Patient by name,mobile,KPiD or e:email" 
                data-toggle="tooltip" title="Enter the subject of the message">
                <option>Patient by name,mobile,KPiD or e:email</option>
                </select>
            </div>
      </Form>
)
}