import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router , Route} from 'react-router-dom';

 import Home from './component/Home'
import Login from './component/login'
import Register from './component/register'
import { connect } from "react-redux";
import {StartDeleteUser} from './action/userAction'



class App extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
handleLogout =()=>{
  this.props.dispatch(StartDeleteUser())
}

render() {
  console.log(this.props.user)
  return (
    
    <Router>
     {
         Object.keys(this.props.user).length == 0 ?<div>
             <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
       <strong className="white-text" >Form</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem >
              <MDBNavLink to="/Register">Register</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Login">Login</MDBNavLink>
            </MDBNavItem>
           
        
           
          </MDBNavbarNav>
        
        </MDBCollapse>
      </MDBNavbar>
      
      
         </div> : <div>

         <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Form</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            
            <MDBNavItem>
              <MDBNavLink to="/Home">Home</MDBNavLink>
              
              
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Logout" onClick={this.handleLogout}>Logout</MDBNavLink>
              
              
            </MDBNavItem>
        
           
          </MDBNavbarNav>
        
        </MDBCollapse>
      </MDBNavbar>
          
   
         </div>
      }
     
      
      
       <Route path='/Register' component={Register} exact={true}/> 
       <Route path='/Login' component={Login} />
       <Route path='/Home' component={Home} exact={true}/>
       
       
    
    </Router>


      

    

    
    );
    
        
            
        
    
  }
}
const mapStateToprops = (state)=>{
  return {
    
    user:state.user,
  }
}

export default  connect(mapStateToprops) (App)