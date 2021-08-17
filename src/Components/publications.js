import {React, useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPUB} from '../Redux/Actions/PUBActions'
import {Container,Row, Col,  Button , Card } from 'react-bootstrap';
import './card.css'
import './publication.css'

const Publications = () => { 

     const dispatch = useDispatch()
     const datas= useSelector(state => state.PUBreducer.datas)

     useEffect(() => {
      dispatch(getPUB())
         }, [dispatch])
      console.log(datas, "nos pub ???");
    return (<div className="mt-5">
            <h1>Liste des Publications</h1>

     <Container className="d-flex justify-content-evenly my-5 ">
        <Row classNAme=""> 
        {datas.map((el,key ) => (
             
          <Col md={5} sm={6} xs={12} className="my-3">
           <Card style={{height:"40rem"}} className="pubCard" key={key}>
             <Card.Img variant="top" src={el.image} className="cardimg"   style={{ height: '17rem' }} />
             <Card.Body> 
               <h6> 14/08/2021</h6>
              <div className="title">  {el.titre} </div>
               <Card.Text >
               <div className="description-text"> {el.description}  </div>
    
               </Card.Text>
           <di className="text-success"> Lire plus</di>  
             </Card.Body>
           </Card>
           </Col>
             
            
             ))}
             </Row>
           
               </Container> 
   

        </div>)
    
}

export default Publications


