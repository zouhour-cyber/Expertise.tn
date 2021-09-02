import React from 'react'
import '../Screen/Home.css'
import { Container, Row, Col, Button , Card} from 'react-bootstrap'


const CardsExpertise = (props) => {
  return(
    <div> 
    <div className="subtitle"> Nos Domaines d'espertise</div>
    <div  className="d-flex justify-content-evenly mt-5"> 
  <Row>
  <Col md={4}  sm={10}  xs={10}> 
  
  <Card className="Cardhover" style={{ width: '22em' ,height:"30rem", padding:"1rem" }}>
    <Card.Body>
      <Card.Title><i className="fas fa-utensils fa-3x iconservice"></i> </Card.Title>
      <Card.Subtitle className="my-4 text-blue"> Agroalimentaire</Card.Subtitle>
      <Card.Text className="text">
      Analyse et gestion des risques des produits de l’industrie agroalimentaire à chacune des étapes de leur mise sur le marché.
      </Card.Text>
      
    </Card.Body>
  </Card>
  </Col>
  
  <Col md={4} sm={10}  xs={10}> 
  
  <Card className="Cardhover1" style={{ width: '22rem' ,height:"30rem" , padding:"1rem"}}>
    <Card.Body>
      <Card.Title> <i className="fas fa-apple-alt fa-3x iconservice"></i> </Card.Title>
      <Card.Subtitle className="my-4 text-blue">Agriculture </Card.Subtitle>
      <Card.Text className="text">
      Amélioration des techniques de culture, Nos ingénieurs agronomes peuvent vous aider face à autant de contraintes que de risques potentiels en production agricole.
      </Card.Text>
      
    </Card.Body>
  </Card>
  </Col>
  
  <Col md={4} sm={10}  xs={10}> 
  
  <Card  className="Cardhover" style={{ width: '22rem' ,height:"30rem", padding:"1rem" }}>
    <Card.Body>
      <Card.Title ClassName="mb-5"> <i className="fas fa-paw fa-3x iconservice"></i> </Card.Title>
      <Card.Subtitle className="my-4 text-blue">Productions animales et santé </Card.Subtitle>
      <Card.Text className="text">
    Les productions animales nécessitent des connaissances de plus en plus spécialisées auxquelles les ing prod animale sont en mesure de répondre.
      </Card.Text>
      
    </Card.Body>
  </Card>
  </Col>
  
  </Row>
  </div>
  

  </div>
   )

 }

export default CardsExpertise