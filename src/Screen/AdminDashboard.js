import React from 'react'
import AjoutPUB from '../Components/AjoutPUB'
import Sidebar from '../Components/Sidebar'
import { Container, Row, Col} from 'react-bootstrap'
import './Home.css'
import NavbarAdmin from '../Components/NavbarAdmin';


const DashboardPublication = (props) => {


  return(
    <div>
   <NavbarAdmin/>

<Container  fluid> 

      <Row >   
        <Col md={2} sm={1} xs={1} > 
      <Sidebar/>

      </Col>

<Col md={10} sm={11} xs={11} > 
<div className="d-flex justify-content-left breadcrumbs mt-2" >  
     <div > <a href ="/DashboardInterface" className="active">Dashboard /</a>Publications</div>
     </div>
<AjoutPUB/>

</Col>


</Row>
</Container>
    </div>
   )

 }

export default DashboardPublication