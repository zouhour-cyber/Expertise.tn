import React, { useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { deleteRDV, getRDV } from '../Redux/Actions/RDVactions'
import { Container, Row, Col, Button, Table} from 'react-bootstrap'
import NavbarComponent from '../Components/NavbarComponent'
import { Link } from 'react-router-dom'
import { EditRdv } from '../Components/EditRdv'



const UserRDV = (props) => {
    const dispatch =useDispatch()

     //Donnés user
     const userDonnées = useSelector((state) => state.auth.user);
     const id=userDonnées._id

    //get mes Rendez-vous
    const datasRDV= useSelector(state => state.RDVreducer.datasRDV)

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
    <div className='mt-5'>
    <NavbarComponent/>
<Container> 
<Row className="d-flex justify-content-between  "> 
    <Col md={4} >
    <div className="bg-white ">   

    <img src={userDonnées.image} className="img-responsive my-4" style={{ borderRadius:"50%", height:"9rem", width:"9rem"}}/>
    <div>  <h4>  {userDonnées.fullName}</h4>  </div>

   
    <hr/> 
    <div className="Aside  "> 
      <div className="">
       
    <p>  Nom et prénom:  {userDonnées.fullName}</p>
    <p> Adresse e-mail: {userDonnées.email}</p>

    <p> Téléphone: {userDonnées.phone}</p>
    <p> Adresse: {userDonnées.Adresse}</p>

    {/* <p> Téléphone: {userDonnées._id}</p> */}

     </div>  
     <hr/>
     <div className="text-center"> 
     <Link to="/ProfilUser" >  <Button variant="success" className="btn w-75 mt-3">  
   <> <i class="fas fa-arrow-left  me-2"   ></i>   Retour  </>
       </Button> </Link>
      </div>
    </div>
    
    
    
    </div>
    </Col>
    <Col md={8} className='mt-5 '> 
    <Table className="text-center"  responsive="sm" >
<thead >
            <tr>
               <th> Date</th> 
               <th> Heure </th>
               <th> Status </th>
               <th> Expert </th>
               <th>Adresse</th>
               <th> Action </th> 


            </tr>

</thead>
<tbody> 
{datasRDV.filter(el => el.idUser === id)
.map(el => (
  <tr> 
 <td>  {new Date(el.date).toLocaleDateString()}</td>
 <td> {el.heure} </td>
 <td> {el.statusRDV} </td>
  <td> {el.nameExpert}</td>
  <td> {el.AdresseRDV} </td>
 <td>  <Button variant="dark"  className="btn-sm"  onClick={() => deleterdv(el._id)} 
 ><i  class="fa fa-times"></i></Button>  
 <EditRdv el={el}  id={el._id} /> </td>


 </tr> ))}

</tbody>
</Table>
    
  
    
    </Col>
</Row>
</Container>



    </div>
   )

 }

export default UserRDV