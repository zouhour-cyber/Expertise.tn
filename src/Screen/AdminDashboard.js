import React from 'react'
import AjoutPUB from '../Components/AjoutPUB'
import Sidebar from '../Components/Sidebar'
import { Container, Row, Col} from 'react-bootstrap'
import './Home.css'


const Dashboard = (props) => {
  return(
    <div>
<Container fluid> 
      <Row>   
        <Col md={1} > 
      <Sidebar/>

      </Col>

<Col md={11} > 
<AjoutPUB/>

</Col>


</Row>
</Container>
    </div>
   )

 }

export default Dashboard