import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../Redux/Actions/authAction';
import { Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';


const NavbarAdmin = (props) => {
    const userDonnées = useSelector((state) => state.auth.user);
  
    const dispatch= useDispatch();
    
    const logout=()=>{
      dispatch(signout())
    }
  

  return(
    <div>

<Container className="bg-blue py-2" fluid> 
     <div className="d-flex align-items-center ">
 <div className="mx-2 ms-auto" style={{color:"white", fontWeight:"bolder"}}  to="/Dashboard/Dashboardpublication" > Dashboard {userDonnées.fullName}  <img src={"../image/temoignage1.webp"}  className="img-responsive ms-2" style={{ borderRadius:"50%", height:"2rem", width:"2rem"}}/> </div>
  <a style={{color:"var(--vert)"}}  onClick={logout}>  <i class="fas fa-sign-out-alt fa-2x"  ></i> </a> 
  {/* <Link  className="btn btn-outline-success btn-sm me-2" onClick={logout}>   Déconnexion  </Link> */}

  </div>
     </Container>




    </div>
   )

 }

export default NavbarAdmin