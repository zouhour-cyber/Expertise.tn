import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Home from './Screen/Home';
import Dashboard from "./Screen/AdminDashboard"
import PublicationsScreen from './Screen/PublicationsScreen';
import ExpertScreen from './Screen/Expert';
import Register from './authScreen/Register';
import SignIn from './authScreen/SignIn';
import PrivetRoute from './authScreen/privetRoute';
import { isUserLoggedIn } from './Redux/Actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


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
    <PrivetRoute exact path="/Dashboard"  component={Dashboard}/>
    <Route  exact path="/Actualités"   component={PublicationsScreen}/>
    <Route  exact path="/Expert"   component={ExpertScreen}/>
        
    <Route path="/register"  component={Register} />
    <Route path="/signin"  component={SignIn} />
     


  </Switch>

</Router>
    </div>
  );
}

export default App;
