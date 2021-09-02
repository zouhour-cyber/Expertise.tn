import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import Publications from '../Components/publications'
import { Container, Row, Col, Button , Card} from 'react-bootstrap'


const PublicationsScreen = (props) => {
  return(
    <div>
<NavbarComponent/>
<Container className="bannerpub" fluid>
      <Row className="d-flex  mx-auto">
      <Col md={6} xs={10} className="max-height text-justify" >
        <h4 className="text-banner-actualité"> Découvrir nos Actualités </h4>
        
    <Row> 
    
 </Row>
      </Col> 

  </Row>
  </Container>

   <Publications/>

    </div>
   )

 }

export default PublicationsScreen