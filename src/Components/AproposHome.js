import React from 'react'
import '../Screen/Home.css'
import { Container, Row, Col, Button , Card} from 'react-bootstrap'

const AproposHome = (props) => {
  return(
    <div><Container   fluid>

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
    
      </Container></div>
   )

 }

export default AproposHome