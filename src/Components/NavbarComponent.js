import React from 'react'
import {Nav, Navbar, Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { signout } from '../Redux/Actions/authAction';
import {useDispatch,useSelector} from 'react-redux'

// import ModalInscri from './modalinscription';

const NavbarComponent = () => {
  const auth = useSelector((state) => state.auth);
  const userDonnées = useSelector((state) => state.auth.user);
  const user = useSelector((state) => state.auth.user);

  const dispatch= useDispatch();

  const logout=()=>{
    dispatch(signout())
  }

  const RenderLoggedInLinksuser=()=> {

    return (
      <div> 
   
   <Navbar  className="nav" collapseOnSelect expand="lg" variant="dark"  fixed="top" >
    <Container>
    <Navbar.Brand href="/"> <span className="logoVert"> Find.</span>Expert </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
 
    <Nav className="mx-auto" >
        <Link to="/">Acceuil</Link>
        <Link  to="/Expert" className="navlink">Experts </Link>
        <Link to="/Actualités" className="navlink">Actualités </Link>
        <Link to="/Contact" className="navlink">Contact</Link>
    

      </Nav>
      <Link  to='/ProfilUser'>  Hello {userDonnées.fullName} ! </Link>

<Link  className="btn btn-outline-success btn-sm" onClick={logout}>   Déconnexion  </Link>


        </Navbar.Collapse>
    </Container>
  </Navbar> 

      </div>
    )

  }

  const RenderLoggedInLinksexpert=()=> {

    return (
      <div> 
        <Navbar  className="nav" collapseOnSelect expand="lg" variant="dark"  fixed="top" >
  <Container fluid>
  <Navbar.Brand href="/"> <span className="logoVert"> Find.</span>Expertise  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">

        <Link  to="/Expert" className="navlink">Experts </Link>
       
        <Link to="/Contact" className="navlink">Contact</Link>
      <Link to="/DashboardExpertPub" className="navlink"> Mes Publication </Link>

      <Link to="/RDVDashExpert" className="navlink"> Rendez-vous </Link>
    </Nav>

    <Link  to="/DashboardExpert" className="ms-auto"> Profil {userDonnées.fullName}  <img src={userDonnées.image}  className="img-responsive ms-2" style={{ borderRadius:"50%", height:"2rem", width:"2rem"}}/> </Link>
    <Link  className="btn btn-outline-success btn-sm me-4" onClick={logout}>   Déconnexion  </Link>
  {/* <a className="btn-success btn-sm" onClick={logout}>  <i class="fas fa-sign-out-alt fa-2x"  ></i> </a>  */}
  </Navbar.Collapse>
  </Container>
</Navbar>



      </div>
    )

  }

 const  RenderNotLoggedLinks= ()=> {
    return(
      <div>
        <Navbar  className="nav" collapseOnSelect expand="lg" variant="dark"  fixed="top" >
    <Container>
    <Navbar.Brand href="/"> <span className="logoVert"> Find.</span>Expert </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
 
    <Nav className="mx-auto" >
        <Link to="/">Acceuil</Link>
        <Link  to="/Expert" className="navlink">Experts </Link>
        <Link to="/Actualités" className="navlink">Actualités </Link>
        <Link to="/Contact" className="navlink">Contact</Link>
    

      </Nav>
      <> <Link className="btn btn-outline-success btn-sm" to='signin' >   Connexion </Link> </>

        </Navbar.Collapse>
    </Container>
  </Navbar> 
      </div>
     )
  
  }
  const  RenderDashboardAdmin= ()=> {
    return(
      <div>
        <Navbar  className="nav" collapseOnSelect expand="lg" variant="dark"  fixed="top" >
    <Container fluid>
    <Navbar.Brand href="/"> <span className="logoVert"> Find.</span> Expert </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
 
    <Nav className="mx-auto" >
        <Link to="/">Acceuil</Link>
        <Link  to="/Expert" className="navlink">Experts </Link>
        <Link to="/Actualités" className="navlink">Actualités </Link>
        <Link to="/Contact" className="navlink">Contact</Link>
    

      </Nav>
      <Link className="ms-auto"  to="/Dashboard/Dashboardpublication" className="ms-auto"> Dashboard {userDonnées.fullName}  <img src={userDonnées.image}  className="img-responsive ms-2" style={{ borderRadius:"50%", height:"2rem", width:"2rem"}}/> </Link>
  <a className="btn-success btn-sm" onClick={logout}>  <i class="fas fa-sign-out-alt fa-2x"  ></i> </a> 

        </Navbar.Collapse>
    </Container>
  </Navbar> 
      </div>
     )
  
  }

  return (
    <div> 
      

 {auth.authenticate && user.role === "expert" ? RenderLoggedInLinksexpert() : auth.authenticate && user.role === "user"? RenderLoggedInLinksuser():auth.authenticate && user.role === "admin" ? RenderDashboardAdmin() :RenderNotLoggedLinks()}


    </div>
  )


 
 }

export default NavbarComponent