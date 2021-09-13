import React, { useEffect } from 'react'
import NavbarAdmin from '../Components/NavbarAdmin'
import { Container, Row, Col, Card} from 'react-bootstrap'
import Sidebar from '../Components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import './Dashboard.css'
import { getPUB } from '../Redux/Actions/PUBActions'
import { getUSER } from '../Redux/Actions/authAction'
import { getRDV } from '../Redux/Actions/RDVactions'
import { getContact } from '../Redux/Actions/contactActions'


const DashboardInterface = (props) => {
     const dispatch= useDispatch();

    const datasRDV= useSelector(state => state.RDVreducer.datasRDV)
    const userData = useSelector((state) => state.utilisateur.userData);
    const datasCONTACT= useSelector(state => state.CONTACTreducer.datasCONTACT)
    const datasPUB= useSelector(state => state.PUBreducer.datas)
//get Pub
    useEffect(() => {
      dispatch(getPUB())
         }, [dispatch])
// get users
         useEffect(() => {
          dispatch(getUSER())
             }, [dispatch])

//get RDV
useEffect(() => {
  dispatch(getRDV())
     }, [dispatch])

//get Contact 
useEffect(() => {
  dispatch(getContact())
     }, [dispatch])
  console.log(datasCONTACT, "message reçu ??");



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
<Card style={{backgroundColor:"#3b76ef" , color:"white",   }} >
  <Card.Body className=" d-flex justify-content-between align-items-center" >
  <div>  <i class="fas fa-users" style={{ fontSize: '1.6em',color:'white', padding:"1rem" ,border:"2px solid white", borderRadius:"50%"}}  />  </div>

       <div style={{ fontSize: '19px'}}> <> {userData.length}  Utilisateurs</> </div> 
      
      
      </Card.Body>
     
</Card>
</Col>
<Col  md={5} sm={8} xs={9}  >
<Card style={{backgroundColor:" #63C7FF"}}>
  <Card.Body className="d-flex justify-content-between align-items-center" > 
  <div>  <i class="far fa-calendar-alt" style={{ fontSize: '1.6em',color:'white', padding:"1rem" ,border:"2px solid white", borderRadius:"50%"}}  />  </div>

<div style={{ fontSize: '19px'}}> <> {datasRDV.length} Rendez-vous </> </div> 

      
      
       </Card.Body>
</Card>
</Col>
<Col  md={5} sm={8} xs={9} >
<Card  style={{backgroundColor:"#A66DD4", color:"white"}}>
  <Card.Body className="d-flex justify-content-between align-items-center">  
  
  <div>  <i class="far fa-newspaper" style={{ fontSize: '1.6em',color:'white', padding:"1rem" ,border:"2px solid white", borderRadius:"50%"}}  />  </div>

<div style={{ fontSize: '19px'}}> <> {datasPUB.length}  Publications</> </div> 
  
  
   </Card.Body>
</Card>
</Col>

<Col  md={5} sm={8} xs={9} >
<Card  style={{backgroundColor:"#20c997"}}>
  <Card.Body className="d-flex justify-content-center  align-items-center"> 
  <div className="me-3">  <i class="far fa-comments" style={{ fontSize: '1.6em',color:'white', padding:"1rem" ,border:"2px solid white", borderRadius:"50%"}}  />  </div>

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