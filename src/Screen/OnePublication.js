import {React, useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPUB, getPublicationById} from '../Redux/Actions/PUBActions'
import {Container,Row, Col,  Button , Card } from 'react-bootstrap';
import '../Components/card.css'
import NavbarComponent from '../Components/NavbarComponent';

const OnePublication = (props) => {
    const dispatch = useDispatch()
    const datas= useSelector(state => state.PUBreducer.datas)

    useEffect(() => {
      dispatch(getPUB())
         }, [dispatch])
      console.log(datas, "nos pub ???");


    useEffect(() => {
     dispatch(getPublicationById())
        }, [])
     console.log(datas, "une publication???");


    
  return(
    <div>
      <NavbarComponent/>
      <div className="section-padding"> </div>

      <Container className="mt-5">
         <Row > 
           <Col md={8} sm={10} xs={10} className="my-3" style={{backgroundColor:"white"}}>
               <div>
           <Card style={{height:"40rem"}} className="pubCard" >
             <Card.Img variant="top" src={datas.image} className="cardimg"   style={{ height: '60rem' }} />
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
           </div>
           </Col>
           <Col md={4} className="RecentPost"> 
             <h6> Recent Post </h6>
             <hr/>

               {datas.map((el,key ) => (
            
               <div className=" d-flex justify-content-evenly ">
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
        
        </div>
   )

 }

export default OnePublication