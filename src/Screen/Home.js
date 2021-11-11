import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import './Home.css'
import { Container, Row, Col, Button , Card, NavLink} from 'react-bootstrap'
import Footer from '../Components/Footer'
import Témoignage from '../Components/TémoignageSlider'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../Redux/Actions/authAction'
import Partenaires from '../Components/partenaires'
import CardsExpertise from '../Components/CardsExpertise'
import AproposHome from '../Components/AproposHome'
import BannerHome from '../Components/BannerHome'
import { Link } from 'react-router-dom'
import TypingTextAnimation from 'react-typing-text-animation'
import 'react-typing-text-animation/dist/index.css' // only if you're using default cursor

const Home = (props)=> {

  return(
    <div>
  <NavbarComponent/>

  <BannerHome/>  
  <div className="section-padding"> </div>

  <CardsExpertise/>
  <div className="section-padding"> </div>

  <AproposHome/>
  

<Container  className="bg-vert d-flex align-items-center justify-content-center" fluid> 
<Row className=" text-center"> 

  <Col md={12} xs={12}   > <TypingTextAnimation className="Apropos" delayOnReverse="5000"	 delay="300" text='Vous êtes expert agronome certifié ?' />
</Col>
  <Col md={12} xs={12}>  <Link to="/Register">  <Button className="mt-4 btn-blue" variant="dark" style={{ width: '15rem'}}>  Rejoignez-nous  </Button>  </Link>
  
</Col>


</Row>


</Container>

<div className="section-padding"> </div>

<Témoignage/>
<div className="section-padding"> </div>

<Partenaires/>


<div className="section-padding"> </div>

<Footer/>

    </div>
   )

 }

export default Home