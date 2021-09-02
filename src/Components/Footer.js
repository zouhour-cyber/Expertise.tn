import {Button ,Row, Col, FormControl, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return(
<div className="bgfooter">
<Row >
    <Col md={4} xs={12} sm={12} className="mt-5">

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
    <Col md={2} xs={12} sm={12} className="mt-5" >
    <h5> Liens utiles</h5>
    {/* <div className="tiretbottom"> </div> */}
    <h6>Nos experts</h6>
    <h6>Inscription</h6>
    <h6>Actualités </h6>
 
    
    </Col>
    <Col md={2} xs={12} sm={12} className="mt-5">
    <h5>Mon compte</h5>
    {/* <div className="tiretbottom"> </div> */}

    <h6> Inscription</h6>
    <h6> Rendez-vous </h6>
    <h6> Consulting </h6>
    
    </Col>
    <Col md={3} xs={12}  sm={12}  className="mt-5">

    <h5>Rejoignez-nous</h5>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Adresse e-mail"
        className="mr-2 searchInput"
      />
      <Button  className="newletter-btn"  > <i class="fas fa-paper-plane"></i> </Button>
    </Form>
    
    
    </Col>
   </Row>
   
    <hr color="white" className="mt-5"/>
    <div className="">  
<Row  className="d-flex justify-content-between ">   
<Col md={4} xs={12} sm={12} className="text-center ">
 <p><Link to="/">EXPERTISE.TN</Link>© Copyright 2021</p>
 </Col>
 <Col md={4} xs={12} sm={12}> </Col>
 <Col md={4} xs={12} sm={12}>
      <div className="footer-social-link text-center " >
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
</Col>
</Row>
</div>

</div>

    )
    
}

export default Footer