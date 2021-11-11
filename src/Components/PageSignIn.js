import React from 'react'
import RegisterUserForm from '../authScreen/userRegister'
import {Container,Row, Col,  Button , Badge , Form} from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import SignIn from '../authScreen/SignIn';

const PageSignIn = (props) => {
  return(
    <div   >
        <NavbarComponent/>
        
<Container  className=" "fluid  > 
    <Row  className="bg-register d-flex justify-content-center" > 
  
  
    <Col md={5}  sm={10} xs={10} className="bg-white1" style={{margin:"9rem 0" , borderRadius:"2rem"}}> 

        <h3 className="mb-3 text-center"> se connecter </h3>
 <SignIn/>
 <div className="mt-5 text-center"> J'ai pas un compte  <Link to='Register' style={{color:"var(--vert)",fontSize:"1rem" ,fontWeight:"900"}}>Créer mon compte </Link>   </div>

 </Col>
 </Row>
 
 </Container>
<Footer/>

    </div>
   )

 }

export default PageSignIn