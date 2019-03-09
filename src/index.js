import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/parcials/nav';
import Footer from './components/parcials/footer';
import About from './components/About';
import Author from './components/Author';
import CodePlayground from './components/CodePlay';
import LandingPage from './components/LandingPage';


ReactDom.render(
  <Router  basename="https://alisher778.github.io/Code-Performer">
    <div>
      <Nav />
      <Route exact path="/" component={ LandingPage } />
      <Route path="/about" component={ About } />
      <Route path="/code-performance" component={ CodePlayground } />
      <Route path="/author" component={ Author } />
      <Footer />
    </div>
  </Router>
  ,document.getElementById('root')
);