import React from 'react'
import {Carousel, Container, Row , Col} from 'react-bootstrap'
import './témoignage.css'
import CountUp from 'react-countup';


const Témoignage = (props) => {
  return(
    <div>

<Carousel >
  <Carousel.Item   className=""    style={{minHeight: "408px"}}  >
  
    <Carousel.Caption className="">
      <Container fluid> 
      <Row className="d-flex justify-content-evenly"> 
    <Col md={3} sm={12} xs={12} className="card-tem "  >
   <i className="fa fa-quote-left testimonial_fa mb-5" aria-hidden="true"></i>
      <p className="testimonial_para">Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie </p>
         <Row className="">
                    <Col sm={12} xs={12}>
                        <img src="image/temoignage1.webp" className="img-responsive tem-img" style={{ borderRadius:"50%"}}/>
                    </Col>
                     <Col sm={12} xs={12} className="mt-2">
                        <h6><strong>Kais Hamza</strong></h6>
                        <p className="testimonial_subtitle"><span> Maraicher</span>
                        </p>
                    </Col>
           </Row>
     </Col>
     <Col md={3} sm={12} className="card-tem bg-blue ">
   <i className="fa fa-quote-left testimonial_fa mb-5" aria-hidden="true"></i>
      <p className="testimonial_para ">Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie </p>
         <Row className="">
                    <Col sm={12} xs={12}>
                        <img src="image/temoignage2.webp" className="img-responsive tem-img" style={{ borderRadius:"50%"}}/>
                    </Col>
                     <Col sm={12} xs={12} className="mt-2">
                        <h6><strong> Seif Sassi</strong></h6>
                        <p className="testimonial_subtitle"><span> Eleveur de bovin</span>
                        </p>
                    </Col>
           </Row>
     </Col>

     <Col md={3} sm={12}  xs={12} className="card-tem bg-blue">
   <i className="fa fa-quote-left testimonial_fa mb-5" aria-hidden="true"></i>
      <p className="testimonial_para">Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie </p>
         <Row className="">
                    <Col sm={12} xs={12}>
                        <img src="image/temoignage3.webp" className="img-responsive tem-img" style={{ borderRadius:"50%"}}/>
                    </Col>
                     <Col sm={12} xs={12} className="mt-2">
                        <h6><strong>Sami ben Othmen</strong></h6>
                        <p className="testimonial_subtitle"><span> Vétérinaire</span>
                        </p>
                    </Col>
           </Row>
     </Col>


     </Row>
     </Container>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item   className=""    style={{minHeight: "408px"}}>
  
  <Carousel.Caption className="">
    <Container fluid> 
    <Row className="d-flex justify-content-evenly"> 
  <Col md={3} sm={12}  xs={12} className="card-tem bg-blue"  >
 <i className="fa fa-quote-left testimonial_fa mb-5" aria-hidden="true"></i>
    <p className="testimonial_para">Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie </p>
       <Row className="">
                  <Col sm={12} xs={12}>
                      <img src="image/temoignage1.webp" className="img-responsive tem-img" style={{ borderRadius:"50%"}}/>
                  </Col>
                   <Col sm={12} xs={12} className="mt-2">
                      <h6><strong>Kais Hamza</strong></h6>
                      <p className="testimonial_subtitle"><span> Maraicher</span><br/>
                      </p>
                  </Col>
         </Row>
   </Col>
   <Col md={3} sm={12}  xs={12} className="card-tem bg-blue ">
 <i className="fa fa-quote-left testimonial_fa mb-5" aria-hidden="true"></i>
    <p className="testimonial_para">Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie </p>
       <Row className="">
                  <Col sm={12} xs={12}>
                      <img src="image/temoignage2.webp" className="img-responsive tem-img" style={{ borderRadius:"50%"}}/>
                  </Col>
                   <Col sm={12} xs={12} className="mt-2">
                      <h6><strong>Mahdi hadded</strong></h6>
                      <p className="testimonial_subtitle"><span> Eleveur de bovin</span><br/>
                      </p>
                  </Col>
         </Row>
   </Col>

   <Col md={3} sm={12}  xs={12} className="card-tem bg-blue">
 <i className="fa fa-quote-left testimonial_fa mb-5" aria-hidden="true"></i>
    <p className="testimonial_para">Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie </p>
       <Row className="">
                  <Col sm={12} xs={12}>
                      <img src="image/temoignage3.webp" className="img-responsive tem-img" style={{ borderRadius:"50%"}}/>
                  </Col>
                   <Col sm={12} xs={12} className="mt-2">
                      <h6><strong>Sami ben Othmen</strong></h6>
                      <p className="testimonial_subtitle"><span> Vétérinaire</span><br/>
                      </p>
                  </Col>
         </Row>
   </Col>


   </Row>
   </Container>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>

<div   className="section-padding "> </div>


<Container className="border-top-blue d-flex align-items-center justify-content-center"  fluid >
<Row className="  mx-5"> 
    <Col sm={3} className="my-2"> 
    <div className="fun"> 
    <h1> <CountUp start={0} duration={100}  end={600}/>
</h1>
     <h5> Clients satisfaits  </h5>
    </div>
    </Col>
    <Col sm={3} className="my-2"> 
    
     <div className="fun1 "> 
    <h1>  <CountUp start={0} duration={100}  end={1000}/> </h1>
     <h5>  Experts certifiés </h5>
  
    </div>
    </Col>
    <Col sm={3} className="my-2"> 
    <div className="fun"> 
    <h1><CountUp start={0} duration={100}  end={900}/> </h1>
     <h5> Rendez-vous </h5>
    </div>
    </Col>
    <Col sm={3} className="my-2"> 
    <div className="fun"> 
    <h1> <CountUp start={0} duration={100}  end={500}/> </h1>
     <h5> Clients actifs  </h5>
    </div>
    </Col>



</Row>
</Container>



    </div>
   )

 }

export default Témoignage