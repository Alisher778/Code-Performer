import React from 'react';
import img from '../assets/img/man.png';

const LandingPage = () => {
  return(
    <div id="landing-page" className="container">
      <div className="row align-items-center">
        <div className="col-sm-7">
        <img src={img} alt="" />
      </div>
      <div className="col-sm-5 text-center">
        <h1>Aliquip reprehenderit amet.</h1>
        <p className="lead">
          Ex dolore in sed nulla proident magna eu exercitation amet pariatur aute non et consequat deserunt quis excepteur qui et dolor dolor consequat ut in eiusmod in.
        </p>
        <div className="btn btn-success btn-lg">Run Code</div>
      </div>
      </div>
    </div>
  )
}

export default LandingPage;