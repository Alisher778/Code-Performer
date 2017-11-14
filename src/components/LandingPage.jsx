import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/img/man.png';

const LandingPage = () => {
  return(
    <div id="landing-page" className="container">
      <div className="row align-items-center">
        <div className="col-md-6 col-lg-7">
        <img src={img} alt="" />
      </div>
      <div className="col-md-6 col-lg-5 text-center">
        <h1 className="font-weight-bold">Simple Yet Useful Tool</h1>
        <p className="lead">
          Are you curiouse about your code performance? Within seconds you will know weather your code is running efficiently or not. Code Performer is Developers' best friend.
        </p>
        <Link to="/code-performance" className="btn btn-lg" id="landing-btn">Test Your Code</Link>
      </div>
      </div>
    </div>
  )
}

export default LandingPage;