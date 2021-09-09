import React, { useEffect } from 'react'
import { deleteUSER, getUSER } from '../Redux/Actions/authAction';
import {useDispatch,useSelector} from 'react-redux'
import NavbarComponent from './NavbarComponent';
import { Table , Row , Col, Button} from "react-bootstrap"
import Sidebar from './Sidebar';



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
     <Row className="d-flex justify-content-center"> 
<Col md={2}>  <Sidebar/> </Col>
<Col md={10}>
     

      <Table striped hover className="text-center" >
<thead >
   <tr>

     <th>Nom et prénom</th>
     <th>Adresse E-mail</th>
     <th>Téléphone </th>
     <th> Role</th>
     <th> Compte créé le</th>
     <th> Action </th>


   </tr>
 </thead>

  <tbody>
  {utilisateur.map(el => (
   <tr> 
    
<td> {el.fullName} </td>
<td>{el.email}  </td>
<td>{el.phone}  </td>
<td> {el.role}</td>
<td> {el.createdAt}</td>
<td><Button variant="outline-dark"  className="mr-2 btn-sm" onClick={() => deleteUser(el._id)} ><i  class="fa fa-times"></i></Button> </td>

   </tr>
  ))}
  </tbody>
 </Table>
 </Col>

 </Row>
    </div>
   )

 }

export default DashboardValidationExpert