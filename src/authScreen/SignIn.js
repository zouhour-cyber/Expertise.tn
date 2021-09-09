import React,{useState,useEffect} from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import Input from '../Components/Input'
import {isUserLoggedIn, login} from '../Redux/Actions/authAction'
import {useDispatch,useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import '../Components/Form.css'
import RegisterUserForm from './userRegister'
const SignIn = (props) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const auth = useSelector(state =>state.auth)
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch()

    
    // useEffect(() => {
    //     if (!auth.authenticate ){  
    //    dispatch(isUserLoggedIn());
    //    } 
    // },[])
    
    const userLogin =(e)=>{
    e.preventDefault()
    const user = {
        email,
        password
    }
    dispatch(login(user))

}

// if(auth.authenticate && user.role === "user"){
//     return <Redirect to={`/ProfilUser`} />
// }

if (user)
{
 if (auth.authenticate && user.role === "user" ) return <Redirect to="/ProfilUser" />
}

if (user)
{
 if (auth.authenticate && user.role === "admin") return <Redirect to="/Dashboard/Dashboardpublication" />
}

if (user)
{
 if (auth.authenticate && user.role === "expert") return <Redirect to="/DashboardExpert" />
}
{(auth.authenticate && user.role === "expert" && user.status==="confirmé") ? <Redirect to="/DashboardExpert"/> : (auth.authenticate && user.role === "user") ? <Redirect to="/ProfilUser"/>:  (auth.authenticate && user.role === "admin") ? <Redirect to="/Dashboard/Dashboardpublication"/> : <RegisterUserForm/> }


    return (
        <div>
             <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={9} xs={12} sm={12}> 
                        <Form onSubmit={userLogin}>
                           
                            <Input placeholder="Email" type="email" onChange={(e)=>{setEmail(e.target.value)}} />
                            <Input  placeholder="Password"  type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                             <Button  style={{width:"100%", backgroundColor:"var(--blue)", color:"white"}} type="submit" className="mt-4">se connecter</Button>
                          
                        </Form>
                        </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignIn
