import React from 'react';
import author from '../assets/img/me.jpg';

const Author = () => {
  return(
  <div id="author">
    <div className="container">
      <div className="row text-center">
        <div className="col-md-5">
          <img src={author} alt="" className="img-fluid rounded"/>
          <h5 className="pt-2 font-weight-bold">Alisher Musurmonov</h5>
          <h6>Web Developer & CEO <a href="https://aliglob.com">Ali Globalization</a></h6>
          <div id="social-link">
            <a href="" className="mx-2"><i className="fa fa-github" aria-hidden="true"></i></a>
            <a href="" className="mx-2"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="col-md-7">
          <h1 className="font-weight-bold">Author of CodePerformer</h1>
          <h5>Talanted & Self-Motivated Developer</h5>
          <p>
            Hi, I am Alisher and full-stack web developer who graduated from <a href="www.nycda.com">NYCDA</a>. I am currently working at Vector Moving as a lead developer and freelancing at my free time.
          </p> 
          <p>
            I created this app to challange my skills and most importantly to share something useful with web developers community. Always try to build any type of applications to sharpen your developer skills. Happy Coding!
          </p>
          <blockquote>
            Alisher's a budding developer with the sort of talent, tenacity and intellect that firm's yearn for as part of core staff. Collaborating with him at NYCDA, he demonstrated an impressive ability to decipher challenging frameworks, and build functional, sophisticated codebase.
            <p>By Christopher Barriteau</p>
          </blockquote>
          <button className="btn btn-lg btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Author;
