import React, { useEffect } from 'react'
import { deleteUSER, getUSER } from '../Redux/Actions/authAction';
import {useDispatch,useSelector} from 'react-redux'
import { Container, Table , Row , Col} from "react-bootstrap"
import Sidebar from './Sidebar';
import NavbarAdmin from './NavbarAdmin';
import '../Screen/Dashboard.css'



const DashboardValidationExpert = () => {
  const dispatch= useDispatch();
  // const auth = useSelector((state) => state.auth.user);
  // const userData = useSelector((state) => state.auth.user);
  const utilisateur = useSelector((state) => state.utilisateur.userData);
 

  useEffect(() => {
   dispatch(getUSER())
      }, [dispatch])
   console.log(utilisateur, "nos user ???");

    //DeleteUser
 const deleteUser =(id)=>{
  dispatch (deleteUSER(id) )
  console.log(deleteUSER(id))
}
 
  return(
    <div>
      <NavbarAdmin/>
 <Container clasName="mt-5"> 

     <Row className="d-flex justify-content-center"> 
  
<Col md={2}>  <Sidebar/> </Col>
<Col md={10}  >
<div className="d-flex justify-content-left breadcrumbs mt-2" >  
     <div > <a href ="/DashboardInterface" className="active">Dashboard /</a>Utilisateurs</div>
     </div>
  <Container > 
<Row> <Col md={12}> 


   

     <div >
       
      <Table responsive="md" responsive="sm" striped hover className="text-center"  >
<thead >
   <tr>

     <th>Nom et prénom</th>
     <th>Adresse E-mail</th>
     <th>Téléphone </th>
     <th> Role</th>
     <th> Action </th>


   </tr>
 </thead>

  <tbody>
  {utilisateur.map(el => (
   <tr> 
    
<td> <img src={el.image} style={{ width:"2rem" , height:"2rem" , borderRadius:"50%"}} /> {el.fullName} </td>
<td>{el.email}  </td>
<td>{el.phone}  </td>
<td> {el.role}</td>
<td><i class="fas fa-user-minus"   style={{fontSize:"1.2rem"}} onClick={() => deleteUser(el._id)} ></i></td>

   </tr>
  ))}
  </tbody>
 </Table>
 
 </div>
 </Col>
 </Row>
 </Container>
 </Col>

 </Row>
   
 </Container>   
    </div>
   )

 }

export default DashboardValidationExpert