import { Container,Row, Col, Form, Button, FormSelect } from 'react-bootstrap'
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
    const [Adresse, setAdresse] = useState('')

   
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
        setAdresse("");
      }
    }, [user.loading]);
  
    const userSignup = (e) => {
      e.preventDefault();
   
    const user = {
        fullName
        ,phone,email,Spécialité,Description,image,password,role,Adresse
      };
  
      dispatch(signup(user));
    };

if(auth.authenticate){
      return <Redirect to="/" />
    }  

 if (user.loading) {
   return <p>Loading...!</p>
 }


  //  //notification RDV
  //  const notify = () => toast("Inscription avec succés, Veuillez attender la confirmation!", {
  //   position: "top-right",
  //   autoClose: 6000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   icon: ({theme, type}) =>  <img src="./image/success.png"/>

  
  //   });


   return (
       <div>
           <Container>
               <Row className="d-flex justify-content-center"> 
                 <Col md={9} sm={12} xs={12}> 

                       <Form className="form register-user-form mb-5" onSubmit={userSignup} >
                           <>
                        
                             <Input  placeholder="Ecrivez votre nom et prénom ici.." type="text" onChange={(e)=>{setFullName(e.target.value);console.log(fullName, "nom user")}}/>
                           </>
                       
                           <>
                       
                             <Input  placeholder="Ecrivez votre téléphone ici.." type="text" onChange={(e)=>{setPhone(e.target.value)}}/>
                           </>

                           <>
                          
                          <Input  placeholder="Ecrivez votre email ici.." type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </>

                           <>
                       
                       <Input  placeholder="Ecrivez votre spécialité ici.." type="text" onChange={(e)=>{setSpécialité(e.target.value)}}/>
                     </>
                     

                     <>
                     <Form.Select  aria-label="Default select example " className="mt-4" onChange={(e)=>{setRole(e.target.value)}}>
                            <option> Je suis ... </option>
                            <option >user</option>
                            <option >expert</option>
                          </Form.Select>
                     </>

                       <Input  placeholder="Ecrivez description ici.." type="text" onChange={(e)=>{setDescription(e.target.value)}}/>
                     

                     <>
                       
                       <Input  placeholder="Insérez votre image ici.." type="text" onChange={(e)=>{setImage(e.target.value)}}/>
                     </>
                     <Input  placeholder="Ecrivez votre mot de passe ici.."  type="password" onChange={(e)=>{setPassword(e.target.value)}} />

                     <Input  placeholder="Insérez votre adresse ici.." type="text" onChange={(e)=>{setAdresse(e.target.value)}}/>

                           <>
                          
                           </>
                           <div className="d-flex justify-content-center">
                              <Button  className="mt-4" style={{width:"100%", backgroundColor:"var(--blue)", color:"white"}} type="submit"  >S'inscrire</Button>
                           </div>
                       </Form>
                       </Col>
               </Row>
           </Container>
           
       </div>
   )
 }
 
 export default RegisterUserForm