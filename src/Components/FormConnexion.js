import React from 'react'

import {Form,Button, Row, Col} from "react-bootstrap"
import {useState } from 'react';


const FormConnexion = (props) => {

    const [input,setInput]=useState({email:"", password:"" })

const hanleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input",input)
}

  return(
    <div>


<Row> 
                <Col  md={10} className="mx-auto my-4" > 
           
                <Form >
<Form.Group controlId="formBasicPassword">
<Form.Label> <h6> E-mail </h6></Form.Label>
<Form.Control type="text" placeholder="E-mail"  name='email'   onChange={hanleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label> <h6> Password</h6></Form.Label>
<Form.Control type="text" placeholder="enter password"  name='password'  onChange={hanleChange}   />
</Form.Group>



<Button className="btn-block btn-success mt-4" > se connecter </Button>

</Form>


            </Col>
            </Row>












    </div>
   )

 }

export default FormConnexion