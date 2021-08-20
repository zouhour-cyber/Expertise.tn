import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import './Home.css'
import { Container, Row, Col, Button , Card} from 'react-bootstrap'
import Footer from '../Components/Footer'
import Témoignage from '../Components/TémoignageSlider'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../Redux/Actions/authAction'
import Partenaires from '../Components/partenaires'

const Home = (props)=> {

  return(
    <div>
  <NavbarComponent/>  
  

  <Container className="banner" fluid>
      <Row className="d-flex  mx-auto">
      <Col md={6} xs={10} className="max-height text-justify" >
        <h4 className="text-banner"> Besoin d'un expert agronome en Tunisie!</h4>
        
    <Row> 
    <Col md={6} xs={10} className="mt-4">
     
     <Button variant="success"> Demander un rendez-vous !! </Button>

 </Col>
 </Row>
      </Col> 

  </Row>
  </Container>

  <div className="section-padding"> </div>

  <Container   fluid>
  <div className="subtitle"> Nos Domaines d'espertise</div>
<Row className="d-flex justify-content-between mt-5 mx-auto">
<Col md={4}> 

<Card className="Cardhover" style={{ width: '22em' ,height:"30rem", padding:"2rem" }}>
  <Card.Body>
    <Card.Title><i className="fas fa-utensils fa-3x iconservice"></i> </Card.Title>
    <Card.Subtitle className="my-4 text-blue"> Agroalimentaire</Card.Subtitle>
    <Card.Text className="text">
    Analyse et gestion des risques des produits de l’industrie agroalimentaire à chacune des étapes de leur mise sur le marché.
    </Card.Text>
    
  </Card.Body>
</Card>
</Col>

<Col md={4}> 

<Card className="Cardhover1" style={{ width: '22rem' ,height:"30rem" , padding:"2rem"}}>
  <Card.Body>
    <Card.Title> <i className="fas fa-apple-alt fa-3x iconservice"></i> </Card.Title>
    <Card.Subtitle className="my-4 text-blue">Agriculture </Card.Subtitle>
    <Card.Text className="text">
    Amélioration des techniques de culture, Nos ingénieurs agronomes peuvent vous aider face à autant de contraintes que de risques potentiels en production agricole.
    </Card.Text>
    
  </Card.Body>
</Card>
</Col>

<Col md={4}> 

<Card  className="Cardhover" style={{ width: '22rem' ,height:"30rem", padding:"2rem" }}>
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


  </Container>

  <div className="section-padding"> </div>

  <Container   fluid>

<Row className="d-flex bg-white">

<Col md={5} className=''>
  
  <img  src="image/home-left.png"  className="image-fluid img-about" style={{ height:"35rem"}}/>

  </Col>
<Col md={6}  className='mt-5 '  >
<div className="Apropos">Expertise.tn , les leader du vivant  </div>
<div className="Apropos-text"> Parce que l'agriculture est en perpétuelle mutation, soumise à des réglementations et des techniques de plus en plus sophistiquées, les exploitants agricoles doivent aujourd’hui faire face à des problématiques complexes.</div>
<Button variant="success"> Demander un rendez-vous !! </Button>
</Col>
</Row>

  </Container>



<Container  className=" bg-vert d-flex align-items-center justify-content-center" fluid> 
<Row> 

  <Col md={8} xs={12}  className="Apropos" > Vous êtes expert agronome certifié et confirmé?</Col>
  <Col md={4} xs={12}>   <Button className="px-5 btn-blue" variant="dark">  Rejoignez-nous  </Button>
</Col>
</Row>


</Container>

<Témoignage/>
<div className="section-padding"> </div>

<Partenaires/>

<div className="section-padding"> </div>

<Footer/>

    </div>
   )

 }

export default Home