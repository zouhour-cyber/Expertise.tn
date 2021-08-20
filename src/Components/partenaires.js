import React from 'react'
import { Container, Row, Col, Button , Card} from 'react-bootstrap'

import '../Screen/Home.css'


const Partenaires = (props) => {
  return(
    <div>

<Row  > 
<Col md={3}>
<img  src="image/inat-remove.png" className="image-fluid img-partenaire"/>
  

</Col>
<Col md={3}>
<img  src="image/inrat-remove.png"  className="image-fluid img-partenaire"/>
  

</Col>
<Col md={3}>
<img  src="image/iresa-remove.png"  className="image-fluid img-partenaire"/>

</Col>
<Col md={3}>
<img  src="image/fle7etna-remove.png"  className="image-fluid img-partenaire" />

</Col>

</Row>






    </div>
   )

 }

export default Partenaires