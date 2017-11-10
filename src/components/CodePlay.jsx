import React, { Component } from 'react';


class CodePlayground extends Component {
  constructor(props) {
    super(props);
    this.state = {showTime: '2s', execTime: '2.0232'}
  }

  evalCode() {
    var textarea = document.getElementById('code-val').value;
      var excuteTime = 0;
      function test(){
        var timeStart = performance.now();
        eval(textarea)
        var timeFinish = performance.now();
        excuteTime = timeFinish - timeStart;
      }
      test();
      this.setState({showTime: excuteTime.toPrecision(2), execTime: excuteTime});
  }


  render() {
    return(
        <div id="code-area" className="container">
          <h1 className="display-5 mt-4 text-center">Test Your Code Performance</h1>
          <textarea col="10" row="40" className="form-control form-control-lg w-50 h-100 mb-4" id="code-val">

          </textarea>
          <button id="run-code" className="btn btn-success" onClick={this.evalCode.bind(this)}>Run Your Code</button>
          <h5 id="result">Your speed: {this.state.showTime}s</h5>
        </div>
    )
  }
} 

export default CodePlayground;