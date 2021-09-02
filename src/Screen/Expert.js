import React, { useEffect } from 'react'

import { Container, Row, Col, FormControl, Form} from 'react-bootstrap'
import NavbarComponent from '../Components/NavbarComponent'
import './Expert.css'
import './Home.css'
import './cardExpert.css'
import {useDispatch,useSelector} from 'react-redux'
import { getEXPERT } from '../Redux/Actions/crudExpertAction'


const ExpertScreen = () => {

  const dispatch= useDispatch();

  const AfficheExpert = useSelector((state) => state.NosEXPERTS.NosexpertsData);


  useEffect(() => {
   dispatch(getEXPERT())
      }, [dispatch])
   console.log(AfficheExpert, "nos experts ???");

  return(
    <div>
<NavbarComponent/>

<Container className="bannerexpert" fluid>

</Container>
<Container>
        <Row className="max-height1 d-flex justify-content-center text-center">  
 <Col md={9}>       
<Row className="expert d-flex justify-content-center"> 

<Col className="mb-5" md={12} xs={12}> <h1> Chercher un expert </h1>   </Col> 
<Col md={12} xs={12}> 
<Form className="d-flex"> 

      <FormControl
        type="search"
        placeholder="Rechercher un expert"
        className="searchInput"
        aria-label="Search"
      />

      <Form.Select className="btn-select" aria-label="Default select example">
  <option disabled> Spécialité</option>
  <option value="1">Céréaliculture</option>
  <option value="2">Oléiculture</option>
  <option value="3">Arboriculture</option>
  <option value="4">Horticulture</option>
  <option value="5">Floriculture</option>
  <option value="6">Viticulture</option>
  <option value="7">Agro-alimentaire</option>
  <option value="8">Vétérinaire</option>
  <option value="9">Production animale</option>
</Form.Select>
  
</Form>        
</Col>
                  </Row>
                  </Col>    
               </Row>
                  
                </Container>
<Container>

<div className=" d-flex justify-content-center" >
  <Row className=""> 
{AfficheExpert.map(el => ( 
  <Col md={4} sm={5} xs={10} className=""> 
    <div className="cardExpert-wrapper">
      
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

   {/* <i class="far fa-calendar-plus fa-3x"></i> */}


 
    
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