import React from 'react'
import {Carousel, Container, Row , Col, Button} from 'react-bootstrap'
import './témoignage.css'

const Témoignage = (props) => {
  return(
    <div>

<Carousel >
  <Carousel.Item   className="bg-blue"    style={{height: "500px"}}>
  
    <Carousel.Caption>
    <Row className="pt-5 my-5">
   <i className="fa fa-quote-left testimonial_fa mb-5" aria-hidden="true"></i>
      <p className="testimonial_para">Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text "Sed ut perspiciatis </p><br/>
         <Row className="d-flex  justify-content-center">
                    <Col sm={1} xs={12}>
                        <img src="image/temoignage1.webp" className="img-responsive tem-img" style={{ borderRadius:"50%"}}/>
                    </Col>
                     <Col sm={5} xs={12}>
                        <h4><strong>Kais Hamza</strong></h4>
                        <p className="testimonial_subtitle"><span> Maraicher</span><br/>
                        <span>Producteur de tomate</span>
                        </p>
                    </Col>
           </Row>
     </Row>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item     className="bg-blue"  style={{height: "500px"}}>
 

    <Carousel.Caption>
    <Row className="pt-5 my-5">
    <i className="fa fa-quote-left testimonial_fa mb-5" aria-hidden="true"></i>
      <p className="testimonial_para">Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text "Sed ut perspiciatis </p><br/>
         <Row className="d-flex  justify-content-center ">
                    <Col sm={1} xs={12}>
                        <img src="image/temoignage2.webp" className="img-responsive" style={{width: "100px" , height: "100px", borderRadius:"50%"}}/>
                    </Col>
                     <Col sm={5} xs={12}>
                        <h4><strong> Mahdi hadded</strong></h4>
                        <p className="testimonial_subtitle"><span>Chlinical Chemistry Technologist</span><br/>
                        <span>Officeal All Star Cafe</span>
                        </p>
                    </Col>
           </Row>
     </Row>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item     className="bg-blue"  style={{height: "500px"}}>
   

    <Carousel.Caption>
    <Row className="pt-5 my-5">
    <i className="fa fa-quote-left testimonial_fa mb-5" aria-hidden="true"></i>

      <p className="testimonial_para">Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text "Sed ut perspiciatis</p><br/>
         <Row className="d-flex  justify-content-center">
                    <Col sm={1} xs={12}>
                        <img src="image/temoignage3.webp" className="img-responsive" style={{width: "100px" , height: "100px", borderRadius:"50%"}}/>
                    </Col>
                     <Col sm={5} xs={12}>
                        <h4><strong>Jack Andreson</strong></h4>
                        <p className="testimonial_subtitle"><span>Chlinical Chemistry Technologist</span><br/>
                        <span>Officeal All Star Cafe</span>
                        </p>
                    </Col>
           </Row>
     </Row>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div   className="section-padding "> </div>


<Container className="border-top-blue d-flex align-items-center justify-content-center"  fluid >
<Row className="  mx-5"> 
    <Col sm={3}> 
    <div className="fun"> 
    <h1> 6000</h1>
     <h5> Happy Clients  </h5>
    </div>
    </Col>
    <Col sm={3}> 
    
     <div className="fun1"> 
    <h1> 1000 </h1>
     <h5> Experts confirmés </h5>
  
    </div>
    </Col>
    <Col sm={3}> 
    <div className="fun"> 
    <h1> 1000 </h1>
     <h5> Cups of Coffee </h5>
    </div>
    </Col>
    <Col sm={3}> 
    <div className="fun"> 
    <h1> 500 </h1>
     <h5> Active Clients  </h5>
    </div>
    </Col>



</Row>
</Container>



    </div>
   )

 }

export default Témoignage