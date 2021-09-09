import React from 'react'
import AjoutPUB from '../Components/AjoutPUB'
import Sidebar from '../Components/Sidebar'
import { Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { signout } from '../Redux/Actions/authAction';
import {useDispatch,useSelector} from 'react-redux'
import './Home.css'
import NavbarComponent from '../Components/NavbarComponent'


const DashboardPublication = (props) => {
  const auth = useSelector((state) => state.auth);
  const userDonnées = useSelector((state) => state.auth.user);
  const user = useSelector((state) => state.auth.user);

  const dispatch= useDispatch();
  
  const logout=()=>{
    dispatch(signout())
  }


  return(
    <div>
     <Container className="bg-blue py-2" fluid> 
     <div className="d-flex align-items-center ">
 <div className="mx-4 ms-auto" style={{color:"white", fontWeight:"bolder"}}  to="/Dashboard/Dashboardpublication" > Dashboard {userDonnées.fullName}  <img src={userDonnées.image}  className="img-responsive ms-2" style={{ borderRadius:"50%", height:"2rem", width:"2rem"}}/> </div>
  {/* <div className="btn-success btn-sm" onClick={logout}>  <i class="fas fa-sign-out-alt fa-2x"  ></i> </div>  */}
  <Link  className="btn btn-outline-success btn-sm me-2" onClick={logout}>   Déconnexion  </Link>

  </div>
     </Container>

<Container className="mt-3" fluid> 

      <Row className="">   
        <Col md={1} className="" > 
      <Sidebar/>

      </Col>

<Col md={11}  > 
<AjoutPUB/>

</Col>


</Row>
</Container>
    </div>
   )

 }

export default DashboardPublication