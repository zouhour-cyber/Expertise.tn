import {React, useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPUB, getPublicationById} from '../Redux/Actions/PUBActions'
import {Container,Row, Col, Card, Image } from 'react-bootstrap';
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
      {id:"1", image:"http://www.agriculture.tn/wp-content/uploads/2021/10/IMG_0947-1068x712.jpg", description:"افتتاح موسم وتحويل الزيتون 2021 – 2022 بولاية صفاقس",  date:"31/10/2021" },
      {id:"2", image:"https://cdn2.webmanagercenter.com/wmc/wp-content/uploads/2021/10/siamap-2021-kram.jpg", description:" SIAMAP 2021, du 26 au 31 octobre",date:"24/10/2021"},
      {id:"3", image:"http://www.agriculture.tn/wp-content/uploads/2021/10/%D8%AA%D9%84%D9%82%D9%8A%D8%AD.png", description:"بلاغ حول انطلاق الحملة الوطنية المجانية لتلقيح الحيوانات ضد داء الكلب",date:"29/10/2021"},
      {id:"4", image:"./image/veterinaire.jpg", description:"Recrutement de vétérinaire",date:"07/09/2021"},
    ]
   
  return(
    <div>
      <NavbarComponent/>
      {/* <div className="section-padding"> </div> */}
      <Container  style={{marginTop:"7rem"}}>
         <Row className="d-flex justify-content-around"> 
           <Col md={8} sm={10} xs={10} className="my-5 " style={{backgroundColor:"white", borderRadius:"5px"}}>
               <div className="py-4 px-0">
           <div>
             <Image variant="top" src={datas.image}    style={{width:"700px" ,height: '385px', borderRadius:"7px"}} fluid />
             <Card.Body  className="pubCard "> 
              
            <div className="title mt-1"> <h5 style={{color:"var(--blue)"}}>  {datas.titre} </h5> </div> 
            <div  style={{marginLeft:"-1rem"}} className="mt-4"> <a href="#" class="icon-link  "><i class="fa fa-pencil-square-o"></i> Mohaned Hamza</a>
            <a class="icon-link " > <i class="far fa-clock"></i> 10/09/2021  </a>  </div> 
               <Card.Text >
               <div className="description-text mt-2"> {datas.description}  </div>
                  
               </Card.Text>
           
             </Card.Body>
           </div>
           </div>
           </Col>
           <Col md={4} sm={10} xs={10} className="RecentPost"> 
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