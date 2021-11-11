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

     const recent=[ 
      {id:"1", image:"http://www.agriculture.tn/wp-content/uploads/2021/10/IMG_0947-1068x712.jpg", description:"افتتاح موسم وتحويل الزيتون 2021 – 2022 بولاية صفاقس",  date:"31/10/2021" },
      {id:"2", image:"https://cdn2.webmanagercenter.com/wmc/wp-content/uploads/2021/10/siamap-2021-kram.jpg", description:" SIAMAP 2021, du 26 au 31 octobre",date:"24/10/2021"},
      {id:"3", image:"http://www.agriculture.tn/wp-content/uploads/2021/10/%D8%AA%D9%84%D9%82%D9%8A%D8%AD.png", description:"بلاغ حول انطلاق الحملة الوطنية المجانية لتلقيح الحيوانات ضد داء الكلب",date:"29/10/2021"},
      {id:"4", image:"./image/veterinaire.jpg", description:"Recrutement de vétérinaire",date:"07/09/2021"},
    ]
   
    return (
    
    <div className="mt-5">

     <Container className="d-flex my-5 ">
        <Row className="d-flex justify-content-between"> 
        <Col md={8}> 
        {datas.map((el,key ) => (
             <>
          <Col md={12} sm={12} xs={12} className="my-4">
          <Card  style={{height:"19rem", border:"none", borderRadius:"15px"}} className="pubCard" key={key}>
          <Row  className="d-flex justify-content-between"> 
             <Col md={5}> 
             <Card.Img  src={el.image} className="cardimg"   style={{ height:'19rem', width:"21rem"  }} />
             </Col>
             <Col md={7}>
             <Card.Body> 
             <div  className="mt-1 mb-3"> 
            <a style={{lineHeight:"10px" ,fontSize:"13px" ,marginLeft:"-1.5rem"}} className="icon-link " >   <i class="far fa-clock"></i> 10/09/2021  </a>  </div> 
            {/* <a class="icon-link " > <i class="far fa-clock"></i> 10/09/2021  </a> */}
            <div className=""> <div className="title" style={{color:"var(--blue)"}}>  {el.titre} </div> </div> 
            
 
               <Card.Text >
               <div className="description-text mt-2"> {el.description.slice(0,99)}...  </div>
                  
               </Card.Text>
               <hr className=" w-100" style={{marginTop:"4rem", marginBottom:"0.5px"}}></hr>
               <div className="d-flex justify-content-between "> 
               <a href="#" class="icon-link  "><i class="fa fa-pencil-square-o"></i> Mohaned Hamza</a>
              

             
              {/* <Link to="/OnePublication" >  <a className="text-success" onClick={() => {getOnePUB(el._id)} } > Lire plus</a>  </Link> */}
              <Link to="/OnePublication" className="btn1 btn--with-icon mt-3" onClick={() => {getOnePUB(el._id)} }  ><i class="btn-icon fa fa-long-arrow-right"></i>lire plus</Link>

               </div>
             </Card.Body>
             </Col>
             </Row>
           </Card>
           
          
          
           </Col>
             
           </>

             ))}

             </Col>
             <Col md={4} className="RecentPost mt-4"> 
             <h6> Recent Post </h6>
             <hr/>

               {recent.map((el,key ) => (
            
               <div className=" d-flex  justify-content-between ">
              <div className="d-flex justify-content-between  m-3"> 
              <div>  <img  src={el.image}   style={{ height: '5rem', width:"5rem" , marginRight:"1.2rem" , borderRadius:"7px"}} /> 

              </div>
              <div  style={{fontSize:"14px"}}> <p> {el.description}</p> 
              <p> {el.date}</p>

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


