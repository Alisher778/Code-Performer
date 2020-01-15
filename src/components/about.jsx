import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div id="about" className="bg-light pb-5">
      <div className="container">
        <div className="jumbotron mt-5 text-center container">
          <h1 className="display-4 text-center">About Code Performer</h1>
          <p className="lead w-75 mx-auto">If you want to know wheather your some certine code is running slower here you have a chance to run your code and find out how fast your can be.</p>
          <Link to="/code-performance" className="btn btn-lg btn-danger">Run Your Code</Link>
        </div>
        <p className="lead">
          Hi, not thank you for using Code Performer! I came up with the code permormance app in August, 2017. I was working on a big project and preparing video tutorilas to teach basic web development techniques.
        </p>
        <p className="lead">
          The promblem that I faced was try to figure out what is the best practices and faster excution time of certine types of code. For example: <kbd>for</kbd> loop with declaration "i" within for loop <kbd>for(var i =0;)</kbd> and declaration outside for loop <kbd>var i; for(i=0)</kbd>
        </p>
        <p className="lead font-italic text-info">
          <i className="text-dark">Note:</i> The app runs your code X times and prints avarage time. The more times you run the better result you get. However, the performance depances on many factors.
        </p>
        <h2 className="text-center mt-4 font-weight-bold">How to Use?</h2>
        <p className="lead">
          1) Past your code into textarea and alternative code into another
        </p>
        <p className="lead">
          2) Change desired number for code run times! By Default the code runner runs 10 times each code, but you can run more than 10 times
        </p>
        <p className="lead">
          3) Green color shows faster run time while orange shows a bit lower. But the performance result changes often since code excution time depandes on many factors(browser, CPU).
        </p>


      </div>
    </div>
  )
}

export default About;