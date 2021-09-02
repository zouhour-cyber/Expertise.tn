import React from 'react'

import {Form,Button, Row, Col,Container} from "react-bootstrap"
import {useState } from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import Footer from '../Components/Footer';
import './contact.css'


const Contact = (props) => {

 const [input,setInput]=useState({nom:"",email:"", message:"" })

const hanleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input",input)
}

  return(
    <div >
<div className="bg-contact " > 
<NavbarComponent/>

<Row className="contact d-flex align-items-center justify-content-evenly"> 

<Col md={5}  sm={10} xs={10}> 
<div className="DonnéContact d-flex flex-column justify-content-left">  
<h4 className="mb-4"> Pour plus d'informations n'hézitez pas de nous laisser un message !!</h4>
<div className="coordonnés"> Téléphone :+(216)  99 787 025 </div>
<div className="coordonnés"> E-mail : Expertise@gmail.com </div>
<div className="coordonnés"> E-mail : Expertise@gmail.com </div>

<div className="footer-social-link text-left  mt-4" >
      <ul class="d-flex justify-content-start">
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


</div>
</Col>
<Col  md={6}  sm={10} xs={10} className="bg-form " > 
           
                <Form className="" >
                <Form.Group controlId="formBasicPassword">
<Form.Control type="text" className="formcontact" placeholder="Votre nom et prénom"  name='nom'  onChange={hanleChange}   />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Control type="text" className="formcontact"  placeholder="Adresse e-mail"  name='email'   onChange={hanleChange}  />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Control type="text" as="textarea" style={{ height: '120px' }} className="formcontact" placeholder="Saisir un message"  name='message'   onChange={hanleChange}  />
</Form.Group>


<Col md={12} className="d-flex justify-content-start"> 
<Button className="btn-blue-normal  mt-3 " > Envoyer </Button>
</Col>
</Form>


            </Col>
            </Row>



            </div>
            <Footer/>
    </div>
   )

 }

export default Contact