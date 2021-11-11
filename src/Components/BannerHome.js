import React from 'react'
import { Container, Row, Col, Button , Card} from 'react-bootstrap'
import '../Screen/Home.css'
import TypingTextAnimation from 'react-typing-text-animation'



const BannerHome = (props) => {
  return(
    <div> <Container className="banner" fluid>
    <Row className="">
    <Col md={6} xs={10} className="max-height text-justify" >
      <div > <TypingTextAnimation className="text-banner" delayOnReverse="5000"	 delay="200" text="Besoin d'un expert agronome en Tunisie ?" />
     </div>
      
  <Row> 
  <Col md={6} xs={10} className="mt-4">
   
   <Button variant="success" href='/Expert'> Découvrez nos experts !! </Button>

</Col>
</Row>
    </Col> 

</Row>
</Container></div>
   )

 }

export default BannerHome