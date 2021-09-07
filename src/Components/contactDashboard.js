import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Container,Row, Col, Table, Button , Card } from 'react-bootstrap';
import { deleteContact, getContact } from '../Redux/Actions/contactActions';
import Sidebar from './Sidebar';

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

<div className="mt-3">
<Container>
    <Row>
        <Col md={2}> <Sidebar/> </Col>
        <Col md={10} xs={12}>
        <Table className="text-center" >
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

         <td> <Button variant="" className="btn-outline-info  btn-sm" > <i class="fas fa-reply"></i></Button> <Button variant=""  className="btn-outline-dark btn-sm"  onClick={() => deleteCONTACT(el._id)}
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