import { useState } from 'react';
import {Button ,Row, Col, FormControl, Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { addNewsletter } from '../Redux/Actions/NewsletterAction';
import './Footer.css';

function Footer() {
    const dispatch = useDispatch()

    const [input,setInput]=useState({email:"" })
   
   const hanleChange=(e)=>{
       const {name,value}=e.target
       setInput({
           ...input,
           [name]:value
       })
       console.log("input",input)
   }
   
   //ADD Menu 
   const addNews=()=>{
   dispatch (addNewsletter(input.email)) 
   console.log("inpuuuuuuuuuuuut",input)
   }

    return(
<div className="bgfooter">
<Row >
    <Col md={3} xs={12} sm={12} className="mt-5">

   <h4 className="logo mb-3 justify-text-left"> <span className="logoVert"> Find.</span>Expert</h4>
   
   <div className="mt-4 justify-text-left">  <span className="logoVert"> Find.</span>Expert, réunit les experts de l'agriculture, de l’agro-industrie & de productions et santé animales.</div>
    
    </Col>
    <Col md={3} xs={12} sm={12} className="mt-5" >
    <h5 > Liens utiles</h5>
    <ul> 
    <li> <Link to="/Register"> Inscription expert </Link></li>
    <li> <Link to="/Expert"> Rendez-vous </Link> </li>
    <li> <Link to="Contact"> Contact</Link> </li>
</ul>
    
    </Col>
    <Col md={3} xs={12} sm={12} className="mt-5">
    <h5 >Mon compte</h5>
    <ul> 
    <li> <Link to="/Expert">Nos experts</Link> </li>
   <li> <Link to="/Register">Inscription</Link>  </li>
   <li>  <Link to="/signin">Connexion </Link> </li>
   </ul>

    </Col>
    <Col md={3} xs={12}  sm={12}  className="mt-5">

    <h5 >Rejoignez-nous</h5>
    <Form className="d-flex footer-newsletter mt-5">
      <FormControl
        type="search"
        placeholder="Adresse e-mail"
        className="mr-2 "
        name="email"
        onChange={hanleChange}  
      />
      <Button  className="newletter-btn" onClick={addNews}  > <i class="fas fa-paper-plane"></i> </Button>
    </Form>
    
    
    </Col>
   </Row>
   
    <hr color="white" className="mt-5"/>
    <div className="">  
<Row  className="d-flex justify-content-between ">   
<Col md={4} xs={12} sm={12} className="text-center ">
 <p><Link to="/"> <span className="logoVert"> Find.</span>Expert</Link>©Copyright 2021</p>
 </Col>
 <Col md={4} xs={12} sm={12}> </Col>
 <Col md={4} xs={12} sm={12}>
      <div className="footer-social-link text-center " >
      <ul class="d-flex justify-content-center">
      <li>
          <a href="#">
              <i className="fa fa-facebook"></i>
          </a>
      </li>
      <li>
          <a href="#">
              <i className="fa fa-twitter"></i>
          </a>
      </li>
      <li>
          <a href="#">
          <i class="fab fa-linkedin-in"></i>
          </a>
      </li>
      <li>
          <a href="#">
              <i class="fa fa-youtube"></i>
          </a>
      </li>
 
  </ul>
  </div>
</Col>
</Row>
</div>


</div>

    )
    
}

export default Footer