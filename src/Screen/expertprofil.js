import {React, useEffect, useState }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserbyId } from '../Redux/Actions/crudExpertAction'
import {Container,Row, Col,  Button , Badge , Form} from 'react-bootstrap';
import NavbarComponent from '../Components/NavbarComponent';
import Footer from '../Components/Footer';
import '../Components/Footer.css';
import { addRDVApi } from '../Redux/Actions/RDVactions';
const ExpertProfil = (el) => {
  const dispatch = useDispatch()
  const AfficheExpert = useSelector((state) => state.NosEXPERTS.NosexpertsData);
  // const userData = useSelector((state) => state.utilisateur.userData);
  const userDonnées = useSelector((state) => state.auth.user);
  // const getOneEXPERT=(id) =>{
  //   dispatch(getUserbyId(id))
  // }

  useEffect(() => {
   dispatch(getUserbyId(el._id))
      }, [])
   console.log(AfficheExpert._id + AfficheExpert.fullName, "get expert by ID???");

   //handle date input
   const [input,setInput]=useState({date:"",heure:"", idExpert:`${AfficheExpert._id}`,nameExpert:`${AfficheExpert.fullName}`,nameUser:`${userDonnées.fullName}`, idUser:`${userDonnées._id}`})

const hanleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input RDV",input)
}
   //ADD RDV
const addNewRDV=()=>{
  dispatch (addRDVApi(input.date , input.heure,input.idExpert,input.nameExpert,input.nameUser,input.idUser )) 
  console.log("inpuuuuuuuuuuuut RDV",input)
  }
  

  return(
    <div>
      <NavbarComponent/>

      <div className="my-5"> 
        <Container className="mt-5" fluid>
          <Row className="mt-2">
            <Col md={8} sm={12} xs={12}>
            <div className="bg-vert2 p-2 my-5">   <> Info Général</></div>
            <Row className="d-flex justify-content-center ">
              <Col md={4} sm={12} xs={12}> 
              <div> <img src={AfficheExpert.image}   style={{width:"280px",height:"340px", borderRadius:"10px" }}/>  </div>
              </Col>
              <Col md={6} sm={12} xs={12} > 
              <div className="d-flex flex-column align-items-start ms-5 donéexpert" >
                <span > -{AfficheExpert.Spécialité}</span>  
              <div className=""> {AfficheExpert.fullName} </div>
              <div className="my-2"> <Badge bg="success"> 700 views </Badge>  <Badge bg="blue"> 500 consultations </Badge>
              </div>
             <>
              <div> Spécialité: {AfficheExpert.Spécialité} </div>
              <div> Adresse e-mail: {AfficheExpert.email} </div>
              <div> Numéro de téléphone :{AfficheExpert.phone} </div>
              <div> Expérience: {AfficheExpert.Description} </div>
              </>
              </div> 
              </Col>
              </Row>
            </Col>

            <Col md={4} sm={10} xs={10}  > 
            <Form  className="Sidebar-RDV my-5" >   
            <div className="bg-vert2 p-3 mb-4 asideRDV " > Réserver un rendez-vous</div>
            <Form.Label >  <h6> Choisissez la date </h6>  </Form.Label>
            <Form.Control  type="date"  name="date" onChange={hanleChange}  />
            <Form.Label  className="mt-4" >  <h6> Choisissez l'heure </h6>  </Form.Label>

            <Form.Control  type="time" name="heure" onChange={hanleChange}  />
            {/* <Form.Label >  <h6> id expert </h6>  </Form.Label>

            <Form.Control  type="text" name="idExpert" defaultValue={AfficheExpert._id}  onChange={hanleChange}  />
             */}
            {/* <Form.Label >  <h6> id user</h6>  </Form.Label>
 
            <Form.Control  type="text" name="idUser" defaultValue={userDonnées._id} onChange={hanleChange}  />
             */}
            <Button variant="outline-dark" size="block" className="mt-4"  onClick={addNewRDV} > Réserver maintenant </Button>
            </Form>


            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-padding"> </div>

<Footer/>

    </div>
   )

 }

export default ExpertProfil