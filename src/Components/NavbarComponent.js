import React from 'react'
import {Nav, Navbar, Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { signout } from '../Redux/Actions/authAction';
import ModalInscri from './modalinscription';
import {useDispatch,useSelector} from 'react-redux'

// import ModalInscri from './modalinscription';

const NavbarComponent = () => {
  const auth = useSelector((state) => state.auth);
  const userDonnées = useSelector((state) => state.auth.user);

  const dispatch= useDispatch();
  
  const logout=()=>{
    dispatch(signout())
  }

  const RenderLoggedInLinks=()=> {

    return (
      <div> 
   
   {/* <span className="me-4"> Hello {userDonnées.fullName} !  </span> */}
   <Link  to='/ProfilUser'>  Hello {userDonnées.fullName} ! </Link>

    <Link  className="btn btn-outline-success btn-sm" onClick={logout}>   Déconnexion  </Link>


      </div>
    )

  }

 const  RenderNotLoggedLinks= ()=> {
    return(
      <div>
 
     
    
        <ModalInscri/>  

      </div>
     )
  
  }
  return (
    <div> 

<Navbar  className="nav" collapseOnSelect expand="lg" variant="dark"  fixed="top" >
    <Container>
    <Navbar.Brand href="#home"> <span className="logoVert"> Find.</span>Expert </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
 
    <Nav className="mx-auto" >
        <Link to="/">Acceuil</Link>
        <Link  to="/Expert" className="navlink">Experts </Link>
        <Link to="/Actualités" className="navlink">Actualités </Link>
        <Link to="/Contact" className="navlink">Contact</Link>
    

      </Nav>
     

   {auth.authenticate ? RenderLoggedInLinks():RenderNotLoggedLinks()}

    </Navbar.Collapse>
    </Container>
  </Navbar>



    </div>
  )

 
 }

export default NavbarComponent