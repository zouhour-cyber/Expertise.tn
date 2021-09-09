import React from 'react'
import AjoutPUB from '../Components/AjoutPUB'
import Sidebar from '../Components/Sidebar'
import { Container, Row, Col} from 'react-bootstrap'
import './Home.css'
import PubExpert from '../Components/PubExpert'
import AddPubExpert from '../Components/AddPubExpert'
import NavbarExpert from '../Components/NavbarExpert'


const DashboardExpertPub = (props) => {
  return(
    <div>

<NavbarExpert/>
<Container fluid> 
      <Row>   
  

<Col md={12} > 
<AddPubExpert/>

</Col>


</Row>
</Container>
    </div>
   )

 }

export default DashboardExpertPub