import React from 'react'
import {Nav, Navbar, Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
// import ModalInscri from './modalinscription';


const NavbarExpert = () => {
  return(
    <div>
<Navbar  className="nav" collapseOnSelect expand="lg" variant="dark" >
  <Container>
  <Navbar.Brand href="#home">Expertise.tn </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Link  to="/DashboardExpert" className="navlink">Mon Profil</Link>
      <Link to="/Dashboard/Dashboardpublication" className="navlink"> Publication </Link>

      <Link to="/RDVDashExpert" className="navlink"> Rendez-vous </Link>
    </Nav>

    <Link  to="/register"> Kais <img src="image/temoignage1.webp" className="img-responsive" style={{ borderRadius:"50%", height:"3rem", width:"3rem"}}/> </Link>

  </Navbar.Collapse>
  </Container>
</Navbar>
    
    </div>
   )

 }

export default NavbarExpert