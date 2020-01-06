import React from "react";
// import { BrowserRouter } from 'react-router-dom';
// import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";

import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer,
    MDBIcon
  } from 'mdbreact';

import {Link, BrowserRouter, Route} from 'react-router-dom'



class Navbar extends React.Component{

    constructor(){
        super()
        // this.state = {
        //     collapseID: ''
        // }
    }


    // toggleCollapse = collapseID => () => {
    //     this.setState(prevState => ({
    //       collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    //     }));
    //   };



    render(){
        return(
            // <MDBBreadcrumb light color="pink lighten-2">
            //   <MDBBreadcrumbItem iconRegular icon="star">Home</MDBBreadcrumbItem>
            //   <MDBBreadcrumbItem iconRegular icon="star">Library</MDBBreadcrumbItem>
            //   <MDBBreadcrumbItem iconRegular icon="star" active>Data</MDBBreadcrumbItem>
            // </MDBBreadcrumb>

            <BrowserRouter>
              <MDBNavbar
                className = "light-blue"
                dark expand="md" scrolling fixed="top"
                light
              >
                  
                    {
                        (this.props.back) ?                   <MDBNavbarBrand > 
                     <MDBIcon icon="arrow-left"  onClick = { this.props.handleUrl } /> &nbsp;&nbsp;
                          <b>E-Learning</b>
                          
                          </MDBNavbarBrand> :                   <MDBNavbarBrand > 
                        <b>E-Learning</b>
                        
                        </MDBNavbarBrand>
                    }
                  {/* <MDBNavbarToggler
                    onClick={this.toggleCollapse('navbarCollapse1')}
                  />
                  <MDBCollapse
                    id='navbarCollapse1'
                    isOpen={this.state.collapseID}
                    navbar
                  >
                    <MDBNavbarNav left>
                      <MDBNavItem active>
                        <MDBNavLink to='#!'>Home</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to='#!'>Link</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to='#!'>Profile</MDBNavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse> */}
              </MDBNavbar>
          </BrowserRouter>
        
        )
    }

}

export default Navbar