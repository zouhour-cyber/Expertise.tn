import {Button ,Row, Col, FormControl, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return(
<div>
<Row className="bgfooter">
    <Col md={4} xs={12} className="mt-5">

   <h4 className="logo"> Expertise <span className="vert">.tn</span></h4>
      {/* <img
        src="image/logo-dark.webp" color="#FF5A5F"
        width="100"
      
        className=""
        alt="moviehunter"
      /> */}

      <h6 className="mt-4 text-left">  EXPERTISES.TN, réunit les experts de l'agriculture, de l’agro-industrie, de l’environnement & de productions et santé animales.</h6>
    
    </Col>
    <Col md={1} > </Col>
    <Col md={2} xs={12} className="mt-5" >
    <h5> Liens utiles</h5>
    {/* <div className="tiretbottom"> </div> */}
    <h6>Nos experts</h6>
    <h6>Inscription</h6>
    <h6>Actualités </h6>
 
    
    </Col>
    <Col md={2} xs={12} className="mt-5">
    <h5>Mon compte</h5>
    {/* <div className="tiretbottom"> </div> */}

    <h6> Inscription</h6>
    <h6> Rendez-vous </h6>
    <h6> Consulting </h6>
    
    </Col>
    <Col md={3} className="mt-5">

    <h5>Rejoignez-nous</h5>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Adresse e-mail"
        className="mr-2 searchInput"
        aria-label="Search"
      />
      <Button  className="newletter-btn"  > <i class="fas fa-paper-plane"></i> </Button>
    </Form>
    
    <div className="footer-social-link " >
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
          <i class="fa fa-instagram"></i>
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
   {/* <Col md={3} xs={12} className="mt-5">
      <h5> Newsletter </h5>
      <div className="tiretbottom"> </div>

      <p>   Enter your email to create or restart your membership.</p>
      <InputGroup>
      <FormControl type="text" id="search-item" placeholder="E-mail adress "/>
      <InputGroup.Append>
          <Button id="bs" type="submit"> <i class="fa fa-chevron-right mx-1"> </i></Button>
    </InputGroup.Append>
        </InputGroup>
   </Col> */}


<Col md={12} className="text-center mt-5">
<hr color="white"/>
 <p><Link to="/"> EXPERTISE.TN </Link> © Copyright 2021</p>
 </Col>
 </Row>

</div>

    )
    
}

export default Footer