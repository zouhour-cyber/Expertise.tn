import React from 'react'
import AjoutPUB from '../Components/AjoutPUB'
import Sidebar from '../Components/Sidebar'
import { Container, Row, Col} from 'react-bootstrap'


const Dashboard = (props) => {
  return(
    <div>
<Container fluid> 
      <Row>   <Col md={2} > 
      <Sidebar/>

      </Col>

<Col md={10} > 
<AjoutPUB/>

</Col>


</Row>
</Container>
    </div>
   )

 }

export default Dashboard