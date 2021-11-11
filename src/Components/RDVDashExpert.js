import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRDV, getRDV } from '../Redux/Actions/RDVactions'
import {Container,Row, Col, Table, Button } from 'react-bootstrap';
import { EditRdv } from './EditRdv';
import NavbarExpert from './NavbarExpert';

const RDVDashExpert = (props) => {

    const dispatch = useDispatch()
    const datasRDV= useSelector(state => state.RDVreducer.datasRDV)
    const userDonnées = useSelector((state) => state.auth.user);
    const id=userDonnées._id

    useEffect(() => {
     dispatch(getRDV())
        }, [dispatch])
     console.log(datasRDV, "nos rdv???");

      //Delete RDV
 const deleterdv =(id)=>{
    dispatch (deleteRDV(id))
    console.log(deleteRDV(id))
  }

  return(
    <div >
        <NavbarExpert/>
<Container>
    <Row>
        <Col md={12} xs={10}>
        <Table className="text-center" >
<thead >
            <tr>
               <th> Date</th> 
               <th> Heure </th>
               <th> Client </th> 
               <th>Adresse</th>
               <th> Status </th>                
               <th> Action </th> 

            </tr>

</thead>
<tbody>
        {datasRDV.filter(el => el.idExpert === id).map((el,key ) => (
         <tr> 
            <td> {new Date(el.date).toLocaleDateString()} </td>
            <td> {el.heure} </td>
             <td> {el.nameUser}</td>
             <td> {el.AdresseRDV} </td>
             <td> {el.statusRDV} </td>
         
 <td>  <Button variant="dark"  className="mr-1 btn-sm"  onClick={() => deleterdv(el._id)}
 ><i  class="fa fa-times"></i></Button>  
  <EditRdv  el={el}  id={el._id}/> </td>
         </tr>
        ))}

</tbody>
</Table>
        </Col>
    </Row>
</Container>



    </div>
   )

 }

export default RDVDashExpert