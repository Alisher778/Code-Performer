import React, { Component } from 'react';


class CodePlayground extends Component {
  render() {
    return(
        <div id="code-area" className="container">
          <h1 className="display-5 mt-4 text-center">Test Your Code Performance</h1>
          <textarea col="10" row="40" className="form-control form-control-lg w-50 h-100 mb-4">

          </textarea>
          <button id="run-code" className="btn btn-success">Run Your Code</button>
          <h5 id="result">Your speed: 102ms</h5>
        </div>
    )
  }
} 

export default CodePlayground;