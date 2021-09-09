import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { Container, Row, Col, FormControl, Form} from 'react-bootstrap'
import NavbarComponent from '../Components/NavbarComponent'
import './Expert.css'
import './Home.css'
import './cardExpert.css'
import {useDispatch,useSelector} from 'react-redux'
import { getUserbyId } from '../Redux/Actions/crudExpertAction'
import { getUSER } from '../Redux/Actions/authAction';


const ExpertScreen = () => {

  const dispatch= useDispatch();

  const AfficheExpert = useSelector((state) => state.utilisateur.userData);


  useEffect(() => {
   dispatch(getUSER())
      }, [dispatch])
   console.log(AfficheExpert, "nos experts ???");

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

</Container>
<Container>
        <Row className="max-height1 d-flex justify-content-center text-center">  
 <Col md={9}>       
<Row className="expert d-flex justify-content-center"> 

<Col className="mb-5" md={12} xs={12}> <h1> Rechercher un expert </h1>   </Col> 
<Col md={12} xs={12}> 
<Form className="d-flex"> 

      <FormControl
        type="search"
        placeholder="Expert / Spécialité ..."
        className="searchInput"
        aria-label="Search"
        onChange={handelChange}
      />

      <select className="btn-select" aria-label="Default select example"  onChange={handelChange}
  >
  <option selected> Spécialité</option>
  <option value="1">céréaliculture </option>
  <option value="2">Oléiculture</option>
  <option value="3">Arboriculture</option>
  <option value="4">Horticulture</option>
  <option value="5">Floriculture</option>
  <option value="6">Viticulture</option>
  <option value="7">Agro-alimentaire</option>
  <option value="8">Vétérinaire</option>
  <option value="9">Production animale</option>
</select>
  
</Form>        
</Col>
                  </Row>
                  </Col>    
               </Row>
                  
                </Container>
<Container>

<div className=" d-flex justify-content-center text-center" >
  <Row className=""> 
  {AfficheExpert
  // .filter(el => el.Spécialité.toLowerCase().includes(search.toLowerCase())||el.fullName.toLowerCase().includes(search.toLowerCase()))
  .filter((el) => {

    if (
      (el.role === "expert" && search === "") ||
      (el.role === "expert" && el.Spécialité.toLowerCase().includes(search.toLowerCase()))
    ) {
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
         
        <h6>  <span className="job-title">{el.Spécialité}</span> </h6>
        <h6> {el.email} </h6>
        <h6> {el.phone} </h6>
        <hr></hr>
        <Link to="/Expertprofil"> <a className="rdv" onClick={() => getOneEXPERT(el._id)}> Prendre un rendez-vous  <i class="far fa-calendar-plus fa-2x"></i></a> </Link>

  


 
    
    </div>
  </div>
  </div>
  </Col> 

))}
</Row>
</div>
</Container>

    </div>
   )

 }

export default ExpertScreen