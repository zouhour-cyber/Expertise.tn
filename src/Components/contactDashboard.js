import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Container,Row, Col, Table, Button  } from 'react-bootstrap';
import { deleteContact, getContact } from '../Redux/Actions/contactActions';
import Sidebar from './Sidebar';
import NavbarAdmin from './NavbarAdmin';

const ContactDashboard = (props) => {
    
    const dispatch = useDispatch()
    const datasCONTACT= useSelector(state => state.CONTACTreducer.datasCONTACT)

    useEffect(() => {
     dispatch(getContact())
        }, [dispatch])
     console.log(datasCONTACT, "message reçu ??");


        //Deletecontact
 const deleteCONTACT =(id)=>{
    dispatch (deleteContact(id))
    console.log(deleteContact(id))
  } 
  return(
    <div>
 <NavbarAdmin/>

<div className="mt-3">
<Container fluid>
    <Row>
        <Col md={2}> <Sidebar/> </Col>
        <Col md={10}  sm ={12} xs={12 }>
        <div className="d-flex justify-content-left breadcrumbs mt-2" >  
     <div > <a href ="/DashboardInterface" className="active">Dashboard /</a> Messages</div>
     </div>
        <Table responsive="md" responsive="sm" className="text-center" >
<thead >
            <tr>
               <th> Nom d'utilisateur</th> 
               <th> email </th> 
               <th> Message </th> 
               <th> Action </th> 

            </tr>

</thead>
<tbody>
        {datasCONTACT.map((el,key ) => (
         <tr> 
            <td> {el.fullName} </td>
            <td> {el.email} </td>
            <td> {el.message} </td>

         <td> <Button variant=""  className="btn-outline-dark btn-sm"  onClick={() => deleteCONTACT(el._id)}
 ><i  class="fa fa-times "></i></Button>  
 </td>
         </tr>
        ))}

</tbody>
</Table>
        </Col>
    </Row>
</Container>


</div>
    </div>
   )

 }

export default ContactDashboard