import React, { useEffect, useState } from 'react'
import { deleteUSER, getUSER } from '../Redux/Actions/authAction';
import {useDispatch,useSelector} from 'react-redux'
import { Container, Table , Row , Col, FormControl, Form} from "react-bootstrap"
import Sidebar from './Sidebar';
import NavbarAdmin from './NavbarAdmin';
import '../Screen/Dashboard.css'
import ModalEditUser from '../Screen/ModalEditUser';



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
//handle search bar
const [search, setSearch] = useState("");
const handelChange=(e)=>{
   setSearch(e.target.value);
} 
 
  return(
    <div>
      <NavbarAdmin/>
 <Container className="mt-5"> 

     <Row className="d-flex justify-content-center"> 
  
<Col md={2}>  <Sidebar/> </Col>
<Col md={10}  >
<div className="d-flex justify-content-left breadcrumbs mt-2" >  
     <div > <a href ="/DashboardInterface" className="active">Dashboard /</a>Utilisateurs</div>
     </div>
  <Container fluid > 
<Row> <Col md={12}> 

   {/* <div>
     <Form>
   <FormControl
        type="search"
        placeholder="Expert / Spécialité ..."
        className="searchInput"
        aria-label="Search"
        onChange={handelChange}
      />
      </Form>
   </div>
    */}

     <>
       
<Table responsive="sm" responsive="xs" striped hover >
<thead >
   <tr>

     <th>Nom et prénom</th>
     <th style={{width:"100px"}}> E-mail</th>
     <th>Téléphone </th>
     <th style={{width:"5px"}}> Role</th>
     <th style={{width:"5px"}}> Status</th>
     <th> Action </th>


   </tr>
 </thead>

  <tbody>
  { utilisateur.filter((el) => {

if (
  (el.role.toLowerCase().includes(search.toLowerCase())) ||
  (el.Spécialité.toLowerCase().includes(search.toLowerCase()))||
  (el.fullName.toLowerCase().includes(search.toLowerCase()))
) {
  return el;
}
})
  
  .map(el => (
<tr> 
    
<td style={{width:"50px"}}> <img src={el.image} style={{ width:"2rem" , height:"2rem" , borderRadius:"50%"}} /> <br/> {el.fullName} </td>
<td  style={{width:"100px"}}>{el.email}  </td>
<td>{el.phone}  </td>
<td style={{width:"5px"}}> {el.role}</td>
<td style={{width:"5px"}}> {el.status} </td>
<td style={{width:"100px"}}><i class="fas fa-user-minus"   onClick={() => deleteUser(el._id)} ></i>   <ModalEditUser  el={el}  id={el._id}/> </td>
</tr>
  ))}
  </tbody>
 </Table>
 
 </>
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