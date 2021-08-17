import React from 'react'
import {Nav, Navbar, Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';



 
const NavbarComponent = () => {
  return(
    <div>
<Navbar  className="nav" collapseOnSelect expand="lg" variant="dark" >
  <Container>
  <Navbar.Brand href="#home">Expertise.tn </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Link to="/">Acceuil</Link>
      <Link  to="/Expert" className="navlink">Nos experts </Link>
      <Link to="/Actualités" className="navlink">Actualités </Link>
    </Nav>
    <Button className="btn btn-success btn-sm"> <Link>Inscription</Link>  </Button>

  
  </Navbar.Collapse>
  </Container>
</Navbar>
    
    </div>
   )

 }

export default NavbarComponent