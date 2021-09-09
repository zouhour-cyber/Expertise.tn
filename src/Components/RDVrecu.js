import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRDV, getRDV } from '../Redux/Actions/RDVactions'
import {Container,Row, Col, Table, Button , Card } from 'react-bootstrap';
import { EditRdv } from './EditRdv';
import Sidebar from  './Sidebar';

const RDVrecu = (props) => {

    const dispatch = useDispatch()
    const datasRDV= useSelector(state => state.RDVreducer.datasRDV)

    useEffect(() => {
     dispatch(getRDV())
        }, [dispatch])
     console.log(datasRDV, "nos rdv???");

      //DeleteMenu
 const deleterdv =(id)=>{
    dispatch (deleteRDV(id))
    console.log(deleteRDV(id))
  }

  return(
    <div className="mt-3">
<Container>
    <Row>
        <Col md={2}> <Sidebar/> </Col>
        <Col md={10} xs={10}>
        <Table className="text-center" >
<thead >
            <tr>
               <th> Date</th> 
               <th> Heure </th> 
               <th> Status </th> 

               <th> Action </th> 

            </tr>

</thead>
<tbody>
        {datasRDV.map((el,key ) => (
         <tr> 
            <td> {el.date} </td>
            <td> {el.heure} </td>
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

export default RDVrecu