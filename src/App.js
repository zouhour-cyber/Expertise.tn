import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Home from './Screen/Home';
import PublicationsScreen from './Screen/PublicationsScreen';
import ExpertScreen from './Screen/Expert';
import SignIn from './authScreen/SignIn';
import PrivetRoute from './authScreen/privetRoute';
import { isUserLoggedIn } from './Redux/Actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import DashboardExpert from './Screen/DashboardExpert';
import DashboardValidationExpert from './Components/DashboardValidationExpert';
import Contact from './Screen/Contact';
import RegisterUserForm from './authScreen/userRegister';
import ProfilUser from './Screen/ProfilUser';
import OnePublication from './Screen/OnePublication';
import ExpertProfil from './Screen/expertprofil';
import RDVrecu from './Components/RDVrecu';
import ContactDashboard from './Components/contactDashboard';
import RDVDashExpert from './Components/RDVDashExpert';
import UserRDV from './Screen/UserRDV';
import AddPubExpert from './Components/AddPubExpert';
import DashboardPublication from './Screen/AdminDashboard';
import DashboardExpertPub from './Screen/DashboardExpertPub';
import PageRegister from './Components/PageRegister';
import PageSignIn from './Components/PageSignIn';
// import { Redirect } from 'react-router-dom'



function App() {

  const dispatch = useDispatch()
  const auth = useSelector(state =>state.auth)
//  const user = useSelector(state =>state.auth.user)
  useEffect(()=>{
    if(!auth.authenticate)
   {dispatch(isUserLoggedIn())}
    },[auth.authenticate])


  return (
    <div className="App">
<Router> 

  <Switch>
        <Route exact path="/"  component={Home}>
       {/* {(auth.authenticate && user.role === "expert" ) ? <Redirect to="/DashboardExpert"/> : (auth.authenticate && user.role === "user") ? <Redirect to="/ProfilUser"/>:  (auth.authenticate && user.role === "admin") ? <Redirect to="/Dashboard/Dashboardpublication"/> : <RegisterUserForm/> } */}

      
           </Route>
    {/* <PrivetRoute  path="/Dashboard"  component={Dashboard}/> */}
       

        <Route  path="/DashboardValidationExpert"   component={DashboardValidationExpert}/>
     

    <Route   path="/Actualités"   component={PublicationsScreen}/>
    <Route   path="/Expert"   component={ExpertScreen}/>
   


    
    {/* <Route   path="/RDVexpert"   component={RDVexpert}/> */}
    <Route   path="/Contact"   component={Contact}/>
    <Route   path="/OnePublication"   component={OnePublication}/>
      <Route  path="/ExpertProfil" component={ExpertProfil}/> 

    {/* <Route path="/RegisterExpert"  component={RegisterExpert} /> */}

    <Route exact path="/Register"  component={PageRegister} >


    </Route> 

    {/* <Route path="/register"  component={Register} /> */}
    <Route exact path="/signin" component={PageSignIn}>
    {/* {(auth.authenticate && user.role === "expert" ) ? <Redirect to="/DashboardExpert"/> : (auth.authenticate && user.role === "user") ? <Redirect to="/ProfilUser"/>:  (auth.authenticate && user.role === "admin") ? <Redirect to="/Dashboard/Dashboardpublication"/> : <RegisterUserForm/> } */}

      </Route>
    <PrivetRoute   path="/DashboardExpert"   component={DashboardExpert}/>
    <PrivetRoute   path="/RDVDashExpert"   component={RDVDashExpert}/>
    <PrivetRoute  path="/ProfilUser" component={ProfilUser}/> 
    <PrivetRoute  path="/UserRDV" component={UserRDV}/> 
    <PrivetRoute   path="/Dashboard/Dashboardpublication"  component={DashboardPublication}/>
    <PrivetRoute  path="/DashboardExpertPub"  component={DashboardExpertPub}/>
    <PrivetRoute  path="/Dashboard/RDVrecu"  component={RDVrecu}/>
    <PrivetRoute  path="/Dashboard/DashboardContact"  component={ContactDashboard}/>
    <PrivetRoute  path="/AddPubExpert"  component={AddPubExpert}/>
  </Switch>

</Router>
    </div>
  );
}

export default App;
