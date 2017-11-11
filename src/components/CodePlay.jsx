import React, { Component } from 'react';


class CodePlayground extends Component {
  constructor(props) {
    super(props);
    this.state = { code1: {showTime: '0', execTime: '', msg: '', status: '', perform: null},
                   code2: {showTime: '0', execTime: '', msg: '', status: '', perform: null},
                   runTimes: 10
                 }
  }
 
  // Run the 1st code logic
  evalCode() {
      const textarea1 = document.getElementById('code-val1').value;
      let excuteTime1 = 0, code1Msg = '', status1 = '', valueList = [];
      function test1(){
        if(textarea1 === ""){
          excuteTime1 = 0;
          code1Msg = "It looks like no code added";
          status1 = 'warning';
          return
        } else{
          try {
            const timeStart = performance.now();
            eval(textarea1)
            const timeFinish = performance.now();
            valueList.push(excuteTime1 = timeFinish - timeStart);
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
      let xTimes = this.state.runTimes;
      for(let i = 0; i<xTimes; i++){
        test1();
      } 
      console.log(valueList);
      const avarage = (arr) => arr.reduce((total, num) => total + num, 0) / arr.length;
      const avarageValue = avarage(valueList), excuteTime2 = this.state.code2.execTime;
      let perform1 = '', perform2 = '';
      if(avarageValue > excuteTime2){
        perform1 = "warning";
        perform2 = "success";
      } else {
        perform1 = "success";
        perform2 = "warning";
      }

      this.setState({ code1: {showTime: avarageValue.toFixed(3), execTime: avarageValue, msg: code1Msg, status: status1, perform: perform1},
                      code2: { ...this.state.code2, perform: perform2},
                   });

  }

  // Run the 2nd code logic
  evalCode2() {
      const textarea2 = document.getElementById('code-val2').value;
      let excuteTime2 = 0, code2Msg = '', status2 = '', valueList = [];
      function test2(){
        if(textarea2 === ""){
          excuteTime2 = 0;
          code2Msg = "It looks like no code added";
          status2 = "warning";
          return;
        } else {
          try {
            const timeStart = performance.now();
            eval(textarea2)
            const timeFinish = performance.now();
            valueList.push(excuteTime2 = timeFinish - timeStart)
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

      for(let i = 0; i<10; i++){
        test2();
      }            
      let perform1 = '', perform2 = '';
      const excuteTime1 = this.state.code1.execTime;
      const avarage = (arr) => arr.reduce((total, num) => total + num, 0) / arr.length;
      const avarageValue = avarage(valueList);
      
      if(excuteTime1 > avarageValue){
        perform1 = "warning";
        perform2 = "success";
      } else {
        perform1 = "success";
        perform2 = "warning";
      } 

      this.setState({
                     code1: { ...this.state.code1, perform: perform1},
                     code2: {showTime: avarageValue.toFixed(3), execTime: avarageValue, msg: code2Msg, status: status2, perform: perform2}
                   });

  }

  increment() {
    if(this.state.runTimes === 2000){
      return
    }
    this.setState({ runTimes: this.state.runTimes + 5 })
    
  }

  decrement(e) {
    if(this.state.runTimes === 5){
      return
    }
    this.setState({ runTimes: this.state.runTimes - 5 })
  }
  render() {
    return(
        <div id="code-area" className="container">
          
          <h1 className="display-5 mt-4 text-center">Test Your Code Performance</h1>
          <div className="row">
            <div className="col-sm-5">
              <textarea className="form-control form-control-lg my-4" id="code-val1"></textarea>
              <ul className="list-group">
                <li className={`list-group-item bg-${this.state.code1.perform} lead`}><b>Time: </b>{this.state.code1.showTime}s <em className="float-right">{this.state.code1.execTime}</em></li>
                <li className={`list-group-item list-group-item-${this.state.code1.status} lead`}><b>Message: </b>{this.state.code1.msg}</li>
              </ul>
              <button id="run-code" className="btn btn-success btn-lg mx-auto d-block w-50 mt-4" onClick={this.evalCode.bind(this)}>Run 1st Code</button>

            </div>
            <div className="form-group d-flex flex-column" id="increment-wrapper">
                <button className="btn increment" onClick={this.increment.bind(this)}>+</button>
                  <input type="number" min="5" max="100" value={this.state.runTimes} readOnly className="form-control align-self-center d-block" id="run-times-value"/>
                <button className="btn increment" onClick={this.decrement.bind(this)}>-</button>
            </div>
            <div className="col-sm-5">
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