import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Home from './Screen/Home';
import Dashboard from "./Screen/AdminDashboard"
import PublicationsScreen from './Screen/PublicationsScreen';
import ExpertScreen from './Screen/Expert';
// import Register from './authScreen/Register';
import SignIn from './authScreen/SignIn';
import PrivetRoute from './authScreen/privetRoute';
import { isUserLoggedIn } from './Redux/Actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import DashboardExpert from './Screen/DashboardExpert';
// import RDVexpert from './Screen/RDVexpert';
import RegisterExpert from './authScreen/RegisterExpert';
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


function App() {

  const dispatch = useDispatch()
  const auth = useSelector(state =>state.auth)

  useEffect(()=>{
    if(!auth.authenticate)
   { dispatch(isUserLoggedIn())}
    },[auth.authenticate])


  return (
    <div className="App">
<Router> 

  <Switch>
    <Route exact path="/"  component={Home}/>
    {/* <PrivetRoute  path="/Dashboard"  component={Dashboard}/> */}
        <Route  path="/Dashboard/Dashboardpublication"  component={Dashboard}/>
        <Route  path="/Dashboard/RDVrecu"  component={RDVrecu}/>
        <Route  path="/Dashboard/DashboardContact"  component={ContactDashboard}/>

        
        
        
        <Route  path="/DashboardValidationExpert"   component={DashboardValidationExpert}/>
        <PrivetRoute  path="/ProfilUser" component={ProfilUser}/> 
        <PrivetRoute  path="/UserRDV" component={UserRDV}/> 

    <Route  exact path="/Actualités"   component={PublicationsScreen}/>
    <Route  exact path="/Expert"   component={ExpertScreen}/>
    <Route  exact path="/DashboardExpert"   component={DashboardExpert}/>
    <Route  exact path="/RDVDashExpert"   component={RDVDashExpert}/>


    
    {/* <Route  exact path="/RDVexpert"   component={RDVexpert}/> */}
    <Route  exact path="/Contact"   component={Contact}/>
    <Route  exact path="/OnePublication"   component={OnePublication}/>
      <Route exact path="/ExpertProfil" component={ExpertProfil}/> 


      


    <Route path="/RegisterExpert"  component={RegisterExpert} />

    <Route path="/RegisterUserForm"  component={RegisterUserForm} />

    {/* <Route path="/register"  component={Register} /> */}
    <Route path="/signin"  component={SignIn} />
     


  </Switch>

</Router>
    </div>
  );
}

export default App;
