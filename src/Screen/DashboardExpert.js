import React from 'react'
import NavbarExpert from '../Components/NavbarExpert'
import { Container, Row, Col, Button, Form} from 'react-bootstrap'
import "./ExpertDashboard.css"


const DashboardExpert = (props) => {
  return(
    <div>

    <NavbarExpert/>
    <Container>  
    <Row className="d-flex justify-content-between  "> 
    <Col md={4} className="">
    <div className="bg-white ">   

    <img src="image/temoignage1.webp" className="img-responsive my-4" style={{ borderRadius:"50%", height:"9rem", width:"9rem"}}/>
    <div>  <h4>  Kais hamza </h4>  </div>

   
    <hr/> 
    <div className="Aside "> 
      <div className="">
          <p> Membre since: aout 2021</p>
    <p> Spécialité: Oléiculture  </p>
    <p> Certification </p>

    <p> Description : Diplome nationale d'ingénieur en Agronomie </p>  </div>  
     <hr/>
  
    </div>
    
    
    
    </div>
    </Col>
    <Col md={8} >
    <Form   className="formulaire"  >
    <h3 className="my-4"> Modifier mes données </h3>

<Form.Group  >
<Form.Control type="text" placeholder="Nom" name='Nom'  />

</Form.Group>
<Form.Group controlId="formBasicPassword">
<Form.Control type="text" placeholder="Enter description"  name='description'    />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Control type="text" placeholder="Enter votre certification"  name='image'    />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Control type="text" placeholder="Enter image"  name='image'    />
</Form.Group>


<Button className="btn-block mt-4" > Valider les modifications</Button>

</Form>


    </Col> 
    </Row>
    </Container>
    </div>
   )

 }

export default DashboardExpert