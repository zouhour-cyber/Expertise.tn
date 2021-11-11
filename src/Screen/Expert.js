import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { Container, Row, Col, FormControl, Form} from 'react-bootstrap'
import NavbarComponent from '../Components/NavbarComponent'
import './Expert.css'
import './Home.css'
import './cardExpert.css'
import {useDispatch,useSelector} from 'react-redux'
import { getUSER, getUserbyId } from '../Redux/Actions/authAction';
import Footer from '../Components/Footer';


const ExpertScreen = () => {

  const dispatch= useDispatch();

  const userData = useSelector((state) => state.utilisateur.userData);


  useEffect(() => {
   dispatch(getUSER())
      }, [dispatch])
   console.log(userData, "nos experts ???");

   const [search, setSearch] = useState("");
   const handelChange=(e)=>{
      setSearch(e.target.value);

   } 

   const getOneEXPERT=(id) =>{
    dispatch(getUserbyId(id))
  }
  return(
    <div>
<NavbarComponent/>

<Container className="bannerexpert" fluid>
<Container>
        <Row className=" d-flex justify-content-center text-center">  
 <Col md={9} sm={12} xs={12} className="max-height1">       
<Row className="expert d-flex justify-content-center"> 
<Col md={12} xs={12} className="my-5">  <h1> Rechercher un expert </h1> 
 <h5 className="my-3"> Les experts agronomes de différents spécialités sont réunis ici !! </h5>
</Col>
<Col md={12} xs={12}> 
<Form className="d-flex justify-content-evenly"> 

      <FormControl
        type="search"
        placeholder="Expert / Spécialité ..."
        className="searchInput w-100"
        aria-label="Search"
        onChange={handelChange}
      />

      <select className="btn-select" onChange={handelChange}
  >
  <option > Spécialité</option>
  <option>Céréaliculture </option>
  <option >Oléiculture</option>
  <option >Arboriculture</option>
  <option >Horticulture</option>
  <option >Floriculture</option>
  <option >Viticulture</option>
  <option >Agro-alimentaire</option>
  <option>Vétérinaire</option>
  <option>Production animale</option>
</select>
  
</Form>        
</Col>
                  </Row>
                  </Col>    
               </Row>
                  
                </Container>
</Container>

<Container className="my-5">

<div className=" d-flex justify-content-center text-center" >
  <Row className=""> 
  {userData
  // .filter(el => el.Spécialité.toLowerCase().includes(search.toLowerCase())||el.fullName.toLowerCase().includes(search.toLowerCase()))
  .filter((el) => {

    if (
      (el.role === "expert" && el.status==="confirmé" && search === "") ||
      (el.role === "expert" && el.status==="confirmé"  && (el.Spécialité.toLowerCase().includes(search.toLowerCase()) ||el.fullName.toLowerCase().includes(search.toLowerCase())))
    ) 
     {
        return el;
      }
    
  })
.map((el) => ( 
  <Col md={4} sm={5} xs={12} className=""> 
    <div className="cardExpert-wrapper text-center">
      
      <div className="cardExpert">
        
        <div className="cardExpert-image">
          <img src={el.image} alt="profile one"/>
        </div>

      <ul className="social-icons text-center">
        <li>
          <a href="">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
    
        <li>
          <a href="">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>

      <div className="details">
        <h4>{el.fullName} </h4>
         
        <h6>  Spécialité : <span className="job-title">{el.Spécialité}</span> </h6>
        <> 
        <Link to="/Expertprofil"> <a style={{fontWeight:"600"}} onClick={() => getOneEXPERT(el._id)}> Prendre un rendez-vous  <i class="far fa-calendar-plus fa-2x"></i></a> </Link>
        </>
  
    
    </div>
  </div>
  </div>
  </Col> 

))}
</Row>
</div>
</Container>
<Footer/>
    </div>
   )

 }

export default ExpertScreen