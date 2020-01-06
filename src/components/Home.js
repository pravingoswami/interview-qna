import React from 'react';

import Navbar from './Navbar'
import Cards from './Cards'

import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";



class Home extends React.Component{

  constructor(){
    super()
  }


  render(){
    return(
      <div>

          <Navbar />
          <MDBContainer>

          <Cards />
          </MDBContainer>

      </div>
    )
  }
}

export default Home;
