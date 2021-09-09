// import React,{useState,useEffect} from 'react'
// import { Container,Row,Form,Col, Button } from 'react-bootstrap'
// import Input from '../Components/Input'
// import {useDispatch,useSelector} from 'react-redux'
// import { Redirect } from 'react-router-dom'
// import { signupEXPERT } from '../Redux/Actions/expertAction'

// const RegisterExpert = (props) => {

//     const [fullName,setFullName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [phone,setPhone] = useState('')
//     const [Spécialité, setSpécialité] = useState('')
//     const [Description, setDescription] = useState('')
//     const [image, setImage] = useState('')
//     const [error, setError] = useState('')

//    const auth = useSelector((state) => state.auth);
//    const expert = useSelector((state) => state.ExpertRegisterReducer);
//    const dispatch = useDispatch();
   
//    useEffect(() => {
//       if (!expert.loading) {
//         setFullName("");
//         setEmail("");
//         setPassword("");
//         setPhone("");
//         setSpécialité("");
//         setDescription("");
//         setImage("");
//       }
//     }, [expert.loading]);

//     const expertSignup = (e) => {
//         e.preventDefault();
    
//         const expert = {
//             fullName,
//             email,
//             password,
//             phone,
//             Spécialité,
//             Description,
//             image
//         };
    
//         dispatch(signupEXPERT(expert));
//       };


//   if(auth.authenticate){
//      return <Redirect to={`/DashboardValidationExpert`} />
//     }

  
 
//     return (
//         <div>
//             <Container>
//                 <Row>
                   
//                         <Form  className="form register-user-form mb-5" onSubmit={expertSignup}  >
//                             <Row className="d-flex justify-content-center align-items-center">
//                                 <Col md={6} className="">

                                
                        
//                         <Input  placeholder="Ecrivez votre nom et prénom ici.." type="text" onChange={(e)=>{setFullName(e.target.value)}}/>
                   

                     
//                         <Input  placeholder="Ecrivez votre email ici.." type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                   
                     
                     
//                         <Input  placeholder="Votre numéro de téléphone ici.." type="tel" onChange={(e)=>{setPhone(e.target.value)}}/>
                   
//                      </Col>
//                      <Col md={6}> 
//                      <Input  placeholder="Précisez votre spécialité  ici.." type="text" onChange={(e)=>{setSpécialité(e.target.value)}}/>
                
                  
                     
//                      <Input  placeholder="Ajouter une description ici.." type="text" onChange={(e)=>{setDescription(e.target.value)}}/>
                
                  
                     
//                      <Input  placeholder="Insérer votre photo ici.." type="text" onChange={(e)=>{setImage(e.target.value)}}/>
                
//                    <Input  placeholder="Ecrivez votre mot de passe ici.."  type="password" onChange={(e)=>{setPassword(e.target.value)}} />
//                    </Col>
//                    <Col md={6}> 
//                       <div className="d-flex justify-content-center">
//                          <Button  className=" mt-5"  type="submit" variant="outline-dark">S'inscrire</Button>
//                       </div>
                    

//                   </Col>
//                   </Row>
//               </Form>
                  
//           </Row>
//       </Container>
            
//         </div>
//     )
// }

// export default RegisterExpert
