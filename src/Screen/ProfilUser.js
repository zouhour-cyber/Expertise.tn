import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Form,Collapse,Card, NavLink} from 'react-bootstrap'
import "./ExpertDashboard.css"
import NavbarComponent from '../Components/NavbarComponent'
import {useDispatch,useSelector} from 'react-redux'
import { updateUSER } from '../Redux/Actions/authAction'
import { getRDV } from '../Redux/Actions/RDVactions'
import { getEXPERT } from '../Redux/Actions/crudExpertAction'
import { Link } from 'react-router-dom'



const ProfilUser = () => {
  const dispatch =useDispatch()


  const userDonnées = useSelector((state) => state.auth.user);
 const id=userDonnées._id
 
    // update's state //
    const [update, setUpdate] = useState(
  {id, fullName:userDonnées.fullName , phone:userDonnées.phone, email:userDonnées.email,image:userDonnées.image, password:userDonnées.password} )
    //Handle Change//
    const hanleChange = (e) => {
        const {name, value} = e.target
        setUpdate({...update, [name]:value})
        console.log("input",update)
    }

    //UPDATE PLAT //
    const updateUser= (id) => {
     
      dispatch(updateUSER(id, update.fullName , update.phone, update.email,update.image, update.password ))
      console.log("updaaaate User", update)
    }
    //get mes Rendez-vous
    const datasRDV= useSelector(state => state.RDVreducer.datasRDV)

    useEffect(() => {
     dispatch(getRDV())
        }, [dispatch])
     console.log(datasRDV, "nos rdv???");



     //boutton collapse 
     const [open, setOpen] = useState(false);

  return(
    <div>

    <NavbarComponent/>

    <Container className='mt-5'>  
    <Row className="d-flex justify-content-between  "> 
    <Col md={4} >
    <div className="bg-white ">   

    <img src="image/temoignage1.webp" className="img-responsive my-4" style={{ borderRadius:"50%", height:"9rem", width:"9rem"}}/>
    <div>  <h4>  {userDonnées.fullName}</h4>  </div>

   
    <hr/> 
    <div className="Aside "> 
      <div >
       
    <p>  Nom et prénom:  {userDonnées.fullName}</p>
    <p> Adresse e-mail: {userDonnées.email}</p>

    <p> Téléphone: {userDonnées.phone}</p>

     </div>  
     <hr className=""/>
   <Button variant="success" className="btn  mt-3">  <Link to="/UserRDV" > 
   <> <i class="far fa-calendar-plus fa-2x me-2"></i>    Voir mes rendez-vous </>
      </Link> </Button>
    
    </div>
    
    
    
    </div>
    </Col>
    <Col md={8} className="mt-5" >
    <Form   className="formulaire"  >
    <h3 className="my-4"> Modifier mes données </h3>

<Form.Group  >
<Form.Control type="text" placeholder="Nom et prénom" name='fullName' defaultValue={userDonnées.fullName} onChange={hanleChange} />

</Form.Group>
<Form.Group controlId="formBasicPassword">
<Form.Control type="tel" placeholder="Téléphone"  name='phone'  defaultValue={userDonnées.phone} onChange={hanleChange}  />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Control type="password" placeholder="Password"  name='password'  defaultValue={userDonnées.password} onChange={hanleChange}  />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Control type="text" placeholder="Entrer votre photo"  name='image' defaultValue={userDonnées.image} onChange={hanleChange}    />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Control type="email" placeholder="Entrer votre adresse e-mail"  name='email' defaultValue={userDonnées.email} onChange={hanleChange}    />
</Form.Group>


<Button className="btn-block mt-5" onClick={() => updateUser(userDonnées._id)} > Valider les modifications</Button>

</Form>


    </Col> 
    </Row>
    </Container>



    </div>
   )

 }

export default ProfilUser