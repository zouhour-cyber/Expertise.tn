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

     <Container className="d-flex my-5 ">
        <Row className="d-flex justify-content-between"> 
        <Col md={8}> 
        {datas.map((el,key ) => (
             
          <Col md={11} sm={11} xs={11} className="my-3">
           <Card style={{height:"40rem"}} className="pubCard" key={key}>
             <Card.Img variant="top" src={el.image} className="cardimg"   style={{ height: '20rem' }} />
             <Card.Body> 
              
            <div className="title mt-1"> <h5>  {el.titre} </h5> </div> 
               <Card.Text >
               <div className="description-text"> {el.description}  </div>
                  
               </Card.Text>
               <div className="d-flex justify-content-between"> 
               <div> 14/08/2021</div> 
               <div className="text-success" > Lire plus</div>  

               </div>
             </Card.Body>
           </Card>
           </Col>
             
            
             ))}
             </Col>
             <Col md={4} className="RecentPost"> 
             <h6> Recent Post </h6>
             <hr/>

               {datas.map((el,key ) => (
            
               <div className=" d-flex  justify-content-evenly ">
              <div className="d-flex justify-content-between  m-3"> 
              <div>  <img  src={el.image}   style={{ height: '5rem', width:"5rem" , marginRight:"2rem" }} /> 

              </div>
              <div> <p> It is a long established fact that a reader </p> 
              <h6> 14/08/2021</h6>

               </div>


              </div>
               </div>
               
            
                 ))}
                 </Col>
             </Row>
           
               </Container> 
   

        </div>)
    
}

export default Publications


