import React, { useState } from 'react'
import { Container,Row,Form,Col, Button } from 'react-bootstrap'
import Input from '../Components/Input'
import {useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'

const Register = (props) => {
    const [input,setInput]=useState({FullName:"",email:"", password:""})

    const auth = useSelector(state =>state.auth)

    if(auth.authenticate){
        return <Redirect to={`/`} />
    }



    const hanleChange=(e)=>{
        const {name,value}=e.target
        setInput({
            ...input,
            [name]:value
        })
        console.log("input",input)
    }
 
    return (
        <div>
            <Container>
                <Row>
                   
                        <Form >
                            <Row>
                                <Col md={6}>

                                <Form.Group controlId="formBasicEmail">
<Form.Label> <h6> Nom  </h6></Form.Label>
<Form.Control type="text" placeholder="FullName" name='FullName'  onChange={hanleChange} />

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label> <h6> E-mail </h6></Form.Label>
<Form.Control type="email" placeholder="E-mail"  name='email'   onChange={hanleChange}  />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label> <h6> Password </h6></Form.Label>
<Form.Control type="password" placeholder="Password"  name='password'   onChange={hanleChange}  />
</Form.Group>
<Form.Group controlId="formBasicPassword">
<Form.Label> <h6> phone </h6></Form.Label>
<Form.Control type="number" placeholder="phone"  name='phone'   onChange={hanleChange}  />
</Form.Group>
              
                                   </Col>
                             <Button variant="primary" type="submit">register</Button>
                            </Row>
                        </Form>
                  
                </Row>
            </Container>
            
        </div>
    )
}

export default Register
