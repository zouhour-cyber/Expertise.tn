import React from 'react'

import {Form,Button,Modal, Row, Col} from "react-bootstrap"
import {useState } from 'react';


const FormInscript = (props) => {

    const [input,setInput]=useState({nom:"",email:"", password:"" , description:"", image:""})

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
<Form.Group controlId="formBasicEmail">
<Form.Label> <h6> Nom  </h6></Form.Label>
<Form.Control type="text" placeholder="nom" name='nom'  onChange={hanleChange} />

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label> <h6> E-mail </h6></Form.Label>
<Form.Control type="text" placeholder="E-mail"  name='email'   onChange={hanleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label> <h6> Password</h6></Form.Label>
<Form.Control type="text" placeholder="enter password"  name='password'  onChange={hanleChange}   />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label> <h6> Description </h6></Form.Label>
<Form.Control type="text" placeholder="enter description"  name='description'  onChange={hanleChange}   />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label> <h6> Image </h6></Form.Label>
<Form.Control type="text" placeholder="enter image"  name='image'  onChange={hanleChange}   />
</Form.Group>

<Button className="btn-block btn-success mt-4" > s'inscrire </Button>

</Form>


            </Col>
            </Row>












    </div>
   )

 }

export default FormInscript