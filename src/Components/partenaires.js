import React from 'react'
import { Container, Row, Col, Button , Card, Carousel} from 'react-bootstrap'

import '../Screen/Home.css'


const Partenaires = (props) => {
  return(
    <div>
<Carousel >
  <Carousel.Item  style={{minHeight: "125px"}}>
 
    <Carousel.Caption>
    <Row  > 
<Col md={3}>
<img  src="image/inat-remove.png" className="image-fluid img-partenaire"/>
  

</Col>
<Col md={3}>
<img  src="image/inrat-remove.png"  className="image-fluid img-partenaire"/>
  

</Col>
<Col md={3}>
<img  src="image/foodquality.png"  className="image-fluid img-partenaire"  />


</Col>
<Col md={3}>
<img  src="image/bio-removebg.png"  className="image-fluid img-partenaire"/>

</Col>

</Row>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{minHeight: "130px"}}>
 

    <Carousel.Caption>
    <Row  > 
<Col md={3}>
<img  src="image/inat-remove.png" className="image-fluid img-partenaire"/>
  

</Col>
<Col md={3}>
<img  src="image/inrat-remove.png"  className="image-fluid img-partenaire"/>
  

</Col>
<Col md={3}>
<img  src="image/FAO.png"  className="image-fluid img-partenaire"/>

</Col>
<Col md={3}>
<img  src="image/thinkfoodbg.png"  className="image-fluid img-partenaire " />

</Col>

</Row>
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>







    </div>
   )

 }

export default Partenaires