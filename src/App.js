import React from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Home from './components/Home'
import QuestionsSection from './components/questions/QuestionsSection'

import Answer from './components/answer/Answer'

import Section from './components/Section'


class App extends React.Component{

  constructor(){
    super()
  }


  render(){
    return(
      <div >

        <BrowserRouter>

        <Link to = "/"></Link>
        <Link to = "/section/:id"></Link>
        {/* <Link to = "/questions/:tag"></Link> */}
        <Link to = "/section/:id/:tag"></Link>
        <Link to = "/section/:id/:tag/:qua"></Link>

{/* 
          <Link to = "/" ></Link>
          <Link to = "/questions/:id" ></Link>
          <Link to = "/questions/answer/:id" ></Link> */}
          {/* <Link to = "/questions/answer/:id" ></Link> */}

{/*           

          <Route path = "/" component = {Home} exact = {true} />
          <Route path = "/questions/:id" component = {Questions} exact = {true} />
          <Route path = "/questions/answer/:ansID" component = {Answer} exact = {true} />
          <Home /> */}

          <Route path = "/" component = {Home} exact = {true} />
          <Route path = "/section/:id" component = {Section} exact = {true} />
          {/* <Route path = "/questions/:tag" component = {QuestionsSection} exact = {true} /> */}
          <Route path = "/section/:id/:tag" component = {QuestionsSection} exact = {true} />
          <Route path = "/section/:id/:tag/:qua" component = {Answer} exact = {true} />


          </BrowserRouter>


      </div>
    )
  }
}

export default App;
