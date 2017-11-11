import React, { Component } from 'react';


class CodePlayground extends Component {
  constructor(props) {
    super(props);
    this.state = { code1: {showTime: '0', execTime: '', msg: '', status: '', perform: null},
                   code2: {showTime: '0', execTime: '', msg: '', status: '', perform: null}
                 }
  }
 

  evalCode() {
    var textarea1 = document.getElementById('code-val1').value;
      var excuteTime1 = 0;
      var code1Msg = '';
      var status1 = '';
      function test1(){
        if(textarea1 === ""){
          excuteTime1 = 0;
          code1Msg = "It looks like no code added";
          status1 = 'warning';
          return
        } else{
          try {
            var timeStart = performance.now();
            eval(textarea1)
            // textarea1.slice(0, -1)
            var timeFinish = performance.now();
            excuteTime1 = timeFinish - timeStart;
            code1Msg = "Success";
            status1 = 'success';
          }
          catch (e) {
            if(e){
              code1Msg = e.message;
              status1 = 'danger';
            }
          }
        }
        
      }
      test1();
      var perform1 = '';
      var perform2 = '';
      var excuteTime2 = this.state.code2.execTime;
      if(excuteTime1 > excuteTime2){
        perform1 = "warning";
        perform2 = "success";
      } else {
        perform1 = "success";
        perform2 = "warning";
      } 
      this.setState({ code1: {showTime: excuteTime1.toPrecision(3), execTime: excuteTime1, msg: code1Msg, status: status1, perform: perform1},
                      code2: { ...this.state.code2, perform: perform2},
                   });

  }

  evalCode2() {
      var textarea2 = document.getElementById('code-val2').value;
      var excuteTime2 = 0;
      var code2Msg = '';
      var status2 = '';
      function test2(){
        if(textarea2 === ""){
          excuteTime2 = 0;
          code2Msg = "It looks like no code added";
          status2 = "warning";
          return;
        } else {
          try {
            var timeStart = performance.now();
            eval(textarea2)
            // textarea2.slice(0, -1)
            var timeFinish = performance.now();
            excuteTime2 = timeFinish - timeStart;
            code2Msg = "Success";
            status2 = "success";
          }
          catch (e) {
            if(e){
              code2Msg = e.message;
              status2 = "danger";
            }
          }
        }
      }
      test2();
      var perform1 = '';
      var perform2 = '';
      var excuteTime1 = this.state.code1.execTime;
      if(excuteTime1 > excuteTime2){
        perform1 = "warning";
        perform2 = "success";
      } else {
        perform1 = "success";
        perform2 = "warning";
      } 

      this.setState({
                     code1: { ...this.state.code1, perform: perform1},
                     code2: {showTime: excuteTime2.toPrecision(3), execTime: excuteTime2, msg: code2Msg, status: status2, perform: perform2}
                   });

  }

  render() {
    console.log(this.state)
    return(
        <div id="code-area" className="container">
          
          <h1 className="display-5 mt-4 text-center">Test Your Code Performance</h1>
          <div className="row">
            <div className="col-sm-6">
              <textarea className="form-control form-control-lg my-4" id="code-val1"></textarea>
              <ul className="list-group">
                <li className={`list-group-item bg-${this.state.code1.perform} lead`}><b>Time: </b>{this.state.code1.showTime}s <em className="float-right">{this.state.code1.execTime}</em></li>
                <li className={`list-group-item list-group-item-${this.state.code1.status} lead`}><b>Message: </b>{this.state.code1.msg}</li>
              </ul>
              <button id="run-code" className="btn btn-success btn-lg mx-auto d-block w-50 mt-4" onClick={this.evalCode.bind(this)}>Run 1st Code</button>

            </div>
            <div className="col-sm-6">
              <textarea className="form-control form-control-lg my-4" id="code-val2"></textarea>
              <ul className="list-group">
                <li className={`list-group-item bg-${this.state.code2.perform} lead`}><b>Time: </b>{this.state.code2.showTime}s <em className="float-right">{this.state.code2.execTime}</em></li>
                <li className={`list-group-item list-group-item-${this.state.code2.status} lead`}><b>Message: </b>{this.state.code2.msg}</li>
              </ul>
              <button id="run-code2" className="btn btn-primary btn-lg w-50 mx-auto d-block mt-4" onClick={this.evalCode2.bind(this)}>Run 2nd Code</button>

            </div>
          </div>


        </div>
    )
  }
} 

export default CodePlayground;