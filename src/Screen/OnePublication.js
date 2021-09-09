import {React, useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPUB, getPublicationById} from '../Redux/Actions/PUBActions'
import {Container,Row, Col, Card } from 'react-bootstrap';
import '../Components/card.css'
import NavbarComponent from '../Components/NavbarComponent';

const OnePublication = (props) => {
    const dispatch = useDispatch()
    const datas= useSelector(state => state.PUBreducer.datas)



    useEffect(() => {
     dispatch(getPublicationById())
        }, [])
     console.log(datas, "une publication???");

  const recent=[ 
    {id:"1", image:"./image/miel.jpg", description:"la traçabilité du miel trade à voir le jour...",  date:"10/09/2021" },
    {id:"2", image:"./image/farm.jpg", description:"Augmenter le taux de MO dans le sol, un défis",date:"09/09/2021"},
    {id:"3", image:"./image/about2.jpg", description:"Candidature pour recruter des ingénieurs agro",date:"08/09/2021"},
    {id:"4", image:"./image/veterinaire.jpg", description:"Recrutement de vétérinaire",date:"07/09/2021"},
  ]
    
  return(
    <div>
      <NavbarComponent/>
      {/* <div className="section-padding"> </div> */}
      <Container  style={{marginTop:"7rem"}}>
         <Row className="d-flex justify-content-around"> 
           <Col md={8} sm={10} xs={10} className="my-5" style={{backgroundColor:"white", borderRadius:"7px"}}>
               <div className="py-4 px-0">
           <div>
             <Card.Img variant="top" src={datas.image}    style={{width:"700px" ,height: '385px'}} />
             <Card.Body  className="pubCard "> 
              
            <div className="title mt-1"> <h5>  {datas.titre} </h5> </div> 
               <Card.Text >
               <div className="description-text"> {datas.description}  </div>
                  
               </Card.Text>
               <div className="d-flex justify-content-between"> 
               <div> 14/08/2021</div> 
              

               </div>
             </Card.Body>
           </div>
           </div>
           </Col>
           <Col md={4} className="RecentPost"> 
             <h6 className="mt-5"> Recent Post </h6>
             <hr/>

               {recent.map((el,key ) => (
            
               <div className=" d-flex justify-content-evenly ">
              <div className="d-flex justify-content-between  m-3"> 
              <div>  <img  src={el.image}   style={{width: '100px',height:"80px" , marginRight:"2rem", borderRadius:"5px" }} /> 

              </div>
           
              <div>
              <h6> {el.date}</h6>
              <p> {el.description} </p> 

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