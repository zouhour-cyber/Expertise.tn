import React, { useState } from 'react'
import NavbarExpert from '../Components/NavbarExpert'
import { Container, Row, Col, Button, Form} from 'react-bootstrap'
import "./ExpertDashboard.css"
import NavbarComponent from '../Components/NavbarComponent'
import {useDispatch,useSelector} from 'react-redux'
import { updateUSER } from '../Redux/Actions/authAction'



const ProfilUser = () => {
  const dispatch =useDispatch()

  const userDonnées = useSelector((state) => state.auth.user);
 const id=userDonnées._id
 
    // update's state //
    const [update, setUpdate] = useState(
  {id, fullName:userDonnées.fullName , phone:userDonnées.phone, email:userDonnées.email, password:userDonnées.password} )
    //Handle Change//
    const hanleChange = (e) => {
        const {name, value} = e.target
        setUpdate({...update, [name]:value})
        console.log("input",update)
    }

    //UPDATE PLAT //
    const updateUser= (id) => {
     
      dispatch(updateUSER(id, update.fullName , update.phone, update.email, update.password ))
      console.log("updaaaate User", update)
     
    }

  return(
    <div>

    <NavbarComponent/>
    <Container>  
    <Row className="d-flex justify-content-between  "> 
    <Col md={4} className="">
    <div className="bg-white ">   

    <img src="image/temoignage1.webp" className="img-responsive my-4" style={{ borderRadius:"50%", height:"9rem", width:"9rem"}}/>
    <div>  <h4>  {userDonnées.fullName}</h4>  </div>

   
    <hr/> 
    <div className="Aside "> 
      <div className="">
       
    <p>  Nom et prénom:  {userDonnées.fullName}</p>
    <p> Adresse e-mail: {userDonnées.email}</p>

    <p> Téléphone: {userDonnées.phone}</p>
    {/* <p> Téléphone: {userDonnées._id}</p> */}



     </div>  
     <hr/>
  
    </div>
    
    
    
    </div>
    </Col>
    <Col md={8} >
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
<Form.Control type="email" placeholder="Entrer votre adresse e-mail"  name='email' defaultValue={userDonnées.email} onChange={hanleChange}    />
</Form.Group>


<Button className="btn-block mt-4" onClick={() => updateUser(userDonnées._id)} > Valider les modifications</Button>

</Form>


    </Col> 
    </Row>
    </Container>
    </div>
   )

 }

export default ProfilUser