import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import Publications from '../Components/publications'
import { Container, Row, Col, Button , Card} from 'react-bootstrap'
import Footer from '../Components/Footer'
import TypingTextAnimation from 'react-typing-text-animation'


const PublicationsScreen = (props) => {
  return(
    <div>
<NavbarComponent/>
<Container className="bannerpub" fluid>
      <Row className="d-flex justify-content-start">
      <Col md={6} xs={10} className="text-banner-actualité" >
        <h2 className=""> <TypingTextAnimation className="text-banner" delayOnReverse="5000"	 delay="200" text='Découvrir nos Actualités' /></h2>
        <h5>  Nos experts publient plein d'articles informatives et riches pour vous !!</h5>
        
    <Row> 
    
 </Row>
      </Col> 

  </Row>
  </Container>

   <Publications/>
   <Footer/>

    </div>
   )

 }

export default PublicationsScreen