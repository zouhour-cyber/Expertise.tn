import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Container,Row, Col, Table, Button  } from 'react-bootstrap';
import {deleteNewsletter, getNewsletter } from '../Redux/Actions/NewsletterAction'
import Sidebar from './Sidebar';
import NavbarAdmin from './NavbarAdmin';

const AdminNEWSLETTER = (props) => {

        
    const dispatch = useDispatch()
    const datasNEWS= useSelector(state => state.NEWSLETTERreducer.datasNEWSLETTER)


    //getNewsletter
    useEffect(() => {
     dispatch(getNewsletter())
        }, [dispatch])
     console.log(datasNEWS, "message reçu ??");


        //deleteNewsletter
 const deleteNews =(id)=>{
    dispatch (deleteNewsletter(id))
    console.log(deleteNewsletter(id))
  } 
  return(
    <div>
 <NavbarAdmin/>

<div className="mt-3">
<Container fluid>
    <Row>
        <Col md={2}> <Sidebar/> </Col>
        <Col md={10}  sm ={10} xs={10 }>
        <div className="d-flex justify-content-left breadcrumbs mt-2" >  
     <div > <a href ="/DashboardInterface" className="active">Dashboard /</a>Newsletter</div>
     </div>
     <Container>
        <Table responsive="md" responsive="sm" className="text-center" >
<thead >
            <tr>
               <th> Adresse Email </th>
               <th> Action </th> 
            

            </tr>

</thead>
<tbody>
        {datasNEWS.map((el,key ) => (
         <tr> 
            <td> {el.email} </td>
         

         <td> <Button variant=""  className="btn-outline-dark btn-sm"  onClick={() => deleteNews(el._id)}
 ><i  class="fa fa-times "></i></Button>  
 </td>
         </tr>
        ))}

</tbody>
</Table>
</Container>
        </Col>
    </Row>
</Container>


</div>




    </div>
   )

 }

export default AdminNEWSLETTER