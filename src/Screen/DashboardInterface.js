import React from 'react'
import NavbarAdmin from '../Components/NavbarAdmin'
import { Container, Row, Col, Card, Alert} from 'react-bootstrap'
import Sidebar from '../Components/Sidebar'
import { useSelector } from 'react-redux'
import './Dashboard.css'


const DashboardInterface = (props) => {

    const datasRDV= useSelector(state => state.RDVreducer.datasRDV)
    const userData = useSelector((state) => state.utilisateur.userData);
    const datasCONTACT= useSelector(state => state.CONTACTreducer.datasCONTACT)
    const datasPUB= useSelector(state => state.PUBreducer.datas)

  return(
    <div>
        <NavbarAdmin/>

        <Container  fluid className="mt-5">  

<Row className="d-flex justify-content-between" >   
  <Col md={1}> 
<Sidebar/>

</Col>

<Col md={10}> 
<Container fluid>
<div className="d-flex justify-content-left breadcrumbs" >  
<div > <a href ="/DashboardInterface" className="active">Dashboard</a> / My Dashboard </div>
 </div>

<Row className="StatDash  d-flex justify-content-center ">
    
<Col  md={5} sm={8} xs={9}>
<Card >
  <Card.Body className=" d-flex justify-content-between align-items-center" >
  <div>  <i class="fas fa-users" style={{ fontSize: '1.6em',color:'var(--vert)', padding:"1rem" ,border:"2px solid var(--vert)", borderRadius:"50%"}}  />  </div>

       <div style={{ fontSize: '19px'}}> <> {userData.length}  Users </> </div> 
      
      
      </Card.Body>
     
</Card>
</Col>
<Col  md={5} sm={8} xs={9}  >
<Card style={{backgroundColor:"var(--vert)"}}>
  <Card.Body className="d-flex justify-content-between align-items-center" > 
  <div>  <i class="far fa-calendar-alt" style={{ fontSize: '1.6em',color:'var(--blue)', padding:"1rem" ,border:"2px solid var(--blue)", borderRadius:"50%"}}  />  </div>

<div style={{ fontSize: '19px'}}> <> {datasRDV.length} Rendez-vous </> </div> 

      
      
       </Card.Body>
</Card>
</Col>
<Col  md={5} sm={8} xs={9} >
<Card  style={{backgroundColor:"#EB92BE"}}>
  <Card.Body className="d-flex justify-content-between align-items-center">  
  
  <div>  <i class="far fa-newspaper" style={{ fontSize: '1.6em',color:'var(--blue)', padding:"1rem" ,border:"2px solid var(--blue)", borderRadius:"50%"}}  />  </div>

<div style={{ fontSize: '19px'}}> <> {datasPUB.length}  Publications</> </div> 
  
  
   </Card.Body>
</Card>
</Col>

<Col  md={5} sm={8} xs={9} >
<Card  style={{backgroundColor:"#FFEF78"}}>
  <Card.Body className="d-flex justify-content-between align-items-center"> 
  <div>  <i class="far fa-comments" style={{ fontSize: '1.6em',color:'var(--blue)', padding:"1rem" ,border:"2px solid var(--blue)", borderRadius:"50%"}}  />  </div>

<div style={{ fontSize: '19px'}}> <>{datasCONTACT.length} Messages </> </div> 
  
  
  </Card.Body>
</Card>
</Col>

</Row>

</Container>



</Col>


</Row>
</Container>

    </div>
   )

 }

export default DashboardInterface