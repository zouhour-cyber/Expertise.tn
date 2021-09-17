import {React, useEffect, useState }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPUB, getPublicationById} from '../Redux/Actions/PUBActions'
import {Container,Row, Col , Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './card.css'
import './publication.css'

// const ReadMore =({description}) =>{
//   const montext = description
//   const [istruncated, setIsTruncated]=useState(true);
//   const resultString = istruncated ? montext.slice(0,10) : true

//   const toggleisTruncated=()=>{
//    setIsTruncated(!istruncated)
//   }


//   useEffect(() => {
//    (toggleisTruncated(),
//    resultString()
   
//    )
//        }, [])
//  }

const Publications = () => { 

     const dispatch = useDispatch()
     const datas= useSelector(state => state.PUBreducer.datas)

     useEffect(() => {
      dispatch(getPUB())
         }, [dispatch])
      console.log(datas, "nos pub ???");

     const getOnePUB=(id) =>{
       dispatch(getPublicationById(id))
     }
   
    return (
    
    <div className="mt-5">

     <Container className="d-flex my-5 ">
        <Row className="d-flex justify-content-between"> 
        <Col md={8}> 
        {datas.map((el,key ) => (
             <>
          <Col md={11} sm={11} xs={11} className="my-3">
          <Card style={{height:"35rem"}} className="pubCard" key={key}>
             <Card.Img variant="top" src={el.image} className="cardimg"   style={{ height: '20rem' }} />
             <Card.Body> 
              
            <div className="title mt-1"> <h5 style={{color:"var(--blue)"}}>  {el.titre} </h5> </div> 
            
             <div  style={{marginLeft:"-1rem"}} className="mt-4"> <a href="#" class="icon-link  "><i class="fa fa-pencil-square-o"></i> Mohaned Hamza</a>
            <a class="icon-link " > <i class="far fa-clock"></i> 10/09/2021  </a>  </div> 
               <Card.Text >
               <div className="description-text mt-2"> {el.description.slice(0,96)}...  </div>
                  
               </Card.Text>
               <div className="d-flex justify-content-between"> 

             
              {/* <Link to="/OnePublication" >  <a className="text-success" onClick={() => {getOnePUB(el._id)} } > Lire plus</a>  </Link> */}
              <Link to="/OnePublication" class="btn1 btn--with-icon" onClick={() => {getOnePUB(el._id)} }  ><i class="btn-icon fa fa-long-arrow-right"></i>READ MORE</Link>

               </div>
             </Card.Body>
           </Card>
           
          
          
           </Col>
             
           </>

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


