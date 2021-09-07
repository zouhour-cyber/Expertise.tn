import {React, useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPublicationById} from '../Redux/Actions/PUBActions'
import {Container,Row, Col,  Button , Card } from 'react-bootstrap';
import '../Components/card.css'
import NavbarComponent from '../Components/NavbarComponent';

const OnePublication = (props) => {

    const dispatch = useDispatch()
    const datas= useSelector(state => state.PUBreducer.datas)

    useEffect(() => {
     dispatch(getPublicationById())
        }, [])
     console.log(datas, "une publication???");
  return(
    <div>
      <NavbarComponent/>
      <Container>
         <Row> 
             <Col md={11} sm={11} xs={11} className="my-3">
           <Card style={{height:"40rem"}} className="pubCard" >
             <Card.Img variant="top" src={datas.image} className="cardimg"   style={{ height: '20rem' }} />
             <Card.Body> 
              
            <div className="title mt-1"> <h5>  {datas.titre} </h5> </div> 
               <Card.Text >
               <div className="description-text"> {datas.description}  </div>
                  
               </Card.Text>
               <div className="d-flex justify-content-between"> 
               <div> 14/08/2021</div> 
               <div className="text-success" > Lire plus</div>  

               </div>
             </Card.Body>
           </Card>
           </Col>
             
         
        </Row> 
          
          </Container>  
        
        </div>
   )

 }

export default OnePublication