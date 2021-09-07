import {Button ,Row, Col, FormControl, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return(
<div className="bgfooter">
<Row >
    <Col md={3} xs={12} sm={12} className="mt-5">

   <h4 className="logo mb-4"> <span className="logoVert"> Find.</span>Expert</h4>
      {/* <img
        src="image/logo-dark.webp" color="#FF5A5F"
        width="100"
      
        className=""
        alt="moviehunter"
      /> */}

      <div className="mt-5 justify-text-left">  <span className="logoVert"> Find.</span>Expert, réunit les experts de l'agriculture, de l’agro-industrie & de productions et santé animales.</div>
    
    </Col>
    {/* <Col md={} > </Col> */}
    <Col md={3} xs={12} sm={12} className="mt-5" >
    <h5> Liens utiles</h5>
    <ul> 
    {/* <div className="tiretbottom"> </div> */}
    <li> <Link to="/Expert">Nos experts</Link> </li>
   <li> <Link to="/">Inscription</Link>  </li>
   <li>  <Link to="/Actualités">Actualités </Link> </li>
   </ul>
    
    </Col>
    <Col md={3} xs={12} sm={12} className="mt-5">
    <h5>Mon compte</h5>
    {/* <div className="tiretbottom"> </div> */}
 <ul> 
    <li> <Link to="/RegisterExpert"> Inscription expert </Link></li>
    <li> <Link to="#"> Rendez-vous </Link> </li>
    <li> <Link to="#"> Consulting </Link> </li>
</ul>
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
 <p><Link to="/"> <span className="logoVert"> Find.</span>Expert</Link>©Copyright 2021</p>
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