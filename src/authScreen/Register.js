// import React, { useState } from 'react'
// import { Container,Row,Form,Col, Button } from 'react-bootstrap'
// import {useDispatch, useSelector} from 'react-redux'
// import { Redirect } from 'react-router-dom'
// // import { UserRegister } from '../Redux/Actions/authAction'

// const Register = (props) => {
//     const [input,setInput]=useState({fullName:"",phone:"", email:"", password:"" })

//     const auth = useSelector(state =>state.auth)
//     const dispatch = useDispatch()
//     const [fullName,setFullName] = useState('')
//     const [phone,setPhone] = useState('')


//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [error, setError] = useState('')
 
    
//     if(auth.authenticate){
//         return <Redirect to={`/Dashboard`} />
//     }



//     const hanleChange=(e)=>{
//         const {name,value}=e.target
//         setInput({
//             ...input,
//             [name]:value
//         })
//         console.log("input",input)
//     }

//     const UserSignUp =(e) =>{
//        e.preventDefault();
//         const user = {
//             fullName,
//             phone,
//             email,
//             password
       

//         }
//         dispatch(UserRegister(user))
//     }
 
//     return (
//         <div>
//             <Container>
//                 <Row>
                   
//                         <Form onSubmit={UserSignUp} >
//                             <Row>
//                                 <Col md={10} className="mx-auto">

//                                 <Form.Group controlId="formBasicEmail">
// <Form.Control type="text" placeholder="Nom et prénom" name='fullName'  onChange={hanleChange} />

// </Form.Group>
// <Form.Group controlId="formBasicPassword">
// <Form.Control type="number" placeholder="phone"  name='phone'   onChange={hanleChange}  />
// </Form.Group>

// <Form.Group controlId="formBasicPassword">
// <Form.Control type="email" placeholder="E-mail adresse"  name='email'   onChange={hanleChange}  />
// </Form.Group>  

// <Form.Group controlId="formBasicPassword">
// <Form.Control type="password" placeholder="Password"  name='password'   onChange={hanleChange}  />
// </Form.Group>

              
                                 
//      <Button variant="primary" className="btn mt-2" type="submit">register</Button>
//                              </Col>
//                             </Row>
//                         </Form>
                  
//                 </Row>
//             </Container>
            
//         </div>
//     )
// }

// export default Register
