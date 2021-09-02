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
        <Route  path="/Dashboardpublication"  component={Dashboard}/>
        <Route  path="/DashboardValidationExpert"   component={DashboardValidationExpert}/>
        <PrivetRoute  path="/ProfilUser" component={ProfilUser}/> 

    <Route  exact path="/Actualités"   component={PublicationsScreen}/>
    <Route  exact path="/Expert"   component={ExpertScreen}/>
    <Route  exact path="/DashboardExpert"   component={DashboardExpert}/>
    {/* <Route  exact path="/RDVexpert"   component={RDVexpert}/> */}
    <Route  exact path="/Contact"   component={Contact}/>


    


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
