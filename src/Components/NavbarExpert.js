import React from 'react'
import {Nav, Navbar, Container, Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import { signout } from '../Redux/Actions/authAction';
// import ModalInscri from './modalinscription';


const NavbarExpert = () => {
  const userDonnées = useSelector((state) => state.auth.user);

  const dispatch= useDispatch();
  
  const logout=()=>{
    dispatch(signout())
  }


  return(
    <div>
<Navbar  className="nav" collapseOnSelect expand="lg" variant="dark" >
  <Container>
  <Navbar.Brand href="/"> <span className="logoVert"> Find.</span>Expert  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Link  to="/DashboardExpert" className="navlink">Mon Profil</Link>
      <Link to="/DashboardExpertPub" className="navlink"> Publication </Link>

      <Link to="/RDVDashExpert" className="navlink"> Rendez-vous </Link>
    </Nav>

    <Link  to="/RegisterUserForm"> Hello {userDonnées.fullName}  <img src={userDonnées.image}  className="img-responsive ms-2" style={{ borderRadius:"50%", height:"2rem", width:"2rem"}}/> </Link>
    {/* <Link  className="btn btn-outline-success btn-sm me-4" onClick={logout}>   Déconnexion  </Link> */}
  <a className="btn-success btn-sm" onClick={logout}>  <i class="fas fa-sign-out-alt fa-2x"  ></i> </a> 
  </Navbar.Collapse>
  </Container>
</Navbar>
    
    </div>
   )

 }

export default NavbarExpert