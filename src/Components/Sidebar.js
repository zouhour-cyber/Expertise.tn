import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import Dashboard from '../Screen/AdminDashboard';
// import Home from '../Screen/HomeScreen';
import { Link, Route, Router } from 'react-router-dom';

const Sidebar = (props) => {
  return(
    <div>
        
<SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle  expanded/>
    <SideNav.Nav defaultSelected="Dashboard">

        <NavItem eventKey="home">
        
            <NavIcon>
            <Link to="/">   <i className="fa fa-fw fa-home" style={{ fontSize: '1.5em',color:'#f7f7f7'}} />
               </Link>
            </NavIcon>
           
            <NavText>
           
               Acceuil
            </NavText>
        
        </NavItem>
        <NavItem eventKey="Dashboard"  >
            <NavIcon>
               <Link to="/DashboardInterface"> <i class="fas fa-tachometer-alt" style={{ fontSize: '1.5em',color:'#f7f7f7'}} /> </Link> 
            </NavIcon>
            <NavText style={{color:'#f7f7f7'}}>
                Dashboard
            </NavText>
        </NavItem>
        <NavItem eventKey="user"  >
            <NavIcon>
               <Link to="/DashboardValidationExpert"> <i class="fas fa-users" style={{ fontSize: '1.5em',color:'#f7f7f7'}} /> </Link> 
            </NavIcon>
            <NavText style={{color:'#f7f7f7'}}>
                Utilisateurs
            </NavText>
        </NavItem>
        <NavItem eventKey="rendez-vous">
            <NavIcon >
            <Link to="/Dashboard/RDVrecu">   <i class="far fa-calendar-alt" style={{ fontSize: '1.75em',color:'#f7f7f7'}} ></i>  </Link>
            </NavIcon>
            <NavText style={{color:'#f7f7f7'}}>
            Rendez-vous
            </NavText>
        </NavItem>
 

        <NavItem eventKey="publication">
            <NavIcon>
            <Link to="/Dashboard/Dashboardpublication">  <i class="far fa-newspaper"  style={{ fontSize: '1.5em',color:'#f7f7f7'}}></i> </Link>
            </NavIcon>
            <NavText style={{color:'#f7f7f7'}}>

               Ajout publication 
              
            </NavText>
            
        </NavItem>
        <NavItem eventKey="Contact">
            <NavIcon>
            <Link to="/Dashboard/DashboardContact">  <i class="far fa-comments" style={{ fontSize: '1.5em',color:'#f7f7f7'}} />  </Link>
            </NavIcon>
            <NavText style={{color:'#f7f7f7'}}>
            Contact
            </NavText>
        </NavItem>


        <NavItem eventKey="Newsletter">
            <NavIcon>
            <Link to="/AdminNEWSLETTER">  <i class="fas fa-at" style={{ fontSize: '1.5em',color:'#f7f7f7'}} />  </Link>
            </NavIcon>
            <NavText style={{color:'#f7f7f7'}}>
           Newsletter
            </NavText>
            <NavIcon>
            <Link to="/AdminNEWSLETTER">  <i class="fas fa-at" style={{ fontSize: '1.5em',color:'#f7f7f7'}} />  </Link>
            </NavIcon>
            <NavText style={{color:'#f7f7f7'}}>
           Newsletter
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
    </div>
   )

 }

export default Sidebar