import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/parcials/nav';
import About from './components/parcials/about';
import CodePlayground from './components/CodePlay';


ReactDom.render(
  <Router>
    <div>
      <Route path="/" component={ Nav } />
      <Route path="/about" component={ About } />
      <Route path="/code" component={ CodePlayground } />
    </div>
  </Router>
  ,document.getElementById('root')
);