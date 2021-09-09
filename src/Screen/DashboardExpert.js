import React, { useState } from 'react'
import { Container, Row, Col, Button, Form} from 'react-bootstrap'
import "./ExpertDashboard.css"
import {useDispatch,useSelector} from 'react-redux'
import { updateUSER } from '../Redux/Actions/authAction'
import NavbarComponent from '../Components/NavbarComponent'


const DashboardExpert = (props) => {
  const dispatch =useDispatch()
  const userDonnées = useSelector((state) => state.auth.user);

  const id=userDonnées._id
 
    // update's state //
    const [update, setUpdate] = useState(
  {id, fullName:userDonnées.fullName,phone:userDonnées.phone,email:userDonnées.email,image:userDonnées.image, password:userDonnées.password} )
    //Handle Change//
    const hanleChange = (e) => {
        const {name, value} = e.target
        setUpdate({...update, [name]:value})
        console.log("input",update)
    }

    //UPDATE PLAT //
    const updateUser= (id) => {
     
      dispatch(updateUSER(id, update.fullName,update.phone, update.email,update.image, update.password ))
      console.log("updaaaate User", update)
    }

  return(

    
    <div>

    <NavbarComponent/>

    <Container className="mt-5">  
    <Row className="d-flex justify-content-between  mt-5"> 
    <Col md={4} sm={10} xs={10} className="mt-4">
    <div className="bg-white ">   

    <img src={userDonnées.image } className="img-responsive my-4" style={{ borderRadius:"50%", height:"9rem", width:"10rem"}}/>
    <div>  <h4>  {userDonnées.fullName} </h4>  </div>

   
    <hr/> 
    <div className="Aside "> 
      <div className="">
    <p> Spécialité:{userDonnées.Spécialité }</p>
    <p> Description:  {userDonnées.Description}</p>
    <p> Adresse e-mail  {userDonnées.email}</p>

    <p> tel: (+216) {userDonnées.phone}</p>
  </div>  
     <hr/>
  
    </div>
    
    
    
    </div>
    </Col>
    <Col md={8} sm={10} xs={10} className="mt-4">
    {/* <div className="section-padding"> </div> */}

    <Form   className="formulaire "  >
    <h3 className="my-4"> Modifier mes données </h3>

<Form.Group className="my-2" >
<Form.Control type="text" placeholder="Nom" name='fullName'  defaultValue={userDonnées.fullName} onChange={hanleChange}  />

</Form.Group>

<Form.Group className="my-2">
<Form.Control type="text" placeholder="Entrer votre photo"  name='image' defaultValue={userDonnées.image} onChange={hanleChange}    />
</Form.Group>

<Form.Group  className="my-2" >
<Form.Control type="text" placeholder="Spécialité " name='Spécialité'  defaultValue={userDonnées.Spécialité} onChange={hanleChange}  />

</Form.Group>
<Form.Group className="my-2">
<Form.Control type="text" placeholder="Enter description"  name='Description'   defaultValue={userDonnées.Description} onChange={hanleChange}   />
</Form.Group>

<Form.Group className="my-2">
<Form.Control type="tel" placeholder="Enter votre numéro de tel"  name='phone'   defaultValue={userDonnées.phone} onChange={hanleChange}   />
</Form.Group>


<Form.Group className="my-2">
<Form.Control type="email" placeholder="Enter votre e-mail"  name='email'   defaultValue={userDonnées.email} onChange={hanleChange}  />
</Form.Group>


<Button className="btn-block mt-4" onClick={() => updateUser(userDonnées._id)} > Valider les modifications</Button>

</Form>


    </Col> 
    </Row>
    </Container>
    </div>
   )

 }

export default DashboardExpert