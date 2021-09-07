import { Container,Row, Col, Form, Button } from 'react-bootstrap'
import Input from "./input"
import { signup} from '../Redux/Actions/authAction'
import {useDispatch,useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import { Redirect } from 'react-router-dom'

const RegisterUserForm = (props) => {

    const [fullName,setFullName] = useState('')
    const [phone,setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [Spécialité,setSpécialité]= useState('')
    const [Description,setDescription]= useState('')
    const [image,setImage]= useState('')
    const [role,setRole]= useState('')
    const [password, setPassword] = useState('')
   const [error, setError] = useState('')

   const auth = useSelector((state) => state.auth);
   const user = useSelector((state) => state.user);
   const dispatch = useDispatch();
   
   useEffect(() => {
      if (!user.loading) {
        setFullName("");
        setPhone("");
        setEmail("");
        setSpécialité("");
        setDescription("");
        setImage("");
        setRole("");
        setPassword("");
        setError("");
      }
    }, [user.loading]);
  
    const userSignup = (e) => {
      e.preventDefault();
  
      const user = {
        fullName
        ,phone,email,Spécialité,Description,image,role,password
      };
  
      dispatch(signup(user));
    };

 if (user.loading) {
   return <p>Loading...!</p>
 }

 if(auth.authenticate){
    return <Redirect to={`/Dashboard`} />
  } 
   return (
       <div>
           <Container>
               <Row> 
                 <Col md={12}> 
                 <h2 className="text-center mt-5 pt-4 connextion-title">INSCRIPTION</h2>    

                       <Form className="form register-user-form mb-5" >
                           <div className="d-flex mb-3">
                        
                             <Input  placeholder="Ecrivez votre nom et prénom ici.." type="text" onChange={(e)=>{setFullName(e.target.value);console.log(fullName, "nom user")}}/>
                           </div>
                       
                           <div className="d-flex mb-3">
                       
                             <Input  placeholder="Ecrivez votre téléphone ici.." type="text" onChange={(e)=>{setPhone(e.target.value)}}/>
                           </div>

                           <div className="d-flex mb-3">
                          
                          <Input  placeholder="Ecrivez votre email ici.." type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>

                           <div className="d-flex mb-3">
                       
                       <Input  placeholder="Ecrivez votre spécialité ici.." type="text" onChange={(e)=>{setSpécialité(e.target.value)}}/>
                     </div>
                     

                     <div className="d-flex mb-3">
                       
                       <Input  placeholder="Ecrivez description ici.." type="text" onChange={(e)=>{setDescription(e.target.value)}}/>
                     </div>
                     

                     <div className="d-flex mb-3">
                       
                       <Input  placeholder="Insérez votre image ici.." type="text" onChange={(e)=>{setImage(e.target.value)}}/>
                     </div>
              
                           <div className="d-flex">
                          
                             <Input  placeholder="Ecrivez votre mot de passe ici.."  type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                           </div>
                           <div className="d-flex justify-content-center">
                              <Button  className="my-auto top-btn mt-4" onClick={userSignup}  variant="outline-dark">S'inscrire</Button>
                           </div>
                       </Form>
                       </Col>
               </Row>
           </Container>
           
       </div>
   )
 }
 
 export default RegisterUserForm