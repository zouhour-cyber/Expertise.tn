import React from 'react'
import RegisterUserForm from '../authScreen/userRegister'
import {Container,Row, Col,  Button , Badge , Form} from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import Footer from './Footer';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PageRegister = (props) => {
  const auth = useSelector(state =>state.auth)


  return(
    <div   >
        <NavbarComponent/>
        
<Container  className="text center "fluid  > 
    <Row  className="bg-register d-flex justify-content-center" > 
  
  
    <Col md={6}  sm={10} xs={10} className="bg-white" style={{margin:"7rem 0" , borderRadius:"2rem"}}> 

        <h3 className="mb-3 text-center"> Inscrivez-nous </h3>
        <div className="mb-3 text-center"> J'ai déja un compte  <Link to='signin' style={{color:"var(--vert)",fontSize:"1rem" ,fontWeight:"900"}}>se connecter </Link>   </div>
 <RegisterUserForm/>
 </Col>
 </Row>
 
 </Container>
<Footer/>

    </div>
   )

 }

export default PageRegister