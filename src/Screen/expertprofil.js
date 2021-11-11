import {React, useEffect, useState }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Container,Row, Col,  Button , Badge , Form} from 'react-bootstrap';
import NavbarComponent from '../Components/NavbarComponent';
import Footer from '../Components/Footer';
import '../Components/Footer.css';
import { addRDVApi } from '../Redux/Actions/RDVactions';
import { getUserbyId } from '../Redux/Actions/authAction';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Expert.css'
import 'react-toastify/dist/ReactToastify.css';


const ExpertProfil = (id) => {
  const dispatch = useDispatch()
  // const AfficheExpert = useSelector((state) => state.NosEXPERTS.NosexpertsData);
 
  const userDonnées = useSelector((state) => state.auth.user);
  const userData = useSelector((state) => state.utilisateur.userData)
  const auth = useSelector(state =>state.auth)

 
  useEffect(() => {
   dispatch(getUserbyId(id))
      }, [])
   console.log(userData._id + userData.fullName, "get expert by ID???");

   //handle date input
   const [input,setInput]=useState({date:"",heure:"", idExpert:"",nameExpert:"",nameUser:`${userDonnées.fullName}`, idUser:`${userDonnées._id}`,statusRDV:"en attente",AdresseRDV:`${userDonnées.Adresse}`})

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
  dispatch (addRDVApi(input.date,input.heure,userData._id,userData.fullName,input.nameUser,input.idUser,input.statusRDV,input.AdresseRDV)) 
  console.log("inpuuuuuuuuuuuut RDV",input)
  }
  


  //notification RDV
  const notify = () => toast.success("Demande de rendez-vous avec succés");


    if(!auth.authenticate){
      return  <Redirect to={`/signin`} />
    }

  return(
    <div>
      <NavbarComponent/>

      <div className="my-5"> 
        <Container className="mt-5" fluid>
          <Row className="d-flex justify-content-evenly mt-2" >
            <Col md={7} sm={12} xs={12} className=" mt-2" style={{width:"790px"}} >
              <div className="info-général my-5"> 
            <div className="bg-vert2 p-2 ">   <> Info Général</></div>
            <Row className="info d-flex justify-content-evenly  ">
              <Col md={4} sm={12} xs={12}> 
              <div> <img src={userData.image}   style={{width:"270px",height:"340px", borderRadius:"10px" }}/>  </div>
              </Col>
              <Col md={6} sm={12} xs={12} > 
              <div className="d-flex flex-column align-items-start  donéexpert" >
                <span style={{color:"var(--vert)", fontWeight:"600"}} > - Expert en {userData.Spécialité}</span>  
              <div className="" style={{fontSize:"26px", color:"var(--blue)"}}> {userData.fullName} </div>
              <div className="my-2"> <Badge bg="success"  style={{fontSize:"11px",padding:"0.4rem"}} > 700 views </Badge>  <Badge bg="blue" style={{fontSize:"11px",padding:"0.4rem"}} > 500 consultations </Badge>
              </div>
             <>
              <div> <span style={{fontWeight:"600"}}>   Spécialité:</span> {userData.Spécialité} </div>
              <div> <span style={{fontWeight:"600"}}> Adresse e-mail: </span> {userData.email} </div>
              <div> <span style={{fontWeight:"600"}}> Numéro de téléphone: </span>{userData.phone} </div>
              <div><span style={{fontWeight:"600"}}> Expérience:</span> {userData.Description} </div>
              <div><span style={{fontWeight:"600"}}> Adresse:</span> {userData.Adresse} </div>

              </>
          
              </div> 
              </Col>

              <Col md={12} className="mt-5 px-5">
              <hr/>
              <div className="d-flex">  
             <div>  <i class="fas fa-money-bill-wave fa-2x me-3"  style={{ color:"var(--blue)"}} ></i>  </div>
              <div><span style={{fontWeight:"400" , fontSize:"21px", color:"var(--blue)"}}>  Tarifs:  </span>        <div style={{fontSize:"18px"}} >  60 dt/consultation</div> </div> 
       
              </div>
              
               </Col>
              </Row>
              </div>
            </Col>

            <Col md={3} sm={10} xs={10} style={{width:"380px", marginTop:"3.5rem"}} > 
            <Form  className="Sidebar-RDV " >   
            <div className="bg-vert2 p-3 " > Réserver un rendez-vous</div>
            <div  className="asideRDV">
            <Form.Label >  <div> Choisissez la date </div>  </Form.Label>
            <Form.Control className="mt-3" type="date"  name="date" onChange={hanleChange}  />
            <Form.Label  className="my-3" >  <div> Choisissez l'heure </div>  </Form.Label>

            <Form.Control className="mt-2" type="time" name="heure" onChange={hanleChange}  />
            <Form.Label  className="my-3" >  <div> Choisissez l'adresse </div>  </Form.Label>

             <Form.Control className="mt-2" type="text" defaultValue={userDonnées.Adresse} name="AdresseRDV" onChange={hanleChange}  />

           
     
            <Button variant="dark"  size="block" className="mt-4 w-100 bg-blue"  onClick={() => {addNewRDV(); notify()}} >  Réserver maintenant </Button>
            <ToastContainer
position="top-right"
theme="light"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
type="light"
icon={true}

/>
{/* Same as */}
<ToastContainer />

            </div>
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