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
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">

        <NavItem eventKey="home">
        
            <NavIcon>
            <Link to="/">   <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em',color:'#f7f7f7'}} />
               </Link>
            </NavIcon>
           
            <NavText>
           
               Acceuil
            </NavText>
        
        </NavItem>
        <NavItem eventKey="user"  >
            <NavIcon>
               <Link to="/DashboardValidationExpert"> <i className="fa fa-user" style={{ fontSize: '1.75em',color:'#f7f7f7'}} /> </Link> 
            </NavIcon>
            <NavText style={{color:'#f7f7f7'}}>
                Utilisateurs
            </NavText>
        </NavItem>
        <NavItem eventKey="rendez-vous">
            <NavIcon >
            <Link to="/Dashboard/RDVrecu">  <i className="fa fa-bell" style={{ fontSize: '1.75em',color:'#f7f7f7'}} />  </Link>
            </NavIcon>
            <NavText style={{color:'#f7f7f7'}}>
            Rendez-vous
            </NavText>
        </NavItem>
        <NavItem eventKey="rendez-vous">
            <NavIcon>
            <Link to="/Dashboard/DashboardContact">  <i className="far fa-comment-dots" style={{ fontSize: '1.75em',color:'#f7f7f7'}} />  </Link>
            </NavIcon>
            <NavText style={{color:'#f7f7f7'}}>
            Contact
            </NavText>
        </NavItem>

        <NavItem eventKey="publication">
            <NavIcon>
            <Link to="/Dashboard/Dashboardpublication">  <i class="fas fa-blog"  style={{ fontSize: '1.75em',color:'#f7f7f7'}}></i> </Link>
            </NavIcon>
            <NavText style={{color:'#f7f7f7'}}>

               Ajout publication 
              
            </NavText>
            
            
        </NavItem>
    </SideNav.Nav>
</SideNav>

    </div>
   )

 }

export default Sidebar