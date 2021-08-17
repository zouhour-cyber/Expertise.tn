import React from 'react'
import { Container, Row, Col, Button , Card, FormControl, Form, InputGroup} from 'react-bootstrap'
import NavbarComponent from '../Components/NavbarComponent'
import './Expert.css'
import './Home.css'

const ExpertScreen = (props) => {
  return(
    <div>
<NavbarComponent/>


<Container className="bannerexpert" fluid>
<Container>
        <Row className="max-height">  
 <Col md={7}>       
<Row className="expert d-flex justify-content-center"> 

<Col className="mb-5" md={12} xs={12}> <h1> Chercher un expert </h1>   </Col> 
<Col md={12} xs={12}> 
<Form className="d-flex"> 

      <FormControl
        type="search"
        placeholder="Rechercher un expert"
        className="searchInput"
        aria-label="Search"
      />

      <Form.Select className="btn-select" aria-label="Default select example">
  <option disabled> Spécialité</option>
  <option value="1">Céréaliculture</option>
  <option value="2">Oléiculture</option>
  <option value="3">Arboriculture</option>
  <option value="4">Horticulture</option>
  <option value="5">Floriculture</option>
  <option value="6">Viticulture</option>
  <option value="7">Agro-alimentaire</option>
  <option value="8">Vétérinaire</option>
  <option value="9">Production animale</option>
</Form.Select>
  
</Form>        
</Col>
                  </Row>
                  </Col>    
               </Row>
                  
                </Container>



</Container>

    </div>
   )

 }

export default ExpertScreen