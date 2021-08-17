import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Home from './Screen/Home';
import Dashboard from "./Screen/AdminDashboard"
import PublicationsScreen from './Screen/PublicationsScreen';
import ExpertScreen from './Screen/Expert';


function App() {
  return (
    <div className="App">
<Router> 

  <Switch>
    <Route exact path="/"  component={Home}/>
    <Route exact path="/Dashboard"  component={Dashboard}/>
    <Route  exact path="/Actualités"   component={PublicationsScreen}/>
    <Route  exact path="/Expert"   component={ExpertScreen}/>
   


  </Switch>

</Router>
    </div>
  );
}

export default App;
