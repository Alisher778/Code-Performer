import React, { Component } from 'react';


class CodePlayground extends Component {
  constructor(props) {
    super(props);
    this.state = { code1: {showTime: '2', execTime: '2.0232', msg: ''},
                   code2: {showTime: '2', execTime: '2.0232', msg: ''}
                 }
  }

  evalCode() {
    var textarea1 = document.getElementById('code-val1').value;
    var textarea2 = document.getElementById('code-val2').value;
      var excuteTime1 = 0;
      var code1Msg = '';
      function test1(){
        if(textarea1 === ""){
          excuteTime1 = 0;
          code1Msg = "It looks like no code added";
          return
        } else{
          try {
            var timeStart = performance.now();
            eval(textarea1)
            textarea1.slice(0, -1)
            var timeFinish = performance.now();
            excuteTime1 = timeFinish - timeStart;
            code1Msg = "Success";
          }
          catch (e) {
            if(e){
              code1Msg = e.message;
            }
          }
        }
        
      }
      test1();
      this.setState({ code1: {showTime: excuteTime1.toPrecision(3), execTime: excuteTime1, msg: code1Msg}});

      var excuteTime2 = 0;
      var code2Msg = '';
      function test2(){
        if(textarea2 === ""){
          excuteTime1 = 0;
          code2Msg = "It looks like no code added";
          return;
        } else {
          try {
            var timeStart = performance.now();
            eval(textarea2)
            textarea2.slice(0, -1)
            var timeFinish = performance.now();
            excuteTime2 = timeFinish - timeStart;
            code2Msg = "Success";
          }
          catch (e) {
            if(e){
              code2Msg = e.message;
            }
          }
        }
        
      }
      test2();
      this.setState({ code2: {showTime: excuteTime2.toPrecision(3), execTime: excuteTime2, msg: code2Msg}});
  }


  render() {
    return(
        <div id="code-area" className="container">
          
          <h1 className="display-5 mt-4 text-center">Test Your Code Performance</h1>
          <div className="row">
            <div className="col-sm-6">
              <textarea className="form-control form-control-lg my-4" id="code-val1"></textarea>
              <ul className="list-group">
                <li className="list-group-item list-group-item-sm"><b>Time: </b>{this.state.code1.showTime}s or <em>{this.state.code1.execTime}</em></li>
                <li className="list-group-item list-group-item-sm"><b>Message: </b>{this.state.code1.msg}</li>
              </ul>
            </div>
            <div className="col-sm-6">
              <textarea className="form-control form-control-lg my-4" id="code-val2"></textarea>
              <ul className="list-group">
                <li className="list-group-item list-group-item-sm"><b>Time: </b>{this.state.code2.showTime}s</li>
                <li className="list-group-item list-group-item-sm"><b>Message: </b>{this.state.code2.msg}</li>
              </ul>
            </div>
          </div>

          <button id="run-code" className="btn btn-success btn-xl mx-auto d-block mt-3" onClick={this.evalCode.bind(this)}>Run Your Code</button>

        </div>
    )
  }
} 

export default CodePlayground;