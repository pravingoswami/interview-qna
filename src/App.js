import React from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Home from './components/Home'
import Questions from './components/questions/Questions'

import Answer from './components/answer/Answer'


class App extends React.Component{

  constructor(){
    super()
  }


  render(){
    return(
      <div >

        <BrowserRouter>

          <Link to = "/" ></Link>
          <Link to = "/questions/:id" ></Link>
          <Link to = "/answer/:id" ></Link>

          

          <Route path = "/" component = {Home} exact = {true} />
          <Route path = "/questions/:id" component = {Questions} exact = {true} />
          <Route path = "/answer/:id" component = {Answer} exact = {true} />
          {/* <Home /> */}


          </BrowserRouter>


      </div>
    )
  }
}

export default App;
